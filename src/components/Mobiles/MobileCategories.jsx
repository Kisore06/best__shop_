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
