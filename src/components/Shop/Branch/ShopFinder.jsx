// ShopFinder.jsx
import React from 'react';
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import './ShopFinder.css'; // Ensure this CSS file is created

const ShopFinder = () => {
 const navigate = useNavigate(); // Use useNavigate instead of useHistory

 const goToShopLocations = () => {
    navigate('/shop-locations'); // Use navigate to redirect
 };

 return (
    <div className="shop-finder">
      <h1>COME HAVE A DRINK</h1>
      <p>We’ve got great neighbors, classic clothes, and cold drinks up for grabs whenever you wanna stop by. See you soon.</p>
      <button onClick={goToShopLocations}>STOP ON BY</button>
    </div>
 );
};

export default ShopFinder;
