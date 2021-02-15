import React, { useEffect, useState } from "react";

import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import crowd from "../../assets/crowd.mp3";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = () => {
  const [clicked, setClicked] = useState("login");
  const [paused, setPaused] = useState(false);

  const playAudio = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    if (paused) {
      audioEl.pause();
    } else {
      audioEl.play();
    }
  };

  return (
    <>
      <div className="grid">
        <div className="auth-banner flex">
          <div className="align-music flex">
            <img src={logo} alt="" className="landing-logo" />
            <button
              onClick={() => {
                setPaused(!paused);
                playAudio();
              }}
              className="flex"
            >
              <FontAwesomeIcon icon={paused ? faPause : faPlay} />

              <span>Hear people in the republic</span>
            </button>
            <audio className="audio-element" loop={true}>
              <source src={crowd}></source>
            </audio>
          </div>
        </div>
        {clicked === "login" && (
          <div className="auth-form flex">
            <p>Enter your details to login to the republic</p>
            <input type="text" className="auth-input" placeholder="Email" />
            <input
              type="password"
              className="auth-input"
              placeholder="Password"
            />
            <button className="login-btn" onClick={() => {}}>
              LOG IN
            </button>
            <p
              onClick={() => {
                setClicked("forgotpassword");
              }}
              className="bottom-text"
            >
              Forgot your password? Click here
            </p>

            <p
              onClick={() => {
                setClicked("signup");
              }}
              className="bottom-text"
            >
              Sign up for book republik
            </p>
          </div>
        )}

        {clicked === "signup" && (
          <div className="auth-form flex">
            <p>Sign up to enter the republic (darn it's fun!)</p>
            <input type="text" className="auth-input" placeholder="Full Name" />
            <input type="text" className="auth-input" placeholder="Email" />
            <input
              type="password"
              className="auth-input"
              placeholder="Password"
            />
            <input
              type="password"
              className="auth-input"
              placeholder="Confirm Password"
            />
            <button className="login-btn" onClick={() => {}}>
              SIGN UP
            </button>
            <p
              onClick={() => {
                setClicked("login");
              }}
              className="bottom-text"
            >
              Already have an account? Click to login
            </p>
          </div>
        )}

        {clicked === "forgotpassword" && (
          <div className="auth-form flex">
            <p>Enter your email address to get a reset link</p>
            <input type="text" className="auth-input" placeholder="Email" />
            <button className="login-btn" onClick={() => {}}>
              SEND RESET LINK
            </button>
            <p
              onClick={() => {
                setClicked("login");
              }}
              className="bottom-text"
            >
              Already have an account? Click to login
            </p>
          </div>
        )}

        {clicked === "resetpassword" && (
          <div className="auth-form flex">
            <p>Reset your password (try not to forget this)</p>

            <input
              type="password"
              className="auth-input"
              placeholder="Password"
            />
            <input
              type="password"
              className="auth-input"
              placeholder="Confirm Password"
            />
            <button className="login-btn" onClick={() => {}}>
              RESET PASSWORD
            </button>
            <p
              onClick={() => {
                setClicked("login");
              }}
              className="bottom-text"
            >
              Already have an account? Click to login
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Landing;
