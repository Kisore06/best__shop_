// ShopLocations.js
import React from 'react';
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
        <div className="iframe">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.7239090342064!2d77.24289567517845!3d11.499829288696398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba921413065a777%3A0x7eac7c98fa75fce2!2sBest%20Shop!5e0!3m2!1sen!2sin!4v1710439232462!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="location"></iframe>
        </div>
      </div>
    </div>
 );
};

export default ShopLocations;