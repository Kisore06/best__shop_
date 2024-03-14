// ShopLocations.js
import React from 'react';
<<<<<<< HEAD
import './ShopLocations.css'; // Ensure this CSS file is created

const ShopLocations = () => {
 const locations = [
    'Head Office MT Road Near Taluka Office, Sathyamangalam',
    'Branch 1 Opposite to Bus stand Sathyamangalam',
    'Branch 2 Karattur Arch Kayalvizhi Complex, Gobichettipalayam',
    'Branch 3 Bannari Amman Institute of Technology Sathyamangalam',
 ];

 return (
    <div style={{ paddingTop: '80px' }}>
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
    </div>
=======
import './ShopLocations.css';

const ShopLocations = () => {
 const locations = [
    { name: 'Head Office', address: 'MT Road Near Taluka Office, Sathyamangalam', url: 'https://www.google.com/maps/place/Best+Shop/@11.4998293,77.2428957,17z/data=!4m14!1m7!3m6!1s0x3ba921413065a777:0x7eac7c98fa75fce2!2sBest+Shop!8m2!3d11.4998293!4d77.2454706!16s%2Fg%2F119v1z320!3m5!1s0x3ba921413065a777:0x7eac7c98fa75fce2!8m2!3d11.4998293!4d77.2454706!16s%2Fg%2F119v1z320?entry=ttu' },
    { name: 'Branch 1', address: 'Opposite to Bus stand Sathyamangalam', url: 'https://www.google.com/maps/place/Best+Shop+-+Laptop,+Mobile+%26+Baby+World/@11.4987512,77.2421346,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba921d6e952d03b:0x243089cd842f7b85!8m2!3d11.4987512!4d77.2447095!16s%2Fg%2F11f657018r?entry=ttu' },
    { name: 'Branch 2', address: 'Karattur Arch Kayalvizhi Complex, Gobichettipalayam', url: 'https://www.google.com/maps/place/BEST+SHOP/@11.452906,77.4480587,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba93d18405b5699:0x5a8468a64037b732!8m2!3d11.452906!4d77.4506336!16s%2Fg%2F11qr1by75z?entry=ttu' },
    { name: 'Branch 3', address: 'Bannari Amman Institute of Technology Sathyamangalam', url: 'https://tinyurl.com/yevtn72r' },
 ];

 return (
    <div style={{ paddingTop: '80px' }}>
      <div className="shop-locations">
        <h2 className="he2">Our Locations</h2>
        <div className="locations-grid">
          {locations.map((location, index) => (
            <div key={index} className="location-card">
              <h3>{location.name}</h3>
              <p>{location.address}</p>
              <a href={location.url} target="_blank" rel="noopener noreferrer">Visit Location</a>
            </div>
          ))}
        </div>
      </div>
    </div>
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
 );
};

export default ShopLocations;
