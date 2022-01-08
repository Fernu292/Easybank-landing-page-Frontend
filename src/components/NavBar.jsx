import React, { useState } from "react";
import Logo from "../images/logo.svg";

//Icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

//styles
import "../styles/Components/_NavBar.scss";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const width = window.screen.width;

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  
  return (
    <nav className="navigation">
      <div className="container navbar">
        <img src={Logo} alt="Logo" loading="lazy" className="logo" />
        {showNav ? (
          <AiOutlineClose className="menu-icon" onClick={handleShowNav} />
        ) : (
          <AiOutlineMenu className="menu-icon" onClick={handleShowNav} />
        )}

        <div className={showNav ? "show": "hidden"}></div>
        <div className={`${showNav ? "menu" : "hidden"} Menu-Desk`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
          {width >= 1200 
            ? <button className="btn-principal btn-desktop">Reuest Invite</button>
            : null
          }
      </div>
    </nav>
  );
};

export default NavBar;
