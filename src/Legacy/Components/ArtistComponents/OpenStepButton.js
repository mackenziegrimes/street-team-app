import React, { useState } from 'react';

import { Link } from '@reach/router';
import { FaAngleRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import {AiFillEdit} from "react-icons/ai";
import {AiFillWarning} from "react-icons/ai";


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

function OpenStepButton({stepName}) {


    return(
        <div class="remaining-tasks-button">
          <Link class="link-button" to={stepName}>
          <Button type="Submit">
            <div className= "button-text-box dark outline">
              <p className="complete-registration-button-text center t-xs oswald light">
              OPEN STEP
              </p>
            </div>
          </Button>
          </Link>
        </div>
        )
}

export default OpenStepButton