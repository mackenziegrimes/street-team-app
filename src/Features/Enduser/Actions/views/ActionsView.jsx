/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useParams, useHistory } from 'react-router-dom';
import { NavBar } from '../../NavBar';
import { createEnduser } from '../../../../graphql/mutations';
import { getEnduser } from '../../../../graphql/queries';
import { getArtist } from '../../../../graphql/queries';
import { getActionPageAndEnduserDetailsByArtistPageRouteAndEnduserID } from '../graphql/getEnduserActionPageData';
import {
  createEnduserPageSubscriptionCompletedActions,
} from '../graphql/createEnduserPageSubscription';
import { ActionPage } from '../../../../Components/ActionPage';
import { StyledPageContainer } from '../../../../Components/Page';
import { Spinner } from '../../../../Components/UI/Spinner';
import { Button } from '../../../../Components/UI/Button';
import anonymousId from 'anonymous-id';
import { cleanUrl, tagInActiveCampaign, timeAgoHoursFromString, trackInAmplitude } from '../../../../utils/sharedUtils';
import { useCurrentAuthUser } from '../hooks/useCurrentAuthUser';
import { useGetSubscriberData } from '../../Ranking/hooks';
import { ConsoleLogger } from '@aws-amplify/core';

const ButtonContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: ({ theme }) => theme.spacing.md,
  marginBottom: ({ theme }) => theme.spacing.md,
  button: {
    width: '85%',
  },
});

export const ActionsView = () => {
  const [actionValues, setActionValues] = useState([]);
  // const [actionPageID, setActionPageID] = useState(0);
  const [showSpotifyDropDown, setShowSpotifyDropdown ] = useState(false);
  // const [enduserPageSubscriptionID, setEnduserPageSubscriptionID] = useState(0);
  const [artistId, setArtistId] = useState(null);
  const { artist, page = 'join' } = useParams();
  const history = useHistory();

  // userId = (userId || loadingUser) ? userId : window.localStorage.getItem('user'); //if no user id, pull it from local storage
  const { currentUserData, actionPageData, artistName, loading } = useGetSubscriberData({
      artistRoute: artist,
      pageRoute: page,
    });
console.log('hi current user data',currentUserData)
  let firstName = currentUserData?.firstName;
  let lastName = currentUserData?.lastName;
  let userId = currentUserData?.id;
  let enduserPageSubscriptionID = currentUserData?.subscriptionId;

  // define mutation for creating a new completedAction record
  const [addCompletedAction, { loading: loadingCompletedAction }] = useMutation(
    gql(createEnduserPageSubscriptionCompletedActions),
    {
      refetchQueries: [
        {
          query: gql(
            getActionPageAndEnduserDetailsByArtistPageRouteAndEnduserID
          ),
          variables: {
            artistRoute: artist,
            pageRoute: page,
            enduserID: userId,
          },
        },
      ],
      awaitRefetchQueries: true,
    }
  );

  // get the data for building the landing page
  // const { data: actionPageData, loading } = useQuery(
  //   gql(getActionPageAndEnduserDetailsByArtistPageRouteAndEnduserID),
  //   {
  //     variables: { artistRoute: artist, pageRoute: page, enduserID: userId },
  //   }
  // );

console.log(actionPageData);

  const handleAction = id => {
    //use the id to figure out which button to track in amplitude
    const clickedAction = actionButtonList.find(item => item.id===id);
    if(clickedAction.serviceAction==='SpotifyEmbed'){
      //do nothing
      setShowSpotifyDropdown(!showSpotifyDropDown); //toggle spotify dropdown
    }
    else{
      //handle link actions
      const updatedActions = actionValues.map(item => {
        if (item.id === id)
          return {
            ...item,
            complete: true,
          };
        return item;
      });
      setActionValues(updatedActions);
      // create completed action record in the database
      const newCompletedActionRecord = addCompletedAction({
        variables: {
          input: {
            actionID: id,
            enduserPageSubscriptionID,
          },
        },
      });
      console.log(`newSubscription data is ${JSON.stringify(newCompletedActionRecord) }`);
      const targetURL = clickedAction.targetURL;
      console.log(`targetURL is`, targetURL);
      if (targetURL) {
        const cleanUrlString = cleanUrl(targetURL);
        window.open(cleanUrlString, '_blank');
      }
    }
    //TODO this needs to be cleaner and in a method somewhere -SG 2021-11-19
    //TODO also, after data migration, we should move all of these to reference serviceAction and not button icon
    let trackedName;

    if (clickedAction.serviceAction === 'StarterPackLink') {
      trackedName = 'Starter Pack';
    } else if (clickedAction.serviceAction === 'JoinLink') {
      trackedName = 'Community';
    } else if (clickedAction.serviceAction === 'MusicLink') {
      trackedName = 'MusicHub';
    } else if (clickedAction.serviceAction === 'EmailLink') {
      trackedName = 'Send Email';
    } else if (clickedAction.serviceAction === 'ScheduleLink') {
      trackedName = 'Call';
    } else if (clickedAction.serviceAction === 'EventBriteLink') {
      trackedName = 'Ticket';
    }
    trackInAmplitude(`${trackedName} Clicked`, anonymousId(), userId, artistId);
    tagInActiveCampaign(`TRG - ${trackedName} Clicked`, userId, artistId);
  };

  let actionPageID = actionPageData?.ArtistByRoute?.items[0]?.actionPages?.items[0]?.id
  useEffect(() => {

    if (actionPageData && actionPageData?.ArtistByRoute?.items?.length > 0) {
      const artist = actionPageData.ArtistByRoute.items[0];
      if (artist) {
        setArtistId(artist.id);
      }
      // this is currently assuming that 1) artist exsists at this route & 2) only one action page exists at this page route
      const actionPage =
        actionPageData.ArtistByRoute.items[0].actionPages.items[0];
        console.log(`22 -- action page is `, actionPage);
      const completedActions = currentUserData?.completedActions;
        // actionPageData?.ArtistByRoute?.items[0]?.actionPages?.items[0]
        //   ?.subscribers?.items[0]?.enduserPageSubscriptionCompletedActions
        //   .items;
      const actionArray = actionPage.actionButtons.items;
      console.log(`22 -- action page id is `, actionPage.id);
      //todo this needs to be abstracted to support mutliple repeatable actions
      let completedSpotifyActions;
      if(completedActions){
        completedSpotifyActions = completedActions.map(item => {
          if(item?.action?.serviceAction ==='SpotifyEmbed' && timeAgoHoursFromString(item.createdAt)<24){
              return 1
          }
          else return 0;
        });
      }
      console.log(`competed actions are`, completedSpotifyActions);
      let loggedActionsToday = completedSpotifyActions?.length > 1 ? completedSpotifyActions.reduce((total, val) => total + val) || 0 : 0;
      const values = [];
      for (let i = 0; i < actionArray.length; i++) {
        const element = actionArray[i];
        if(element.serviceAction==='StarterPackLink'){
          console.log(`starter pack is`,element);
          let el_com = completedActions.find(record => record.actionID === element.id)
          console.log(`starter pack el`, el_com)

        }
        // eslint-disable-next-line max-len
        // if this id is in the enduserSubscription records completed action record, mark it as complete... there's gotta be a better way to do this -SG
        const completed =
          (completedActions && (element.serviceAction !== 'SpotifyEmbed' && 
          completedActions.find(record => record?.action?.id === element.id) !==
            undefined)) || 
          (loggedActionsToday >= 5 && element.serviceAction==='SpotifyEmbed')
        values.push({
          id: element.id,
          complete: completed,
          points: +element.pointValue,
          completedActions: loggedActionsToday,
        });
      }
      setActionValues(values);
    }
  }, [actionPageData]);

  useEffect(() => {
    if (artistId && userId) {
      anonymousId();
      trackInAmplitude(
        'Tribal Accelerator Visited',
        anonymousId(),
        userId,
        artistId
      );
    }
  }, [artistId]);


  //moved to userGetSubscriberData
  // useEffect(() => {
  //   let actionPageSubscription = actionPageData?.ArtistByRoute?.items[0]?.actionPages?.items[0]
  //       ?.subscribers?.items?.find(item => item.actionPageID===actionPageID);
  //   console.log(`22-- actionPageId`,actionPageID)
  //   console.log(`22-- all actionPageSubs`, actionPageData?.ArtistByRoute?.items[0]?.actionPages?.items[0]?.subscribers?.items);
  //   console.log(`22-- subscription`,actionPageSubscription);
  //   console.log(`22-- loadingNewSubscription`,loadingNewSubscription);
  //   console.log(`22-- loadingUser`,loadingUser);
  //   if (
  //     !loadingNewSubscription && !actionPageSubscription && !loadingUser
  //   ) {
  //     console.log(`22-- actionPageID is ${actionPageID} and userID is ${userId}`);
  //     // create a new enduser subscription for this page if one doesn't already exist
  //     if (actionPageID && userId) {
  //       // TODO need to add the referral ID here when creating a subscription
  //       const newSubscriptionData = addSubscription({
  //         variables: {
  //           input: {
  //             actionPageID,
  //             enduserID: userId,
  //           },
  //         },
  //       });
  //       const additionalProperties = {
  //         user_properties: {
  //           name: firstName || lastName || '',
  //           email,
  //           phone,
  //         },
  //       };
  //       // track new subscriber in amplitude
  //       trackInAmplitude(
  //         'StreetTeam Joined',
  //         anonymousId(),
  //         userId,
  //         artistId,
  //         additionalProperties
  //       );
  //       tagInActiveCampaign('TRG - StreetTeam Joined', userId, artistId);
  //       console.log(`newSubscription data is ${newSubscriptionData}`);
  //     } else {
  //       console.log(`need userId and actionPageID to create a record`);
  //     }
  //   } else if (
  //     actionPageData?.ArtistByRoute?.items[0]?.actionPages?.items[0]
  //       ?.subscribers?.items?.length > 0
  //   ) {
  //     setEnduserPageSubscriptionID(
  //       actionPageData.ArtistByRoute.items[0].actionPages.items[0].subscribers
  //         .items[0].id
  //     );
  //   }
  // },[loadingUser]);

  if (loading)
    return (
      <StyledPageContainer>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="auto" style={{ textAlign: 'center' }}>
              <Spinner animation="border" role="status" variant="light" />
            </Col>
          </Row>
        </Container>
      </StyledPageContainer>
    );

  if (
    actionPageData?.ArtistByRoute?.items?.length === 0 ||
    actionPageData?.ArtistByRoute?.items?.[0]?.actionPages?.items?.[0]
      ?.actionButtons?.items.length === 0 ||
    actionPageData?.ArtistByRoute?.items?.length === 0
  ) {
    return (
      <StyledPageContainer>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="auto" style={{ textAlign: 'center' }}>
              <h1>There's nothing here 😿</h1>
            </Col>
          </Row>
        </Container>
      </StyledPageContainer>
    );
  }

  const actionPageInfo =
    actionPageData?.ArtistByRoute?.items[0]?.actionPages?.items[0];

  const spotifyIntegration = actionPageData?.getEnduser.integrations?.items?.find(item => item.serviceName?.toUpperCase() ==='SPOTIFY');
  let spotifyAuthToken = spotifyIntegration?.serviceApiKey;

  const actionButtonList = actionPageInfo?.actionButtons?.items?.filter(item => {
    return (
      item.serviceAction !== 'SoundCloudEmbed' &&
      item.serviceAction !== 'ContinueButton'
    );
  });

  return (
    <ActionPage>
      <Row>
        <Col className="p-0">
          <NavBar />
        </Col>
      </Row>
      {/* <Row>
        <Col className="p-0">
          <ActionPage.Stepper currentStep={2} />
        </Col>
      </Row> */}
      <ActionPage.Body>
        <Row className="mb-3">
          <Col>
            <ActionPage.Header
              // heading={actionPageInfo?.heading} // Add these ones we have configurable heading/subheading
              // subHeading={actionPageInfo?.subheading}
              heading="Increase Your Rewards"
              subHeading={
                <>
                  Earn StreetTeam Points to unlock exclusive rewards & benefits
                  from
                  <b>
                    <i> {artistName}</i>
                  </b>
                </>
              }
            />
          </Col>
        </Row>
        <ActionPage.Buttons
          data={actionButtonList}
          state={actionValues}
          handleAction={handleAction}
          currentState={showSpotifyDropDown} //this needs to be "generalized"
          enduserId={userId}
          spotifyAuthToken={spotifyAuthToken}
          pageId={actionPageInfo?.id}
        />
        <ButtonContainer>
          <Button
            color="gray2"
            fontColor="white"
            onClick={() => {
              history.push(`${artist}/ranking`);
            }}
          >
            CONTINUE
          </Button>
        </ButtonContainer>
      </ActionPage.Body>
      <Row>
        <Col className="p-0">
          <ActionPage.TotalPoints
            totalPoints={currentUserData?.points}
            name={`${firstName} ${lastName || ''}`}
            tier={currentUserData?.tier}
            nextTier={currentUserData?.nextTier}
            rank={currentUserData?.rank}
            pointsToNextTier={currentUserData?.pointsToNextTier}
          />
        </Col>
      </Row>
    </ActionPage>
  );
};
