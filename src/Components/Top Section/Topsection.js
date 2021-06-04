import React from 'react';
import './Topsection.css';
import Typewriter from 'typewriter-effect';
import TeamImg from './Images/TeamImg.svg';

function Topsection(){
    return(
        <div className="top">
            <div className="leftsection">
                <div className="Heading">
                    Join us at
                     <span className="code">
                     <Typewriter 
                     options={{
                         strings: ['CODE'],
                         autoStart: true,
                         loop: true,
                     }} />
                     </span>
                     
                </div>
                <div className="Subhd">
                    "Learn. Build. Innovate"
                </div>
                <div>
                       
                    <a className="Joinus" href="#">
                        Join Us
                    </a>
                </div>

            </div>

            <div className="rightsection">
                <img src={TeamImg} alt="Team" className="Teamimage"></img>

            </div>
        </div>
    )
}

export default Topsection;