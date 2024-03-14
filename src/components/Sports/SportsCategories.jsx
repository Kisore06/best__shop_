<<<<<<< HEAD
import React from 'react';
import './SportsCategories.css'; // Ensure you have this CSS file for styling
=======
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
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04

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
<<<<<<< HEAD
      ],
=======
      ],image:Basketball
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
    },
    {
      title: 'Sports Garments',
      items: ['Sports Garments'],
<<<<<<< HEAD
=======
      image:Garments
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
    },
    {
      title: 'Skating Gear',
      items: [
        'Skating Helmet',
        'Four Arms Tighter',
        'Skates',
<<<<<<< HEAD
      ],
=======
      ],image:skating
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
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
<<<<<<< HEAD
      ],
=======
      ],image:cricket
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
    },
    {
      title: 'Outdoor Games',
      items: [
        'Carrom All Brand Striker Available',
        'Nivia Frisbee',
        'Disc',
        'Kidney Guard',
        'Carrom Accessories All Available',
<<<<<<< HEAD
      ],
=======
      ],image:outdoor
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
    },
    {
      title: 'Fitness Accessories',
      items: [
        'Nivia Dynamic Skipping Rope',
        'Nivia Stop Watch',
        'Dynamic Soft expander',
        'Skipping Roap',
        'Hand Band',
<<<<<<< HEAD
      ],
=======
      ],image:fitness
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
    },
    {
      title: 'Badminton Gear',
      items: [
        'Lining Badminton Racket',
        'Shuttlecocks',
        'Badminton Net',
<<<<<<< HEAD
      ],
=======
      ],image:badminton
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
    },
    {
      title: 'Volleyball Equipment',
      items: [
        'Volleyball',
        'Volleyball Net',
<<<<<<< HEAD
      ],
=======
      ],image:volleyball
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
    },
    {
      title: 'Water Sports',
      items: [
        'Water Bottle',
        'Hot And Cool WaterCane',
        'Nivia Watercane',
        'Cello Water Bottle',
<<<<<<< HEAD
      ],
=======
      ],image:water
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
    },
    {
      title: 'Protective Gear',
      items: [
        'Knee Support',
        'Kidney Guard',
        'Four Arms Tighter',
        'Hand Band',
<<<<<<< HEAD
      ],
    },
    {
      title: 'Sport-specific Apparel',
      items: ['Sports Garments', 'Garments'],
=======
      ],image:protective
    },
    {
      title: 'Sport-specific Apparel',
      items: ['Sports Garments', 'Garments'],image:specific
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
    },
 ];

 return (
<<<<<<< HEAD
  <div style={{ paddingTop: '80px' }}>
    <h1>Sports Categories</h1>
    <div className="sports-categories">
      {categories.map((category, index) => (
        <div key={index} className="category-section">
          <h2>{category.title}</h2>
=======
  <div style={{ paddingTop: '80px' }}>
    <h1>Sports Categories</h1>
    <div className="sports-categories">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <h2>{category.title}</h2>
          <img src={category.image} alt={category.title} className="category-image" />
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
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
