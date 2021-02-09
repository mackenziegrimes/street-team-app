// import '.../App.css';

import { Link} from '@reach/router';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

import ButtonNormal from '../../ButtonNormal';
import { FaFacebook } from "react-icons/fa";

import ArtistNavbar from "../ArtistNavbar"
import NavbarCreateProject from "../NavbarCreateProject"

import Text from "../../Text";


function EnterDetails() {
  return (
          <div> 
            <div class="create-contest-content-header"> Select Accounts </div>
            <div class="create-contest-content-body"> 
              <div class="create-contest-connect-facebook-box"> 
                <div class="create-contest-connect-facebook-instructions">
                  <div class="facebook-instructions-title"> inTune Process™ </div>
                  <div class="facebook-instructions-description"> Please connect your Facebook advertising account so we can help you <Text weight="bold"> create lookalike audiences </Text> based on your highest quality fans. </div>
                </div>
                <div class="create-contest-connect-facebook-button"> 
                  <ButtonNormal
                    path="/registration"
                    text="Connect Facebook Ads Account"
                    icon={FaFacebook}
                    textBoxColor="facebook-color"
                    buttonBoxStyle="connect-facebook-text-box"
                    buttonIconStyle="normal-button-icon no-margin"
                    buttonTextStyle="normal-button-text smaller-font-1"
                    heightClass="button-small-height"
                  />
                </div>
              </div>
              <hr class="divider" />
              <div class="create-contest-connect-facebook-text-box"> 
                <div class="create-contest-connect-facebook-text-box-why-box"> 
                  <div class="why-box-title"> Haven't Created Your Business Manager Yet? </div>
                  <div class="why-box-description">
                  <a 
                  class="link-href" 
                  href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi_msWl-dTsAhUKm1kKHZ4DAusQFjAAegQIAhAC&url=https%3A%2F%2Fwww.facebook.com%2Fbusiness%2Fhelp%2F1710077379203657&usg=AOvVaw2x620JNDHchuPKAXXgX5Bl"> 
                  click here for instructions
                  </a>
                  </div>
                </div>
                <div class="facebook-text-box-new-account-box"> 
                  <div class="new-account-title"> </div>
                  <div class="new-account-description"> </div>
                </div>
                <div class="facebook-text-box-credibility-box">
                  <div class="credibility-title"> </div>
                  <div class="credibility-description"> </div>
                </div>
              </div>
            </div>
          </div>
  );
}

export default EnterDetails;
