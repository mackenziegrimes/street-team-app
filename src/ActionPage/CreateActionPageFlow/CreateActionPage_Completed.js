import React, { Fragment, useState, useEffect } from 'react';

import Background from '../../Components/Background';
import CreateActionPageCard from "./CreateActionPageCard";
import CAPCompletedCard from "./CreateActionPageCard_Completed";
import TopNavbar from "./TopNavbar";


// import { gql, useQuery } from '@apollo/react-hooks';
// import { getActionPage, getEnduser } from '../graphql/queries';
// import Amplify from 'aws-amplify';
// import { Auth, API, graphqlOperation } from 'aws-amplify';
// import awsMobile from '../aws-exports';
// import { useLocation } from "@reach/router"
// Amplify.configure(awsMobile);
// import { createTask } from './graphql/mutations';
// import { listTasks } from './graphql/queries';


function CAPCompleted()  {
  
  const artistId = "cuenoego";
  const actionPageId = "onboarding";
  
  return (
  
  
    <div>
      <Background />
      <TopNavbar />
      <CAPCompletedCard artistId={artistId} actionPageId={actionPageId}/>
    </div>
    
  );
}

export default CAPCompleted;
