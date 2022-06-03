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

const FollowMusicInputForm = ({
      inputValues,
      handleOnChange,
      setInputValues,
}) => {

    return(
          <div className="form-action-toggle toggle-action-inputs" >
              <div className="form-group">
                <label htmlFor="exampleInputEmail1"></label>
                <input 
                type="email"
                name="followMusicUrl"
                value={inputValues.followMusicUrl}
                onChange={handleOnChange}
                className="form-control" 
                id="" 
                placeholder="Enter Follow Music URL" 
                />
              </div>
          
          </div>
        )
}

export default FollowMusicInputForm