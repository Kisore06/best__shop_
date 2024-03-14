<<<<<<< HEAD
// MobileProducts.js
import React from 'react';
import './MobileCategories.css'; // Import the CSS file

const MobileCategories = () => {
 const mobilePhones = [
    { brand: 'Oppo', models: ['Oppo Reno 6 5G', 'Oppo F19Pro'] },
    { brand: 'Samsung', models: ['Samsung M31', 'Samsung M32 5G', 'Samsung Galaxy A225G', 'Samsung S20 FE', 'Samsung A52S 5G', 'Samsung Z Flip'] },
    { brand: 'OnePlus', models: ['One Plus Nord 2 5G', 'One Plus 9R 5G', 'Oneplus Nord 2', 'OnePlus Nord'] },
    { brand: 'Apple', models: ['Apple 13', 'iPhone SE', 'iPhone 12 Mini', 'iPhone 12 Pro'] },
    { brand: 'Other Brands', models: ['Tecno', 'Vivo Y33T', 'Tecno Pop 5', 'Vivo X60 Pro', 'Vivo V21 5G', 'Mi 11X Pro 5G'] },
 ];

 const mobileAccessories = [
    { category: 'Phone Cases and Covers', items: ['Protective cases', 'Transparent cases', 'Leather cases', 'Silicone cases'] },
    { category: 'Screen Protectors', items: ['Tempered glass screen protectors', 'PET screen protectors'] },
    { category: 'Chargers and Cables', items: ['USB chargers', 'Fast chargers', 'Wireless chargers', 'Charging cables (USB-C, Lightning, Micro-USB)'] },
    { category: 'Power Banks', items: ['Portable power banks', 'Solar chargers'] },
    { category: 'Headphones and Earphones', items: ['Wired earphones', 'Wireless earbuds', 'Over-ear headphones'] },
    { category: 'PopSockets and Phone Grips', items: ['PopSockets', 'Phone grip rings'] },
    { category: 'Car Accessories', items: ['Car phone mounts', 'Bluetooth car kits'] },
    { category: 'Phone Stands and Holders', items: ['Desktop phone stands', 'Ring holders'] },
 ];

 return (
    <div style={{ paddingTop: '80px' }}>
    <h1>Mobile Products</h1>
    <div className="mobile-products">
      <div className="mobile-phones">
        <h2>Mobile Phones</h2>
        {mobilePhones.map((phone, index) => (
          <div key={index} className="phone-brand">
            <h3>{phone.brand}</h3>
            <ul>
              {phone.models.map((model, modelIndex) => (
                <li key={modelIndex}>{model}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mobile-accessories">
        <h2>Mobile Accessories</h2>
        {mobileAccessories.map((accessory, index) => (
          <div key={index} className="accessory-category">
            <h3>{accessory.category}</h3>
            <ul>
              {accessory.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
 );
};

export default MobileCategories;
=======
import React from 'react';
import './MobileCategories.css'; // Import the CSS file
import phoneImage1 from '../../Assets/moblie/oppo.jpeg';
import phoneImage2 from '../../Assets/moblie/samsung.jpeg';
import phoneImage3 from '../../Assets/moblie/one plus.jpeg';
import phoneImage4 from '../../Assets/moblie/A_pple.jpeg';
import phoneImage5 from '../../Assets/moblie/vivo.jpeg';
import accessoryImage1 from '../../Assets/moblie/cases.jpeg';
import accessoryImage2 from '../../Assets/moblie/screenprotect.jpeg';
import accessoryImage3 from '../../Assets/moblie/cables.jpeg';
import accessoryImage4 from '../../Assets/moblie/powerbank.jpeg';
import accessoryImage5 from '../../Assets/moblie/earphones.jpeg';
import accessoryImage6 from '../../Assets/moblie/popsockets.jpeg';
import accessoryImage7 from '../../Assets/moblie/caraccessories.jpeg';
import accessoryImage8 from '../../Assets/moblie/phone stand.jpeg';

const MobileCategories = () => {
  const mobilePhones = [
    { brand: 'Oppo', models: ['Oppo Reno 6 5G', 'Oppo F19Pro'], image: phoneImage1 },
    { brand: 'Samsung', models: ['Samsung M31', 'Samsung M32 5G', 'Samsung Galaxy A225G', 'Samsung S20 FE'], image: phoneImage2 },
    { brand: 'OnePlus', models: ['One Plus Nord 2 5G', 'One Plus 9R 5G', 'Oneplus Nord 2', 'OnePlus Nord'], image: phoneImage3 },
    { brand: 'Apple', models: ['Apple 13', 'iPhone SE', 'iPhone 12 Mini', 'iPhone 12 Pro'], image: phoneImage4 },
    { brand: 'Other Brands', models: ['Tecno', 'Vivo Y33T', 'Tecno Pop 5', 'Mi 11X Pro 5G'], image: phoneImage5 },
  ];

  const mobileAccessories = [
    { category: 'Phone Cases and Covers', items: ['Protective cases', 'Transparent cases', 'Leather cases', 'Silicone cases'], image: accessoryImage1 },
    { category: 'Screen Protectors', items: ['Tempered glass screen protectors', 'PET screen protectors'], image: accessoryImage2 },
    { category: 'Chargers and Cables', items: [ 'Wireless chargers', 'Charging cables (USB-C, Lightning, Micro-USB)'], image: accessoryImage3 },
    { category: 'Power Banks', items: ['Portable power banks', 'Solar chargers'], image: accessoryImage4 },
    { category: 'Headphones and Earphones', items: ['Wired earphones', 'Wireless earbuds', 'Over-ear headphones'], image: accessoryImage5 },
    { category: 'PopSockets and Phone Grips', items: ['PopSockets', 'Phone grip rings'], image: accessoryImage6 },
    { category: 'Car Accessories', items: ['Car phone mounts', 'Bluetooth car kits'], image: accessoryImage7 },
    { category: 'Phone Stands and Holders', items: ['Desktop phone stands', 'Ring holders'], image: accessoryImage8 },
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      <h1>Mobile Products</h1>
      <div className="mobile-products">
      <h2>Mobile Phones</h2>
        <div className="mobile-phones-container">
          {mobilePhones.map((phone, index) => (
            <div key={index} className="phone-brand">
              <h3>{phone.brand}</h3>
              <ul>
              <img src={phone.image} alt={phone.brand} className="phone-image" />
                {phone.models.map((model, modelIndex) => (
                  <li key={modelIndex}>{model}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <h2>Mobile Accessories</h2>
        <div className="mobile-accessories-container">
          {mobileAccessories.map((accessory, index) => (
            <div key={index} className="accessory-category">
              <h3>{accessory.category}</h3>
              <ul>
              <img src={accessory.image} alt={accessory.category} className="accessory-image" />
                {accessory.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileCategories;
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
