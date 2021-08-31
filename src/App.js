import './App.css';

import { Router } from '@reach/router';
import React, { useState } from 'react';
import axios from 'axios';
import Registration from './Contest/2_Registration';
import Landing from './Contest/1_Landing';
import RedirectLanding from './Contest/8_RedirectLanding';
import EmailRegistration from './Contest/3_EmailRegistration';
import ContestPage1 from './Contest/4_ContestPage1';
import ReferralPage from './Contest/5_ReferralPage';
import SpotifyFollowArtist from './Contest/6_SpotifyFollowArtist';
import SpotifySaveSong from './Contest/7_SpotifySaveSong';
import Login from './Contest/A1_Login';
import CreateContestPage from './Contest/A2_CreateContest';
import CreateActionPage from './ActionPage/CreateActionPageFlow/CreateActionPage';
import Test from './Contest/Test';
import NotFoundPage from './Components/NotFoundPage'
import AppWithAuth from './AppWithAuth'
import ReactSession from 'react-client-session';
import AppWithAuthArtist from './AppWithAuth_Artist';

import ViewActionPage from './ActionPage/ViewActionPage';

import TotalPointsContext from './Context/TotalPointsContext';

// import { API, graphqlOperation } from "aws-amplify";
// import { createTodo } from "./graphql/mutations";
// import { listTodos } from "./graphql/queries";
import sum from './sum';

function App() {
  
  // const [todoName, setTodoName] = useState('')
  // const [todoItems, setTodoItems] = useState([])

  // const addTodo = async () => {
  //   await API.graphql(
  //     graphqlOperation(createTodo, { input: { name: todoName } })
  //   )
  //   setTodoName('')
  //   updateTodos()
  // }

  // const handleChange = (evt) => {
  //   setTodoName(evt.target.value)
  // }

  // const updateTodos = async () => {
  //   const allTodos = await API.graphql(graphqlOperation(listTodos))
  //   setTodoItems(allTodos.data.listTodos.items)
  // }

  // updateTodos()

  // <Button> Counter +1 </Button>

  // counter items
  const totalPointsHook = useState(0);
  //note -- to add a new secure path, the route needs to be added in AuthenticatedApp.js router
  return (
    <TotalPointsContext>
    <Router>
    
      <AppWithAuth path="secure/*"/>
      <AppWithAuthArtist path="artist/secure/*"/>
      <Landing path="/landing/:contestId" />
      <ContestPage1 path="/test/:contestId" />
      <RedirectLanding path="secure/contest/" />
      <ViewActionPage path="/:routeVar"/>
      <NotFoundPage default/>
      
    </Router>
    </TotalPointsContext>
    //Previous route for testing unauthenticated data loading
    // <Test path="/test" />
    //<NotFoundPage default/>

    
  );
}

export default App;
