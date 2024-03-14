import React from 'react';
import './Header.css';
import { FaRegUserCircle, FaSearch} from "react-icons/fa";
import VerticalNav from '../../components/verticalNavbar/verticalNav.jsx'; // Adjust the path as necessary
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

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
    <header className="header">
      <VerticalNav />
      <div className="header-container">
        <div className="logo-container">
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

export default Header;
