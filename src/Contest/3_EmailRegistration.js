import React from 'react';
import styled from 'styled-components'

import Background from '../Components/Background';
import CenterBox from '../Components/CenterBox';
import EmailRegistrationCard from '../Components/Cards/3_EmailRegistrationCard';

import { gql, useQuery } from '@apollo/react-hooks';
import { getContest, getEnduser } from '../graphql/queries';

function EmailRegistration({contestId}) {
  
  // this needs to use the contest id, which right now hard coded, going to be from the incoming path eventually will be from a subdomain or something
  // const contestId = 'little-contest';
  const enduserId = '762be373';
  // console.log(contestID);
  // const id = contestID;
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
  

  return (
    <div>
      <div>
        <Background contestPictureUrl={contestInfo.picture.publicUrl} myClass="background-wrapper" />
      </div>
      <div>
        <CenterBox 
        boxContent=
        {
          <EmailRegistrationCard
            contestId={contestId}
            contestHeadline={contestInfo.headline}
            contestDescription={contestInfo.description}
            buttonText={contestInfo.landingButtonText}
            contestDeadline={formattedDeadline} //TODO deadline needs to be UTC
            contestImg={contestInfo.picture.publicUrl}
          />
        }
        displayFooter={true}
        />
      </div>
    </div>
  );
}

export default EmailRegistration;
