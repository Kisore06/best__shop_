// ShoeCategories.js
import React from 'react';
import './ShoeCategories.css'; // Import the CSS file

const ShoeCategories = () => {
 const menCategories = [
    { title: 'Men\'s Shoes', subCategories: ['Athletic shoes', 'Casual shoes', 'Dress shoes', 'Boots', 'Sandals', 'Slippers'] },
    { title: 'Men\'s Athletic Footwear', subCategories: ['Running shoes', 'Basketball shoes', 'Soccer cleats', 'Tennis shoes', 'Cross-training shoes', 'Skate shoes'] },
    { title: 'Men\'s Casual Footwear', subCategories: ['Sneakers', 'Loafers', 'Boat shoes', 'Espadrilles', 'Slip-on shoes', 'Moccasins'] },
    { title: 'Men\'s Dress Footwear', subCategories: ['Oxfords', 'Derbies', 'Monk straps', 'Brogues', 'Formal boots'] },
    { title: 'Men\'s Boots', subCategories: ['Ankle boots', 'Chelsea boots', 'Combat boots', 'Hiking boots', 'Work boots', 'Cowboy boots'] },
    { title: 'Men\'s Sandals', subCategories: ['Flip-flops', 'Slides', 'Sport sandals'] },
    { title: 'Men\'s Specialty Footwear', subCategories: ['Orthopedic shoes', 'Bowling shoes', 'Climbing shoes', 'Golf shoes', 'Ski boots'] },
 ];

 const womenCategories = [
    { title: 'Women\'s Shoes', subCategories: ['Athletic shoes', 'Casual shoes', 'Dress shoes', 'Boots', 'Sandals', 'Slippers'] },
    { title: 'Women\'s Athletic Footwear', subCategories: ['Running shoes', 'Tennis shoes', 'Yoga shoes', 'Dance shoes'] },
    { title: 'Women\'s Casual Footwear', subCategories: ['Sneakers', 'Ballet flats', 'Mary Janes', 'Espadrilles', 'Slip-on shoes'] },
    { title: 'Women\'s Dress Footwear', subCategories: ['Heels', 'Pumps', 'Flats', 'Wedges', 'Sandals'] },
    { title: 'Women\'s Boots', subCategories: ['Ankle boots', 'Knee-high boots', 'Over-the-knee boots', 'Rain boots', 'Snow boots'] },
    { title: 'Women\'s Sandals', subCategories: ['Wedge sandals', 'Gladiator sandals', 'Flip-flops', 'Slide sandals', 'Platform sandals'] },
    { title: 'Women\'s Specialty Footwear', subCategories: ['Orthopedic shoes', 'Dance shoes', 'Ballet pointe shoes', 'Bridal shoes', 'High-heeled boots'] },
 ];

 return (
  <div style={{ paddingTop: '80px' }}>
      <h1>Shoe Categories</h1>
      <div className="shoe-categories">
      <div className="men-categories">
        <h2>Men's Footwear</h2>
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
        <h2>Women's Footwear</h2>
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

export default ShoeCategories;
