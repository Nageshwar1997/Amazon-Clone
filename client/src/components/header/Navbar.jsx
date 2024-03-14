import React from "react";
import "./Navbar.css";

// Images Imports
import amazonLogo from "../../assets/images/navbar/amazon_logo.png";

// Material UI Imports
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav__left">
          <div className="nav__logo">
            <img src={amazonLogo} alt="Logo" />
          </div>
          <div className="nav__searchBar">
            <input
              type="text"
              placeholder="Amazon.in Search products here...."
            />
            <div className="nav__searchIcon">
              <SearchIcon id="search" />
            </div>
          </div>
        </div>
        <div className="nav__right">
          <div className="nav__signin">
            <a href="">Sign In</a>
          </div>
          <div className="nav__cart"></div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
