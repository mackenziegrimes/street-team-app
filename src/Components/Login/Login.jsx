import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import awsconfig from '../../aws-exports';
import { useParams } from 'react-router-dom';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { handleSpotifyAuth } from '../UI/Integrations/Spotify/SpotifyAuth';
import { handleZoomAuth } from '../UI/Integrations/Zoom/ZoomAuth';

Amplify.configure(awsconfig);

const Footer = styled.footer({
  height: '50px',
  flexShrink: 0,
});

export const Login = () => {
  const { userRole, service } = useParams();
  const [authState, setAuthState] = useState();
  const [userId, setUserId] = useState();
  const [route, setRoute] = useState();

  const notArtist = userRole !== 'artist';
  const referrerRoute = '/test/me/out';

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: '/' } };

  console.log(location.state);
  console.log(history);

  const setRouteFromStorage = () => {
    const previousRoute = window.localStorage.getItem('route') || "not-found";
    console.log(`redirecting to: `, previousRoute);
    setRoute(previousRoute);
  }
  
  useEffect(() => {
    if(service?.includes('spotify')){
      //spotify redirect handling
      // 'URLSearchParams(window.location.search)' will get url string after the '?' & .get() will get the code value from the url
      const code = new URLSearchParams(window.location.search).get('code');
      console.log(`code is ${code}`)
      const spotifyResponse = handleSpotifyAuth(code).then(response => {
        //after we've handled the spotify auth, then we can set the route and redirect
        setRouteFromStorage();
      });
    } else if (service?.includes('zoom')) {
      //zoom redirect handling
      // 'URLSearchParams(window.location.search)' will get url string after the '?' & .get() will get the code value from the url
      const code = new URLSearchParams(window.location.search).get('code');
      console.log(`code is ${code}`);
      const zoomResponse = handleZoomAuth(code,userId).then(response => {
        console.log('zoomResponse', response);
        //after we've handled the Zoom auth, then we can set the route and redirect
        setRouteFromStorage();
      });
    }
    else{
      if(!route){
      setRouteFromStorage();
      }
    }

  }, [service]);

  //get the web referrer url
  var referringUrl = document.referrer;
  console.log(`referring url is : ${referringUrl}`);
  console.log(`referring service is ${service}`);

  if (route) {
    //once this route value is set, we send redirect to the appropraite route
    history.push(route); // redirect to the appropriate page
  }

  const loginProps = {
    headerText: notArtist
      ? 'How can we reach you if you win?'
      : 'Create a Fan Action sequence',
    submitButtonText: 'Complete Registration',
    slot: 'sign-up',
    usernameAlias: 'email',
    formFields: [
      {
        type: 'name',
        label: notArtist ? 'Name' : 'Artist Name',
        placeholder: notArtist ? 'Enter your name' : 'Enter your artist name',
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

  /// /secure/Artist/page - > not logged in

  return service ? <div> loading </div> : <div> page not found </div>;
};
