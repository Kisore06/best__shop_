import React from 'react';
import './Header.css';
import { FaRegUserCircle } from "react-icons/fa";
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
                 <ul><li>Mobiles</li>
                    <li>Clothes</li>
                    <li>Gifts</li>
                    <li>Shoes</li></ul>
                </ul>
              </div>
            </li>
            <li><a href="Brands">Brands</a></li>
            <li><a href="showroom">Showroom</a></li>
            <li><a href="About">About</a></li>
          </ul>
        </nav>
        <div className="user-actions">
          <input className='search-box' type='text' placeholder='Search' />
          <a className='profile-icon' href="#userLogin" onClick={showLoginModal}><FaRegUserCircle /></a>
        </div>
      </div>
    </header>
 );
};

export default Header;
