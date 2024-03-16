import React from "react";
import "./Header.css";
import Logo from "../../assets/images/navbar/amazonAllLogos.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar_container">
        <div className="nav__logoContainer white__border">
          <div className="nav__amazonLogo"></div>
          <span className="nav__logoDotIn">.in</span>
        </div>
        <div className="nav__addressContainer white__border">
          <p className="nav__helloText">Hello</p>
          <div className="nav__address_icon">
            <LocationOnIcon className="nav__locationIcon" />
            <p>Select your address</p>
          </div>
        </div>
        <div className="nav__searchContainer">
          <select className="nav__select">
            <option value="">All</option>
            <option value="">All Categories</option>
            <option value="">Alexa Skills</option>
            <option value="">Amazon Devices</option>
            <option value="">Amazon Fashion</option>
            <option value="">Amazon Farmacy</option>
            <option value="">Appliances</option>
            <option value="">Apps & Games</option>
            <option value="">Audible Audiobooks</option>
            <option value="">Baby</option>
            <option value="">Beauty</option>
            <option value="">Books</option>
            <option value="">Car & Motorbike</option>
            <option value="">Collectibles</option>
            <option value="">Computers & Accessories</option>
            <option value="">Deals</option>
            <option value="">Electronics</option>
            <option value="">Furniture</option>
            <option value="">Garden & Outdoors</option>
            <option value="">Gift Cards</option>
            <option value="">Grocery & Gourmet Foods</option>
            <option value="">Health & Personal Care</option>
            <option value="">Home & Kitchen</option>
            <option value="">Industrial & Scientific</option>
            <option value="">Jewellery</option>
            <option value="">Kindle Store</option>
            <option value="">Luggage & Bags</option>
            <option value="">Luxury Beauty</option>
            <option value="">Movies & TV Shows</option>
            <option value="">MP3 Music</option>
            <option value="">Music</option>
            <option value="">Musical Instruments</option>
            <option value="">Office Products</option>
            <option value="">Pet Supplies</option>
            <option value="">Prime Video</option>
            <option value="">Shoe & Handbags</option>
            <option value="">Software</option>
            <option value="">Sports, Fitness & Outdoors</option>
            <option value="">Subscribe & Save</option>
            <option value="">Tools & Home Improvement</option>
            <option value="">Toys & Games</option>
            <option value="">Under ₹500</option>
            <option value="">Video Games</option>
            <option value="">Watches</option>
          </select>
          <input
            type="text"
            className="nav__searchBar"
            placeholder="Amazon.in Search products here...."
          />

          <div className="nav__searchIcon">
            <SearchIcon id="searchIcon" />
          </div>
        </div>
        <div className="nav__languageFlag">
          <p>English</p>
          <div className="nav__flagImg">
            <img
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2pvYjkzNy02Mi5wbmc.png"
              alt="India Flag"
            />
          </div>
        </div>
        <div className="nav__signIn"></div>
        <div className="nav__ReturnsAndOrders"></div>
        <div className="nav__cart"></div>
      </nav>
    </header>
  );
};

export default Header;
