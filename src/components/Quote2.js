import React from 'react';

function Quote2(props) {
    return(
        <div className='quote'>
            <div class="grid-container">
                <div class="grid-item">
                    <div className='textPart'>
                        <h1 className='topQuotemark'>"</h1>
                        <p className='quoteTxt'>{props.quote + '"'}</p>
                        <h1 className='bottomQuotemark'>"</h1>
                    </div>
                </div>
                <div class="grid-item">
                    <img className='dogImg' src={props.img}/>
                </div>  
            </div>
        </div>
    );
}

export default Quote2;