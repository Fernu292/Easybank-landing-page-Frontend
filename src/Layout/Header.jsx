import React from "react";

//styles
import "../styles/Layout/Header.scss";

//Components
import NavBar from "../components/NavBar";

import BGMobile from "../images/bg-intro-mobile.svg";
import Phones from "../images/image-mockups.png";

const Header = () => {
  return (
    <header className="header">
      <NavBar />
      <div className="bg-image">
        <img src={BGMobile} alt="Bg-mobile" className="Bg-mobile"/>
        <img src={Phones} alt="Bg-mobile" className="phone-img" />
      </div>

      <div className="header-content container">
        <h2>Next generation digital banking</h2>

        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>

        <button className="btn-principal">Request Invite</button>
      </div>
    </header>
  );
};

export default Header;
