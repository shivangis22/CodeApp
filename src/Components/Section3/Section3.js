import React from 'react';
import Image from './Images/benefit.svg';
import './Section3.css';

function Section3(){
    return(
        <div className="Section">
        <div className="Col1">
            <div className= "Hd">Collaborative Environment</div>
            <div className="Cnt">
                <ul>
                    <li>Experience of working in collaboration with a team.</li>
                    <li>Better Work & Code management.</li>
                </ul>
            </div>
            <div className="Hd">Open Source
            </div>
            <div className="Cnt">
                <ul>
                    <li>Sharing Ideas, Tools &  Resources in an Open Source environment.</li>
                    <li>Projects will be open for all members to contribute, and also to find contributors for their projects.</li>
                </ul>
            </div>
        </div>
        <div className="Col2">
            <img src={Image} alt="Image" height="400" width="400"></img>           
        </div>
        <div className="Col3">
            <div className="Hd">Help & Support</div>
            <div className="Cnt">
            Support available to all members from the whole community which consists of students from all years and branches.
            </div>
            <a className="JoinUs" href="#"> Join Us Now</a>
        </div>

        </div>
    )
}

export default Section3;