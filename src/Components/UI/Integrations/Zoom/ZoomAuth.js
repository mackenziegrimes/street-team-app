import { getBackendApiUrl } from "../../../../utils/sharedUtils";
import { useCurrentAuthUser } from "../../../../Features/Admin/CreateActions/hooks/useCurrentAuthUser";

export const handleZoomAuth = async (authCode,userId) => {
  
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
      console.log('responseJson',responseJson)
      const {accessToken,refreshToken,expiresIn} = responseJson;
      console.log(`zoom access token is ${accessToken}`);
      console.log(`zoom refresh token is ${refreshToken}`);

      if(refreshToken){
        console.log('yes! we have value');
        window.localStorage.setItem('zoomAccessToken', accessToken);
        window.localStorage.setItem('zoomRefreshToken', refreshToken);
      }
      const responseAuth = await saveZoomAuth(accessToken, refreshToken, expiresIn, userId)
      console.log('zoom',responseAuth);
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

export const saveZoomAuth = async (accessToken, refreshToken, expiresIn, artistId) => {
    console.log(`saving zoom integration for artistId`,artistId);
    const postUrl = getBackendApiUrl() + `/zoom-artist-integration`;
    try{
        const response = await fetch(postUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service: 'zoom',
            accessToken: accessToken,
            refreshToken: refreshToken,
            expiresIn: expiresIn,
            artistId: artistId,
          }),
        });
        const responseJson = await response.json();
        // const accessToken = responseJson.accessToken;
        console.log(responseJson);
    }
    catch(err){
          console.error(`getting zoom auth failed due to the following error:`);
          console.error(err);
    }
    return 'done';
}