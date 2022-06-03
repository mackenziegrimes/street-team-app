// import '.../App.css';


import { Link } from '@reach/router';
import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

// import Background from './Background';
// import Countdown from '../Countdown';
// import ReactDeadline from '../ReactDeadline';
import PointsBox from "../Components/PointsBox"
import ActionButton from '../Components/ActionButton';
import ClaimRewardButton from "../Components/ClaimRewardButton"
import ActionPointsButton from "../Components/ActionPointsButton"
import ActionPointsButtonTyped from "../Components/ActionPointsButtonTyped"
// import EmailForm from "../EmailForm";
import ProgressBox from "../Components/ProgressBox"
// import SpotifyPlayBox from "../SpotifyPlayBox"


import { IoIosCheckbox } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLibraryMusic } from "react-icons/md";
import { AiFillGift } from "react-icons/ai";

import { gql, useMutation } from '@apollo/react-hooks';

import {totalPointsContext} from '../Context/TotalPointsContext';

//TODO: Pass Artist ID
//TODO: Pass Track ID
//TODO: Pass Playlist or Album ID

// let pointSetter = 0;
// let totalPoints = 0;

function ViewActionPageCard({pageData}) {

const linkUrl = "/secure/referral/"+pageData.actionPageId;
var orderActionButtons = [];
var orderClaimRewardButtons = [];
if(pageData.actionButtons.items.length > 0){
  orderActionButtons = pageData.actionButtons.items.sort(function(a, b){return a.position - b.position})
  console.log("sorted buttons are...")
  console.log(orderActionButtons)
}

const futureClaimRewardsButton = "addinglater";
const claimRewardUrl = pageData.actionButtons.items;

const myTotalPoints = useContext(totalPointsContext);

const pageTitle = pageData.pageTitle;
  
  return (
    
    <div>
      <Card>
        <div className="headline-top margin-reset">
          <div className="flex-top-headline">
            <div className= "left-align top-left-headline">
              {pageTitle}
            </div>
            
            <div className="top-right-countdown center">
            </div>
          </div>
        </div>
        
        <div> 
          <ProgressBox progressStep={3} />
        </div>
        
        <Card.Body>
          <div className="card-container-text">
            <Card.Title className="register-headline">
              <h3> {pageData.heading} </h3>
              <hr width="76%" align="left" margin-top="0" fontWeight="bold"/>
              <h4> {pageData.subheading} </h4>
            </Card.Title>
            
            <div>
              {pageData.actionButtons.items.length > 0 ? 
                orderActionButtons.map((itemMapped, index) =>
                    (<div key={index}>
                        <ActionButton 
                          actionButtonConfig={itemMapped}
                        />
                    </div>))
              :
              <div>
                <p>sorry... but there's no actions to take here</p>
                <img alt="pika is sad we couldn't find any actions" 
                src='https://www.memecreator.org/static/images/templates/804179.jpg'
                height={100}
                />
              </div>
              }
             {/*
             <AmplifySignOut
             */}
            </div>
            <div>
              {futureClaimRewardsButton=="addinglater" ? null
              :
                <ClaimRewardButton
                  rewardName = "Starter Pack"
                  url= {claimRewardUrl}
                  isLocked= {true}
                />
              }
            </div>
            
          <div className="register-button-box">
          
          <Link className="link-button" to={linkUrl}>
          {/* we'll add this back in when we have referrals
            <Button className="btn active btn-default card-container-button button-continue">
              CONTINUE
            </Button>
          */}
          </Link>
        </div>
        </div>
        <PointsBox 
          totalPoints={myTotalPoints.newState}
          includeText={false}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default ViewActionPageCard;