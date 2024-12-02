
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="index.html">
          <img src="images/logo.png" alt="blue logo" width="60" />
        </a>
      </div>
      <div className="nav">
        <a href="about.html">ABOUT</a>
        <a href="cafes.html">CAFES</a>
        <a href="#">MENU</a>
        <a href="#">COMPANY</a>
        <a href="#">NEWS</a>
      </div>
    </header>
  );
};

export default Header;
