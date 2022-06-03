// import '.../App.css';

import { Link} from '@reach/router';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

// import Background from './Background';
import Countdown from '../Countdown';
import ReactDeadline from '../ReactDeadline';




function OptinCard({contestId,contestHeadline,contestDescription,buttonText,contestDeadline,contestImg}) {
  
 contestHeadline= (contestHeadline=="") ? "Win a Baby" : contestHeadline;
 contestDescription= (contestDescription=="") ? "Enter for a chance to win a happy, healthy baby girl!" : contestDescription;
 buttonText= (buttonText=="") ? "Enter to Win >" : buttonText;
contestDeadline= (contestDeadline=="") ? "4/13/2021" : contestDeadline;
contestImg= (contestImg=="") ? "../baby.png" : contestImg;
const linkUrl = "/secure/contest/"+contestId;

  
  return (
    <div class="card-default">
      <Card>
        <Card.Img variant="top" src={contestImg} />
        <Card.Body>
          <div className="card-container-text">
            <Card.Title className="headline-paragraph-text">
              {contestHeadline}
            </Card.Title>
            <Card.Text>
              {contestDescription}
            </Card.Text>
            <h5 className="fade-light"> Contest Ends In </h5>
            <div className="shrink-width">
            <ReactDeadline startDate={contestDeadline} />
            </div>
          </div>
          {/* todo -- card could be reusable for more than just the opt in if we had the link passed into this component*/}
          {/* TO DO: switch to unique URL routing system */}
          {/*<Link className="link-button" to={"/contest/" + contestId}>*/}
          <Link className="link-button" to={linkUrl}>
            <Button className="btn active btn-default card-container-button button-opt-in">
              {buttonText} 
            </Button>
         
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default OptinCard;
