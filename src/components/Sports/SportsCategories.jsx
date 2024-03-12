import React from 'react';
import './SportsCategories.css'; // Ensure you have this CSS file for styling

const SportsCategories = () => {
 const categories = [
    {
      title: 'Basketball Equipment',
      items: [
        'Basketball Hoop',
        'Fox 40 Sharx (Whistle)',
        'Basketball',
        'Knee Support',
        'Water Bottle',
        'Hot And Cool WaterCane',
      ],
    },
    {
      title: 'Sports Garments',
      items: ['Sports Garments'],
    },
    {
      title: 'Skating Gear',
      items: [
        'Skating Helmet',
        'Four Arms Tighter',
        'Skates',
      ],
    },
    {
      title: 'Cricket Gear',
      items: [
        'Cricket Light Weight Bat',
        'Cricket Ball',
        'Maspro Chess Kit (Cricket Set)',
        'Cone',
        'Power Grip',
        'Dumbles',
        'Carrom Accessories',
      ],
    },
    {
      title: 'Outdoor Games',
      items: [
        'Carrom All Brand Striker Available',
        'Nivia Frisbee',
        'Disc',
        'Kidney Guard',
        'Carrom Accessories All Available',
      ],
    },
    {
      title: 'Fitness Accessories',
      items: [
        'Nivia Dynamic Skipping Rope',
        'Nivia Stop Watch',
        'Dynamic Soft expander',
        'Skipping Roap',
        'Hand Band',
      ],
    },
    {
      title: 'Badminton Gear',
      items: [
        'Lining Badminton Racket',
        'Shuttlecocks',
        'Badminton Net',
      ],
    },
    {
      title: 'Volleyball Equipment',
      items: [
        'Volleyball',
        'Volleyball Net',
      ],
    },
    {
      title: 'Water Sports',
      items: [
        'Water Bottle',
        'Hot And Cool WaterCane',
        'Nivia Watercane',
        'Cello Water Bottle',
      ],
    },
    {
      title: 'Protective Gear',
      items: [
        'Knee Support',
        'Kidney Guard',
        'Four Arms Tighter',
        'Hand Band',
      ],
    },
    {
      title: 'Sport-specific Apparel',
      items: ['Sports Garments', 'Garments'],
    },
 ];

 return (
  <div style={{ paddingTop: '80px' }}>
    <h1>Sports Categories</h1>
    <div className="sports-categories">
      {categories.map((category, index) => (
        <div key={index} className="category-section">
          <h2>{category.title}</h2>
          <ul>
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
 );
};

export default SportsCategories;
