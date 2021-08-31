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
import { IoIosCheckbox } from "react-icons/io"
import EmailForm from "../EmailForm";


function EmailRegistrationCard({contestId,contestHeadline,contestDescription,buttonText,contestDeadline,contestImg}) {
  return (
    <div>
      <Card>
        <div className="headline-top margin-reset">
          <div class="flex-top-headline">
            <div className= "left-align top-left-headline">
              {contestHeadline}
            </div>
            <div className="top-right-countdown">
            <ReactDeadline startDate={contestDeadline} />
            </div>
          </div>
        </div>
        <Card.Body>
          <div className="card-container-text">
            <Card.Title className="register-headline">
              <h3> Register </h3>
              <hr width="18%" align="left" margin-top="0"/>
              <h4> How can we reach you if you win? </h4>
            </Card.Title>
          <div className="register-button-box">
          <EmailForm />
          </div>
            <Card.Text className="text-small fade-light">
              *We promise to keep your privacy safe.
            </Card.Text>
          </div>
          <PointsBox totalPoints={0} includeText={true} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default EmailRegistrationCard;
