import React, {useState} from "react"
import Button from 'react-bootstrap/Button';
import { IoIosCheckbox } from "react-icons/io"
import { FaCopy } from "react-icons/fa"
import { Link } from '@reach/router';
import { FaClipboardCheck } from "react-icons/fa"
// import CopyText from "./CopyText"
// import Alert from 'react-bootstrap/Alert'

import useClipboard from "react-use-clipboard";
// import Toast from 'react-bootstrap/Toast'
// import ToastBody from 'react-bootstrap/ToastBody'
// import ToastHeader from 'react-bootstrap/ToastHeader'

function ReferralForm ({refUrl}) {

  const noPadding = {
    paddingTop: 0,
    paddingBottom: 0,
  }
  
  const [isCopied, setCopied] = 
    useClipboard(refUrl, {successDuration: 1000});
    
  
  const [displayToast, setToastDisplay] = useState(false);
  
        // <div class="copy-form-container">
        //   <div class="copy-form-box">
        //     <form className="copy-form-group">
        //         <label htmlFor="exampleInputName1"></label>
        //         <input id="raf-link" type="text" class="copy-form-control" value={refUrl} readonly="" onClick="this.setSelectionRange(0, this.value.length)" />
        //     </form>
        //   </div>
        //         <div class="copy-text-box">
        //         <Button 
        //         onClick={setCopied}
        //         className="btn-default copy-registration-button copy-button-container">
        //           <div className= "complete-registration-color-gradient copy-button-text-box dark">
        //             <div className="complete-registration-button-icon">
        //             {isCopied ? <FaClipboardCheck /> : <FaCopy />}
        //             </div>
        //             <p className="complete-registration-button-text dark">
        //             {isCopied ? "Copied!" : "Copy"}
        //             </p>
        //           </div>
        //           <div className="complete-registration-color button-points-box dark">
        //               <h1 className="button-points-total-action subtle-center dark"> +500 </h1>
        //               <h5 className="countdown-label dark points-label" > points </h5>
        //           </div>
        //         </Button>
        //       </div>
        // </div>
  
    return(
        <div class="referral-grid-container">
          <div class="referral-link-box">
            <form className="copy-form-group">
                <label htmlFor="exampleInputName1"></label>
                <input id="raf-link" type="text" class="copy-form-control" value={refUrl} readonly="" onClick="this.setSelectionRange(0, this.value.length)" />
            </form>
          </div>
          <div class="referral-button-box" onClick={setCopied}>
            <div class="referral-button-text-box color-gradient">
              <div class="copy-button-text"> 
              {isCopied ? <FaClipboardCheck /> : <FaCopy />}
              {isCopied ? " Copied" : " Copy"}
              </div>
            </div>
            <div class="referral-button-points-box color"> 
              <div class="referral-points-total nudge-left dark"> +500 </div>
              <div class="referral-points-label dark"> points </div>
            </div>
          </div>
        </div>
        )
}

export default ReferralForm