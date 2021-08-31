import React, {useState, useCallback, useContext} from "react"
import Button from 'react-bootstrap/Button';

import { IoIosCheckbox } from "react-icons/io";
import { GiTicket } from "react-icons/gi";
import { FaSpotify } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLibraryMusic } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { FaLock } from "react-icons/fa";

import {totalPointsContext} from '../Context/TotalPointsContext';

function ActionButton({actionButtonConfig}) {
   //this is creating a local 
   // eventually this should use a database record for if a user has taken an action, for now it's just local state

  const [completed, setCompleted] = useState(false);
  const totalPointCount = useContext(totalPointsContext);
  function cleanUrl(urlString){
    var link=""
    if(urlString!=null){
      //if the link is a mailto link, don't add HTTP to it
      if(urlString.toUpperCase().includes("MAILTO:")){
        link=urlString;
      }
      else{
        link = (urlString.indexOf('://') === -1) ? 'http://' + urlString : urlString;
      }
    }
    return link;
  }
  const handleClick = useCallback(
    (e) => {
      setCompleted(true);
      const pointValue = actionButtonConfig.pointValue ?? 10; //default value is 10 points
      totalPointCount.dispatch({type:'Increment',amount:pointValue})
      if (actionButtonConfig.targetURL!=undefined){
        const cleanUrlString = cleanUrl(actionButtonConfig.targetURL)
        console.log(cleanUrlString);
        window.open(cleanUrlString, "_blank");
      }
      //here is where we will put logic for other ActionButtonServices
    },
    []
  );

   
   // convert hex colors to hsla
   
// var convert = require('color-convert');

// var hslColor = convert.hex.hsl(actionButtonConfig.backgroundColor);

// actionButtonConfig.backgroundColor = "hsl(" + hslColor + ")";
   
// console.log("hsla button color:");

// console.log(actionButtonConfig.backgroundColor);
   
  //define the icon component based on the actionButtonCongif.buttonIcon parameter
  //note, this is where we would need to define additional icons
  
  // we probably want to create the custom styling here 
  // based on "serviceAction" eventually.. but right now it's "null"
  
  
function LightenDarkenColor(col,amt) {
    var usePound = false;
    if ( col[0] == "#" ) {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if ( r > 255 ) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if ( b > 255 ) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if ( g > 255 ) g = 255;
    else if  ( g < 0 ) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

    // const lighterColor = ("#" + regularColor);
  
  
    var icon = MdLibraryMusic;
    const regularColor = actionButtonConfig.backgroundColor;
    const lighterColor = LightenDarkenColor(regularColor,5);
    const darkerColor = LightenDarkenColor(regularColor,-15);
    
    const gradientColor = "linear-gradient(90deg, " + lighterColor + " 0%, " + regularColor + " 75%, " + darkerColor + " 100%)";
    
    const completedGradientColor = darkerColor;
    
    const completedButtonFilter = completed ? "completed-button-filter" : null;
    const completedTextFilter = completed ? "completed-text-filter" : null;

    
    const finalChosenColor = completed ? completedGradientColor : gradientColor;
    // console.log("finalChosenColor:");
    // console.log(finalChosenColor);  
    
    // console.log("gradientColor:");
    // console.log(gradientColor);  
    
    // console.log("lighterColor:");
    // console.log(lighterColor);
    
    // var 
    
    if(actionButtonConfig.buttonIcon){
      switch(actionButtonConfig.buttonIcon) {
        case "Ticket":
          icon = FaLock;
          // buttonColor = "green";
          break;
        case "Trophy":
          icon = FaTrophy;
          break;
        case "Email":
          icon = HiOutlineMail;
          break;
        case "Group":
          icon = HiUserGroup;
          break;
        case "Music":
          icon = MdLibraryMusic;
          break;
        default:
          icon = MdLibraryMusic; //default icon
        }
    }
    console.log("in the action button component")
    console.log("action Button data is:" )
    console.log(actionButtonConfig)
    
    return(
        <div id={actionButtonConfig.id + "ButtonDiv"} className="button-container">
            <Button
            className={"btn-default facebook-registration-button button-full-container "}
            onClick={handleClick}
            >
              <div className={"button-text-box " + completedButtonFilter} style={{
                    
                    background: gradientColor,
                  }}>
                <div className={"button-icon " + completedTextFilter} style={{
                    color: actionButtonConfig.textColor,
                  }}>
                    {React.createElement(icon)}
                </div>
                
                <p className={"button-text " + completedTextFilter} style={{
                    color: actionButtonConfig.textColor,
                  }}>
                  {completed ?  actionButtonConfig.postActionText : actionButtonConfig.preActionText}
                </p>
              </div>
              <div className={"button-points-box " + completedButtonFilter} style={{
                    color: actionButtonConfig.textColor,
                    background: regularColor,
                  }}>
                  <h1 className={" subtle-center " + completedTextFilter} style={{
                    color: actionButtonConfig.textColor,
                  }} > {actionButtonConfig.pointValue} </h1>
                  <h5 className={"countdown-label points-label " + completedTextFilter} style={{
                    color: actionButtonConfig.textColor,
                  }}> points </h5>
              </div>
            </Button>
        </div>
        )
}

export default ActionButton