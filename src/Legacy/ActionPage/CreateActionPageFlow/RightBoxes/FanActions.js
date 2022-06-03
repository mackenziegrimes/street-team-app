// import '.../App.css';

import { Link} from '@reach/router';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

// import ButtonNormal from '../../ButtonNormal';
import { FaFacebook, FaCopy } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { IoIosCheckbox } from "react-icons/io"
import { MdLibraryMusic } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillGift } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";



// import ArtistNavbar from "../ArtistNavbar"
// import NavbarCreateProject from "../NavbarCreateProject"
// import ContestPage1Card from "../../Cards/4ContestPage1"
import ViewActionPageCardPreview from "../../ViewActionPageCardPreview"
import CopyLinkModal from "../CopyLinkModal"


import Text from "../../../Components/Text";
import Checkfield from "../../../Components/Checkfield";
import ToggleActionButton from "../ToggleActionButton"

import Background from '../../../Components/Background';
import CenterBox from '../../../Components/CenterBox';
import PageNotFound from '../../../Components/NotFoundPage';
import SessionVariables from '../../../functional-tests/SessionVariables';
import ActionButton from '../../../Components/ActionButton';
import ViewActionPageCard from "../../ViewActionPageCard";

import { gql, useQuery, useMutation } from '@apollo/react-hooks';
import { getActionPage} from '../../../graphql/queries';
import {updateActionPageButton, createActionPageButton} from '../../../graphql/mutations'
// import Amplify from 'aws-amplify';
// import { Auth, API, graphqlOperation } from 'aws-amplify';
// import awsMobile from '../../../aws-exports';
// import { useLocation } from "@reach/router"
// Amplify.configure(awsMobile);


function FanActions({actionPageId,artistRoute}) {
  
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function saveAuthentication () {
    handleClose();
    if (authenticated){
    }
    else {
    }
    // value=true;
  }
 
    const [submitted,setSubmitted] = useState(false);
    const [initialLoad,setInitalLoad] = useState(true);
    const [inputValues, setInputValues] = useState({
    joinGroupUrl: '',
    starterPackUrl: '',
    followMusicUrl: '',
    sendEmailUrl: '',
  });

  function onSubmitClick(event){
    console.log("onSubmitClick called")
    event.preventDefault();
    setSubmitted(true);
    console.log(submitted);
    createOrUpdateActionButtons(inputValues,actionPageId);
    console.log("finished updating/creating buttons")
    setShow(true);
  }

  function copyLinkToClipboard(event)
  {
    //todo this needs to be dynamic by environment (dev, app, etc)
    //TODO eventually this should use both an artist route and a pageRoute
    const route = artistRoute ? artistRoute : actionPageId
    var link="app.modern-musician.com/"+ route
    navigator.clipboard.writeText(link)
    console.log("copied link to clipboard",link)
  }
  
  const {data: pageData, loading: pageDataLoading, error: pageDataError} = useQuery(gql(getActionPage),{variables:{id: actionPageId}})
  const [updateActionButton] = useMutation(gql(updateActionPageButton))
  const [addActionPageButton, {loading:loadingActionPage}] = useMutation(gql(createActionPageButton),
  {
    refetchQueries: [{query:gql(getActionPage),
    variables: {id: actionPageId },
    }],
    awaitRefetchQueries:false
  }
  );
  
  function createOrUpdateActionButtons(inputValues, actionPageId) {
    console.log(submitted)
    console.log("create or update called")
    console.log(inputValues);
    let newTargetUrl="";
    // if(submitted==true){
    //todo this code is gross -- needs to be abstracted instead of looking for specific button icons
    //todo also this is using button icon to determine the type... we should be using some type data that isn't in the database yet
    // handle sendEmailUrl
    if(inputValues.sendEmailUrl!=''){
      newTargetUrl="mailto:"+inputValues.sendEmailUrl+"?subject=I%20joined%20the%20team!&body=Hey!%20I%20just%20joined%20the%20team!%0A%0A%20Here's%20where%20I'm%20from%20and%20why%20I'm%20interested%20in%20being%20a%20part%20of%20the%20community...";
      var recordExists = false;
      console.log(pageData);
      if(pageData!=null){
      //if the action buttons exist in the pageData, update them  
      if(pageData.getActionPage!=null){
        const emailButton = pageData.getActionPage.actionButtons.items.find(element => element.buttonIcon == "Email");
        console.log(pageData.getActionPage.actionButtons.items);
        console.log(emailButton);
        var inputVariables={
          actionPageID:actionPageId,
          buttonIcon:'Email',
          targetURL:newTargetUrl,
          backgroundColor:'#FED93E',
          pointValue:10,
          position:3,
          preActionText:"Send Me an Email",
          postActionText:"Email Sent!",
          textColor:"black",
        };
        if(emailButton!=null){
          console.log('updating the email button')
          //update  the button
          inputVariables["id"]=emailButton.id
          updateActionButton({variables:{input:
            // id:emailButton.id,
            // targetURL:inputValues.sendEmailUrl,
            inputVariables
          }})
          recordExists = true; //don't go on to create a new record
        }
      }
      if(!recordExists)
      {
        console.log('creating a new button')
        //create the button record
        const newButtonData = addActionPageButton({variables:{input:inputVariables}})
      }
      console.log("we did it!");
    }
    }
    // handle joinGroupUrl
    if(inputValues.joinGroupUrl!=''){
      console.log('join group is getting set')
      newTargetUrl=inputValues.joinGroupUrl;
      var recordExists = false;
      if(pageData!=null){
      //if the action buttons exist in the pageData, update the button  
      if(pageData.getActionPage!=null){
        const button = pageData.getActionPage.actionButtons.items.find(element => element.buttonIcon == "Group");
        console.log(pageData.getActionPage.actionButtons.items);
        console.log(button);
        var inputVariables={
          actionPageID:actionPageId,
          buttonIcon:'Group',
          targetURL:newTargetUrl,
          backgroundColor:'#FED93E',
          pointValue:10,
          position:1,
          preActionText:"Join the VIP Group",
          postActionText:"VIP Group Joined",
          textColor:"black",
        };
        if(button!=null){
          console.log('updating the group button')
          //update  the button
          inputVariables["id"]=button.id
          updateActionButton({variables:{input:
            inputVariables
          }})
          recordExists = true; //don't go on to create a new record
        }
      }
      if(!recordExists)
      {
        console.log('creating a new button')
        //create the button record
        const newButtonData = addActionPageButton({variables:{input:inputVariables}})
      }
      console.log("we did it!");
    }
    }
    // handle starterPackUrl
    if(inputValues.starterPackUrl!=''){
      newTargetUrl=inputValues.starterPackUrl;
      var recordExists = false;
      console.log(pageData);
      if(pageData!=null){
      //if the action buttons exist in the pageData, update them  
      if(pageData.getActionPage!=null){
        const button = pageData.getActionPage.actionButtons.items.find(element => element.buttonIcon == "Ticket");
        console.log(pageData.getActionPage.actionButtons.items);
        console.log(button);
        var inputVariables={
          actionPageID:actionPageId,
          buttonIcon:'Ticket',
          targetURL:inputValues.starterPackUrl,
          backgroundColor:'#43C052',
          pointValue:50,
          position:4,
          preActionText:"Claim Your Free Starter Pack",
          postActionText:"Starter Pack Claimed",
          textColor:"white",
        };
        if(button!=null){
          console.log('updating a button')
          //update  the button
          inputVariables["id"]=button.id
          updateActionButton({variables:{input:
            inputVariables
          }})
          recordExists = true; //don't go on to create a new record
        }
      }
      if(!recordExists)
      {
        console.log('creating a new button')
        //create the button record
        const newButtonData = addActionPageButton({variables:{input:inputVariables}})
      }
      console.log("we did it!");
    }
    }
    // // handle followMusicUrl
    if(inputValues.followMusicUrl!=''){
      newTargetUrl=inputValues.followMusicUrl;
      var recordExists = false;
      console.log(pageData);
      if(pageData!=null){
      //if the action buttons exist in the pageData, update them  
      if(pageData.getActionPage!=null){
        const button = pageData.getActionPage.actionButtons.items.find(element => element.buttonIcon == "Music");
        console.log(pageData.getActionPage.actionButtons.items);
        console.log(button);
        var inputVariables={
          actionPageID:actionPageId,
          buttonIcon:'Music',
          targetURL:newTargetUrl,
          backgroundColor:'#974FF8',
          pointValue:10,
          position:2,
          preActionText:"Follow My Music",
          postActionText:"Music Followed",
          textColor:"white",
        };
        if(button!=null){
          console.log('updating a button')
          //update  the button
          inputVariables["id"]=button.id
          updateActionButton({variables:{input:
            inputVariables
          }})
          recordExists = true; //don't go on to create a new record
        }
      }
      if(!recordExists)
      {
        console.log('creating a new button')
        //create the button record
        const newButtonData = addActionPageButton({variables:{input:inputVariables}})
      }
      console.log("we did it!");
    }
    }
    // }
  }

const handleOnChange = event => {
  const { name, value } = event.target;
  setInputValues({ ...inputValues, [name]: value });
};

  const [actionJoinGroup, setActionJoinGroup] = useState(false);
  const [actionFollowMusic, setActionFollowMusic] = useState(false);
  const [actionSendEmail, setActionSendEmail] = useState(false);
  const [actionClaimStarterPack, setActionClaimStarterPack] = useState(false);

  const [authenticated, setAuthenticated] = useState(false);
  const handleAuthenticated = () => setAuthenticated(true);

  if (pageData!=null && initialLoad==true)
  //load initial state of the action page buttons into state
  //TODO this really should be less hard coded and more dynamic
  {
    setInitalLoad(false);
    const emailButton = pageData.getActionPage.actionButtons.items.find(element => element.buttonIcon == "Email");  
    console.log('emailButton is',emailButton);
    if(emailButton!=null && actionSendEmail==false){
      //pull email address from the saved email mailto string
      //todo we should be saving this as just an email address at some point right?
      const emailAddress = emailButton.targetURL.split(":")[1].split("?")[0];
      setActionSendEmail(true)
      setInputValues(inputValues => {
        return { ...inputValues,'sendEmailUrl': emailAddress }});
    }
    const joinButton = pageData.getActionPage.actionButtons.items.find(element => element.buttonIcon == "Group");  
    if(joinButton!=null && actionJoinGroup==false)
    {
      setActionJoinGroup(true);
      setInputValues(inputValues => {
        return { ...inputValues,'joinGroupUrl': joinButton.targetURL }});
    }
    const musicButton = pageData.getActionPage.actionButtons.items.find(element => element.buttonIcon == "Music");  
    if(musicButton!=null && actionFollowMusic==false)
    {
      setActionFollowMusic(true);
      setInputValues(inputValues => {
        return { ...inputValues,'followMusicUrl': musicButton.targetURL }});
    }
    const ticketButton = pageData.getActionPage.actionButtons.items.find(element => element.buttonIcon == "Ticket");  
    if(ticketButton!=null && actionClaimStarterPack==false)
    {
      setActionClaimStarterPack(true);
      setInputValues(inputValues => {
        return { ...inputValues,'starterPackUrl': ticketButton.targetURL }});
      // setInputValues({ ...inputValues,'starterPackUrl': ticketButton.targetURL })
    }
  }
  console.log(inputValues);
  return (
          <div> 
            <div className="create-contest-content-header"> Set Up Fan Actions </div>
            <div className="create-contest-content-preview-wrapper">
              <div className="create-contest-content-body">
                <div className="create-contest-connect-facebook-instructions">
                  <div className="facebook-instructions-title t-l"> Fan Actions </div>
                  <div className="facebook-instructions-description t-m"> 
                  Select "fan actions" that someone can take to 
                  <Text weight="bold"> support your music </Text> 
                  and unlock a free gift. 
                  </div>
                </div>
<div>
  <form className="form-container" onSubmit={e => e.preventDefault()}>
    <ToggleActionButton
      label="Join the VIP Group"
      icon={HiUserGroup}
      actionType="joinGroup"
      value={actionJoinGroup}
      setSave={setActionJoinGroup}
      onChange={e => setActionJoinGroup(e.target.checked)}
      description="Get more Street Team members..."
      authenticated={true}
      inputValues={inputValues}
      setInputValues={setInputValues}
      handleOnChange={handleOnChange}
    />
    
    <ToggleActionButton
      label="Follow My Music"
      icon={MdLibraryMusic}
      actionType="followMusic"
      value={actionFollowMusic}
      setSave={setActionFollowMusic}
      onChange={e => setActionFollowMusic(e.target.checked)}
      description="Get more music followers..."
      authenticated={true}
      inputValues={inputValues}
      setInputValues={setInputValues}
      handleOnChange={handleOnChange}
    />
    
    <ToggleActionButton
      label="Send Me An Email"
      icon={HiOutlineMail}
      actionType="sendEmail"
      value={actionSendEmail}
      setSave={setActionSendEmail}
      onChange={e => setActionSendEmail(e.target.checked)}
      description="Get emails from fans..."
      authenticated={true}
      inputValues={inputValues}
      setInputValues={setInputValues}
      handleOnChange={handleOnChange}
    />
    
    <ToggleActionButton
      label="Claim Your Free Starter Pack"
      icon={ AiFillGift }
      actionType="claimStarterPack"
      value={actionClaimStarterPack}
      onChange={e => setActionClaimStarterPack(e.target.checked)}
      description="Get more Starter Pack sales..."
      authenticated={true}
      inputValues={inputValues}
      setInputValues={setInputValues}
      handleOnChange={handleOnChange}
    />
              
              <div className="button-container">
                {/*<Link className="link-button" to={actionPageId +"/success/"}>*/}
                <Button 
                  type="Submit" 
                  className="btn-default complete-registration-button button-text-box"
                  onClick={e => onSubmitClick(e)}
                >
                  <div 
                  // onClick={handleShow} 
                  className= "complete-registration-color-gradient button-text-box dark">
                    <p className="complete-registration-button-text center large dark">
                    Save Action Card
                    </p>
                  </div>
                </Button>
                {/*</Link>*/}
                
      <Modal show={show} onHide={handleClose} dialogClassName="">
        <Modal.Header closeButton>
          <Modal.Title>Congrats! Here's Your Link:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Click the button below to copy your onboarding link:

           <Button className="btn-default complete-registration-button button-text-box"
                  onClick={e=>copyLinkToClipboard(e)}>
            <div className= "complete-registration-color-gradient button-text-box dark">
              <p className="complete-registration-button-text center large dark">
                {React.createElement(FaCopy)}
                Copy Link to Your Page
              </p>
            </div>
          </Button>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
              </div>
            </form>
        </div>
              </div>
              <div className="create-contest-preview-wrapper"> PREVIEW:
                <div className="create-contest-preview-box"> 
                  <ViewActionPageCardPreview
                    actionClaimStarterPack={actionClaimStarterPack}
                    actionFollowMusic={actionFollowMusic}
                    actionJoinGroup={actionJoinGroup}
                    actionSendEmail={actionSendEmail}
                    joinGroupUrl={inputValues.joinGroupUrl}
                    followMusicUrl={inputValues.followMusicUrl}
                    sendEmailUrl={inputValues.sendEmailUrl}
                    starterPackUrl={inputValues.starterPackUrl}
                  />
                </div>
              </div>
            </div>
          </div>
  );
}

export default FanActions;
