/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/react-hooks';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { useParams } from 'react-router-dom';
import {
  createEnduser
} from '../../../../graphql/mutations';
import { getEnduser } from '../../../../graphql/queries';
import { getActionPageAndEnduserDetailsByArtistPageRouteAndEnduserID } from '../graphql/getEnduserActionPageData';
import { createEnduserPageSubscription, createEnduserPageSubscriptionCompletedActions } from '../graphql/createEnduserPageSubscription';
import { ActionPage } from '../../../../Components/ActionPage';
import {
  StyledPageContainer,
} from '../../../../Components/Page';
import { Spinner } from '../../../../Components/UI/Spinner';
import { Auth } from 'aws-amplify';
import anonymousId from 'anonymous-id';
import { tagInActiveCampaign, trackInAmplitude } from '../../../../utils/sharedUtils';
import { useCurrentAuthUser } from '../hooks/useCurrentAuthUser';

export const ActionsView = () => {
  const [actionValues, setActionValues] = useState([]);
  const [actionPageID, setActionPageID] = useState(0);
  const [enduserPageSubscriptionID, setEnduserPageSubscriptionID] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [artistId, setArtistId] = useState(null);
  const { artist, page = 'join' } = useParams();

  let { userId, email ,firstName, lastName, phone} = useCurrentAuthUser();
  console.log(`current auth user is `, userId,`email: ` ,email, `firstName: `, firstName, `lastName: `, lastName, phone);

  // get the user data for the user -- used for making sure an enduser exists
  // this could be obtained with the rest of the action page data, but we're likely going to move this logic into a centralized place since we'll need to be verifying a user record exists on lots of pages
  const {
    data: enduserData,
    loading: enduserLoading,
    error: enduserError,
    refetch: refetchEnduserData,
  } = useQuery(gql(getEnduser), {
    variables: { id: userId },
  });

  // define mutation for create a new enduser record
  const [
    addEnduser,
    {
      loading: createEnduserLoading,
      data: createEnduserData,
      error: createEnduserError,
    },
  ] = useMutation(gql(createEnduser), {
    update(cache, { data: { addEnduser } }) {
      // const {enduserData} = cache.readQuery({query:gql(getEnduser), input: {id: userId }});
      cache.writeQuery({
        query: gql(getEnduser),
        data: { enduser: addEnduser },
      });
    },
    refetchQueries: [{ query: gql(getEnduser), variables: { id: userId } }],
    awaitRefetchQueries: true,
  });

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
    //set up input variables
    let inputVariables = {
      id: userId,
      email: email,
    }
    let profileName;
    if(firstName){
      inputVariables.firstName = firstName;
      profileName = firstName;
    }
    if(lastName){
      inputVariables.lastName = lastName;
      profileName = profileName ? profileName + lastName : lastName;
    }
    if(profileName){
      inputVariables.profileName = profileName;
    }
    if(phone){
      inputVariables.phone = phone;
    }
    //create new enduser with the input variables
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

    //use the id to figure out which button to track in amplitude
    const clickedAction = actionButtonList.find(item => item.id===id);
    //TODO this needs to be cleaner and in a method somewhere -SG 2021-11-19
    //TODO also, after data migration, we should move all of these to reference serviceAction and not button icon
    let trackedName;

    if(clickedAction.serviceAction==='StarterPackLink'){
      trackedName = 'Starter Pack'
    }
    else if(clickedAction.serviceAction==='JoinLink'){
      trackedName = 'Community'
    }
    else if(clickedAction.serviceAction==='MusicLink'){
      trackedName = 'MusicHub'
    }
    else if(clickedAction.serviceAction==='EmailLink'){
      trackedName = 'Send Email'
    }
    else if(clickedAction.serviceAction === 'ScheduleLink'){
      trackedName = 'Call'
    }
    else if(clickedAction.serviceAction === 'EventBriteLink'){
      trackedName = 'Ticket'
    }
    trackInAmplitude(`${trackedName} Clicked`,anonymousId(),userId,artistId);
    tagInActiveCampaign(`TRG - ${trackedName} Clicked`, userId, artistId);
    console.log(`newSubscription data is ${newCompletedActionRecord}`);
  };

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < actionValues.length; i++) {
      const element = actionValues[i];
      if (element.complete) {
        total += element.points;
      }
    }
    setTotalPoints(total);
  }, [actionValues]);

  useEffect(() => {
    if (actionPageData && actionPageData?.ArtistByRoute?.items?.length > 0) {
      const artist = actionPageData.ArtistByRoute.items[0];
      if(artist){
        setArtistId(artist.id)
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
      const values = [];
      for (let i = 0; i < actionArray.length; i++) {
        const element = actionArray[i];
        // eslint-disable-next-line max-len
        // if this id is in the enduserSubscription records completed action record, mark it as complete... there's gotta be a better way to do this -SG
        const completed =
          completedActions &&
          completedActions.find(record => record.actionID === element.id) !==
            undefined;
        values.push({
          id: element.id,
          complete: completed,
          points: +element.pointValue,
        });
      }
      setActionValues(values);
    }
  }, [actionPageData]);

  useEffect(()=> {
    if(artistId && userId){
      anonymousId();
      trackInAmplitude('Tribal Accelerator Visited',anonymousId(),userId,artistId);
    }
  },[artistId])

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
              actionPageID: actionPageID,
              enduserID: userId,
            },
          },
        });
        const additionalProperties = {
          user_properties: 
          {
            name: firstName || '' + lastName || '',
            email: email,
            phone: phone
          }
        }
        //track new subscriber in amplitude
        trackInAmplitude('StreetTeam Joined',anonymousId(),userId,artistId,additionalProperties);
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
      ?.actionButtons?.items.length === 0
      || actionPageData.ArtistByRoute.items.length ===0 
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
          <ActionPage.Stepper currentStep={2} />
        </Col>
      </Row>
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
        />
      </ActionPage.Body>
      <Row>
        <Col className="p-0">
          <ActionPage.TotalPoints totalPoints={totalPoints} />
        </Col>
      </Row>
    </ActionPage>
  );
};
