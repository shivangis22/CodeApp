import React from 'react';
import Logo from './CodeLogo.png';
import './Navbar.css';

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
             <a href="#">
                 <img src={Logo} alt="Logo" height="80" width="80"></img>
             </a>
            </div>
            <div className="pagesSection">
                <a className="pages" href="#">
                    About Us
                </a>
                <a className="pages" href="#">
                    Career
                </a>
                <a className="pages" href="#">
                    Blog
                </a>
                <a className="pages" href="#">
                    Contact Us
                </a>
            </div>
        </div>
    )
}

export default Navbar;