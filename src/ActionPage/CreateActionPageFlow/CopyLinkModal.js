import React, { useState, useRef } from 'react';

import { Link } from '@reach/router';
import { FaAngleRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from "react-bootstrap/Modal";

import styled from 'styled-components';

import NavbarSteps from './NavbarSteps';

// import Checkfield from "./../Checkfield";

const CopyLinkModal = ({
onHide,
dialogClassName,
icon,
modalBodyText,
modalTitleText,
modalButtonText,
modalButtonClass,
show,
setShow,
handleClose,
handleShow
}) => {

    return(
    <div>
      <Modal show={show} onHide={handleClose} dialogClassName="">
        <Modal.Header closeButton>
          <Modal.Title>Congrats! Here's Your Link</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Log in with your Spotify account to sync to your artist profile.
            <Button className="card-container-button spotify-color-gradient light flex-box margin-top-20">
              <div class="flex-item flex">
                  {icon ? React.createElement(icon) : null}
              </div>
              <div class="flex-item">
              Log In To Spotify 
              </div>
            </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="modal-button" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" className="modal-button" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
        )
}

export default CopyLinkModal