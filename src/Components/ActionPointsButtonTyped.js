import React, {useState} from "react"
import { Link } from '@reach/router';
import Button from 'react-bootstrap/Button';
import SpotifyPlayBox from "./SpotifyPlayBox";
import ActionPointsButton from "./ActionPointsButton"

import { IoIosCheckbox } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLibraryMusic } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";



function ActionPointsButtonTyped({preActionText,postActionText,actionType,pointValue,url,completed}) {
    
    var buttonColor = '';
    var buttonTextColor = '';
    var icon = '';;
    
    if (actionType === "spotifyPlay") {
        buttonColor = "spotify-color";
        buttonTextColor = "light ";
        icon = FaSpotify;
        
    } else if (actionType === "spotifyFollow") {
        buttonColor= "spotify-color";
        buttonTextColor= "light ";
        icon = FaSpotify;
    
    } else if (actionType === "spotifySave") {
        buttonColor= "spotify-color";
        buttonTextColor= "light ";
        icon = FaSpotify;
        
    } else if (actionType === "joinGroup") {
        buttonColor= "complete-registration-color";
        buttonTextColor= "dark ";
        icon = HiUserGroup;
    }
    
    else if (actionType === "claimStarterPack") {
        buttonColor= "spotify-color";
        buttonTextColor= "light ";
        icon = FaLock;
    }
    
    else if (actionType === "sendEmail") {
        buttonColor= "complete-registration-color";
        buttonTextColor= "dark ";
        icon = HiOutlineMail;
    }
    
    else if (actionType === "followMusic") {
        buttonColor= "music-color";
        buttonTextColor= "light ";
        icon = MdLibraryMusic;
    }
    
    else {
        buttonColor= "complete-registration-color";
        buttonTextColor= "dark ";
        icon = MdLibraryMusic;
    }
    
    // const { buttonColor, buttonTextColor, icon, handleActionButtonClick } =
    // (actionType === "spotifyPlay") ? {
    // buttonColor: "spotify-color",
    // buttonTextColor: "light ",
    // icon: FaSpotify,
    // handleActionButtonClick: null,
    // }
    // :
    // (actionType === "spotifyFollow") ? {

    // }
    // :
    // (actionType === "spotifySave") ? {
    // buttonColor: "spotify-color",
    // buttonTextColor: "light ",
    // icon: FaSpotify, 
    // handleActionButtonClick: null,
    // }
    // :
    // (actionType === "streetTeamJoin") ? {
    // buttonColor: "complete-registration-color",
    // buttonTextColor: "dark ",
    // icon: MdLibraryMusic,
    // handleActionButtonClick: window.open(url),
    // }
    // :
    // {buttonColor: "complete-registration-color",
    // buttonTextColor: "dark ",
    // icon: MdLibraryMusic,
    // handleActionButtonClick: null,
    // }
    
    return(
        <div id = {actionType + "TypedButton"} className="button-container">
              <ActionPointsButton 
                text={completed ? postActionText : preActionText} 
                path={url}
                icon={completed ? FaCheckCircle : icon}
                points={pointValue}
                textBoxColor={completed ? buttonColor + "-gradient clicked" : buttonColor + "-gradient"}
                pointsBoxColor={completed ? buttonColor + " clicked" : buttonColor}
                buttonTextStyle={completed ? "light clicked-text " : buttonTextColor}
                buttonIconStyle={completed ? "light clicked-text " : buttonTextColor}
                heightClassName="button-small-height"
                pointsSize="button-points-total-action"
                completed={completed}
                actionType={actionType}
              />
        </div>
        )
}

export default ActionPointsButtonTyped