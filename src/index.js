import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppWithAuth from './AppWithAuth'

// NOTE: the default AWSAppSyncClient uses an outdated apollo-client dependancy
//  we're building a custom client instead - see this article https://medium.com/@guillac124/create-your-custom-apollo-client-for-aws-appsync-to-use-hooks-2d5cbce29db5

import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloLink } from 'apollo-link';
import { AUTH_TYPE, createAuthLink } from 'aws-appsync-auth-link';
// import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
import { createHttpLink } from 'apollo-link-http';
import aws_config from './aws-exports';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Amplify } from '@aws-amplify/core';
import { useApolloClient } from './use-apollo-client';


// import { InMemoryCache } from 'apollo-cache-inmemory';
import Auth from '@aws-amplify/auth';
import AWS from 'aws-sdk/global';

// import { getHeadersForIamAuth } from './get-headers-for-iam-auth';

const url = aws_config.aws_appsync_graphqlEndpoint;
const region = aws_config.aws_appsync_region;
// const auth = {
//   type: aws_config.aws_appsync_authenticationType,
//   // apiKey: aws_config.aws_appsync_apiKey,
//   // type: AUTH_TYPE.AWS_IAM,
//   credentials: () => Auth.currentCredentials(),
//   // credentials: AWS.config.credentials,
// };
const auth = {
  type: aws_config.aws_appsync_authenticationType,
  jwtToken: async () => {
    try {
      return (await Auth.currentSession()).getIdToken().getJwtToken();
    } catch (e) {
      console.error(e);
      return ''; // In case you don't get the token, hopefully that is a public api and that should work with the API Key alone.
    }
  },
};
const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createHttpLink({ uri: url }),
]);
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  // complexObjectsCredentials: () => Auth.currentCredentials(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// // using custom apollo client like @patspam on this post -- https://github.com/awslabs/aws-mobile-appsync-sdk-js/issues/531
// Amplify.configure(
//   // aws_config);
//   {
//     Auth: {
//       type: AUTH_TYPE.AWS_IAM,
//       credentials: () => Auth.currentCredentials(),
//     },
//     // Auth: {
//     //   mandatorySignIn: false,
//     //   region: region,
//     //   userPoolId: aws_config.aws_user_pools_id,
//     //   identityPoolId: aws_config.aws_cognito_identity_pool_id,
//     //   userPoolWebClientId: aws_config.aws_user_pools_web_client_id,
//     // },
//   }
// );
// const appSyncConfig = { region: region, url: url };
// const Index = () => {
//   const client = useApolloClient(appSyncConfig);
//   return (
//     <ApolloProvider client={client}>
//       <App />
//     </ApolloProvider>
//   );
// };
// export default Index;

//tried implementing something like this https://stackoverflow.com/questions/54273144/how-do-i-configure-amplify-to-to-use-multiple-appsync-endpoints
// export default function Index() {
//   const [client, setClient] = useState(null);

//   useEffect(() => {
//     checkAuth();
//   }, []);

//   function checkAuth() {
//     Auth.currentSession()
//       .then(session => {
//         const token = session.getIdToken();
//         const jwtToken = token.getJwtToken();
//         if (typeof jwtToken == 'string') {
//           const authClientConfig = {
//             url: aws_config.aws_appsync_graphqlEndpoint,
//             region: aws_config.aws_appsync_region,
//             disableOffline: true,
//             auth: {
//               type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
//               jwtToken: jwtToken,
//             },
//           };
//           const link = ApolloLink.from([
//             createAuthLink(authClientConfig),
//             createSubscriptionHandshakeLink(authClientConfig),
//           ]);
//           const authClient = new ApolloClient({
//             link,
//             cache: new InMemoryCache({ addTypename: false }),
//           });
//           setClient(authClient);
//         } else {
//           throw 'error';
//         }
//       })
//       .catch(e => {
//         console.log(e);
//         const config = {
//           url: aws_config.aws_appsync_graphqlEndpoint,
//           region: aws_config.aws_appsync_region,
//           disableOffline: true,
//           auth: {
//             type: AUTH_TYPE.AUTH_TYPE.AWS_IAM,
//             credentials: () => Auth.currentCredentials(),
//           },
//         };
//         const link = ApolloLink.from([
//           createAuthLink(config),
//           createSubscriptionHandshakeLink(config),
//         ]);
//         const authClient = new ApolloClient({
//           link,
//           cache: new InMemoryCache({ addTypename: false }),
//         });
//         setClient(authClient);
//       });
//   }

//   if (!client) {
//     return 'Loading...';
//   }

//   return (
//     <ApolloProvider client={client}>
//       <App />
//     </ApolloProvider>
//   );
// }
