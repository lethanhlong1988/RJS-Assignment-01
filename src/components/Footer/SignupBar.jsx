import React from "react";

import "./SignupBar.css";

const SignupBar = () => {
  return (
    <div className="sign-up-bar-container">
      <div className="sing-up-bar-content">
        <h1>Save Time, save money!</h1>
        <p>Sign up and we'll send the best deals to you</p>
        <div className="signupBar">
          <input className="signUpInput" type="email" placeholder="Your Email" />
          <button className="blueButton">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default SignupBar;
