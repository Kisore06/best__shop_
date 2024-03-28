import React from 'react';
import './Header.css';
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import VerticalNav from '../../components/verticalNavbar/verticalNav.jsx';
import logo from '../../Assets/best_logo.png';
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
      showCancelButton: false,
      showConfirmButton: false,
      focusConfirm: false,
      customClass: {
        container: 'custom-modal-container',
        title: 'custom-modal-title',
      },
      preConfirm: () => {
        Swal.close();
        navigate('/home');
        return false;
      }
    });
 };

 return (
    <header className="header">
      <VerticalNav />
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Store Logo" className="logo" />
        </div>

        <nav className="nav-links">
          <ul>
            <li><a href="/home">Home</a></li>
            <li>
              <a href="#All-categories">Categories</a>
              <div className="mega-menu">
                <ul>
                 <li><a href="/shoes">Footwear</a></li>
                 <li><a href="/watches">Watches</a></li>
                 <li><a href="/mobiles">Mobiles</a></li>
                 <li><a href="/bags">Bags & Luggage</a></li>
                 <li><a href="/sports">Sports Goods</a></li>
                 <li><a href="/babyproducts">Baby World</a></li>
                 <li><a href="/toys">Toys</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#Brands">Brands</a>
              <div className="mega-menu">
                <ul>
                 <li><a href="/fsports">Fsports</a></li>
                 <li><a href="/sparx">Sparx</a></li>
                 <li><a href="/woodland">Woodland</a></li>
                 <li><a href="/titan">Titan</a></li>
                 <li><a href="/fastrack">Fastrack</a></li>
                 <li><a href="/americantourister">American Tourister</a></li>
                 <li><a href="/skybags">Sky Bags</a></li>
                 <li><a href="/yonex">Yonex</a></li>
                 <li><a href="/nivia">Nivia</a></li>
                 <li><a href="/lining">Lining</a></li>
                 <li><a href="/applebaby">Apple Baby</a></li>
                 <li><a href="/himalaya">Himalaya</a></li>
                </ul>
              </div>
            </li>
            <li><a href="/shop-locations">Showroom</a></li>
            <li><a href="#About">About</a></li>
          </ul>
        </nav>
        <div className="user-actions">
          <div className="search-container">
            <input className='search-box' type='text' placeholder='Search' />
            <FaSearch className="search-icon" />
          </div>
          <a className='profile-icon' href="#userLogin" onClick={showLoginModal}><FaRegUserCircle /></a>
        </div>
      </div>
    </header>
 );
};

export default Header;
