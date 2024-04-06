import React from 'react';
import './Header.css';
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import VerticalNav from '../../components/verticalNavbar/verticalNav.jsx';
import logo from '../../Assets/best_logo.png';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
 const navigate = useNavigate();

 const showLoginModal = () => {
    Swal.fire({
      title: 'Login',
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Username" required>
        <input id="swal-input2" class="swal2-input" placeholder="Password" type="password" required>
      `,
      focusConfirm: false,
      preConfirm: () => {
        const username = document.getElementById('swal-input1').value;
        const password = document.getElementById('swal-input2').value;
        if (!username || !password) {
          Swal.showValidationMessage('Please fill in all fields');
        } else {
          handleLogin(username, password);
        }
      }
    });
 };

 const handleLogin = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:3001/users', { username, password });
      const { role } = response.data;
      // Assuming the backend sends the role directly in the response
      // You can now use this role to determine if the user is an admin
      if (role === 'admin') {
        // Show an alert if the user is an admin
        Swal.fire({
          icon: 'info',
          title: 'Welcome, Admin!',
          text: 'You have successfully logged in as an admin.',
        });
      }
      // Navigate to the home page after successful login
      navigate('/home');
    } catch (error) {
      Swal.showValidationMessage(
        `Request failed: ${error}`
      );
    }
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
