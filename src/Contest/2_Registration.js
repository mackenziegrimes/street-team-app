import React from 'react';
import styled from 'styled-components'

import Background from '../Components/Background';
import CenterBox from '../Components/CenterBox';
import RegistrationCard from '../Components/Cards/2_RegistrationCard';

function Registration() {
  return (
    <div>
      <div>
        <Background myClass="background-wrapper" />
      </div>
      <div>
        <CenterBox 
        boxContent=
        {
          <RegistrationCard 
            contestHeadline="Win a Baby"
            contestDescription="Enter for a chance to win a happy, healthy baby girl!"
            buttonText="Enter to Win >"
            contestDeadline="12/27/2020"
            contestImg="../baby.png"
          />
        }
        displayFooter={true}
        />
      </div>
    </div>
  );
}

export default Registration;
