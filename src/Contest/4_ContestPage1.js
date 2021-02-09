import React from 'react';
import styled from 'styled-components'

import Background from '../Components/Background';
import CenterBox from '../Components/CenterBox';
import ContestPage1Card from '../Components/Cards/4ContestPage1';

function ContestPage1() {
  return (
    <div>
      <div>
        <Background myClass="background-wrapper" />
      </div>
      <div>
        <CenterBox 
        boxContent=
        {
          <ContestPage1Card 
            contestHeadline="Win a Baby"
            contestDescription="Enter for a chance to win a happy, healthy baby girl!"
            buttonText="CONTINUE"
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

export default ContestPage1;
