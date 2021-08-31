import React, { useState, useRef } from 'react';
import { FaSpotify } from "react-icons/fa";

import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

import AuthenticateModal from './ArtistComponents/AuthenticateModal'


function Checkfield({
  label,
  name,
  checked,
  defaultChecked,
  value,
  setSave,
  style,
  onChange,
  className,
  icon,
  iconStyle,
  authenticated,
  setAuthenticated,
  handleAuthenticated
}) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function saveAuthentication () {
    handleClose();
    if (authenticated){
    setSave(true)}
    else {
    }
    // value=true;
  }
  

  
  return (
    <div className={"checkfield " + className} style={style}>
      <label className="checkfield-container">
        <div className="checkfield-check">
          <input
            className="checkfield-checkinput invisible"
            type="checkbox"
            name={name}
            value={value}
            defaultChecked={defaultChecked ? defaultChecked : null}
            checked={checked ? checked : null}
            onChange={authenticated ? onChange : handleShow}
          />
          <div className="checkfield-checksymbol">
            <span className="checkfield-checksymbol-state">
              <svg width="100%" height="100%" viewBox="0 0 512 512">
                <path d="M223.9,329.7c-2.4,2.4-5.8,4.4-8.8,4.4s-6.4-2.1-8.9-4.5l-56-56l17.8-17.8l47.2,47.2l124.8-125.7l17.5,18.1L223.9,329.7z" />
              </svg>
            </span>
          </div>
        </div>
        {label ? <div className="checkfield-label">{label}</div> : null}
        <div class={iconStyle}>
            {icon ? React.createElement(icon) : null}
        </div>
      </label>
  
      
      <Modal show={show} onHide={handleClose} dialogClassName="">
        <Modal.Header closeButton>
          <Modal.Title>Spotify Integration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Log in with your Spotify account to sync to your artist profile.
            {authenticated ? 
            
            <Button 
            className="card-container-button spotify-color-gradient light flex-box margin-top-20 clicked"
            onClick={handleAuthenticated}
            >
              <div class="flex-item flex">
                  {icon ? React.createElement(icon) : null}
              </div>
              <div class="flex-item">
              Logged In!
              </div>
            </Button>
            
            :
            <Button 
            className="card-container-button spotify-color-gradient light flex-box margin-top-20"
            onClick={handleAuthenticated}
            >
              <div class="flex-item flex">
                  {icon ? React.createElement(icon) : null}
              </div>
              <div class="flex-item">
              Log In To Spotify 
              </div>
            </Button>
            }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="modal-button" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" className="modal-button" onClick={saveAuthentication}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Checkfield;
