
import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaRegUserCircle } from "react-icons/fa";
import VerticalNav from '../../components/verticalNavbar/verticalNav.jsx';
// import logo from '../../Assets/best_logo.png';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from "../../utils/api";
import SearchBar from './SearchBar';

const Header = () => {
 const navigate = useNavigate();
 const [searchResults, setSearchResults] = useState([]);
 const categories = [
    { name: 'Footwear', path: '/footwear' },
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
  <nav class="navbar">

    {/* <header className="header" style={{ top: visible ? '0' : '-90px' }}> */}
      <VerticalNav />
      <div className="header-container">
        <div className="logo-container">
          <h2><b>BEST SHOP</b></h2>
        </div>
  {/* <nav class="navbar"> */}
  <div className="menu-container">
    <ul className="mega-menu">
      <li className="dropdown">
        <div>
          <span><a href="/home">Home</a></span>
          <span className="material-symbols-outlined">
          chevron_right
          </span>
        </div>
      </li>
      <li className="dropdown">
        <div>
          <span>Categories</span>
          <span className="material-symbols-outlined">
          chevron_right
          </span>
        </div>
        <ul className="menu">
          <li>
            <a href="#">Categories</a>
          </li>
          
          <li className="sub-dropdown">
            <div>
              <span>Featured</span>
              <span className="material-symbols-outlined">
              chevron_right
              </span>
            </div>
            <ul className="sub-menu">
              <li>
                <a href="#">Featured</a>
              </li>
              <li>
                <a href="#">New Releases</a>
              </li>
              <li>
                <a href="# ">SKNRS Launch Calendar</a>
              </li>
              <li>
                <a href="#">Bestsellers</a>
              </li>
            </ul>
          </li>
          <li className="sub-dropdown">
            <div>
              <span>Shoes</span>
              <span className="material-symbols-outlined">
              chevron_right
              </span>
            </div>
            <ul className="sub-menu">
              <li>
                <a href="#">All Shoes</a>
              </li>
              <li>
                <a href="#">Lifestyle</a>
              </li>
              <li>
                <a href="#">Jordan</a>
              </li>
              <li>
                <a href="#">Running</a>
              </li>
              <li>
                <a href="#">Football</a>
              </li>
              <li>
                <a href="#">Basketball</a>
              </li>
              <li>
                <a href="#">Training and Gym</a>
              </li>
              <li>
                <a href="#">Skateboarding</a>
              </li>
            </ul>
          </li>
          <li className="sub-dropdown">
            <div>
              <span>Clothing</span>
              <span className="material-symbols-outlined">
              chevron_right
              </span>
            </div>
            <ul class="sub-menu">
              <li>
                <a href="#">All Clothing</a>
              </li>
              <li>
                <a href="#">Lyfestyle</a>
              </li>
              <li>
                <a href="#">Tops and T-Shirts</a>
              </li>
              <li>
                <a href="#">Hoodies and Sweatshirts</a>
              </li>
              <li>
                <a href="#">Shorts</a>
              </li>
              <li>
                <a href="#">Tracksuits</a>
              </li>
              <li>
                <a href="#">Trousers and Tights</a>
              </li>
              <li>
                <a href="#">Jackets</a>
              </li>
              <li>
                <a href="#">Kits and Jerseys</a>
              </li>
            </ul>
          </li>
          <li className="sub-dropdown">
            <div>
              <span>Shop By Sport</span>
              <span className="material-symbols-outlined">
              chevron_right
              </span>
            </div>
            <ul className="sub-menu">
              <li>
                <a href="#">All Sports</a>
              </li>
              <li>
                <a href="#">Running</a>
              </li>
              <li>
                <a href="#">Football</a>
              </li>
              <li>
                <a href="#">Basketball</a>
              </li>
              <li>
                <a href="#">Training and Gym</a>
              </li>
              <li>
                <a href="#">Tennis</a>
              </li>
              <li>
                <a href="#">Golf</a>
              </li>
            </ul>
          </li>
          <li className="sub-dropdown">
            <div>
              <span>Accessories</span>
              <span className="material-symbols-outlined">
              chevron_right
              </span>
            </div>
            <ul className="sub-menu">
              <li>
                <a href="#">All Accessories</a>
              </li>
              <li>
                <a href="#">Bags and Backpacks</a>
              </li>
              <li>
                <a href="#">Socks</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      {/* <!-- Women section --> */}
      <li className="dropdown">
        <div>
          <span>Brands</span>
          <span className="material-symbols-outlined">
          chevron_right
          </span>
        </div>
        <ul className="menu">
          <li>
            <a href="#">Brands</a>
          </li>
          <li className="sub-dropdown">
            <div>
              <span>Featured</span>
              <span className="material-symbols-outlined">
              chevron_right
              </span>
            </div>
            <ul className="sub-menu">
              <li>
                <a href="#">Featured</a>
              </li>
              <li>
                <a href="#">New Releases</a>
              </li>
              <li>
                <a href="# ">SKNRS Launch Calendar</a>
              </li>
              <li>
                <a href="#">Bestsellers</a>
              </li>
            </ul>
          </li>
          <li className="sub-dropdown">
            <div>
              <span>Shoes</span>
              <span className="material-symbols-outlined">
              chevron_right
              </span>
            </div>
            <ul className="sub-menu">
              <li>
                <a href="#">Sparx</a>
              </li>
              <li>
                <a href="#">Woodland</a>
              </li>
              <li>
                <a href="#">Crocs</a>
              </li>
              <li>
                <a href="#">Fsports</a>
              </li>
              <li>
                <a href="#">Nike</a>
              </li>
            </ul>
          </li>
          <li className="sub-dropdown">
            <div>
              <span>Mobiles</span>
              <span className="material-symbols-outlined">
              chevron_right
              </span>
            </div>
            <ul className="sub-menu">
              <li>
                <a href="#">All Brands</a>
              </li>
              <li>
                <a href="#">Samsung</a>
              </li>
              <li>
                <a href="#">Apple</a>
              </li>
              <li>
                <a href="#">Vivo</a>
              </li>
              <li>
                <a href="#">Oppo</a>
              </li>
              <li>
                <a href="#">Portronics</a>
              </li>
              <li>
                <a href="#">Sony</a>
              </li>
              <li>
                <a href="#">Realme</a>
              </li>
              <li>
                <a href="#">Redmi</a>
              </li>
              <li>
                <a href="#">Panasonic</a>
              </li>
              <li>
                <a href="#">Zebronics</a>
              </li>
            </ul>
          </li>
          <li className="sub-dropdown">
            <div>
              <span>Watches</span>
              <span className="material-symbols-outlined">
              chevron_right
              </span>
            </div>
            <ul className="sub-menu">
              <li>
                <a href="#">Sonata</a>
              </li>
              <li>
                <a href="#">Titan</a>
              </li>
              <li>
                <a href="#">Fastrack</a>
              </li>
              <li>
                <a href="#">Casio</a>
              </li>
              <li>
                <a href="#">Timex</a>
              </li>
              <li>
                <a href="#">Firebolt</a>
              </li>
            </ul>
          </li>
          {/* <li className="sub-dropdown">
            <div>
              <span>Accessories</span>
              <span className="material-symbols-outlined">
              chevron_right
              </span>
            </div>
            <ul className="sub-menu">
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#">Bags and Backpacks</a>
              </li>
              <li>
                <a href="#">Socks</a>
              </li>
            </ul>
          </li> */}
        </ul>
      </li>
      {/* <!-- Kids section --> */}
      <li className="dropdown">
        <div>
          <span><a href="/shop-locations">Showroom</a></span>
          <span className="material-symbols-outlined">
          chevron_right
          </span>
        </div>
      </li>

      {/* <!-- Collections section --> */}
      <li className="dropdown">
        <div>
          <span><a href="#About">About</a></span>
          <span className="material-symbols-outlined">
          chevron_right
          </span>
        </div>

      </li>
    </ul>
  </div>
        <div className="user-actions">
        <SearchBar
            searchResults={searchResults}
            handleSearch={handleSearch}
            handleSearchResultClick={handleSearchResultClick}
          />
          <a className='profile-icon' href="#userLogin" onClick={showLoginModal}><FaRegUserCircle /></a>
        </div>
      </div>
    {/* </header> */}
    </nav>

 );
};

export default Header;
