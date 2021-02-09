// import '.../App.css';

import { Link} from '@reach/router';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

import ButtonNormal from '../../ButtonNormal';
import { FaFacebook } from "react-icons/fa";
import { IoIosCheckbox } from "react-icons/io"


import ArtistNavbar from "../ArtistNavbar"
import NavbarCreateProject from "../NavbarCreateProject"
import OptinCard from "../../Cards/1_OptinCard"

import Text from "../../Text";


function ConnectAccount() {
  
  // const [contestHeadline, setContestHeadline] = useState("Win a Baby");
  // const [contestDescription, setContestDescription] = useState("Enter for a chance to win a happy, healthy baby girl!");
  // const [buttonText, setButtonText] = useState("Enter to Win >");
  // const [contestDeadline, setContestDeadline] = useState("4/13/2021");
  // const [contestImg, setContestImg] = useState("../baby.png");
  
  const [inputValues, setInputValues] = useState({
    contestHeadline: 'Win a Baby', 
    contestDescription: 'Enter for a chance to win a happy, healthy baby girl!',
    buttonText: 'Enter to Win >',
    contestDeadline: '4/13/2021',
    contestImg: '../baby.png',
  });

const handleOnChange = event => {
  const { name, value } = event.target;
  setInputValues({ ...inputValues, [name]: value });
};
  
  return (
          <div> 
            <div class="create-contest-content-header"> Enter Details </div>
            <div class="create-contest-content-preview-wrapper">
              <div class="create-contest-content-body">
        <div> 
            <form class="form-container">
              <div className="form-group">
                <label htmlFor="exampleInputName1"></label>
                <input 
                type="name"
                name="contestHeadline"
                value={inputValues.contestHeadline}
                onChange={handleOnChange}
                className="form-control" 
                id="exampleInputName1" aria-describedby="emailHelp" 
                placeholder="Title of Contest..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1"></label>
                <input 
                type="email"
                name="contestDescription"
                value={inputValues.contestDescription}
                onChange={handleOnChange}
                className="form-control" 
                id="exampleInputEmail1" 
                placeholder="Description of Contest..." 
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPhone1"></label>
                <input 
                type="phone"
                name="buttonText"
                value={inputValues.buttonText}
                onChange={handleOnChange}
                className="form-control" 
                id="exampleInputPhone1" 
                placeholder="Button Text..." 
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPhone1"></label>
                <input 
                type="phone"
                name="contestDeadline"
                value={inputValues.contestDeadline}
                onChange={handleOnChange}
                className="form-control" 
                id="exampleInputPhone1" 
                placeholder="Contest Deadline..." 
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPhone1"></label>
                <input 
                type="phone"
                name="contestImg"
                value={inputValues.contestImg}
                onChange={handleOnChange}
                className="form-control" 
                id="exampleInputPhone1" 
                placeholder="Contest Image..." 
                />
              </div>
              <div class="button-container">
                <Link class="link-button" to="/">
                <Button type="Submit" 
                className="btn-default complete-registration-button button-text-box">
                  <div className= "complete-registration-color-gradient button-text-box dark">
                    <p className="complete-registration-button-text center large dark">
                    Next Step
                    </p>
                  </div>
                </Button>
                </Link>
              </div>
            </form>
        </div>
              </div>
              <div class="create-contest-preview-wrapper"> PREVIEW:
                <div class="create-contest-preview-box"> 
                  <OptinCard 
                    contestHeadline={inputValues.contestHeadline}
                    contestDescription={inputValues.contestDescription}
                    buttonText={inputValues.buttonText}
                    contestDeadline={inputValues.contestDeadline}
                    contestImg={inputValues.contestImg}
                  />
                </div>
              </div>
            </div>
          </div>
  );
}

export default ConnectAccount;
