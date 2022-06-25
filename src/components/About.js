import React from 'react';
import styles from '../styles/about.css';

import doggoStanding from '../images/dogVectors/doggo2paws.png';


function About() {
    return(
        <div className='about'>
            <h1 className='header'>O nas:</h1>
            <div class="grid-container">
                <div class="grid-item">
                    <p className='aboutTxt'>
                        Serdecznie zapraszamy do korzystania z naszych usług. Miejsce to powstało z miłości do zwierząt. Oferujemy indywidualne podejście i profesjonalną całodobową opiekę.
                    </p>
                </div>
                <div class="grid-item">
                    <img className='dogImg' src={doggoStanding}/>
                </div>  
            </div>
        </div>
    );
}

export default About;