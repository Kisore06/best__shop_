import React from 'react';
import './Header.css';
import { FaRegUserCircle } from "react-icons/fa";
import VerticalNav from '../../components/verticalNavbar/verticalNav.jsx';
import logo from '../../Assets/best_logo.png';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

// Define styled components for the search bar
const Search = styled('div')(({ theme }) => ({
 position: 'relative',
 borderRadius: theme.shape.borderRadius,
 backgroundColor: alpha(theme.palette.common.white, 1.15),
 '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
 },
 marginLeft: 0,
 width: '100%',
 [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
 },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
 padding: theme.spacing(0, 2),
 height: '100%',
 position: 'absolute',
 pointerEvents: 'none',
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
 color: 'inherit',
 width: '100%',
 '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
 },
}));

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
        </nav>
        <div className="user-actions">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <a className='profile-icon' href="#userLogin" onClick={showLoginModal}><FaRegUserCircle /></a>
        </div>
      </div>
    </header>
 );
};

export default Header;
