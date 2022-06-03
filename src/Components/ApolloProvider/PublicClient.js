import Auth from '@aws-amplify/auth';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { AUTH_TYPE, createAuthLink } from 'aws-appsync-auth-link';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import awsConfig from '../../aws-exports';

const url = awsConfig.aws_appsync_graphqlEndpoint;
const region = awsConfig.aws_appsync_region;
const auth = {
  type: AUTH_TYPE.AWS_IAM,
  credentials: () => Auth.currentCredentials(),
};

const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createHttpLink({ uri: url }),
]);

export const PublicClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});