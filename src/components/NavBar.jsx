import React, { useState } from "react";
import Logo from "../images/logo.svg";

//Icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

//styles
import "../styles/Components/_NavBar.scss";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

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
        <div className={showNav ? "menu" : "hidden"}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
