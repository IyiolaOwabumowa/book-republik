import React from "react";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="container flex">
          <img src={logo} className="logo" alt="" />
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">My Shelf</a>
              </li>
              <li>
                <a href="#">Notifications</a>
              </li>
              <li>
                <a href="#">Account</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="info-bar">
          <strong> From the Mayor's Desk:</strong>
          <p style={{ marginLeft: 10 }}>Hello Citizens of this republic!</p>
          <strong style={{ marginLeft: 10 }}>Click to read this briefing</strong>
        </div>
      </div>
    </div>
  );
};

export default Header;
