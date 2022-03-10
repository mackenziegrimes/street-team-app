import { useContext, useEffect, useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/react-hooks';
import anonymousId from 'anonymous-id';
import { getActionPageAndSubscriberDetailsByArtistPageRoute } from '../graphql/getSubscriberDataByActionPage';
import { useCurrentAuthUser } from '../../Actions/hooks/useCurrentAuthUser';
import { createEnduser } from '../../../../graphql/mutations';
import {
  createEnduserPageSubscription,
  createEnduserPageSubscriptionCompletedActions,
} from '../../Actions/graphql/createEnduserPageSubscription';
import { getEnduser } from '../../../../graphql/queries';
import { SecureProvider } from '../../../../Components/SecureViewWrapper';
import { tagInActiveCampaign, trackInAmplitude } from '../../../../utils/sharedUtils';
import { load } from 'dotenv';

const tiers = ['Diamond', 'Platinum', 'Gold', 'Silver', 'Bronze'];

const formatTableData = (tableData, currentUserSubscription, userId) => {
  console.log(`table data is`,tableData);
  const artistName = tableData?.ArtistByRoute.items[0]?.artistName;
  const actionPageData = tableData; //TODO - need to update actionView to not need all this data, but just the actual action page data
  const endUserData =
    tableData.ArtistByRoute?.items[0]?.actionPages?.items[0]?.subscribers?.items?.map(
      item => {
        const firstName = item?.enduser?.firstName || '';
        const lastName = item?.enduser?.lastName || '';
        const fullName =
          firstName || lastName ? `${firstName} ${lastName}` : '[no name]';
        return {
          id: item.enduserID,
          subscriptionId: item.id,
          email: item?.enduser?.email,
          firstName,
          lastName,
          name: fullName,
          phone: item?.enduser?.phoneNumber || '',
          avatar: item?.profilePicture,
          completedActions: item?.enduserPageSubscriptionCompletedActions?.items,
          points: item?.enduserPageSubscriptionCompletedActions?.items.reduce(
            (a, b) => {
              const value = b?.action?.pointValue || 0;
              return value + a;
            },
            0
          ),
        };
      }
    );
  // sort the enduser data by point values & assign rankings
  if(endUserData) {
    endUserData.sort((a, b) => (a.points < b.points ? 1 : -1));
  }
  const enduserDataLength = endUserData?.length;
  for (let i = 0; i < enduserDataLength; i++) {
    const percentile = (i + 1) / enduserDataLength;
    endUserData[i].rank = i + 1;
    endUserData[i].percentile = percentile;
    endUserData[i].tier =
      percentile <= 0.05
        ? tiers[0]
        : percentile <= 0.1
        ? tiers[1]
        : percentile <= 0.25
        ? tiers[2]
        : percentile <= 0.5
        ? tiers[3]
        : percentile <= 0.75
        ? tiers[4]
        : tiers[4] ;
  }
  const currentUserData = (endUserData && userId) ? endUserData?.find(item => item?.id === userId) : undefined;
  if(!currentUserData){
    //if enduser data has returned and currentUserData doesn't exist, we needed to have already create a new subscriber record
    console.log(`no data found`);
  }
  const currentUserTier = currentUserData?.tier;
  const currentUserTierIndex = tiers.indexOf(currentUserTier);
  const nextTier = currentUserTierIndex === 0 ? tiers[0] : tiers[currentUserTierIndex -1];
  const topFans = endUserData?.slice(0, 5);
  const topFansEnduserTier = endUserData?.filter(
    item => item.tier === currentUserTier
  )?.slice(0,5);
  const nextTierFans = endUserData?.filter(
    item => item.tier === nextTier
  )
  if(nextTierFans){
    nextTierFans.sort((a, b) => (a.points > b.points ? 1 : -1));
  }
  const pointsToNextTier = nextTierFans?.slice(0)[0]?.points - currentUserData?.points;
  const pointsToTierLeader = topFansEnduserTier ? topFansEnduserTier[0]?.points - currentUserData?.points : 0;
  console.log('points to tier leader is ', pointsToTierLeader);
  if(currentUserData){
    currentUserData.pointsToTierLeader = pointsToTierLeader || 0;
    currentUserData.pointsToNextTier = pointsToNextTier || 0; 
    currentUserData.nextTier = nextTier || 'Platinum'; // the top tier is platinum
  }

  return {
    endUserData,
    tableData: topFansEnduserTier,
    totalSubscribers: enduserDataLength,
    topFans,
    currentUserData,
    artistName,
    actionPageData,
  };
};

export const useGetSubscriberData = ({ artistRoute, pageRoute }) => {
  const [returnData, setReturnData] = useState();
  const [calculating , setCalculating ] = useState();

  const { userId, email, firstName, lastName, phone } = useCurrentAuthUser();

  const { data, loading, error, refetch: refetchUserData } = useQuery(
    gql(getActionPageAndSubscriberDetailsByArtistPageRoute),
    {
      variables: { artistRoute, pageRoute, userId },
      skip: !artistRoute || !pageRoute || !userId,
      onCompleted:  data => {
        let enduserId = userId;
        const actionPageID = data.ArtistByRoute?.items[0]?.actionPages?.items[0]?.id;
        const artistId = data.ArtistByRoute?.items[0]?.id;
        const endUserData = data.ArtistByRoute?.items[0]?.actionPages?.items[0]?.subscribers?.items
        const currentUserSubscription = (endUserData && enduserId) ? endUserData?.find(item => item?.enduserID === enduserId) : undefined;
        if(!currentUserSubscription){
          //// track new subscriber in amplitude and active campaign
          const additionalProperties = {
            user_properties: {
              name: firstName || lastName || '',
              email,
              phone,
            },
          };
          // track new subscriber in amplitude
          trackInAmplitude(
            'StreetTeam Joined',
            anonymousId(),
            userId,
            artistId,
            additionalProperties
          );
          tagInActiveCampaign('TRG - StreetTeam Joined', userId, artistId);
          ////
          const psid = window.localStorage.getItem('psid'); //stored here from landing page entry point
          const newSubscriptionInput = {
            actionPageID,
            enduserID: userId,
            anonymousID: anonymousId(),
          }
          if(psid){
            newSubscriptionInput['facebookPageScopedId']=psid;
          }
          const newSubscriptionData = addSubscription({
            variables: {
              input: newSubscriptionInput,
            },
          });
          refetchUserData();
        }
        else{
          setReturnData(formatTableData(data, currentUserSubscription, userId)); 
        }
      }
    }
  );

  // define mutation for creating a new subscription record
  const [addSubscription, { loading: loadingNewSubscription }] = useMutation(
    gql(createEnduserPageSubscription),
    {
      refetchQueries: [
        {
          query: gql(
            getActionPageAndSubscriberDetailsByArtistPageRoute
          ),
          variables: {
            artistRoute: artistRoute,
            pageRoute: pageRoute,
            userId: userId,
          },
        },
      ],
      awaitRefetchQueries: true,
    }
  );

  // create a new enduser if one doesn't exist to match Auth credentials
  //////////
  // define mutation for create a new enduser record
  const [addEnduser, { loading: createEnduserLoading }] = useMutation(
    gql(createEnduser),
    {
      refetchQueries: [
        {
          query: gql(
            getActionPageAndSubscriberDetailsByArtistPageRoute
          ),
          variables: {
            artistRoute: artistRoute,
            pageRoute: pageRoute,
            userId: userId,
          },
        },
      ],
      awaitRefetchQueries: true,
    }
  );

  useEffect(()=>{
    console.log(`use efffect is called`, data?.getEnduser, createEnduserLoading);
  if (
    data != null &&
    data.getEnduser === null &&
    !createEnduserLoading
  ) {
    console.log('enduserInfo does not exist -- creating enduser');
    // set up input variables
    const inputVariables = {
      id: userId,
      email,
    };
    let profileName;
    if (firstName) {
      inputVariables.firstName = firstName;
      profileName = firstName;
    }
    if (lastName) {
      inputVariables.lastName = lastName;
      profileName = profileName ? profileName + lastName : lastName;
    }
    if (profileName) {
      inputVariables.profileName = profileName;
    }
    if (phone) {
      inputVariables.phone = phone;
    }
    // create new enduser with the input variables
    const newEnduserData = addEnduser({
      variables: {
        input: inputVariables,
      },
    });
    console.log(newEnduserData);
    console.log('enduser record created');
    refetchUserData();
  }
  /* I thought we needed this, but now we're just using the onComplete method of useQuery hook. probably want to handle the enduser create the same way later on -SG */
//   else {
//     console.log('enduserInfo does exist -- checking for subscription record enduser');
//     if(data 
//     && !createEnduserLoading 
//     && !loadingNewSubscription 
//     && data.getEnduser){
//       const enduserId = data.getEnduser.id;
//       const actionPageID = data.ArtistByRoute?.items[0]?.actionPages?.items[0]?.id;
//       const artistId = data?.ArtistByRoute.items[0]?.id;
//       const endUserData = data.ArtistByRoute?.items[0]?.actionPages?.items[0]?.subscribers?.items
//       const currentUserSubscription = (endUserData && enduserId) ? endUserData?.find(item => item?.enduserID === enduserId) : undefined;
//       console.log(`current user subscriptino is`, currentUserSubscription);
//       if(!currentUserSubscription){
//         //create new subscriptions for this enduser
//         console.log(`creating a subscription for user ${enduserId}, artist ${artistRoute}, and page ${pageRoute}`);
//         if (actionPageID && userId) {
//           // TODO need to add the referral ID here when creating a subscription
//           const newSubscriptionData = addSubscription({
//             variables: {
//               input: {
//                 actionPageID,
//                 enduserID: userId,
//               },
//             },
//           });
//           const additionalProperties = {
//             user_properties: {
//               name: firstName || lastName || '',
//               email,
//               phone,
//             },
//           };
//           // track new subscriber in amplitude
//           trackInAmplitude(
//             'StreetTeam Joined',
//             anonymousId(),
//             userId,
//             artistId,
//             additionalProperties
//           );
//           tagInActiveCampaign('TRG - StreetTeam Joined', userId, artistId);
//           console.log(`newSubscription data is ${JSON.stringify(newSubscriptionData)}`);
//           refetchUserData(); // this refetch isn't updating the cache I guess. we're going to just refresh the page
//           // window.location.reload(); //todo eventually we don't want to do this
//           //
//         } else {
//           console.log(`need userId and actionPageID to create a record`);
//         }
//       }
//       else{
//         setReturnData(formatTableData(data, currentUserSubscription));
//       }
//     }
// }
},[data, loading]);
//////////

  console.log(`returning data`, returnData, loading, error);

  return {
    ...returnData,
    loading: !returnData?.currentUserData ,
  };
};
