import React from 'react';


import Background from '../Components/Background';
import CenterBox from '../Components/CenterBox';
import LoginCard from '../Components/Cards/A1LoginCard'
function Login() {
  return (
    <div>
      <Background myClass="background-wrapper-artist" />
      <div>
        <CenterBox 
        boxContent=
        {
          <LoginCard 
            contestHeadline="Win a Baby"
            contestDescription="Enter for a chance to win a happy, healthy baby girl!"
            buttonText="Enter to Win >"
            contestDeadline="12/27/2020"
            contestImg="../baby.png"
          />
        }
        displayFooter={false}
        />
      </div>
    </div>
  );
}

export default Login;
