// import '.../App.css';

import { Link} from '@reach/router';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

// import ButtonNormal from '../../ButtonNormal';
// import { FaFacebook } from "react-icons/fa";

// import ArtistNavbar from "../ArtistNavbar"
// import NavbarCreateProject from "../NavbarCreateProject"

// import Text from "../../Text";


function GetStarted() {
  return (
          <div> 
            <div class="create-contest-content-header"> Get Started </div>
            <div class="create-contest-content-body"> 
              Fill in your contest details to launch your campaign.
            </div>
              <div class="button-container width-50 center-div">
                <Link class="link-button" to="/">
                <Button type="Submit" 
                className="">
                  <div className= "button-continue button-text-box light">
                    <p className="complete-registration-button-text center t-m oswald light">
                    Next Step
                    </p>
                  </div>
                </Button>
                </Link>
              </div>
            {/*
          <Link className="link-button" to="/">
   
            <Button className="btn active btn-default card-container-button button-continue">
              Next
            </Button>
         
          </Link>
          */}
          </div>
  );
}

export default GetStarted;
