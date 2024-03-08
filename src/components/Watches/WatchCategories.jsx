// WatchCategories.js
import React from 'react';
import './WatchCategories.css'; // Ensure this CSS file is created

const WatchCategories = () => {
 const menCategories = [
    { title: 'Sport Watches', subCategories: ['Dive watches', 'Chronograph watches', 'Racing watches', 'Pilot watches', 'Field watches'] },
    { title: 'Dress Watches', subCategories: ['Classic dress watches', 'Minimalist dress watches', 'Dress chronographs'] },
    { title: 'Casual Watches', subCategories: ['Stainless steel watches', 'Leather strap watches', 'Canvas strap watches', 'Digital watches'] },
    { title: 'Smart Watches', subCategories: ['Fitness trackers', 'GPS watches', 'Smartwatches with health monitoring features'] },
    { title: 'Military Watches', subCategories: ['Tactical watches', 'Field watches with military-inspired designs', 'Military-issue watches'] },
    { title: 'Aviation Watches', subCategories: ['Pilot watches', 'Flight chronographs', 'Watches with aviation-themed complications'] },
 ];

 const womenCategories = [
    { title: 'Fashion Watches', subCategories: ['Trendy designs', 'Colorful straps', 'Fashion-forward dials'] },
    { title: 'Dress Watches', subCategories: ['Elegant dress watches', 'Jewelry-inspired watches', 'Slim and feminine designs'] },
    { title: 'Casual Watches', subCategories: ['Everyday watches with versatile designs', 'Leather or fabric straps', 'Minimalist dials'] },
    { title: 'Smart Watches', subCategories: ['Fitness trackers with feminine designs', 'Smartwatches with customizable straps and watch faces'] },
    { title: 'Diamond Watches', subCategories: ['Watches with diamond accents', 'Luxury timepieces with gemstone embellishments'] },
    { title: 'Bracelet Watches', subCategories: ['Watches with bracelet-style straps', 'Stainless steel or precious metal bracelets'] },
 ];

 return (
    <div style={{ paddingTop: '80px' }}>
    <h1>Watch Categories</h1>
    <div className="watch-categories">
      <div className="men-categories">
        <h2>Men's Watches</h2>
        {menCategories.map((category, index) => (
          <div key={index} className="category">
            <h3>{category.title}</h3>
            <ul>
              {category.subCategories.map((subCategory, subIndex) => (
                <li key={subIndex}>{subCategory}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="women-categories">
        <h2>Women's Watches</h2>
        {womenCategories.map((category, index) => (
          <div key={index} className="category">
            <h3>{category.title}</h3>
            <ul>
              {category.subCategories.map((subCategory, subIndex) => (
                <li key={subIndex}>{subCategory}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
 );
};

export default WatchCategories;
