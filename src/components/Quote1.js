import React from 'react';

import styles from '../styles/Quote.css';

function Quote1(props) {
    return(
        <div className='quote'>
            <div class="grid-container">
                <div class="grid-item">
                    <img className='dogImg' src={props.img}/>
                </div>  
                <div class="grid-item">
                    <div className='textPart'>
                        <h1 className='topQuotemark'>"</h1>
                            <p className='quoteTxt'>{props.quote}</p>
                        <h1 className='bottomQuotemark'>"</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quote1;