import React, {useState} from "react"
import { Link } from '@reach/router';
import Button from 'react-bootstrap/Button';
import SpotifyPlayBox from "./SpotifyPlayBox"


function ActionPointsButton({path,text,icon,points,textBoxColor,pointsBoxColor,buttonIconStyle,buttonTextStyle,heightClassName,pointsSize,actionType}) {

    return(
        <div key={actionType + "Key"} id={actionType + "ButtonDiv"} className="button-container">
          {/*<Link className="link-button" to={path}*/}
            <Button
            className={"btn-default facebook-registration-button button-text-box " + heightClassName}
            >
              <div className= {"button-text-box " + textBoxColor}>
                <div className={"button-icon " + buttonIconStyle}>
                    {React.createElement(icon)}
                </div>
                <p className={"button-text " + buttonTextStyle}>
                  {text}
                </p>
              </div>
              <div className={"button-points-box " + pointsBoxColor}>
                  <h1 className={pointsSize + " subtle-center " + buttonTextStyle}> +{points} </h1>
                  <h5 className={"countdown-label points-label " + buttonTextStyle} > points </h5>
              </div>
            </Button>
          {/*</Link> */}
        </div>
        )
}

export default ActionPointsButton