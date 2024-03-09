// ShopLocations.js
import React from 'react';
import './ShopLocations.css'; // Ensure this CSS file is created

const ShopLocations = () => {
 const locations = [
    'Head Office MT Road Near Taluka Office, Sathyamangalam',
    'Branch 1 Opposite to Bus stand Sathyamangalam',
    'Branch 2 Karattur Arch Kayalvizhi Complex, Gobichettipalayam',
    'Branch 3 Bannari Amman Institute of Technology Sathyamangalam',
 ];

 return (
    <div className="shop-locations">
      <h2>Our Locations</h2>
      <div className="locations-grid">
        {locations.map((location, index) => (
          <div key={index} className="location-card">
            <p>{location}</p>
          </div>
        ))}
      </div>
    </div>
 );
};

export default ShopLocations;
