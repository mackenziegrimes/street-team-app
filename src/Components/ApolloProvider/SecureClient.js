import Auth from '@aws-amplify/auth';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { createAuthLink } from 'aws-appsync-auth-link';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import awsConfig from '../../aws-exports';

const url = awsConfig.aws_appsync_graphqlEndpoint;
const region = awsConfig.aws_appsync_region;
const auth = {
  type: awsConfig.aws_appsync_authenticationType,
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

export const SecureClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
