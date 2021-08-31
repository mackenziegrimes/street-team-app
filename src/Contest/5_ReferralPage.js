import React, { useState } from 'react';
import styled from 'styled-components'

import Background from '../Components/Background';
import CenterBox from '../Components/CenterBox';
import ReferralCard from '../Components/Cards/5ReferralCard';

import { gql, useQuery } from '@apollo/react-hooks';
import { getContest, getEnduser } from '../graphql/queries';

import { Auth } from 'aws-amplify';


function ReferralPage({contestId}) {
  // this needs to use the contest id, which right now hard coded, going to be from the incoming path eventually will be from a subdomain or something
  // const contestId = 'little-contest';
  const enduserId = '762be373';
  // console.log(contestID);
  // const id = contestID;
  const [enduserFullName, setEnduserFullName] = useState(null);
  
    Auth.currentAuthenticatedUser({
    bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  })
    .then(user => {
      setEnduserFullName(user.attributes.name);
      // console.log("Enduser Fullname:");
      // console.log(user.attributes.name);
      // TBD
      // setFirstName(user.email);
    })
    
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
  } = useQuery(gql(getEnduser), {
    variables: { id: enduserId },
  });

  if (contestLoading || enduserLoading) {
    return <p>Loading...</p>;
  }
  if (contestError || enduserError) {
    return (
      <div>
        <p>Contest Data Error: ${contestError.message} </p>
        <p>User Data Error: ${enduserError.message} </p>
      </div>
    );
  }

  console.log(contestData);
  const contestInfo = contestData.getContest;
  console.log(enduserData);
  const enduserInfo = enduserData.getEnduser;
  
  const formattedDeadline = contestInfo.deadline.replace(/-/g, "/");
  console.log(formattedDeadline);
  
  const enduserContestInfo = enduserInfo.subscriptions.items.find(element => element.contestID == contestId)
  console.log(enduserContestInfo.completeStreetTeamJoin);
  
  return (
    <div>
      <div>
        <Background contestPictureUrl={contestInfo.picture.publicUrl} myClass="background-wrapper" />
      </div>
      <div>
        <CenterBox 
        boxContent=
        {
          <ReferralCard 
            contestId={contestId}
            contestHeadline={contestInfo.headline}
            contestDescription={contestInfo.description}
            buttonText={contestInfo.landingButtonText}
            contestDeadline={formattedDeadline} //TODO deadline needs to be UTC
            contestImg={contestInfo.picture.publicUrl}
            enduserFullName={enduserFullName}
            enduserId={enduserInfo.id}
            totalPoints={enduserContestInfo.enduserPoints || 30}
            enduserContestID={enduserContestInfo.id}
            enduserReferrals={enduserContestInfo.enduserReferrals}
          />
        }
        displayFooter={true}
        />
      </div>
    </div>
  );
}

export default ReferralPage;
