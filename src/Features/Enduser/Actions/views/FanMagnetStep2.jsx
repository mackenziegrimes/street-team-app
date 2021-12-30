import React, { useContext } from 'react';
import styled from 'styled-components';
import { FanMagnetButton } from '../../../../Components/UI';
import { PageHeader } from '../../../../Components/Page/PageHeader';
// import {
//   FanMagnetContext,
//   SURVEY_SELECTION,
// } from '../../../../Context/FanMagnetContext';
import { useHistory } from 'react-router-dom';
import anonymousId from 'anonymous-id';
import { trackInAmplitude } from '../../../../utils/sharedUtils';

export const SURVEY_SELECTION = {
  LOVE_IT: 'I loved it!',
  OKAY: 'It was okay',
  DISLIKE: "Didn't like it",
};

const Step2MagnetHeader = styled(PageHeader)`
  && {
    font-size: 55px;
    margin-bottom: 35px;
    @media (max-width: 600px) {
      font-size: 40px;
    }
  }
`;

const MagnetButton = styled(FanMagnetButton)`
  margin: 0 0 30px;
  font-size: 40px;
  font-weight: 500;
  padding: 10px 17px;
  width: auto;

  @media (max-width: 600px) {
    font-size: 30px;
  }

  div {
    width: auto;
  }
  
  span {
    font-size: 55px;
    margin-right: 43px;
    margin-left: 25px;

    @media (max-width: 600px) {
      margin-right: 18px;
      margin-left: 10px;
      font-size: 45px;
    }
  }
`;

export const FanMagnetStep2 = ({artistId}) => {
  // const { setFanMagnetSurvey } = useContext();
  const history = useHistory();
  const continueToNextStep = () => {
    //pull the root path from the location and push to the /secure path for that artist
    const path = window.location.pathname;
    const currentPathArray = window.location.pathname
      .split('/')
      .filter(x => x !== '');
    const newRoute = ['/secure'].concat(currentPathArray[0]).join('/');
    history.push(newRoute);
  };

  return (
    <React.Fragment>
      <Step2MagnetHeader>Did you enjoy the song?</Step2MagnetHeader>
      <MagnetButton
        active
        activeBgColor="linear-gradient(0deg, rgba(45,132,86,1) 0%, rgba(61,175,114,1) 100%);"
        activeColor="white"
        margin="0 0 50px"
        handleClick={() => {
          // setFanMagnetSurvey(SURVEY_SELECTION.LOVE_IT);
          continueToNextStep();
          trackInAmplitude('Song Enjoyed',anonymousId(),null,artistId);
        }}
      >
        <span>👍</span>
        <div>{SURVEY_SELECTION.LOVE_IT}</div>
      </MagnetButton>
      <MagnetButton
        active
        activeBgColor="linear-gradient(0deg, rgba(77,77,77,1) 0%, rgba(113,113,113,1) 100%);"
        activeColor="white"
        margin="0 0 50px"
        handleClick={() => {
          // setFanMagnetSurvey(SURVEY_SELECTION.OKAY);
          continueToNextStep();
        }}
      >
        <span>👌</span>
        <div>{SURVEY_SELECTION.OKAY}</div>
      </MagnetButton>
      <MagnetButton
        active
        activeBgColor="linear-gradient(0deg, rgba(143,37,40,1) 0%, rgba(183,47,51,1) 100%);"
        activeColor="white"
        margin="0 0 50px"
        handleClick={() => {
          // setFanMagnetSurvey(SURVEY_SELECTION.DISLIKE);
          continueToNextStep();
        }}
      >
        <span>👎</span>
        <div>{SURVEY_SELECTION.DISLIKE}</div>
      </MagnetButton>
    </React.Fragment>
  );
};
