import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';

import Background from '../Components/Background';
import CenterBox from '../Components/CenterBox';
import OptinCard from '../Components/Cards/1_OptinCard';
import PageNotFound from '../Components/NotFoundPage';
import SessionVariables from '../functional-tests/SessionVariables';


import { gql, useQuery } from '@apollo/react-hooks';
import { getContest, getEnduser, listContests } from '../graphql/queries';
import { createContest } from '../graphql/mutations';
import Amplify from 'aws-amplify';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import awsMobile from '../aws-exports';
import { useLocation } from "@reach/router"
Amplify.configure(awsMobile);
// import { createTask } from './graphql/mutations';
// import { listTasks } from './graphql/queries';


function Landing({ contestId}) {
  
  // this needs to use the contest id, which right now hard coded, going to be from the incoming path eventually will be from a subdomain or something
  // const contestId = 'little-contest';
  const enduserId = '762be373';
  
  console.log(contestId);
  // const id = contestID;
  
  // A custom hook that builds on useLocation to parse
  // the query string for you.
  const useQuery = (queryParam) => {
    const search = new URLSearchParams(useLocation().search);
    return search.get(queryParam);
  };
  
  // const foundReferrer = useQuery("referrer");
  // const referrerId = foundReferrer ? foundReferrer : "none";
  const referrerId = useQuery("referrer");
  
  
  console.log("referrer is: " + referrerId)
  SessionVariables.setReferrerId(referrerId);
  // stash the referral ID in the session
  
  const [data, setData] = useState({ getContest: {} });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await API.graphql({
          query: getContest,
          variables: { id: contestId },
          authMode: 'AWS_IAM',
        });
        console.log(result.data);
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        console.log(`Error executing query: ${error}`);
        setError(`Unfortunately, something went wrong: ${error}`);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  
  // console.log(getContest);
  // const {
  //   data: contestData,
  //   loading: contestLoading,
  //   error: contestError,
  // } = useQuery(gql(getContest), {
  //   variables: { id: contestId },
  // });

  // const {
  //   data: enduserData,
  //   loading: enduserLoading,
  //   error: enduserError,
  // } = useQuery(gql(getEnduser), {
  //   variables: { id: enduserId },
  // });
  
  
    const login = async () => {
    const email = 'test@test.com';
    const userId = email;
    const password = '1234567890';
    console.log(`Logging in`);

    try {
      await Auth.signIn(email, password);
      console.log('Logged in');
    } catch (error) {
      console.log(`Error logging in: ${error}`);
    }
  };
  const logOut = async () => {
    console.log(`Logging out`);
    try {
      await Auth.signOut();
      console.log('Logged out');
    } catch (error) {
      console.log(`Error logging in: ${error}`);
    }
  };

  const mutate = async () => {
    console.log(`Creating task...`);
    const contest = {
      headline: 'Sent from Client!',
      description: 'A test task sent from the client!',
      landingButtonText: 'Done',
    };

    try {
      const data = await API.graphql(
        graphqlOperation(createContest, { input: contest })
      );
      console.log(`Executed mutation,   data:${JSON.stringify(data)}`);
    } catch (error) {
      console.log(`Error executing mutation: ${error}`);
    }
  };
  const query = async () => {
    console.log(`Querying database`);
    try {
      const data = await API.graphql({
        query: listContests,
        variables: {},
        authMode: 'AWS_IAM',
      });
      const outputData = JSON.stringify(data);
      console.log(`Executed query, data: ${outputData}`);
      //   console.log(contestData);
      setData(data);
      //   console.log(contestData);
    } catch (error) {
      console.log(`Error executing query: ${error}`);
    }
  };

  if (isLoading) {
    // if (contestLoading || enduserLoading) {
    return <p>Loading...</p>;
  }
  // if (contestError || enduserError) {
  if (error) {
    return (
      <div>
        <p>Contest Data Error: ${error.message} </p>
        {/* <p>User Data Error: ${enduserError.message} </p> */}
      </div>
    );
  }

  console.log(data);
  const contestInfo = data.getContest;
  // console.log(enduserData);
  // const enduserInfo = enduserData.getEnduser;
  if (!contestInfo){
    return(<PageNotFound/>)
  }

  const formattedDeadline = contestInfo.deadline.replace(/-/g, '/');
  console.log(formattedDeadline);

  return (
    <div>
      <Background contestPictureUrl={contestInfo.picture.publicUrl} myClass="background-wrapper" />
      <div>
        <CenterBox
          boxContent={
            <OptinCard
              // contestHeadline="Win a Baby"
              // contestDescription="Enter for a chance to win a happy, healthy baby girl!"
              // buttonText="Enter to Win >"
              // contestDeadline="4/13/2021"
              // contestImg="../baby.png"
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

export default Landing;
