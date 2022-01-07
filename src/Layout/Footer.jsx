import React from "react";
import Logo from "../images/logo2.svg";

import "../styles/Layout/Footer.scss";

//Social-media
import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Twitter from "../images/icon-twitter.svg";
import YouTube from "../images/icon-youtube.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <img src={Logo} alt="logo" className="logo-footer" />

        <div className="social">
          <img src={Facebook} alt="Facebook-icon" />
          <img src={YouTube} alt="Youtube-icon" />
          <img src={Twitter} alt="Twitter-icon" />
          <img src={Pinterest} alt="Pinterest-icon" />
          <img src={Instagram} alt="Instagram-icon" />
        </div>

        <div className="nav-footer">
            <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Support</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <button className="btn-principal">Request Invite</button>

        <p>@EasyBank. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
