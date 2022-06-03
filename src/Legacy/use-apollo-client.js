import { ApolloClient, HttpLink, InMemoryCache, concat } from '@apollo/client';
import React from 'react';

import {
  addListeners,
  createAuthLink,
  removeListeners,
} from './amplify-auth-link';

const createApolloClient = appSyncConfig =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(
      createAuthLink(appSyncConfig),
      new HttpLink({ uri: appSyncConfig.url })
    ),
  });

export const useApolloClient = appSyncConfig => {
  const [client] = React.useState(() => createApolloClient(appSyncConfig));
  React.useEffect(() => {
    const handler = addListeners();
    return () => removeListeners(handler);
  });
  return client;
};
