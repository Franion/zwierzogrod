import { useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/navbar.css';

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        console.log("clicked");
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header>
            <h3>Zwierzogród</h3>
            <nav ref={navRef}>
                <a href='./'>Home</a>
                <a href='https://www.facebook.com/Hotel-dla-zwierząt-Zwierzogród-1600551673385797/photos/?ref=page_internal'>Galeria</a>
                <a href='https://www.google.com/maps/place/Hotel+dla+zwierząt+Zwierzogród/@51.5184726,19.5483549,16.59z/data=!4m13!1m7!3m6!1s0x471a2459c74b2dd7:0x83c9efe91f4859f5!2sPorębska+3,+95-080+Syski,+Polska!3b1!8m2!3d51.5176357!4d19.5500316!3m4!1s0x471a35f88562b069:0x43b1d5d0086e3d52!8m2!3d51.5170486!4d19.5503412'>Lokalizacja</a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;