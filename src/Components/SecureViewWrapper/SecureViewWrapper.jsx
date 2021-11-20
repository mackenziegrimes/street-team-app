import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import awsconfig from '../../aws-exports';
import { useHistory } from 'react-router-dom';
import { Icon } from '../UI/Icon';
import { PageContainer, PageHeader } from '../Page';
import { FanMagnetButton } from '../UI';

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

function checkUser() {
  Auth.currentAuthenticatedUser()
    .then(user => console.log({ user }))
    .catch(err => console.log(err));
}

function signOut() {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

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

const StyledPageIcon = styled(PageHeader)`
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
  const [authState, setAuthState] = useState();
  const [userId, setUserId] = useState();
  const [showSignupForm, setShowSignupForm] = useState(false);

  const path = window.location.pathname;
  if (path !== '/login/') {
    // update the most recent page route so that when we return from login, we can redirect
    window.localStorage.setItem('route', path);
  }

  console.log('hello from secure wrapper');

  // set the initial authState if the current user is already authenticated (in the case of oauth redirect, it will be)
  if (authState === undefined) {
    try{
    Auth.currentAuthenticatedUser().then(authData => {
      setAuthState(AuthState.SignedIn);
      setUserId(authData);
    }).catch(error => console.log(`2 -- error in signing in current auth user`, error));
  }
  catch(err){
    console.error(`1 -- unable to login current auth user`,err)
  }
  }

  // use this useEffect to changes state
  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUserId(authData);
    });
  }, []);

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

  console.log(`authState`, authState);
  console.log(`userId`, userId);
  return authState === AuthState.SignedIn && userId ? (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: '1 0 auto' }}>{children}</div>
      <Footer>
        <AmplifySignOut />
        {/* <Button onClick={checkUser}>Check User</Button> */}
        {/* <Button onClick={signOut}>Sign Out</Button> */}
      </Footer>
    </div>
  ) : (
    <PageContainer pageContentPadding="50px 95px">
      {!showSignupForm && (
        <React.Fragment>
          <StyledPageIcon>{userRole ==='admin'? null : `🎁`}  </StyledPageIcon>
          <StyledPageHeader>{userRole ==='admin'? `Login to your account` : `Get Your Free Starter Pack`}</StyledPageHeader>
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
            {userRole ==='admin'?  `By using this platform, I acknowledge that I have reviewed and
              agreed to the Terms of Use and Privacy Policy`
              :
              `By using this platform, I acknowledge that I have reviewed and
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
