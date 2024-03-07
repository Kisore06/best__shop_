import React from 'react';
import './app.css';
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src="" alt="Store Logo" className="logo" />
        </div>
        <nav className="nav-links">
          <ul>
            <li><a href="#bags">Bags</a></li>
            <li><a href="#watches">Watches</a></li>
            <li><a href="#shoes">Shoes</a></li>
            <li><a href="#sports">Sports</a></li>
            <li><a href="#gifts">Gifts</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
        </nav>
        <div className="user-actions">
          <a href="#search"><i className="fa fa-search"><FaSearch/></i></a>
          <a href="#userLogin"><i className="fa fa-search"><FaRegUserCircle/></i></a>
          <a href="#wishlist"><i className="fa fa-heart"><FaHeart/></i></a>
          <a href="#cart"><i className="fa fa-shopping-cart"><FaShoppingCart/></i></a>
        </div>
      </div>
    </header>
  )
}

export default Header