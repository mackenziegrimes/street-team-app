// landing page is the same as an action page, except that there's no login required
// use case is primarily for a landing page which would lead a user to an ActionPage
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { gql, useQuery,useLazyQuery } from '@apollo/react-hooks';
import { Container, Row, Col } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import { AuthState } from '@aws-amplify/ui-components';
import { useParams } from 'react-router-dom';
import { getActionPageByArtistAndPageRoute } from '../../../../graphql-custom/queries';
import {getActionPagesByArtistRoute} from '../graphql/getActionPagesByArtist'
import { Icon, FanMagnetButton, Spinner } from '../../../../Components/UI';
import { PublicClient, SecureClient } from    '../../../../Components/ApolloProvider';
import { PlayWidget } from '../../../../Components/UI/Integrations/SoundCloud/PlayWidget';
import { FanMagnetStep2 } from './FanMagnetStep2';
import {useHistory} from 'react-router-dom';
import {
  PageContainer,
  PageHeader,
  StyledPageContainer,
} from '../../../../Components/Page';
import anonymousId from 'anonymous-id';
import { trackInAmplitude } from '../../../../utils/sharedUtils';
import { isLocal } from '../../../../utils/sharedUtils';
import { StyledPageIcon } from '../../../../Components/SecureViewWrapper/SecureViewWrapper';

const PlayerContainer = styled.div`
  padding: 20px 0;
`;

// landing page is essentially an action page that is public, so there are no points and we're using a different Apollo client (no auth)
export const LandingPage = () => {
  const [authState, setAuthState] = useState();
  const [userId, setUserId] = useState();
  const [artistId, setArtistId] = useState();
  const [dynamicClient, setDynamicClient] = useState();
  const [dataFetched, setDataFetched] = useState(false);
  const [soundCloudURL, setSoundCloudURL] = useState('');
  const [continueButtonDetails, setContineButtonDetails] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [isButtonActive, setIsButtonActive] = useState(false);
  let history = useHistory();

  const continueToNextStep = () => {
    //pull the root path from the location and push to the /secure path for that artist
    const path=window.location.pathname;
    const currentPathArray=window.location.pathname.split("/").filter(x => x!=="");
    const newRoute = ['/secure'].concat(currentPathArray[0]).join('/');
    history.push(newRoute);
  }

  // here we're defining a default page route as "join" so if no pageRoute is provided, we'll use that
  const { artist, page = 'join' } = useParams();
  // we'll call this query after we set the auth
  const [getPageData , { data: actionPageData, loading: loading, refetch: refetchPageData }] = useLazyQuery(
    gql(getActionPagesByArtistRoute),{
      variables: { artistRoute: artist, pageRoute: page },
      client: dynamicClient
    }
  );

  useEffect(() => {
    console.log(`dynamicClient`,dynamicClient);
    //todo this logic should be centralized in the PublicClient auth setup. but for now this will work for this one page
    if (!dynamicClient) {
        // set the Apollo client based on whether or not the user is logged in, then fetch the data
        Auth.currentAuthenticatedUser().then(authData => {
          console.log(`setting secure client`)
          setDynamicClient(SecureClient)
        }, 
        reason => {
          console.log(`no user logged in, getting public data`)
          setDynamicClient(PublicClient)
        }).finally(output => {
          getPageData();
          setDataFetched(true);
        }
        );
    }
    console.log(`actionPageData`,actionPageData);
    if (actionPageData) {
      // here we re-route the user if this artist doesn't have a 'join' route defined with a SoundCloudEmbed serviceAction... eventually we'll want to use page types here probably not just routes
      const landingPageData = actionPageData.ArtistByRoute.items[0]?.actionPages?.items?.find(item => item.pageRoute==='join');
      console.log(`landingPageData`,landingPageData);
      if(!landingPageData){
        console.log(`going to secure login page`)
        continueToNextStep()
      }
      const soundCloudAction =
        landingPageData?.actionButtons.items.find(
          item => item.serviceAction === 'SoundCloudEmbed'
        );
      if (soundCloudAction) {
        setSoundCloudURL(soundCloudAction.targetURL);
      }
      else{
        console.log(`no soundcloud url going to secure login page`)
        continueToNextStep()
      }
      const continueButton =
        landingPageData?.actionButtons.items.find(
          item => item.serviceAction === 'ContinueButton'
        );
      if (continueButton) {
        setContineButtonDetails(continueButton);
      }
      const id = actionPageData.ArtistByRoute.items[0]?.id
      if(id && !artistId){
        //if we don't have the id yet, set it
        console.log('setting artist ID to ',id);
        setArtistId(id);
      }

    }
  }, [actionPageData]);

  useEffect(() => {
    const timer = setTimeout(() => setIsButtonActive(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(()=> {
    if(artistId){
      //sets an anonymousId in the cookies (to be use for tracking purposes)
      anonymousId()
      console.log(anonymousId())
      //track 
      trackInAmplitude('Fan Magnet Clicked',anonymousId(),null,artistId);
    }
  },[artistId])

  if (loading || !dataFetched)
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
  // if the actionPageInfo exists, it should be in this format (assuming a single artist route and page route exist)

  if (dataFetched && (!actionPageData || actionPageData?.ArtistByRoute?.items?.length === 0)) {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1>No Actions</h1>
          </Col>
        </Row>
      </Container>
    );
  }

  const actionPageInfo = actionPageData.ArtistByRoute.items[0].actionPages.items[0];

  const LandingIconHeader = styled(StyledPageIcon)`
  margin-bottom: -15px;
  `

  const ClaimFreeGiftButton = styled(FanMagnetButton)`
  margin: 30px 0 20px 0;
  font-size: 35px;
  font-weight: 500;
  padding: 25px 17px;
  width: auto;
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    font-size: 20px;
  }

  div {
    width: auto;
  }
  
  span {
    font-size: 55px;
    margin-right: 25px;
    display: flex;

    @media (max-width: 600px) {
      margin-right: 10px;
      font-size: 45px;
    }
  }`

  return (
    <PageContainer>
      {currentStep === 1 && (
        <React.Fragment>
          {/* <PageHeader>{actionPageInfo.heading}</PageHeader> */}
          {/* TODO at some point we'll want this to be configurable */}
          <LandingIconHeader> 🎁 </LandingIconHeader>
          <PageHeader>Listen for 30 seconds to unlock a free gift!</PageHeader>
          <PlayerContainer>
            <PlayWidget sourceUrl={soundCloudURL} />
          </PlayerContainer>
          <ClaimFreeGiftButton
            active={isButtonActive}
            activeBgColor={continueButtonDetails.backgroundColor || '#f5d772'}
            activeColor={continueButtonDetails.textColor || '#202021'}
            inactiveBgColor="#544c2e"
            margin="60px 0 45px"
            handleClick={() => {
              setCurrentStep(2)
              trackInAmplitude('Fan Magnet Listened',anonymousId(),null,artistId);
            }}
          >
            <span>
              <Icon
                color="#202021"
                name={continueButtonDetails.buttonIcon || 'Gift'}
                size={50}
              />
            </span>
            <div>
              {continueButtonDetails.preActionText || 'CLAIM YOUR FREE GIFT'}
            </div>
          </ClaimFreeGiftButton>
        </React.Fragment>
      )}
      {currentStep === 2 && <FanMagnetStep2 artistId={artistId}/>}
    </PageContainer>
  );
};
