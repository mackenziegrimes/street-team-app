import React from "react"
import { Link } from '@reach/router';
import { FaAngleRight } from "react-icons/fa";

function ArtistNavbar() {
    return(
        <nav class="navbar-container">
            <div class="navbar-row"> 
                <div class="navbar-block-left"> 
                    <div class="navbar-image-box">
                        <img src="../mm_square_bright.png" class="navbar-image" />
                    </div>
                    <div class="navbar-right-divider"> <FaAngleRight /> </div>
                    <div> <p class="navbar-contest-title"> Create Your Card </p> </div>
                </div>
                <div class="navbar-block-right"> 
                    <Link class="link-button" to="/login">
                    <div class="navbar-item"> <p class="navbar-contest-title"> Logout </p> </div>
                    </Link>
                    <div class="navbar-item"> <img src="../mj_lights.png" class="navbar-image"/> </div>
                </div>
            </div>
        </nav>
        )
}

export default ArtistNavbar