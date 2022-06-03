// import '.../App.css';

import { Link} from '@reach/router';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

// import Background from './Background';
import Countdown from '../Countdown';
import ReactDeadline from '../ReactDeadline';
import ButtonNormal from '../ButtonNormal';
import { FaFacebook } from "react-icons/fa";




function LoginCard({contestHeadline,contestDescription,buttonText,contestDeadline,contestImg}) {
  return (
    <div>
      <Card>
        <Card.Body>
          <div className="card-container-text light smaller dark">
            <Card.Title className="headline-paragraph-text">
              <p class="smaller-font dark"> Login To Continue </p>
            </Card.Title>
            <ButtonNormal
              path="/registration"
              text="Continue With Facebook"
              icon={FaFacebook}
              textBoxColor="facebook-color"
              buttonBoxStyle="normal-button-text-box"
              buttonIconStyle="normal-button-icon no-padding no-margin"
              buttonTextStyle="normal-button-text"
              heightClass="button-small-height"
            />
            
            <ButtonNormal
              path="/registration"
              text="Sign Up With Email"
              icon="null"
              textBoxColor="dark-background"
              buttonBoxStyle="normal-button-text-box"
              buttonIconStyle="normal-button-icon no-padding no-margin"
              buttonTextStyle="normal-button-text"
              heightClass="button-small-height"
            />
            
            <div class="or-divider">
              <hr class="fade-light flex-big" />
              <h5 className="fade-light flex-small dark"> or </h5>
              <hr class="fade-light flex-big" />
            </div>
            
            <ButtonNormal
              path="/"
              text="Log In"
              icon="null"
              textBoxColor="transparent"
              buttonBoxStyle="normal-button-text-box border-thin no-shadow"
              buttonIconStyle="null"
              buttonTextStyle="dark weight-regular"
              heightClass="button-small-height"
            />
            
            <a href="https://www.w3schools.com" class="forgot-password"> Forgot your password? </a>
            
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginCard;
