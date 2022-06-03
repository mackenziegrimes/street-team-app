import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from 'react-bootstrap/Button';
import { Link } from '@reach/router';

import Background from '../Components/Background';
import CenterBox from '../Components/CenterBox';
import PageNotFound from '../Components/NotFoundPage';
import SessionVariables from '../functional-tests/SessionVariables';
import ActionButton from '../Components/ActionButton';
import ViewActionPageCard from './ViewActionPageCard';

import { gql, useQuery } from '@apollo/react-hooks';
import { getActionPage, getEnduser, listArtists } from '../graphql/queries';
import Amplify from 'aws-amplify';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import awsMobile from '../aws-exports';
import { useLocation } from '@reach/router';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

Amplify.configure(awsMobile);
// import { createTask } from './graphql/mutations';
// import { listTasks } from './graphql/queries';

function ViewActionPage({ routeVar }) {
  // routeVar = 'cue-no-ego'; //this is hardcoded as the test
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  console.log(routeVar);

  // A custom hook that builds on useLocation to parse
  // the query string for you.
  const useQuery = queryParam => {
    const search = new URLSearchParams(useLocation().search);
    return search.get(queryParam);
  };

  // const foundReferrer = useQuery("referrer");
  // const referrerId = foundReferrer ? foundReferrer : "none";
  const referrerId = useQuery('referrer');
  console.log('referrer is: ' + referrerId);
  SessionVariables.setReferrerId(referrerId);
  // stash the referral ID in the session

  const [data, setData] = useState({ getActionPage: {} });
  const [artistRouteData, setArtistRouteData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState(null);
  // const [completedActions, setCompletedActions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      var pageId = routeVar;
      //first check if the routeVar matches an artist's route field. otherwise, try it as just a page id
      // NOTE this is a weird quirk for listArtists, but if we don't set a high limit, the filter will only scan 10 records -- see this issue https://github.com/aws-amplify/amplify-cli/issues/2220
      try {
        const resultByArtistRoute = await API.graphql({
          query: listArtists,
          variables: { limit: 5000, filter: { route: { eq: routeVar } } },
          authMode: 'AWS_IAM',
        });
        //this should only every be 1 or 0 otherwise something is wrong
        const numberOfArtistsFound =
          resultByArtistRoute.data.listArtists.items.length > 0;
        if (numberOfArtistsFound > 0) {
          if (numberOfArtistsFound > 1) {
            console.log(
              'ERROR number of artists matching this route is more than one... thats not right'
            );
          }
          //defaulting to the first page for now.. TODO should make this a configurable default
          const pageIdFromArtistRecord =
            resultByArtistRoute.data.listArtists.items[0].actionPages.items[0]
              .id;
          setArtistRouteData(pageIdFromArtistRecord);
          pageId = pageIdFromArtistRecord;
        }
      } catch (error) {
        console.log(`Error executing query: ${error}`);
        console.log(error);
        console.log(error.errors);
        setError(`Unfortunately, something went wrong: ${error}`);
      }
      try {
        console.log(pageId, 'pageId');
        const result = await API.graphql({
          query: getActionPage,
          variables: { id: pageId },
          authMode: 'AWS_IAM',
        });
        console.log(result.data);
        setData(result.data);
      } catch (error) {
        console.log(`Error executing query: ${error}`);
        setError(`Unfortunately, something went wrong: ${error}`);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);
  //here we're starting by logging out if someone is logged in as a temporary work around to 401 issues when a user is logged in
  if (!isLoggedOut) {
    Auth.signOut();
    setIsLoggedOut(true);
    return <p>One second</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return (
      <div>
        <p>Data Error: ${error.message} </p>
        {/* <p>User Data Error: ${enduserError.message} </p> */}
      </div>
    );
  }

  console.log('data:');
  console.log(data, 'data by page id');
  console.log(artistRouteData, 'data by default artist route');

  const pageData = data.getActionPage;
  // console.log(enduserData);
  // const enduserInfo = enduserData.getEnduser;
  if (!pageData) {
    return <PageNotFound message={'routeVar: '.concat(routeVar)} />;
  }

  const picture = pageData.picture;
  var picUrl = ''; //default background pic is empty
  if (picture) {
    //if the picture exists, use the publicUrl from that pic
    picUrl = picture.publicUrl;
  }
  console.log('background picture:');
  console.log(picUrl);

  return (
    <div>
      <div>
        <Background
          backgroundPictureUrl={picUrl}
          myClass="background-wrapper"
        />
      </div>
      <div>
        <CenterBox
          boxContent={
            <ViewActionPageCard
              pageData={pageData}
              // enduserFullName={enduserFullName || "New"}
              // totalPoints={enduserpageData.enduserPoints || 0}
              // enduseractionPageID={enduserpageData.id}
              // referralEnduserId={referralId}
            />
          }
          displayFooter={true}
        />
      </div>
    </div>
  );
}

export default ViewActionPage;
