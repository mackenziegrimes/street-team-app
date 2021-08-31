import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';
import AuthenticatedApp from './AuthenticatedApp';
Amplify.configure(awsconfig);

const AuthStateApp = () => {
    const [authState, setAuthState] = React.useState();
    const [userId, setUserId] = React.useState();
    
    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUserId(authData)
        });
    }, []);

  return authState === AuthState.SignedIn && userId ? (
      <div className="App">
          <AuthenticatedApp />
          <AmplifySignOut />
      </div>
    ) : (
      <AmplifyAuthenticator initialAuthState="signup">
        <AmplifySignUp
        headerText="How can we reach you if you win?"
        submitButtonText="Complete Registration"
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          // { type: "username" },
          { type: "name",
            label: "Name",
            placeholder: "Enter your name",
            required: true,
          },
          { type: "email" },
          { type: "password" },
          { type: "phone_number" }
        ]}
        />
      </AmplifyAuthenticator>
  );
}

export default AuthStateApp; 