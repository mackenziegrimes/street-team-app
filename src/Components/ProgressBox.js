import React, { useState } from "react"
import { Link } from '@reach/router'
import Text from "./Text"

function ProgressBox({progressStep}) {
    
    let progressStep1 = "";
    let progressStep2 = "";
    let progressStep3 = "";
    
    // if(includeText){
    //     if (totalPoints === 0){
    //         pointsInfoText="Register now and start earning points towards your entry.";
    //     }
            
    //         else if (totalPoints > 0 && totalPoints < 10000) {
                
    //             pointsInfoText= <Text color="white"> 
    //             You're already in the <Text color="white" weight="642" opacity="1">{contestRanking}</Text> of winners!
    //             </Text>
    //         }
            
    //         else if (totalPoints >= 10000) {
    //             pointsInfoText="you're totally gonna win"
    //         }
    // }
    
    if(progressStep <= 1){
     progressStep1 = "progress-step-inactive"
    }
        else if (progressStep <= 2) {
            progressStep2 = "progress-step-inactive"
        }
        
        else if (progressStep <= 3) {
            progressStep3 = "progress-step-inactive"
        }
        
    //     if (totalPoints === 0){
    //         pointsInfoText="Register now and start earning points towards your entry.";
    //     }
            
    //         else if (totalPoints > 0 && totalPoints < 10000) {
                
    //             pointsInfoText="wow you're doing great pal!"
    //         }
            
    //         else if (totalPoints >= 10000) {
    //             pointsInfoText="you're totally gonna win"
    //         }
    // }    
    
    
    return(
        <div className="progress-container center">
            <Link to="/registration">
                <div className={"progress-number-box " + progressStep1}> <Text color="white" base="16" family="Oswald" weight="550"> 1 </Text> </div>
            </Link>
                <hr className="progress-divider" />
            <Link to="/contest">
                <div className={"progress-number-box " + progressStep2}> <Text color="white" base="16" family="Oswald" weight="550"> 2 </Text> </div>
            </Link>
                <hr className="progress-divider" />
                <div className={"progress-number-box " + progressStep3}> <Text color="white" base="16" family="Oswald" weight="550"> 3 </Text> </div>
        </div>
        )
}

export default ProgressBox