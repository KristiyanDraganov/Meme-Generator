import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" className="header-image" />
      <h1 className="header-text">Meme Generator</h1>
    </header>
  );
}

export default Header;
