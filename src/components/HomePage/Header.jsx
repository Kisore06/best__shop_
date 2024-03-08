
import React from 'react';
import './Header.css';
import { FaRegUserCircle, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import VerticalNav from '../verticalNav.jsx'; // Use the correct name of your component

const Header = () => {
 return (

    <header className="header">
      <VerticalNav />
      <div className="header-container">
        <div className="logo-container">
          <h3>BEST SHOP</h3>
          {/* <img src="" alt="Store Logo" className="logo" /> */}
        </div>
        <nav className="nav-links">
          <ul>
            <li><a href="#bags">Bags</a></li>
            <li>
              <a href="#watches">Watches</a>
              <div className="mega-menu">
                <ul>
                 <li><a href="#watches-brands">Brands</a>
                 <ul><li>Titan</li>
                 <li>Titan</li>
                 <li>Titan</li>
                 <li>Titan</li></ul></li>
                </ul>
              </div>
            </li>
            <li><a href="#shoes">Shoes</a></li>
            <li><a href="#sports">Cosmetics</a></li>
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

export default Header;
