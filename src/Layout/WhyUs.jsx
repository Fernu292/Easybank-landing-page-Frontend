import React from "react";
import "../styles/Layout/WhyUs.scss";

//icons
import Online from "../images/icon-online.svg";

const WhyUs = () => {
  return (
    <section className="whyUs">
      <div className="container">
        <h2>Why choose Easybank?</h2>

        <div className="reasons">
          <div className="reason">
            <img src={Online} alt="Online icon" />
            <p>
              {" "}
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>

          <div className="reason"></div>

          <div className="reason"></div>

          <div className="reason"></div>

          <div className="reason"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
