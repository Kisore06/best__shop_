import React from 'react';
import { Link } from 'react-router-dom';
import './ShoeCategories.css';

const ShoeCategories = () => {
 const categories = [
    {
      title: 'Athletic Footwear',
      types: ['Running shoes', 'Basketball shoes', 'Soccer cleats', 'Tennis shoes', 'Cross-training shoes', 'Skate shoes'],
    },
    {
      title: 'Casual Footwear',
      types: ['Sneakers', 'Loafers', 'Boat shoes', 'Espadrilles', 'Slip-on shoes', 'Moccasins'],
    },
    {
      title: 'Dress Footwear',
      types: ['Heels', 'Pumps', 'Flats', 'Wedges', 'Sandals', 'Oxfords', 'Derbies', 'Monk straps', 'Brogues', 'Formal boots'],
    },
    {
      title: 'Boots',
      types: ['Ankle boots', 'Knee-high boots', 'Over-the-knee boots', 'Rain boots', 'Snow boots'],
    },
    {
      title: 'Sandals',
      types: ['Flip-flops', 'Slides', 'Sport sandals', 'Wedge sandals', 'Gladiator sandals', 'Flip-flops', 'Slide sandals', 'Platform sandals'],
    },
    {
      title: 'Specialty Footwear',
      types: ['Orthopedic shoes', 'Dance shoes', 'Ballet pointe shoes', 'Bridal shoes', 'High-heeled boots'],
    },
 ];

 return (
  <div style={{ paddingTop: '80px' }}>
  <h1 className="shoe-categories-title">Shoe Categories</h1>
  <div className="shoe-categories">
    {categories.map((category, index) => (
      <div key={index} className="category-card">
        <h2>{category.title}</h2>
        <ul>
          {category.types.map((subCategory, typeIndex) => (
            <li key={typeIndex}>
              <Link to={`/shoes/${subCategory}`}>{subCategory}</Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>
);
};

export default ShoeCategories;
