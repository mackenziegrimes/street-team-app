import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { GenerateMagicLink } from '../../../../../Components/Login/GenerateMagicLink';

export const useCurrentAuthUser = () => {
  const [artistUserDetails, setArtistUserDetails] = useState();
  Auth.currentAuthenticatedUser({
    bypassCache: false,
  })
    .then(user => {
      console.log(`current AuthenticatedUser response`,user)
      if(!artistUserDetails){
        setArtistUserDetails({userId: user.username, artistName: user?.attributes?.name, idToken: user?.signInUserSession?.idToken?.jwtToken});
      }
    })
    .catch(err => console.error(err));

  return {
    userId: artistUserDetails?.userId,
    artistName: artistUserDetails?.artistName,
    idToken: artistUserDetails?.idToken,
  };
};
