// import '.../App.css';

import { Link} from '@reach/router';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

// import Background from './Background';
import Countdown from '../Countdown';
import ReactDeadline from '../ReactDeadline';
import PointsBox from "../PointsBox"
import ActionPointsButton from "../ActionPointsButton"
import { FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


function RegistrationCard({contestId,contestHeadline,contestDescription,buttonText,contestDeadline,contestImg}) {
  return (
    <div>
      <Card>
        <div className="headline-top">
          <div className= "left-align top-headline-padding">
            {contestHeadline}
          </div>
          <div className="top-countdown">
          <ReactDeadline startDate={contestDeadline} />
          </div>
        </div>
        <Card.Body>
          <div className="card-container-text">
            <Card.Title className="register-headline">
              <h3> Register </h3>
              <hr width="18%" align="left" margin-top="0"/>
              <h4> How can we reach you? </h4>
            </Card.Title>
          <div className="register-button-box">
            <ActionPointsButton 
            text="Register by Connecting With Facebook" 
            icon={FaFacebook}
            path="/"
            points="40"
            textBoxColor="facebook-color-gradient"
            pointsBoxColor="facebook-color"
            buttonTextStyle="light"
            pointsSize="button-points-total-registration"
            
            />
          <p> or </p>
            <ActionPointsButton 
              text="Register With Email" 
              icon={HiOutlineMail}
              path="/register-email"
              points={20}
              textBoxColor="email-color-gradient"
              pointsBoxColor="email-color"
              buttonTextStyle="light"
              pointsSize="button-points-total-registration"
            />
          </div>
              <hr />
            <Card.Text className="contest-terms">
              By entering this contest, I acknowledge that I have reviewed and agreed to our Terms of Use, Contest Rules, and Privacy Policy.
            </Card.Text>
          </div>
          <PointsBox totalPoints={0} includeText={false} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default RegistrationCard;
