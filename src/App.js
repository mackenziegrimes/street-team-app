import React from 'react';
import { Routes } from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { FanMagnetProvider } from './Context/FanMagnetContext';

// NOTE: the default AWSAppSyncClient uses an outdated apollo-client dependency
// we're building a custom client instead
// - see this article https://medium.com/@guillac124/create-your-custom-apollo-client-for-aws-appsync-to-use-hooks-2d5cbce29db5

import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from './Components/ThemeProvider';
import { SecureClient } from './Components/ApolloProvider';

function App() {
  return (
    <ApolloProvider client={SecureClient}>
      <ThemeProvider>
          <Routes />
      </ThemeProvider>
    </ApolloProvider>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
