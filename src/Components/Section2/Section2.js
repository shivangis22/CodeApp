import React from 'react';
import './Section.css'
import Cards from './Cards.js';
import Img from './Images/Section2img.svg';

function Section2(){
    return(
        <div className="SectionContainer">
            <div className="Cardsec">
                <Cards/>
            </div>
            <div className="Disc">
                <div className="heading">
                What we do?
                </div>
                <div className= "content">
                CODE aims to provide better learning, collaboration, and career opportunities.CODE aims to establish a coding culture on campus, reaching every student passionate for development.
                To bring innovation in our College. To set up a supportive technical community that encourages innovative ideas.
                </div>
                <a className="Learnmore" href="#">
                    Learn More
                </a>
                <img src={Img} alt="Image" height="300" width="300"></img>
            </div>
        </div>
    )
    
}

export default Section2;