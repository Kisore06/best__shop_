import React from 'react';
import './GiftCategories.css'; // Ensure this CSS file is created

const GiftCategories = () => {
 const categories = [
    { title: 'Frame Gifts', subCategories: ['Couples Gift Frames', 'Wedding Collection', 'Happy Day', 'Someone Special Gift', 'Wedding Gifts', 'Mother\'s Gift', 'Best Wishes Frame', 'Pink Couple Gift', 'Marriage Couple Gift'] },
    { title: 'Coffee Gifts', subCategories: ['Coffee Mug'] },
    { title: 'Trendy Gifts', subCategories: ['Trendy Gifts', 'Fancy Gift'] },
    { title: 'Home Decor Gifts', subCategories: ['Wood Clock', 'Alarm Clock', 'Frame', 'Fish Gold Gift'] },
    { title: 'Personalized Gifts', subCategories: ['Couples Gifts', 'Frame Gifts', 'Best Wishes Frame', 'Pink Couple Gift', 'Marriage Couple Gift'] },
    { title: 'Animal-themed Gifts', subCategories: ['Duck', 'Horse'] },
 ];

 return (
    <div style={{ paddingTop: '80px' }}>
    <h1>Gift Categories</h1>
    <div className="gift-categories">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <h2>{category.title}</h2>
          <ul>
            {category.subCategories.map((subCategory, subIndex) => (
              <li key={subIndex}>{subCategory}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
 );
};

export default GiftCategories;
