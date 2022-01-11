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
import { getActionPageAndEnduserDetailsByArtistPageRouteAndEnduserID } from '../graphql/getEnduserActionPageData';
import {
  createEnduserPageSubscription,
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
  const [actionPageID, setActionPageID] = useState(0);
  const [showSpotifyDropDown, setShowSpotifyDropdown ] = useState(true);
  const [enduserPageSubscriptionID, setEnduserPageSubscriptionID] = useState(0);
  const [artistId, setArtistId] = useState(null);
  const { artist, page = 'join' } = useParams();
  const history = useHistory();

  const { userId, email, firstName, lastName, phone } = useCurrentAuthUser();
  const { currentUserData } = useGetSubscriberData({
    artistRoute: artist,
    pageRoute: page,
    enduserId: userId,
  });
  console.log(
    `current auth user is `,
    userId,
    `email: `,
    email,
    `firstName: `,
    firstName,
    `lastName: `,
    lastName,
    phone
  );

  // get the user data for the user -- used for making sure an enduser exists
  // this could be obtained with the rest of the action page data, but we're likely going to move this logic into a centralized place since we'll need to be verifying a user record exists on lots of pages
  const { data: enduserData, refetch: refetchEnduserData } = useQuery(
    gql(getEnduser),
    {
      variables: { id: userId },
    }
  );

  // define mutation for create a new enduser record
  const [addEnduser, { loading: createEnduserLoading }] = useMutation(
    gql(createEnduser),
    {
      update(cache, { data: { addEnduser } }) {
        // const {enduserData} = cache.readQuery({query:gql(getEnduser), input: {id: userId }});
        cache.writeQuery({
          query: gql(getEnduser),
          data: { enduser: addEnduser },
        });
      },
      refetchQueries: [{ query: gql(getEnduser), variables: { id: userId } }],
      awaitRefetchQueries: true,
    }
  );

  // define mutation for creating a new subscription record
  const [addSubscription, { loading: loadingNewSubscription }] = useMutation(
    gql(createEnduserPageSubscription),
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

  // create a new enduser if one doesn't exist to match Auth credentials
  if (
    enduserData != null &&
    enduserData.getEnduser == null &&
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
    refetchEnduserData();
  }

  // get the data for building the landing page
  const { data: actionPageData, loading } = useQuery(
    gql(getActionPageAndEnduserDetailsByArtistPageRouteAndEnduserID),
    {
      variables: { artistRoute: artist, pageRoute: page, enduserID: userId },
    }
  );

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
      console.log(`newSubscription data is ${newCompletedActionRecord}`);
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

  useEffect(() => {
    if (actionPageData && actionPageData?.ArtistByRoute?.items?.length > 0) {
      const artist = actionPageData.ArtistByRoute.items[0];
      if (artist) {
        setArtistId(artist.id);
      }
      // this is currently assuming that 1) artist exsists at this route & 2) only one action page exists at this page route
      const actionPage =
        actionPageData.ArtistByRoute.items[0].actionPages.items[0];
      const completedActions =
        actionPageData?.ArtistByRoute?.items[0]?.actionPages?.items[0]
          ?.subscribers?.items[0]?.enduserPageSubscriptionCompletedActions
          .items;
      const actionArray = actionPage.actionButtons.items;
      setActionPageID(actionPage.id);
      //todo this needs to be abstracted to support mutliple repeatable actions
      let loggedActionsToday = completedActions.map(item => {
        if(item?.action?.serviceAction ==='SpotifyEmbed' && timeAgoHoursFromString(item.createdAt)<24){
            return 1
        }
        else return 0;
    }).reduce((total, val) => total + val) || 0;
      const values = [];
      for (let i = 0; i < actionArray.length; i++) {
        const element = actionArray[i];
        // eslint-disable-next-line max-len
        // if this id is in the enduserSubscription records completed action record, mark it as complete... there's gotta be a better way to do this -SG
        const completed =
          completedActions && (loggedActionsToday >= 5 && element.serviceAction==='SpotifyEmbed') ||
          (element.serviceAction !== 'SpotifyEmbed' && 
          completedActions.find(record => record.actionID === element.id) !==
            undefined);
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

  useEffect(() => {
    if (
      !loadingNewSubscription &&
      actionPageData &&
      actionPageData?.ArtistByRoute?.items[0]?.actionPages?.items[0]
        ?.subscribers?.items?.length < 1
    ) {
      // create a new enduser subscription for this page if one doesn't already exist
      if (actionPageID && userId) {
        // TODO need to add the referral ID here when creating a subscription
        const newSubscriptionData = addSubscription({
          variables: {
            input: {
              actionPageID,
              enduserID: userId,
            },
          },
        });
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
        console.log(`newSubscription data is ${newSubscriptionData}`);
      } else {
        console.log(`need userId and actionPageID to create a record`);
      }
    } else if (
      actionPageData?.ArtistByRoute?.items[0]?.actionPages?.items[0]
        ?.subscribers?.items?.length > 0
    ) {
      setEnduserPageSubscriptionID(
        actionPageData.ArtistByRoute.items[0].actionPages.items[0].subscribers
          .items[0].id
      );
    }
  });

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
    actionPageData.ArtistByRoute.items.length === 0
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
    actionPageData.ArtistByRoute.items[0].actionPages.items[0];

  const spotifyIntegration = actionPageData?.ArtistByRoute?.items[0]?.actionPages?.items[0]?.subscribers?.items[0]?.enduser?.integrations?.items?.find(item => item.serviceName?.toUpperCase() ==='SPOTIFY');
  let spotifyAuthToken = spotifyIntegration?.serviceApiKey;

  const actionButtonList = actionPageInfo.actionButtons.items?.filter(item => {
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
              heading={actionPageInfo?.heading}
              subHeading={actionPageInfo?.subheading}
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
              history.push('ranking');
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
            pointsToNextTier={currentUserData?.pointsToTierLeader}
          />
        </Col>
      </Row>
    </ActionPage>
  );
};
