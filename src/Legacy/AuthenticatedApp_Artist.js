import './App.css';

import { Router } from '@reach/router';
import React, { useState } from 'react';
import axios from 'axios';
import Registration from './Contest/2_Registration';
import Landing from './Contest/1_Landing';
import EmailRegistration from './Contest/3_EmailRegistration';
import ContestPage1 from './Contest/4_ContestPage1';
import ReferralPage from './Contest/5_ReferralPage';
import SpotifyFollowArtist from './Contest/6_SpotifyFollowArtist';
import SpotifySaveSong from './Contest/7_SpotifySaveSong';
import Login from './Contest/A1_Login';
import CreateContestPage from './Contest/A2_CreateContest';
import Test from './Contest/Test';
import NotFoundPage from './Components/NotFoundPage'

import CreateActionPage from './ActionPage/CreateActionPageFlow/CreateActionPage';
import CAPCompleted from './ActionPage/CreateActionPageFlow/CreateActionPage_Completed';



// import { API, graphqlOperation } from "aws-amplify";
// import { createTodo } from "./graphql/mutations";
// import { listTodos } from "./graphql/queries";
import sum from './sum';

function AuthenticatedAppArtist() {
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
  
  const artistId = "cuenoego";
  const actionPageId = "onboarding";
  

  return (
    <Router>
      <CreateActionPage path="/create-action-page"/>
      <CAPCompleted path={artistId + "/create-action-page/" + actionPageId + "/success"}/>
    </Router>
    // <div>
    //   <div>
    //   <Background />
    //   </div>
    //   <div>
    //     <CenterBox />
    //   </div>
    // </div>
  );
}

export default AuthenticatedAppArtist;
