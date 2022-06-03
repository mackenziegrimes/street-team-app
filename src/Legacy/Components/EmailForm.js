import React from "react"
import Button from 'react-bootstrap/Button';
import { IoIosCheckbox } from "react-icons/io"
import { Link } from '@reach/router';

function EmailForm () {
  
  const noPadding = {
    paddingTop: 0,
    paddingBottom: 0,
  }
  
    return(
        <div> 
            <form class="form-container">
              <div className="form-group">
                <label htmlFor="exampleInputName1"></label>
                <input type="name" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Your Full Name..."/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1"></label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Your Email Address..." />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPhone1"></label>
                <input type="phone" className="form-control" id="exampleInputPhone1" placeholder="Your Phone Number..." />
              </div>
              <div class="button-container">
                <Link class="link-button" to="/contest">
                <Button type="Submit" className="btn-default complete-registration-button button-text-box">
                  <div className= "complete-registration-color-gradient button-text-box dark">
                    <div className="complete-registration-button-icon">
                        <IoIosCheckbox />
                    </div>
                    <p className="complete-registration-button-text dark">
                    Complete Registration
                    </p>
                  </div>
                  <div className="complete-registration-color button-points-box dark">
                      <h1 className="button-points-total-action subtle-center dark"> +20 </h1>
                      <h5 className="countdown-label dark points-label" > points </h5>
                  </div>
                </Button>
                </Link>
              </div>
            </form>
        </div>
        )
}

export default EmailForm