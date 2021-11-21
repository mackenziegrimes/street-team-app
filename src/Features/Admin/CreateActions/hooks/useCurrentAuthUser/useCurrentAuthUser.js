import { useState } from 'react';
import { Auth } from 'aws-amplify';

export const useCurrentAuthUser = () => {
  const [artistUserDetails, setArtistUserDetails] = useState();
  Auth.currentAuthenticatedUser({
    bypassCache: false,
  })
    .then(user => {
      console.log(`current AuthenticatedUser response`,user)
      if(!artistUserDetails){
        setArtistUserDetails({userId: user.username, artistName: user?.attributes?.name});
      }
    })
    .catch(err => console.error(err));

  return {
    userId: artistUserDetails?.userId,
    artistName: artistUserDetails?.artistName,
  };
};
