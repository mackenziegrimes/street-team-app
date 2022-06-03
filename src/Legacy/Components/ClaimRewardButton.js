import React, {useState} from "react"
import { Link } from '@reach/router';
import Button from 'react-bootstrap/Button';
import SpotifyPlayBox from "./SpotifyPlayBox";
import ActionPointsButtonTyped from "./ActionPointsButtonTyped"

import { IoIosCheckbox } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLibraryMusic } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";



function ClaimRewardButton({url,isLocked,rewardName}) {
    
    return(
        <div id = {"claimReward" + "TypedButton"} className="button-container">
              
              {isLocked ? 
              
              <ActionPointsButtonTyped 
                preActionText={"Claim Your " + rewardName}
                postActionText={"Claimed Your " + rewardName}
                actionType="claimReward"
                pointValue={100}
                url= {url}
                completed={false}
              />
              
              :
                <ActionPointsButtonTyped 
                    preActionText={"Claim Your " + rewardName}
                    postActionText={"Claimed Your " + rewardName}
                    actionType="claimReward"
                    pointValue={100}
                    url= {url}
                    completed={false}
                 /> }
              
        </div>
        )
}

export default ClaimRewardButton