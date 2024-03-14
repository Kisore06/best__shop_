// ShopFinder.jsx
import React from 'react';
import { useNavigate } from "react-router-dom";
import './ShopFinder.css';

const ShopFinder = () => {
  const navigate = useNavigate();

  const goToShopLocations = () => {
    navigate('/shop-locations');
  };

  return (
    <div className="shop-finder">
      <div className="left-side">
        <h1>COME HAVE A DRINK</h1>
        <hr />
        <p>We’ve got great neighbors, classic clothes, and cold drinks up for grabs whenever you wanna stop by. See you soon.</p>
        <button onClick={goToShopLocations}>STOP ON BY</button>
      </div>
      <div className="right-side">
        <img id="img" src="./best_shop.jpeg" alt="Image" />
      </div>
    </div>
  );
};

export default ShopFinder;
