import React, {useState} from "react"
import { Link } from '@reach/router';
import Button from 'react-bootstrap/Button';
import SpotifyPlayBox from "./SpotifyPlayBox"


function ActionPointsButton({path,text,icon,points,textBoxColor,pointsBoxColor,buttonIconStyle,buttonTextStyle,heightClass,pointsSize}) {
    
    return(
        <div class="button-container">
          <Link className="link-button" to={path}>
            <Button
            className={"btn-default facebook-registration-button button-text-box " + heightClass}
            >
              <div class= {"button-text-box " + textBoxColor}>
                <div class={"button-icon " + buttonIconStyle}>
                    {React.createElement(icon)}
                </div>
                <p class={"button-text " + buttonTextStyle}>
                  {text}
                </p>
              </div>
              <div class={"button-points-box " + pointsBoxColor}>
                  <h1 class ={pointsSize + " subtle-center " + buttonTextStyle}> +{points} </h1>
                  <h5 class={"countdown-label points-label " + buttonTextStyle} > points </h5>
              </div>
            </Button>
          </Link>
        </div>
        )
}

export default ActionPointsButton