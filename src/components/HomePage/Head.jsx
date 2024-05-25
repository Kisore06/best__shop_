import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaRegUserCircle } from "react-icons/fa";
import VerticalNav from '../../components/verticalNavbar/verticalNav.jsx';
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
        Swal.fire({
          icon: 'info',
          title: 'Welcome, Admin!',
          text: 'You have successfully logged in as an admin.',
        });
      }
      navigate('/home');
    } catch (error) {
      Swal.showValidationMessage(
        `Request failed: ${error}`
      );
    }
 };

 const [expandedCategory, setExpandedCategory] = useState(null);

 const show = (index) => {
    setExpandedCategory(index);
 };

 const hide = () => {
    setExpandedCategory(null);
 };

 return (
  <nav className="navbar">
    <VerticalNav />
    <div className="header-container">
      <div className="logo-container">
        <h2><b>BEST SHOP</b></h2>
      </div>
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
            <div>
              <div className="category-expand">
                <div className="sub-category">
                  <div className="sub-category-value black" onMouseOver={() => show(0)} onMouseOut={hide}>Women's Fashion
                    <div className="arrow arrow-icon"></div>
                  </div>
                  <div className="sub-category-value" onMouseOver={() => show(1)} onMouseOut={hide}>Men's Fashion
                    <div className="arrow"></div>
                  </div>
                  <div className="sub-category-value" onMouseOver={() => show(2)} onMouseOut={hide}>TV & Appliances
                    <div className="arrow"></div>
                  </div>
                  <div className="sub-category-value" onMouseOver={() => show(3)} onMouseOut={hide}>Mobile phones
                    <div className="arrow"></div>
                  </div>
                  <div className="sub-category-value" onMouseOver={() => show(4)} onMouseOut={hide}>Electronics
                    <div className="arrow"></div>
                  </div>
                  <div className="sub-category-value" onMouseOver={() => show(5)} onMouseOut={hide}>Kid's Fashion
                    <div className="arrow"></div>
                  </div>
                  <div className="sub-category-value" onMouseOver={() => show(6)} onMouseOut={hide}>Beauty
                    <div className="arrow"></div>
                  </div>
                  <div className="sub-category-value" onMouseOver={() => show(7)} onMouseOut={hide}>Home Furnishings
                    <div className="arrow"></div>
                  </div>
                </div>
                <div className="sub-category-option">
                  {expandedCategory === 0 && (
                    <section className="show">
                      <div className="sub-category-option-header">Ethnic Wear</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Kurtas & Kurtis</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Suits Sets</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Sarees</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Lehenga Sets</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Bottom</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Dupattas</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Blouse & Dress</div>
                      <div className="sub-category-option-header" onClick={() => navigate('prodPage.html')}>Inner & Nightwear</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Camisole</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Sleeping & Robes</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Shapewear</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Custom clothes</div>
                      <div className="sub-category-option-header" onClick={() => navigate('prodPage.html')}>Fragrances</div>
                      <div className="sub-category-option-header" onClick={() => navigate('prodPage.html')}>Active & Sportswear</div>
                      <div className="sub-category-option-header" onClick={() => navigate('prodPage.html')}>Western Wear</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Top & Tees</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Dress</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Shirts</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Pant & Trousers</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Jeans</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Leggings</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Jumpsuits</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Skirts</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Shorts</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Co-ordinates</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Jacket & Blazers</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>shrugs</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Sweatshirts</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Sweaters</div>
                      <div className="sub-category-option-header" onClick={() => navigate('prodPage.html')}>Curvy Fashion</div>
                      <div className="sub-category-option-header" onClick={() => navigate('prodPage.html')}>View All Clothing</div>
                      <div className="sub-category-option-header" onClick={() => navigate('prodPage.html')}>Footwear</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Casual</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Ethnic</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Formal</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Sneakers</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Boots</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Sports Shoes</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Flip Flops</div>
                      <div className="sub-category-option-header" onClick={() => navigate('prodPage.html')}>Watches</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Dressy Watches</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Casual Watches</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Smart Watches</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Formal Watches</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Sports Watches</div>
                      <div className="sub-category-option-header" onClick={() => navigate('prodPage.html')}>Handbags & Wallets</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Handbags</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Tote Bags</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Sling Bags</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Laptop Bags</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Backpacks</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Wallet</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Clutches</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Leather Bags</div>
                      <div className="sub-category-option-header" onClick={() => navigate('prodPage.html')}>Jewellery</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Gold Jewellery</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Diamond Jewellery</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Silver Jewellery</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>Fashion Jewellery</div>
                      <div className="sub-category-option-header" onClick={() => navigate('prodPage.html')}>Eyewear</div>
                      <div className="sub-category-option-header" onClick={() => navigate('prodPage.html')}>Frames</div>
                      <div className="sub-category-option-value" onClick={() => navigate('prodPage.html')}>wd</div>
                    </section>
                  )}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
 );
};

export default Header;
