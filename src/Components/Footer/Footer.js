import React from 'react';
import Logo from './Images/Logo.png';
import './Footer.css';
import{ImFacebook2} from 'react-icons/im';
import {FaGithubSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

function Footer(){
    return(
        <div className="footer">
            <div className="logo">
                <img src={Logo} alt="Logo" height="50" width="50"></img>
            </div>
            <div className="Copyright">
            ©Copyright 2021.Code Of Developers. Biet,Jhansi
            </div>
            <div className="SocialLinks">
            <ImFacebook2 className="ic"></ImFacebook2>
            <FaGithubSquare className= "ic"></FaGithubSquare>
            <FaLinkedin className="ic"></FaLinkedin>
            </div>
        </div>
    )
}

export default Footer;