// import '.../App.css';

// import { Link} from '@reach/router';
import React, { useState } from 'react';
import Navbar from "./Navbar"

import FanActions from "./RightBoxes/FanActions"



// import Text from "../Text";

const CreateActionPageCard = ({actionPageId,artistRoute}) => {
  
  const [selectedTab, setSelectedTab] = useState('fan-actions');
  const [activeStep, setActiveStep] = useState(3);
  
  const TABS = {
    // 'get-started': <GetStarted />,
    // 'connect-account': <ConnectAccount />,
    // 'enter-details': <EnterDetails />,
    'fan-actions': <FanActions actionPageId = {actionPageId} artistRoute={artistRoute}/>,
    // 'add-integrations': null,
    // 'review-contest': <ReviewContest activeStep={activeStep} />,
  }
  
  return (
    <div className="artist-wrapper"> <hr className="navbar-divider" />
      <div className="create-contest-wrapper"> 
        <div className="create-contest-left-container">
          <Navbar activeStep={activeStep} setActiveStep={setActiveStep} setSelectedTab={setSelectedTab} selectedTab={selectedTab}/>
        </div>
        <div className="create-contest-right-container"> 
          <div className="create-contest-right-box"> 
            {TABS[selectedTab]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateActionPageCard;
