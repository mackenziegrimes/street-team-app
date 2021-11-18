import { useState } from 'react';
import { Auth } from 'aws-amplify';

export const useCurrentAuthUser = () => {
  const [userId, setUserId] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  
  Auth.currentAuthenticatedUser({
    bypassCache: false,
  })
    .then(user => {
      console.log(`current AuthenticatedUser response`,user)
      setUserId(user.username);
      setFirstName(user?.attributes?.firstName || user?.attributes?.given_name || user?.attributes?.name);
      setLastName(user?.attributes?.lastName || user?.attributes?.family_name);
      setEmail(user?.attributes?.email);
      setPhone(user?.attributes?.phone_number);
    })
    .catch(err => console.error(err));

  return {
    userId,
    firstName,
    lastName,
    email,
    phone
  };
};
