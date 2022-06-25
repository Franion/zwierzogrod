import React from 'react';

import styles from '../styles/contact.css';

import facebookIcon from '../images/fblogo.png'

function Contact() {
    return(
        <div className='contact'>
            <h1 className='header'>Kontakt</h1>
            <div class="grid-container">
                <div class="grid-item">
                    <div className='contactInfo'>
                        <p className='contactTxt'>Adres: Porębska 3, Syski</p>
                        <p className='contactTxt'>Mail: hotelzwierzogrod@gmail.com</p>
                        <p className='contactTxt'>Telefon: +48 511 167 633</p>
                    </div>
                </div>
                <div class="grid-item">
                    <a href='https://www.facebook.com/Hotel-dla-zwierząt-Zwierzogród-1600551673385797'>
                        <img className='fbIcon' src={facebookIcon} />
                    </a>
                </div>  
            </div>
        </div>
    )
}

export default Contact;