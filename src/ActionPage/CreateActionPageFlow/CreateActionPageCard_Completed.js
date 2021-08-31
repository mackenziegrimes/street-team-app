// import '.../App.css';

// import { Link} from '@reach/router';
import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import styled from 'styled-components';

// import Background from './Background';
// import Countdown from '../Countdown';
// import ReactDeadline from '../ReactDeadline';
// import ButtonNormal from '../ButtonNormal';
// import { FaFacebook } from "react-icons/fa";
// import { MdSettings } from "react-icons/md";
// import { FaTrophy } from "react-icons/fa";
// import { MdLaunch } from "react-icons/md";
// import { FaFire } from "react-icons/fa";
// import { FaCheckSquare } from "react-icons/fa";

// import ArtistNavbar from "../ArtistComponents/ArtistNavbar"
import Navbar from "./Navbar"
// import ConnectAccount from "./RightBoxes/ConnectAccount"
// import EnterDetails from "./RightBoxes/EnterDetails"
import FanActions from "./RightBoxes/FanActions"
import CopyActionPageLink from "./CopyActionPageLink"
// import ReviewContest from "./RightBoxes/ReviewContest"
// import GetStarted from "./RightBoxes/GetStarted"


// import Text from "../Text";

const CAPCompletedCard = ({artistId,actionPageId}) => {
  
  const actionPageCardLink = "https://app.modern-musician.com/" + artistId + "/" + actionPageId;
  
  return (
    <div class="artist-wrapper"> <hr class="navbar-divider" />
      <CopyActionPageLink refUrl={actionPageCardLink} />
    </div>
  );
}

export default CAPCompletedCard;
