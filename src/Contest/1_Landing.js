import React from 'react';
import styled from 'styled-components'


import Background from '../Components/Background';
import CenterBox from '../Components/CenterBox';
import OptinCard from '../Components/Cards/1_OptinCard'
function Landing() {
  return (
    <div>
      <Background myClass="background-wrapper" />
      <div>
        <CenterBox 
        boxContent=
        {
          <OptinCard 
            contestHeadline="Win a Baby"
            contestDescription="Enter for a chance to win a happy, healthy baby girl!"
            buttonText="Enter to Win >"
            contestDeadline="4/13/2021"
            contestImg="../baby.png"
          />
        }
        displayFooter={true}
        />
      </div>
    </div>
  );
}

export default Landing;
