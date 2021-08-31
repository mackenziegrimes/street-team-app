import React, { useState, useRef } from 'react';

import { Link } from '@reach/router';

import FollowMusicInputForm from "./ActionInputForms/FollowMusicInputForm";
import SendEmailInputForm from "./ActionInputForms/SendEmailInputForm";
import StarterPackInputForm from "./ActionInputForms/StarterPackInputForm";
import StreetTeamInputForm from "./ActionInputForms/StreetTeamInputForm";


const ToggleActionExtraBox = ({
      inputValues,
      setInputValues,
      handleOnChange,
      actionType,
      
}) => {
      
    if  (actionType === "joinGroup") {
      return <StreetTeamInputForm
      inputValues = {inputValues}
      handleOnChange = {handleOnChange}
      setInputValues = {setInputValues}
      />;
    } else if (actionType === "followMusic") {
      return <FollowMusicInputForm
      inputValues = {inputValues}
      handleOnChange = {handleOnChange}
      setInputValues = {setInputValues}
      />;
    } else if (actionType === "sendEmail") {
      return <SendEmailInputForm
      inputValues = {inputValues}
      handleOnChange = {handleOnChange}
      setInputValues = {setInputValues}
      />;
    } else if (actionType === "claimStarterPack") {
      return <StarterPackInputForm
      inputValues = {inputValues}
      handleOnChange = {handleOnChange}
      setInputValues = {setInputValues}
      />;
    } else {
      return null
    }
}

export default ToggleActionExtraBox