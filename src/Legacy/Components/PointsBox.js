import React, { useState } from "react"
import Text from "./Text"

function PointsBox({totalPoints,totalReferrals,bonusPoints,totalEntries,includeText,enduserFullName}) {
    
    let pointsInfoText = "";
    let referralText = "";
    let totalReferralsText ="";
    let contestRanking = "top 15%"
    
    if(includeText){
        if (totalPoints === 0){
            pointsInfoText="Register now and start earning points towards your entry.";
        }
            
            else if (totalPoints > 0 && totalPoints < 500) {
                
                pointsInfoText= <Text color="white"> 
                You're already in the <Text color="white" weight="642" opacity="1">{contestRanking}</Text> of possible winners!
                </Text>
            }
            
            else if (totalPoints >= 500) {
                pointsInfoText= <Text color="white"> 
                Congrats! You're in the <Text color="white" weight="642" opacity="1"> top 1% </Text> of possible winners!
                </Text>
            }
    }
    
    if(totalReferrals > 0 && bonusPoints > 0){
     totalReferralsText= totalReferrals + " referrals, " + bonusPoints + " bonus points";
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
        <div className="points-container">
            <div className="points-number-box">
                <h1 className="points-total"> {totalPoints} </h1>
                <h5 className="countdown-label" > points </h5>
            </div>
            <div className="points-info-box">
                <h4 className="points-info-text-header fade-light"> {enduserFullName} </h4>
                <p className="points-info-text-referrals fade-light"> {totalReferralsText} </p>
                <p className="points-info-text fade-light"> {pointsInfoText} </p>
            </div>
        </div>
        )
}

export default PointsBox