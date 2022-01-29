import { getBackendApiUrl } from "../../../../utils/sharedUtils";

export const handleZoomAuth = async (authCode) => {
    console.log(`auth code is `, authCode);
    //handle the auth code from the zoom redirect by calling our backend api
    //1. call our backend api with the auth code to get our access token
    //2. store that access token in the cookies
    if(authCode){
    const postUrl = getBackendApiUrl() + `/zoom-auth`;
    try{
      const response = await fetch(postUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({auth_code: authCode}),
      });
      const responseJson = await response.json();
      const {accessToken,refreshToken} = responseJson;
      console.log(`zoom access token is ${accessToken}`);
      console.log(`zoom refresh token is ${refreshToken}`);
      //2. store that access token in the cookies
      //this is useful because we don't necessarily have the enduserId at this point (the enduser might not be logged in to SteetTeam), so we're going to stash it for sending to our backend later
      if(refreshToken){
        console.log('yes! we have value');
        window.localStorage.setItem('zoomAccessToken', accessToken);
        window.localStorage.setItem('zoomRefreshToken', refreshToken);
      }
      }
    catch(err){
        console.error(`getting zoom auth failed due to the following error:`);
        console.error(err);
    }
    }
    else{
      console.log('handleZoomAuth called with no authCode parameter')
    }
    return 'done';
}

export const saveZoomAuth = async (authToken, enduserId) => {
    console.log(`saving zoom auth token:`,authToken, `for enduserId`,enduserId);
    const postUrl = getBackendApiUrl() + `/zoom-enduser-integration`;
    try{
        const response = await fetch(postUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({service: "zoom", token: authToken, enduserId: enduserId}),
        });
        const responseJson = await response.json();
        const accessToken = responseJson.accessToken;
        console.log(responseJson);
    }
    catch(err){
          console.error(`getting zoom auth failed due to the following error:`);
          console.error(err);
    }
    return 'done';
}