import { useContext, useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { SecureProvider } from '../../../../../Components/SecureViewWrapper';
import { getAllSubscribersFromArtistUser } from '../../../../Admin/Audience/queries';
import { UserContext } from '../../../../../Components/SecureViewWrapper/SecureViewContext';

export const useCurrentAuthUser = () => {
  // const [user, setUser] = useState();

  const context = useContext(UserContext);
  console.log(`hii`, context);

  // useEffect(()=>{
  //   console.log(`context userid is`, context.userId)
  //   if(context?.userId){
  //     setUser(context.userId);
  //   }
  // },[context])

  // Auth.currentAuthenticatedUser({
  //   bypassCache: false,
  // })
  //   .then(userResponse => {
  //     if (!user) {
  //       console.log(`current AuthenticatedUser response`, userResponse);
  //       window.localStorage.setItem('user', userResponse.username);
  //       setUser(userResponse);
  //     }
  //   })
  //   .catch(err => console.error(err));

  console.log(`current auth user is returning`, context.userId);
  const user = context.userId;
  console.log(`user is `, user);

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
