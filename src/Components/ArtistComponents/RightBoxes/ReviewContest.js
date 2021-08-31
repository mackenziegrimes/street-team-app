// import '.../App.css';

import { Link} from '@reach/router';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

import ButtonNormal from '../../ButtonNormal';
import { FaFacebook } from "react-icons/fa";
import {FaCheckCircle} from "react-icons/fa";
import {FaExclamationTriangle} from "react-icons/fa";

import ArtistNavbar from "../ArtistNavbar"
import NavbarCreateProject from "../NavbarCreateProject"
import OpenStepButton from "../OpenStepButton"

import Text from "../../Text";


const ReviewContest = ({activeStep}) => {
  
  return (
          <div>
            <div class="create-contest-content-header"> Review & Launch 
            </div>
            
            {(activeStep < 5) ? 
            
            <div class="create-contest-content-body width-75">
            <div class="create-contest-connect-facebook-box">
                <i class="sidebar-title-box-icon">
                <FaExclamationTriangle /> </i>
                <div class="create-contest-content-header padding-left-15"> Almost there! 
                </div>
            </div>
            <div class="facebook-instructions-description t-m">
                  A few things are missing... please complete the steps below.
            </div>
                <hr class="divider" />
              <div class="remaining-tasks-container"> 
                <div class="remaining-tasks-box">
                  <p class="remaining-tasks-text t-xm semi-bold"> Please connect your accounts to integrate with your contest. </p>
                  <OpenStepButton stepName="connect-accounts" />
                </div>
                <div class="remaining-tasks-box">
                  <p class="remaining-tasks-text t-xm semi-bold"> Please select start and end dates, enter a title, and upload a cover image. </p>
                  <OpenStepButton stepName="enter-details" />
                </div>
                <div class="remaining-tasks-box">
                  <p class="remaining-tasks-text t-xm semi-bold"> Please select an action for fans to perform to enter your contest. </p>
                  <OpenStepButton stepName="fan-actions" />
                </div>
              </div>
            </div>
            
            : 
            
            <div>
              <div class="create-contest-content-body width-75">
                <div class="create-contest-connect-facebook-box"> 
                  <i class="sidebar-title-box-icon step-complete">
                  <FaCheckCircle /> </i>
                  <div class="create-contest-content-header padding-left-15"> Everything looks good! </div>
                </div>
                  <hr class="divider" />
                  <div class="facebook-instructions-description t-m">
                    You're all set to launch your campaign. Click the button below to get your link now.
                  </div>
              </div>
                <div class="button-container width-50 center-div">
                  <Link class="link-button" to="/">
                  <Button type="Submit" 
                  className="btn-default complete-registration-button button-text-box">
                    <div className= "complete-registration-color-gradient button-text-box dark">
                      <p className="complete-registration-button-text center t-l oswald dark">
                      Launch Campaign >
                      </p>
                    </div>
                  </Button>
                  </Link>
                </div>
              </div>
            }
          </div>
  );
}

export default ReviewContest;
