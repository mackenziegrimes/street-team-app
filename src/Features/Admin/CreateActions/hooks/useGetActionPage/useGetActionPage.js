import { useEffect, useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/react-hooks';
import { getActionPageByArtistAndPageRoute } from '../../../../../graphql-custom/queries';
import { getArtistUser } from '../../../../../graphql/queries';
import {
  createArtistUser,
  createActionPage,
  createArtist,
  updateArtistUser,
} from '../../../../../graphql/mutations';
import { useCurrentAuthUser } from '../useCurrentAuthUser';
import { getBackendApiUrl } from '../../../../../utils/sharedUtils';


export const useGetActionPage = () => {
  // const [artistId, setArtistId] = useState();
  const [actionPageInfo, setActionPageInfo] = useState();
  // const [actionPageId, setActionPageId] = useState();
  // const [artistRoute, setArtistRoute] = useState();
  const [routeIncrement, setRouteIncrement] = useState(0);
  const [error, setError] = useState();
  const [createLoading, setCreateLoading] = useState();
  const [createActionPageError, setCreateActionPageError] = useState();

  let { userId, artistName, idToken } = useCurrentAuthUser();
  console.log(`1-- now the artist is`,artistName);

  const getArtistByEnduser = `query GetArtistUserActionPageData($id: ID!, $pageRoute: String) {
    getArtistUser(id: $id) {
      id
      username
      firstName
      lastName
      email
      phoneNumber
      artistID
      createdAt
      updatedAt
      artist {
        id
        artistName
        genre
        profilePicture
        tags {
          items {
            id
            tag
            artistID
            createdAt
            updatedAt
          }
          nextToken
        }
        route
        createdAt
        updatedAt
        owner
        integrations {
          items {
            id
            artistID
            serviceName
            serviceApiKey
            serviceAccountId
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        actionPages(filter: {pageRoute: {eq: $pageRoute}}) {
          items {
            id
            artistID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
            actionButtons {
              items {
                id
                actionPageID
                preActionText
                postActionText
                buttonIcon
                backgroundColor
                textColor
                pointValue
                position
                targetURL
                serviceAction
                createdAt
                updatedAt
                owner
              }
            }
          }
          nextToken
        }
      }
      owner
    }
  }
`;

  const onCompletedFunction = data => {
    console.log('completed query');
    console.log(`available data is now `, data);
  };

  const {
    data: userData,
    loading: userLoading,
    error: userError,
    refetch: refetchUserData,
  } = useQuery(gql(getArtistByEnduser), {
    variables: { id: userId, pageRoute: 'join' },
    skip: !userId && !artistName,
    onCompleted: userData => {
      console.log('completed query');
      console.log(`available data is now `, userData);
    },
  });

  // this function
  const createActionPageForUser = async (userId, artistName) => {
    const str_cid = window.localStorage.getItem('str_cid'); //pull stripe customer id from local storage (stored prior to login sequence)
    const params = {
      artistUserId: userId,
      artistName,
      pageRoute: 'join',
      stripeCustomerId: str_cid
    };
    // todo this should be done using environment variables, but for now this works -2021-11-11 SG
    let createUrl = `${getBackendApiUrl()}/create-action-page`;
    console.log(params);
    try{
      setCreateLoading(true);
    const pagesData = await fetch(createUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    })
      .then(rsp => rsp.json())
      .then(json => {
        if (json.error && json.error.message) {
          console.error(json.error.message);
          setCreateActionPageError(json.error.message);
        } else {
          console.log(`results are`, json);
          refetchUserData();
        }
      });
    }
    catch(err){
      console.error(`creating action page failed due to error:`);
      console.error(err);
    }
    setCreateLoading(false);
  };

  useEffect(() => {
    const responseActionPageData =
      userData?.getArtistUser?.artist?.actionPages?.items?.find(
        item => item.pageRoute === 'join'
      );
    console.log(
      `response action page data is now---1a`,
      responseActionPageData
    );
    console.log(`userError is now`, userError);
    if (userData && !responseActionPageData && !userError) {
      try {
        // if an action page doesn't exist, create one and pull the data again
        if (!createActionPageError && userId) {
          console.log('creating new action page');
          console.log(`1-- action page doesn't exist`,userId,artistName)
          if(!artistName){
            console.log(`no artist name available, use default of 'artist'`);
            artistName=`artist`;
          }
          // this single API endpoint will create the user, artist, and page if necessary
          createActionPageForUser(userId, artistName);
        }
      } catch (err) {
        console.error(
          err,
          userError,
          createActionPageError
          // artistByRouteError,
          // createUserError,
          // addArtistError,
          // addActionPageError
        );
        setError(err);
      }
    }
  }, [userData, userLoading, userError]);
  // this query is getting called a million times and breaking things.
  // const {
  //   data: artistByRouteData,
  //   error: artistByRouteError,
  //   loading: artistByRouteLoading,
  //   refetch: refetchArtistByRoute,
  // } = useQuery(gql(getActionPageByArtistAndPageRoute), {
  //   variables: { artistRoute, pageRoute: 'join' },
  // });

  // // define mutations
  // const [
  //   addUser,
  //   {
  //     loading: createUserLoading,
  //     data: createUserData,
  //     error: createUserError,
  //   },
  // ] = useMutation(gql(createArtistUser), {
  //   update(cache) {
  //     cache.writeQuery({
  //       query: gql(getArtistUser),
  //       data: { artistuser: addUser },
  //     });
  //   },
  //   refetchQueries: [
  //     {
  //       query: gql(getArtistUser),
  //       variables: { id: userId },
  //     },
  //   ],
  //   awaitRefetchQueries: true,
  // });

  // const [
  //   addArtist,
  //   {
  //     loading: createArtistLoading,
  //     data: createArtistData,
  //     error: addArtistError,
  //   },
  // ] = useMutation(gql(createArtist), {
  //   refetchQueries: [
  //     {
  //       query: gql(getActionPageByArtistAndPageRoute),
  //       variables: { artistRoute, pageRoute: 'join' },
  //     },
  //   ],
  //   awaitRefetchQueries: true,
  // });

  // const [
  //   addActionPage,
  //   {
  //     data: createActionPageData,
  //     loading: createActionPageLoading,
  //     error: addActionPageError,
  //   },
  // ] = useMutation(gql(createActionPage), {
  //   refetchQueries: [{ query: gql(getArtistUser), variables: { id: userId } }],
  //   awaitRefetchQueries: true,
  // });

  // // TODO this shouldn't be called until after we find out that an enduser doesn't exist... but for some reason it's been called still
  // const uniqueArtistRoute = () => {
  //   if (!artistRoute && artistName) {
  //     setArtistRoute(artistName.replace(/[^a-zA-Z0-9-_]/g, '-'));
  //     return false;
  //   }
  //   if (!artistName && !artistRoute) {
  //     // if there is no artistRoute set and no artistName passed in, then we're going to just use static default values
  //     setArtistRoute('fb');
  //   }
  //   console.log('artistByRouteData', artistByRouteData);
  //   if (artistByRouteData && !artistByRouteLoading && artistRoute) {
  //     // find if an artist exists at this route. if it does, try a different route
  //     if (artistByRouteData.ArtistByRoute.items.length === 0) {
  //       return true;
  //     }
  //     const artistArray = artistRoute.split('_');
  //     console.log(`artistArray`, artistArray);
  //     const artistName = artistArray[0];
  //     setRouteIncrement(parseInt(routeIncrement) + 1);
  //     setArtistRoute(`${artistName}_${routeIncrement.toString()}`);
  //     refetchArtistByRoute();
  //   }
  //   return false;
  // };

  let responseActionPageData;
  let artistId;
  let actionPageId;
  let artistRoute;
  let integrations;

  if (userLoading || createLoading) {
    console.log('loading');
    return { loading: true };
  }
  if (userError) {
    console.log('error');
    console.log(userError);
    return { error: userError };
  }
  if (!userData) {
    console.log('no user data found');
  }
  // else if (userData) {
  console.log(`we should have some userData`);
  const enduserInfo = userData?.data?.getArtistUser;
  console.log(`user data is: `, userData);
  responseActionPageData =
    userData?.getArtistUser?.artist?.actionPages?.items?.find(
      item => item.pageRoute === 'join'
    );
  artistId = userData?.getArtistUser?.artist?.id;
  artistRoute = userData?.getArtistUser?.artist?.route;
  actionPageId = responseActionPageData?.id;
  integrations = userData?.getArtistUser?.artist?.integrations?.items;

  console.log(`userData`, userData);
  console.log(`respond --- responseActionPageData`, responseActionPageData);
  // }
  return {
    loading: userLoading,
    // artistByRouteLoading ||
    // createUserLoading ||
    // createArtistLoading ||
    // createActionPageLoading,
    error,
    actionPageId,
    artistRoute,
    actionPageData: responseActionPageData,
    userData,
    userId,
    idToken,
    artistId,
    integrations
  };
};
