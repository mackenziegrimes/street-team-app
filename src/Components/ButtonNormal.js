import React, {useState} from "react"
import { Link } from '@reach/router';
import Button from 'react-bootstrap/Button';


function ButtonNormal({path,text,icon,textBoxColor,buttonIconStyle,buttonTextStyle,heightClass,buttonBoxStyle}) {
    
    return(
        <div class="normal-button-container">
          <Link className="link-button" to={path}>
            <Button
            className={"btn-default facebook-registration-button button-text-box " + heightClass}
            >
              <div class= {buttonBoxStyle + " " + textBoxColor}>
                <div class={buttonIconStyle}>
                    {React.createElement(icon)}
                </div>
                <p class={buttonTextStyle}>
                  {text}
                </p>
              </div>
            </Button>
          </Link>
        </div>
        )
}

export default ButtonNormal