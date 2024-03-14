/* SportsCategories.jsx */
import React from 'react';
import './SportsCategories.css'; // Ensure you have this CSS file for styling
import Basketball from '../../Assets/Sports/Basketball.jpg';
import badminton from '../../Assets/Sports/badminton.jpg';
import cricket from '../../Assets/Sports/cricket.jpg';
import fitness from '../../Assets/Sports/fitness.jpg';
import Garments from '../../Assets/Sports/Garments.png';
import outdoor from '../../Assets/Sports/outdoor.jpg';
import protective from '../../Assets/Sports/protective.jpg';
import skating from '../../Assets/Sports/skating.jpg';
import volleyball from '../../Assets/Sports/Volleyball.webp';
import water from '../../Assets/Sports/water.jpg';
import specific from '../../Assets/Sports/specific.jpg';

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
      ],image:Basketball
    },
    {
      title: 'Sports Garments',
      items: ['Sports Garments'],
      image:Garments
    },
    {
      title: 'Skating Gear',
      items: [
        'Skating Helmet',
        'Four Arms Tighter',
        'Skates',
      ],image:skating
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
      ],image:cricket
    },
    {
      title: 'Outdoor Games',
      items: [
        'Carrom All Brand Striker Available',
        'Nivia Frisbee',
        'Disc',
        'Kidney Guard',
        'Carrom Accessories All Available',
      ],image:outdoor
    },
    {
      title: 'Fitness Accessories',
      items: [
        'Nivia Dynamic Skipping Rope',
        'Nivia Stop Watch',
        'Dynamic Soft expander',
        'Skipping Roap',
        'Hand Band',
      ],image:fitness
    },
    {
      title: 'Badminton Gear',
      items: [
        'Lining Badminton Racket',
        'Shuttlecocks',
        'Badminton Net',
      ],image:badminton
    },
    {
      title: 'Volleyball Equipment',
      items: [
        'Volleyball',
        'Volleyball Net',
      ],image:volleyball
    },
    {
      title: 'Water Sports',
      items: [
        'Water Bottle',
        'Hot And Cool WaterCane',
        'Nivia Watercane',
        'Cello Water Bottle',
      ],image:water
    },
    {
      title: 'Protective Gear',
      items: [
        'Knee Support',
        'Kidney Guard',
        'Four Arms Tighter',
        'Hand Band',
      ],image:protective
    },
    {
      title: 'Sport-specific Apparel',
      items: ['Sports Garments', 'Garments'],image:specific
    },
 ];

 return (
  <div style={{ paddingTop: '80px' }}>
    <h1>Sports Categories</h1>
    <div className="sports-categories">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <h2>{category.title}</h2>
          <img src={category.image} alt={category.title} className="category-image" />
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
