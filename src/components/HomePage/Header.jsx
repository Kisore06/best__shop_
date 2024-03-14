<<<<<<< HEAD
import React from 'react';
import './Header.css';
<<<<<<< HEAD
import { FaRegUserCircle, FaSearch} from "react-icons/fa";
import VerticalNav from '../../components/verticalNavbar/verticalNav.jsx'; // Adjust the path as necessary
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
=======
import { FaRegUserCircle, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import VerticalNav from '../../components/verticalNavbar/verticalNav.jsx'; // Use the correct name of your component
>>>>>>> d8149865c98e9d24bb227d2c31aa3089c7bb1fae

const Header = () => {
 const navigate = useNavigate();

 const showLoginModal = () => {
    Swal.fire({
      title: 'Login',
      html: `
        <form id="loginForm">
          <label>Username:</label>
          <input id="username" type="text" />
          <label>Password:</label>
          <input id="password" type="password" />
          <button type="submit">Submit</button>
        </form>
      `,
      showCloseButton: true,
      showCancelButton: false, // Hide cancel button
      showConfirmButton: false, // Hide confirm button
      focusConfirm: false,
      customClass: {
        container: 'custom-modal-container', // Custom class for the modal container
        title: 'custom-modal-title', // Custom class for the title
        // Add more custom classes as needed
      },
      preConfirm: () => {
        Swal.close();
        navigate('/home'); // Redirect to homepage
        return false; // Prevent the modal from closing
      }
    });
 };

 return (
=======

import React from 'react';
import './Header.css';
import { FaRegUserCircle, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import VerticalNav from '../../components/verticalNavbar/verticalNav.jsx';
import logo from '../../Assets/best_logo.png'

const Header = () => {
 return (

>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
    <header className="header">
      <VerticalNav />
      <div className="header-container">
        <div className="logo-container">
<<<<<<< HEAD
          <h3>BEST SHOP</h3>
          {/* <img src="" alt="Store Logo" className="logo" /> */}
        </div>

        <nav className="nav-links">
        <ul>
            <li><a href="#Home">Home</a></li>
            <li>
              <a href="#All-categories">Categories</a>
              <div className="mega-menu">
                <ul>
                 <li><a href="#productd">Brands</a>
                    <ul><li>Titan</li>
                      <li>Titan</li>
                      <li>Titan</li>
                      <li>Titan</li></ul></li>
                </ul>
              </div>
            </li>
            <li><a href="#Brands">Brands</a></li>
            <li><a href="#showroom">Showroom</a></li>
            <li><a href="#About">About</a></li>
          </ul>
          {/* Navigation links */}
        </nav>
        <div className="user-actions">
<div className="search-bar">
 <input type="text" placeholder="Search..." className="search-input" />
</div>
<a href="#search"><i className="fa fa-search"><FaSearch/></i></a>

          {/* <a href="#userLogin" onClick={showLoginModal}><i className="fa fa-search"><FaRegUserCircle/></i></a> */}
          {/* <a href="#wishlist"><i className="fa fa-heart"><FaHeart/></i></a>
          <a href="#cart"><i className="fa fa-shopping-cart"><FaShoppingCart/></i></a> */}
        </div>
        <a href="#userLogin" onClick={showLoginModal}><i className="fa fa-search"><FaRegUserCircle/></i></a>
      </div>
    </header>
    
 );
};
=======
           <img src={logo} alt="Store Logo" className="logo" /> 
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
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04

export default Header;
