import { useState } from 'react';
import { Auth } from 'aws-amplify';

export const useCurrentAuthUser = () => {
  const [user, setUser] = useState();

  Auth.currentAuthenticatedUser({
    bypassCache: false,
  })
    .then(userResponse => {
      if (!user) {
        console.log(`current AuthenticatedUser response`, userResponse);
        setUser(userResponse);
      }
    })
    .catch(err => console.error(err));

  return {
    userId: user?.username,
    firstName:
      user?.attributes?.firstName ||
      user?.attributes?.given_name ||
      user?.attributes?.name,
    lastName: user?.attributes?.lastName || user?.attributes?.family_name,
    email: user?.attributes?.email,
    phone: user?.attributes?.phone_number,
  };
};
