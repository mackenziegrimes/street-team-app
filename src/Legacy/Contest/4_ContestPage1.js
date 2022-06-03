import React, {useState} from 'react';
import styled from 'styled-components';

import Background from '../Components/Background';
import CenterBox from '../Components/CenterBox';
import ContestPage1Card from '../Components/Cards/4ContestPage1';

import { gql, useQuery, useMutation } from '@apollo/react-hooks';
import { getContest, getEnduser, getContestSubscription} from '../graphql/queries';
import { createEnduser,createContestSubscription } from '../graphql/mutations';
import SessionVariables from '../functional-tests/SessionVariables';


import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

function ContestPage1({contestId}) {
  // this needs to use the contest id, which right now hard coded, going to be from the incoming path eventually will be from a subdomain or something
  // const contestId = '762be373-ae1d-45e2-aef2-08aebac72c75';
  // const contestId = 'little-contest'
  // const enduserId = 'demo-user';
  const referralId = SessionVariables.getReferrerId(); //get the referrer ID from the session that was stashed on landing.js
  console.log("ReferralID: "+referralId);
  console.log("Contest ID: "+contestId);

  
  const [userId, setUserId] = useState(null);
  const [enduserContestSubscription, setEnduserContestSubscription] = useState(null);
  const [subscriptionId, setSubscriptionId] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [enduserFullName, setEnduserFullName] = useState(null);
  const [error, setError] = useState(null);
  const [CreateEnduser] = useMutation(gql(createEnduser))
  const [createContestSubscriptionData] = useMutation(gql(createContestSubscription));
  // const [createEnduser] = useMutation(gql(createEnduser));
  
  // console.log(contestID);
  // const id = contestID;
  
  // get the logged in user's ID
  Auth.currentAuthenticatedUser({
    bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  })
    .then(user => {
      setUserId(user.username);
      console.log(`Load additional settings for user: ${user.username}`);
      // console.log("User Info:");
      // console.log(user);
      setEnduserFullName(user.attributes.name);
      // console.log("Enduser Fullname:");
      // console.log(user.attributes.name);
      // TBD
      // setFirstName(user.email);
    })
    .catch(err => setError(err));
  
  // setUserId(enduserId);
  
  const {
    data: contestData,
    loading: contestLoading,
    error: contestError,
  } = useQuery(gql(getContest), {
    variables: { id: contestId },
  });

  const {
    data: enduserData,
    loading: enduserLoading,
    error: enduserError,
    refetch: refetchEnduserData
  } = useQuery(gql(getEnduser), {
    variables: { id: userId },
  });
  
  const {
    data: contestSubscriptionData,
    loading: contestSubscriptionLoading,
    error: contestSubscriptionError,
  } = useQuery(gql(getContestSubscription), {
    variables: { id: subscriptionId },
  });
  
  const [addEnduser, { loading: createEnduserLoading, data:createEnduserData, error:createEnduserError }] = useMutation(gql(createEnduser),
  {
      update(cache, { data: { addEnduser } }) {
        // const {enduserData} = cache.readQuery({query:gql(getEnduser), input: {id: userId }});
        cache.writeQuery({query:gql(getEnduser),data:{enduser: addEnduser}});
      },
    refetchQueries: [{query:gql(getEnduser),
    variables: {id: userId },
    }],
    awaitRefetchQueries:true
    
  }
  );
  
    const [addSubscription, {loading:loadingNewSubscription}] = useMutation(gql(createContestSubscription),
  {
      // update(cache, { data: { addSubscription } }) {
        // const {enduserData} = cache.readQuery({query:gql(getEnduser), input: {id: userId }});
        // cache.writeQuery({query:gql(getEnduser),data:{enduser: addEnduser}});
      // },
    refetchQueries: [{query:gql(getEnduser),
    variables: {id: userId },
    }],
    awaitRefetchQueries:true
  }
  );
  
  // const [addTodo] = useMutation(ADD_TODO, {
  //   update(cache, { data: { addTodo } }) {
  //     cache.modify({
  //       fields: {
  //         todos(existingTodos = []) {
  //           const newTodoRef = cache.writeFragment({
  //             data: addTodo,
  //             fragment: gql`
  //               fragment NewTodo on Todo {
  //                 id
  //                 type
  //               }
  //             `
  //           });
  //           return [...existingTodos, newTodoRef];
  //         }
  //       }
  //     });
  //   }
  // });
  
  // const createNewEnduser = () =>
  // {
  //   CreateEnduser({variables:{input :{
  //       id:userId,
  //       firstName:firstName,
  //       // spotifyDailyPlayCount:spotifyDailyPlayCount,
  //     }}});
  // }
  
  // const handleCreatNewEnduser = () => {
  //   createNewEnduser()
  // }

  if (contestLoading || enduserLoading || loadingNewSubscription || contestSubscriptionLoading) {
    return <div><p>Loading...</p></div>;
  }
  if (contestError) {
    return (
      <div>
        <p>Contest Data Error: ${contestError.message} </p>
      </div>
    );
  }
  if (enduserError) {
    return (
      <div>
        <p>User Data Error: ${enduserError.message} </p>
      </div>
    );
  }

  console.log(contestData);
  const contestInfo = contestData.getContest;
  console.log(enduserData);
  const enduserInfo = enduserData.getEnduser;
      console.log("Enduser Info:")
      console.log(enduserInfo)
  // const CreateEnduser = () =>
  //     CreateEnduser({variables:{input :{
  //       id:userId,
  //       firstName:firstName,
  //       // spotifyDailyPlayCount:spotifyDailyPlayCount,
  //     }}});
  
  const formattedDeadline = contestInfo.deadline.replace(/-/g, "/");

  // const spotifyPlayAction = contestInfo.actions.spotifyPlay ? contestInfo.actions.spotifyPlay : 
  var enduserContestInfo = null;

  try {
    //if the enduser does not exist
    if(enduserInfo==null && !createEnduserLoading){
      console.log(enduserInfo)
      console.log("enduserInfo does not exist -- creating enduser");
      // const newEnduserData = handleCreatNewEnduser();
      const newEnduserData = addEnduser({variables:{input :{
        id:userId,
        firstName:firstName, 
      } }});
      console.log(newEnduserData);
      console.log("enduser record created");
      refetchEnduserData();
    }
    if(enduserInfo!=null){
      enduserContestInfo = enduserInfo.contestSubscriptions.items.find(element => element.contestID == contestId);
      console.log(enduserContestInfo);
    }
    //if the enduser isn't already subscribed to the contest, create a record and use that one
    if(enduserContestInfo==null && subscriptionId==null && enduserInfo!=null && !createEnduserLoading){
      console.log("subscriptionId is " + subscriptionId)
      console.log("enduser contest subscription doesn't exist -- creating subscription")
      console.log("contest ID:" + contestId)
      const subscriptionNewId = contestId+"-"+userId;
      const newSubscriptionData = addSubscription({variables:{input:{
        id:  subscriptionNewId,
        contestID: contestId,
        enduserID:userId,
        referralEnduserID:referralId
      }
      }})
      refetchEnduserData(); //this refetch isn't updating enduserInfo for some reason
      setSubscriptionId(subscriptionNewId);
      
      console.log(enduserContestSubscription);
      console.log("new subscription record created")
    }
    if(enduserContestInfo==null){
      if(!contestSubscriptionData || contestSubscriptionLoading)
      {
        return (<div>Loading...</div>)
      }else{
        enduserContestInfo = contestSubscriptionData;
      }
    }
  }
  catch(err) {
    console.log(err.message);
    // return(
    // <div>
    //     <p>User-Contest Error: ${err.message} </p>
    // </div>
    // );
  }
  if (createEnduserLoading || loadingNewSubscription) {
    return <div><p>Loading New User...</p></div>;
  }
  
// console.log(enduserId);
// console.log(enduserContestInfo.completeStreetTeamJoin);

const enduserId = userId;

  console.log("User ID: "+userId);
  console.log("Enduser ID: "+ enduserId);
  console.log("Subscription ID: "+enduserContestInfo.id);

  return (
    <div>
      <div>
        <Background contestPictureUrl={contestInfo.picture.publicUrl} myclassName="background-wrapper" />
      </div>
      <div>
        <CenterBox
          boxContent={
            <ContestPage1Card
              contestId={contestId}
              // contestHeadline="Win a Baby"
              // contestDescription="Enter for a chance to win a happy, healthy baby girl!"
              // buttonText="CONTINUE"
              // contestDeadline="4/1/2021"
              // contestImg="../baby.png"
              contestHeadline={contestInfo.headline}
              contestDescription={contestInfo.description}
              buttonText={contestInfo.contestButtonText ? contestInfo.contestButtonText : "CONTINUE"}
              contestDeadline={formattedDeadline} //TODO deadline needs to be UTC
              contestImg={contestInfo.picture.publicUrl}
              actionSpotifyPlay={true}
              actionSpotifyFollow={true}
              actionSpotifySave={true}
              actionStreetTeam={true}
              // actionSpotifyPlay={contestInfo.actions.spotifyPlay}
              // actionSpotifyFollow={contestInfo.actions.spotifyFollow}
              // actionSpotifySave={contestInfo.actions.spotifySave}
              // actionStreetTeam={contestInfo.actions.streetTeamJoin}
              // streetTeamUrl={contestInfo.actions.streetTeamJoin.Url}
              // spotifyPlayUrl={contestInfo.actions.spotifyPlay.Url}
              // spotifyFollowPlaylistUrl={contestInfo.actions.spotifyFollowPlaylist.Url}
              // spotifyFollowArtistUrl={contestInfo.actions.spotifyFollowArtist.Url}
              // spotifySaveUrl={contestInfo.actions.spotifySave.Url}
              streetTeamUrl={contestInfo.streetTeamUrl || "https://www.modern-musician.com"}
              spotifyPlayUrl={contestInfo.spotifyPlayUrl}
              spotifyFollowPlaylistUrl={contestInfo.spotifyFollowPlaylistUrl}
              spotifyFollowArtistUrl={contestInfo.spotifyFollowArtistUrl}
              spotifySaveUrl={contestInfo.spotifySaveUrl}
              enduserFullName={enduserFullName || "New"}
              totalPoints={enduserContestInfo.enduserPoints || 0}
              enduserContestID={enduserContestInfo.id}
              referralEnduserId={referralId}
              spotifyToken={enduserInfo.spotifyToken}
              spotifyDailyPlayCount={enduserContestInfo.spotifyDailyPlayCount}
              completedSpotifyPlay={enduserContestInfo.completeSpotifyPlay}
              completedSpotifyFollow={enduserContestInfo.completeSpotifyFollow}
              completedSpotifySave={enduserContestInfo.completeSpotifySave}
              completedStreetTeamJoin={enduserContestInfo.completeStreetTeamJoin}
            />
          }
          displayFooter={true}
        />
      </div>
    </div>
  );
}

// export default withAuthenticator(ContestPage1,{initialAuthState: 'signup'},);
export default ContestPage1