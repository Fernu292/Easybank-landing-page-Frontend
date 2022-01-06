import React from 'react';

//styles
import "../styles/Layout/Header.scss";

//Components
import NavBar from './NavBar';

import BGMobile from "../images/bg-intro-mobile.svg";
import Phones from '../images/image-mockups.png';

const Header = () => {
    return ( 
        <header className='header'>

            <NavBar />
            <div className='bg-image'>  
                <img src={BGMobile} alt="Bg-mobile" />
                <img src={Phones} alt="Bg-mobile" className='phone-img'/>
            </div>

        </header>
    );
}
 
export default Header;
