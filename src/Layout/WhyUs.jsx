import React from "react";
import "../styles/Layout/WhyUs.scss";

//icons
import Online from "../images/icon-online.svg";
import Budgetin from "../images/icon-budgeting.svg";
import onBoarding from "../images/icon-onboarding.svg";
import OpenAPI from "../images/icon-api.svg";

const WhyUs = () => {
  return (
    <section className="whyUs">
      <div className="container">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your
          financial hub. Control your finances like never before.
        </p>

        <div className="reasons">
          <div className="reason">
            <img src={Online} alt="Online-icon" />
            <h2>Online Banking</h2>
            <p>
              Our modern web and mobile applications allow you to keep track of your finances
              wherever you are in the world.
            </p>
          </div>

          <div className="reason">
            <img src={Budgetin} alt="budgeting-icon" />
            <h2>Simple Budgeting</h2>
            <p>
              
              See exactly where your money goes each month. Receive notifications when you’re
              close to hitting your limits.
            </p>
          </div>

          <div className="reason">
            <img src={onBoarding} alt="onboarding-icon" />
            <h2> Fast Onboarding</h2>
            <p>
              We don’t do branches. Open your account in minutes online and start taking control
              of your finances right away.
            </p>
          </div>

          <div className="reason">
            <img src={OpenAPI} alt="open-api" />
            <h2>Open API</h2>
            <p>
              Manage your savings, investments, pension, and much more from one account. Tracking
              your money has never been easier.

            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
