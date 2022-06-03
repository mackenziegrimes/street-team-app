import React from 'react';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';

function NotFoundPage({message}) {
  return (
    <div>
      <p>Sorry we couldn't find this page...</p>
      {message} && <p>{message}</p>
     {/*
     <AmplifySignOut
     */}
     <img alt="pika is sad we couldn't find the page" 
          src='https://www.memecreator.org/static/images/templates/804179.jpg'
          height={100}
          />
    </div>
  );
}

export default NotFoundPage;
