import { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/react-hooks';
import { getActionPageAndSubscriberDetailsByArtistPageRoute } from '../graphql/getSubscriberDataByActionPage';
import { useCurrentAuthUser } from '../../Actions/hooks/useCurrentAuthUser';

const tiers = ['Diamond', 'Platinum', 'Gold', 'Silver', 'Bronze'];

export const useGetSubscriberData = ({ artistRoute, pageRoute, enduserId }) => {
  const [returnData, setReturnData] = useState();

  const { data, loading, refetch: refetchUserData } = useQuery(
    gql(getActionPageAndSubscriberDetailsByArtistPageRoute),
    {
      variables: { artistRoute, pageRoute },
      skip: !artistRoute && !pageRoute && !enduserId
    }
  );

  useEffect(()=> {
    if(enduserId!=null)
      refetchUserData();
  }, [pageRoute]);

  const formatTableData = tableData => {
    const artistName = tableData?.ArtistByRoute.items[0]?.artistName;
    const endUserData =
      tableData.ArtistByRoute?.items[0]?.actionPages?.items[0]?.subscribers?.items?.map(
        item => {
          const firstName = item?.enduser?.firstName || '';
          const lastName = item?.enduser?.lastName || '';
          const fullName =
            firstName || lastName ? `${firstName} ${lastName}` : '[no name]';
          return {
            id: item.enduserID,
            email: item?.enduser?.email,
            firstName,
            lastName,
            name: fullName,
            phone: item?.enduser?.phoneNumber || '',
            avatar: item?.profilePicture,
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
    const currentUserData = endUserData?.find(item => item.id === enduserId);
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
     console.log(`nextTierFans are `,nextTierFans);
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
    };
  };

  useEffect(() => {
    if (data) {
      setReturnData(formatTableData(data));
    }
  }, [data]);

  console.log(`returning data`, returnData, loading);

  return {
    ...returnData,
    loading: !returnData?.currentUserData ,
  };
};
