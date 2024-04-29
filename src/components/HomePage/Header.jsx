
import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaRegUserCircle } from "react-icons/fa";
import VerticalNav from '../../components/verticalNavbar/verticalNav.jsx';
import logo from '../../Assets/best_logo.png';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from "../../utils/api";
import SearchBar from './SearchBar';

const Header = () => {
 const navigate = useNavigate();
 const [searchResults, setSearchResults] = useState([]);
 const categories = [
    { name: 'Footwear', path: '/Footwear' },
    { name: 'Watches', path: '/watches' },
    { name: 'Mobiles', path: '/mobiles' },
    { name: 'Bags & Luggage', path: '/Bags & Luggage' },
    { name: 'Sports Goods', path: '/Sports Goods' },
    { name: 'Baby World', path: '/Baby World' },
    { name: 'Toys', path: '/Toys' },
 ];

 const handleSearch = (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm)
  );
  setSearchResults(filteredCategories);
};

const handleSearchResultClick = (path) => {
  navigate(path);
};


 const [prevScrollPos, setPrevScrollPos] = useState(0);
 const [visible, setVisible] = useState(true);

 useEffect(() => {
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [prevScrollPos, visible]);

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
      const response = await axios.post(`${api}/users`, { username, password });
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
                 <li><a href="/Footwear">Footwear</a></li>
                 <li><a href="/watches">Watches</a></li>
                 <li><a href="/mobiles">Mobiles</a></li>
                 <li><a href="/Bags & Luggage">Bags & Luggage</a></li>
                 <li><a href="/Sports Goods">Sports Goods</a></li>
                 <li><a href="/Baby World">Baby World</a></li>
                 <li><a href="/Toys">Toys</a></li>
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
        <SearchBar
            searchResults={searchResults}
            handleSearch={handleSearch}
            handleSearchResultClick={handleSearchResultClick}
          />
          <a className='profile-icon' href="#userLogin" onClick={showLoginModal}><FaRegUserCircle /></a>
        </div>
      </div>
    </header>
 );
};

export default Header;
