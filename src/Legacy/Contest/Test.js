import React, { Fragment, useState, useEffect } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
// import { createTask } from './graphql/mutations';
// import { listTasks } from './graphql/queries';
import { getContest, getEnduser, listContests } from '../graphql/queries';
import { createContest } from '../graphql/mutations';

import Amplify from 'aws-amplify';
import awsMobile from '../aws-exports';
Amplify.configure(awsMobile);

function Test() {
  const [data, setData] = useState({ getContest: {} });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const contestId = 'little-contest';
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
  console.log(data);

  const login = async () => {
    const email = 'test@test.com';
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
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  } else {
    console.log(isLoading);
    console.log(data);
    return (
      <Fragment>
        <button onClick={login}>Log In</button>
        <button onClick={logOut}>Log Out</button>
        <button onClick={mutate}>Mutate</button>
        <button onClick={query}>Query</button>
        <div>
          <p>{data.getContest.headline}</p>
          <p>{username}</p>
        </div>
      </Fragment>
    );
  }
}
export default Test;
