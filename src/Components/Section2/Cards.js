import React from 'react';
import './Section.css';

import {FaCode} from 'react-icons/fa';
import {SiArduino} from 'react-icons/si';
import {BiSelection} from 'react-icons/bi';
import {SiAutodesk} from 'react-icons/si';
import {BsBuilding} from 'react-icons/bs';

 function Cards()
{

    return(
        <div className="Cardsection">
            <div className="Col1">
                <div className="card">
                 <FaCode className="icon"></FaCode>
                 <h3 className="CardHd">Computer Science & Information Technology</h3>
                 <div className="CardCnt">Developing and maintainig webpages, latest mobile technologies, machine learning and data analysis tools</div>
                </div>
                <div className="card">
                 <SiArduino className="icon"></SiArduino>
                 <h3 className="CardHd">Electronics and Communication Enginnering</h3>
                 <div className="CardCnt">Code will provide guidance with MATLAB and Arduino</div>
                </div>
                <div className="card">
                 <BiSelection className="icon"></BiSelection>
                 <h3 className="CardHd">Electrical Engineering</h3>
                 <div className="CardCnt">PLC Automation and MATLAB</div>
                </div>
            </div>
            <div className="Col2">
            <div className="card">
                 <SiAutodesk className="icon"></SiAutodesk>
                 <h3 className="CardHd">Mechanical Engineering</h3>
                 <div className="CardCnt">Guidance with software like AutoCAD. SolidWorks and Analysis</div>
                </div>
                <div className="card">
                 <BsBuilding className="icon"></BsBuilding>
                 <h3 className="CardHd">Civil Engineering</h3>
                 <div className="CardCnt">AutoCAD and Staad.Pro</div>
                </div>


            </div>
        </div>
    )
}

export default Cards;