// import { ApolloLink } from '@apollo/client';
// import { setContext } from '@apollo/link-context';
// import { onError } from '@apollo/link-error';
// import Auth from '@aws-amplify/auth';
// import { Hub } from '@aws-amplify/core';
// import {
//   AUTH_TYPE,
//   createAuthLink as awsCreateAuthLink,
// } from 'aws-appsync-auth-link';

// // To keep things simple, only support a single instance.
// let amplifyAuthLink = null;
// let region;
// let url;

// // Create an ApolloLink that uses IAM/Cognito based on sign-in state.
// // Uses a cached AuthLink created by aws-appsync-auth-link under the covers.
// export const createAuthLink = appSyncConfig => {
//   region = appSyncConfig.region;
//   url = appSyncConfig.url;
//   return cachedAmplifyAuthLink.concat(
//     new ApolloLink((operation, forward) =>
//       operation.getContext().amplifyAuthLink.request(operation, forward)
//     ),
//     resetToken
//   );
// };

// // Create an AWS AuthLink that uses Cognito, suitable for signed-in users.
// const createCognitoAuthLink = session =>
//   awsCreateAuthLink({
//     auth: {
//       jwtToken: session.getIdToken().getJwtToken(),
//       type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
//     },
//     region,
//     url,
//   });

// // Create an AWS AuthLink that uses IAM, suitable for non signed-in users.
// const createIamAuthLink = () =>
//   awsCreateAuthLink({
//     auth: {
//       credentials: () => Auth.currentCredentials(),
//       type: AUTH_TYPE.AWS_IAM,
//     },
//     region,
//     url,
//   });

// // An ApolloLink that uses context to cache the amplifyAuthLink instance.
// const cachedAmplifyAuthLink = setContext(() => {
//   if (amplifyAuthLink) {
//     return { amplifyAuthLink };
//   }

//   // Asynchronously initialise and cache amplifyAuthLink.
//   return Auth.currentSession()
//     .then(session => {
//       amplifyAuthLink = createCognitoAuthLink(session);
//       return { amplifyAuthLink };
//     })
//     .catch(error => {
//       // Amplify throws when not signed in.
//       amplifyAuthLink = createIamAuthLink();
//       return { amplifyAuthLink };
//     });
// });

// // An ApolloLink that reverrts to using IAM when 401 is encountered.
// // TODO: Decide if this is desirable.
// const resetToken = onError(({ networkError }) => {
//   if (networkError?.name == 'ServerError' && networkError?.statusCode == 401) {
//     amplifyAuthLink = createIamAuthLink();
//   }
// });

// // Add Hub auth listeners, to detect sign-in/out.
// export const addListeners = () => {
//   const handleAuthEvents = ({ payload }) => {
//     switch (payload.event) {
//       case 'signIn':
//         amplifyAuthLink = createCognitoAuthLink(payload.data.signInUserSession);
//         break;
//       case 'signOut':
//         amplifyAuthLink = createIamAuthLink();
//         break;
//       case 'configured':
//       case 'signIn_failure':
//       case 'signUp':
//       default:
//         break;
//     }
//   };
//   Hub.listen('auth', handleAuthEvents);
//   return handleAuthEvents;
// };

// // Remove Hub auth listeners.
// export const removeListeners = handler => Hub.remove('auth', handler);
