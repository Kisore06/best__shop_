import React from 'react';
import './GiftCategories.css';
import frame from '../../Assets/Gifts/Frame.jpg';
import Coffee from '../../Assets/Gifts/Coffee.jpg';
import trendy from '../../Assets/Gifts/Trendy.jpg';
import clock from '../../Assets/Gifts/Clock.jpg';
import personalized from '../../Assets/Gifts/Personalized.jpg';
import animal from '../../Assets/Gifts/Animal.jpg';
import { Link } from 'react-router-dom';

const GiftCategories = () => {
  const categories = [
    { title: 'Frame Gifts', subCategories: ['Couples Gift Frames', 'Wedding Collection', 'Happy Day', 'Someone Special Gift', 'Wedding Gifts', 'Mother\'s Gift', 'Best Wishes Frame', 'Pink Couple Gift', 'Marriage Couple Gift'], image: frame },
    { title: 'Coffee Gifts', subCategories: ['Coffee Mug'], image: Coffee },
    { title: 'Trendy Gifts', subCategories: ['Trendy Gifts', 'Fancy Gift'], image: trendy },
    { title: 'Home Decor Gifts', subCategories: ['Wood Clock', 'Alarm Clock', 'Frame', 'Fish Gold Gift'], image: clock },
    { title: 'Personalized Gifts', subCategories: ['Couples Gifts', 'Frame Gifts', 'Best Wishes Frame', 'Pink Couple Gift', 'Marriage Couple Gift'], image: personalized },
    { title: 'Animal-themed Gifts', subCategories: ['Duck', 'Horse'], image: animal },
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      <h1>Gift Categories</h1>
      <div className="gift-categories">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <h2>{category.title}</h2>
            <img src={category.image} alt={category.title} className="category-image" />

            <ul>
              {category.subCategories.map((subCategory, subIndex) => (
                <li key={subIndex}>
                  <Link to={`/gifts/${subCategory}`}>{subCategory}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftCategories;