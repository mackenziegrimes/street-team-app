import React, { createContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import PropTypes from 'prop-types';
import awsconfig from '../../aws-exports';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { Icon } from '../UI/Icon';
import { PageContainer, PageHeader } from '../Page';
import { FanMagnetButton } from '../UI';
import queryString from 'query-string';
import { useContext } from 'react';
import { SecureProvider } from '.';
import { UserContext } from './SecureViewContext';
import { GenerateMagicLink } from '../Login/GenerateMagicLink';
import { currentLocationDomainUrl, useQueryParams } from '../../utils/sharedUtils';

// here we're copying the constant config (aws-exports.js) because config is read only. -- then updating location.href
var updatedConfig = awsconfig;
// build the current url to be used for oauth redirect (should probably use env variables... but this is quicker right now)
const currentUrl = window.location.href;
// takes the current url root, and adds the join route
const redirectUrl = currentUrl.split('/').slice(0, 3).join('/') + '/login/';

updatedConfig.oauth.redirectSignIn = redirectUrl;
updatedConfig.oauth.redirectSignOut = redirectUrl;
console.log(`redirectUrl`, redirectUrl);
Amplify.configure(updatedConfig);

const Footer = styled.footer({
  height: '50px',
  flexShrink: 0,
});

const StyledButton = styled(FanMagnetButton)`
  padding: 35px 21px;
  margin: 10px 0;

  @media (max-width: 600px) {
    transform: scale(0.9);
  }
`;

const ButtonInnerText = styled.div`
  text-align: left;
  font-family: 'Open Sans';
  font-size: 25px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const StyledPageIcon = styled(PageHeader)`
  font-size: 60px;
  padding: 0;
  margin-bottom: -25px;

  @media (max-width: 600px) {
    font-size: 60px;
    transform: scale(0.9);
    margin-bottom: -25px;
  }
`;

const StyledPageHeader = styled(PageHeader)`
  font-size: 65px;

  @media (max-width: 600px) {
    font-size: 60px;
    transform: scale(0.9);
  }
`;

const OrBlock = styled.div`
  padding: 10px 0;
  text-align: center;
  font-family: 'Open Sans';
  font-size: 24px;
`;

const Terms = styled.div`
  border-top: 1px solid #e6e6e6;
  padding-top: 27px;
  margin-top: 23px;
  text-align: center;

  a {
    color: white;
    font-family: 'Open Sans';
    font-size: 14px;
    opacity: 0.8;
  }
`;

export const SecureViewWrapper = ({ userRole, children }) => {
  let history = useHistory();
  let location = useLocation();
  const [authState, setAuthState] = useState();
  const [userId, setUserId] = useState();
  const [redirectUrl, setRedirectUrl] = useState();
  const [error, setError] = useState();

  const context = useContext(UserContext);
  console.log('hii', context);
  // const authState = context?.authState;
  // const userId = context?.userId;

  const [showSignupForm, setShowSignupForm] = useState(false);

  const path = window.location.pathname;
  if (path !== '/login/') {
    // update the most recent page route so that when we return from login, we can redirect
    window.localStorage.setItem('route', path);
  }
  const searchParams=queryString.parse(location.search);
  if(searchParams.str_cid){
    //store the stripe customer id to be passed in after login to the create artist API
    window.localStorage.setItem('str_cid',searchParams.str_cid);
  }

  console.log('hello from secure wrapper');

  const signUpProps = {
    headerText:
      userRole === 'admin'
        ? 'Create a Fan Magnet sequence'
        : 'Continue with your email',
    submitButtonText: 'Complete Registration',
    slot: 'sign-up',
    usernameAlias: 'email',
    formFields: [
      {
        type: 'name',
        label: userRole === 'admin' ? 'Artist Name' : 'Name',
        placeholder:
          userRole === 'admin' ? 'Enter your artist name' : 'Enter your name',
        required: true,
      },
      { type: 'email' },
      { type: 'password' },
      { type: 'phone_number' },
    ],
  };

  const federated = {
    facebookAppId: '1889301381171290', // login here https://developers.facebook.com/apps/
  };

  const queryParams  = useQueryParams();
  const location_id = queryParams.get('location_id')
  console.log(`location_id is now`, location_id);

  useEffect(async ()=> {
  //if location_id is in the parameters, try getting a magic link
  if(context.authState !== AuthState.SignedIn ){
        console.log(`no one is signed in`);
        if(location_id){
          const newLink = await GenerateMagicLink(location_id);
          if(newLink){
           setRedirectUrl(newLink)
          }
        }
    }
  },[]);

  useEffect(()=>{
    if(redirectUrl){
      const path = redirectUrl.split(currentLocationDomainUrl)[1];
      history.push(path)
    };
  },[redirectUrl])

  return context.authState === AuthState.SignedIn && context.userId ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: '#171717',
      }}
    >
      <div style={{ flex: '1 0 auto' }}>{children}</div>
      <Footer>
        <AmplifySignOut />
      </Footer>
    </div>
  ) : (
    <PageContainer pageContentPadding="50px 95px">
      {!showSignupForm && (
        <React.Fragment>
          <StyledPageIcon>{userRole === 'admin' ? null : `🎁`} </StyledPageIcon>
          <StyledPageHeader>
            {userRole === 'admin'
              ? `Login to your account`
              : `Get Your Free Starter Pack`}
          </StyledPageHeader>
          <StyledButton
            active
            activeBgColor="transparent linear-gradient(90deg, #4363A7 0%, #345BAC 88%, #3357A5 100%) 0% 0% no-repeat padding-box;"
            activeColor="white"
            handleClick={() => Auth.federatedSignIn({ provider: 'Facebook' })}
          >
            <span>
              <Icon color="white" name="FaFacebook" size={70} />
            </span>
            <div>
              <ButtonInnerText>Continue with Facebook</ButtonInnerText>
            </div>
          </StyledButton>
          <OrBlock>or</OrBlock>
          <StyledButton
            active
            activeColor="white"
            activeBgColor="transparent linear-gradient(90deg, #404040 0%, #393838 92%, #363636 100%) 0% 0% no-repeat padding-box;"
            handleClick={() => setShowSignupForm(true)}
          >
            <span>
              <Icon color="white" name="FaEnvelope" size={70} />
            </span>
            <div>
              <ButtonInnerText>Continue With Email</ButtonInnerText>
            </div>
          </StyledButton>
          <Terms>
            <a href="https://www.modern-musician.com/terms" target="_blank">
              {userRole === 'admin'
                ? `By using this platform, I acknowledge that I have reviewed and
              agreed to the Terms of Use and Privacy Policy`
                : `By using this platform, I acknowledge that I have reviewed and
              agreed to the Terms of Use and Privacy Policy.`}
            </a>
          </Terms>
        </React.Fragment>
      )}
      {showSignupForm && (
        <React.Fragment>
          <AmplifyAuthenticator initialAuthState="signup">
            <AmplifySignUp {...signUpProps} />
          </AmplifyAuthenticator>
          <StyledButton
            active
            activeColor="white"
            activeBgColor="transparent linear-gradient(90deg, #404040 0%, #393838 92%, #363636 100%) 0% 0% no-repeat padding-box;"
            handleClick={() => setShowSignupForm(false)}
          >
            <span>
              <Icon color="white" name="FaUndo" size={70} />
            </span>
            <div>
              <ButtonInnerText>Go Back</ButtonInnerText>
            </div>
          </StyledButton>
        </React.Fragment>
      )}
    </PageContainer>
  );
};

SecureViewWrapper.propTypes = {
  userRole: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
