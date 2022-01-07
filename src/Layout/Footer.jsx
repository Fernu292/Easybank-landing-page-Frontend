import React from 'react';
import Logo from "../images/logo.svg";

import "../styles/Layout/Footer.scss";


const Footer = () => {
    return ( 
        <footer className='footer'>
            <div className='container'>
                <img src={Logo} alt='logo' className='logo-footer'/>
            </div>
        </footer>
    );
}
 
export default Footer;
