import { getBackendApiUrl } from "../../../../utils/sharedUtils";

export const handleDiscordAuth = async (authCode) => {
    console.log(`discord auth code is `, authCode);
    //handle the auth code from the discord redirect by calling our backend api
    //1. call our backend api with the auth code to get our access token
    //2. store that access token in the cookies
    if(authCode){
    const postUrl = getBackendApiUrl() + `/discord-auth`;
    try{
      const response = await fetch(postUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({auth_code: authCode}),
      });
      const responseJson = await response.json();
      const {accessToken,refreshToken} = responseJson;
      console.log(`discord access token is ${accessToken}`);
      console.log(`discord refresh token is ${refreshToken}`);
      //2. store that access token in the cookies
      //this is useful because we don't necessarily have the enduserId at this point (the enduser might not be logged in to SteetTeam), so we're going to stash it for sending to our backend later
      if(refreshToken){
        console.log('yes! we have value');
        window.localStorage.setItem('discordAccessToken', accessToken);
        window.localStorage.setItem('discordRefreshToken', refreshToken);
      } else {
        console.log('did not receive the discord refresh token')
      }
      }
    catch(err){
        console.error(`getting discord auth failed due to the following error:`);
        console.error(err);
    }
    }
    else{
      console.log('handleDiscordAuth called with no authCode parameter')
    }
    return 'done';
}

export const saveDiscordAuth = async (authToken, enduserId) => {
    console.log(`saving discord auth token:`,authToken, `for enduserId`,enduserId);
    const postUrl = getBackendApiUrl() + `/discord-enduser-integration`;
    try{
        const response = await fetch(postUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({service: "discord", token: authToken, enduserId: enduserId}),
        });
        const responseJson = await response.json();
        const accessToken = responseJson.accessToken;
        console.log(responseJson);
    }
    catch(err){
          console.error(`getting discord auth failed due to the following error:`);
          console.error(err);
    }
    return 'done';
}