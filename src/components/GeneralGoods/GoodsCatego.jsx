import React from 'react';
import './GoodsCatego.css'; // Ensure you have this CSS file for styling

const GoodsCategories = () => {
 const categories = [
    {
      title: 'Swimming Gear',
      items: [
        'Swimming glasses',
        'Swim caps',
        'Swimwear',
      ],
    },
    {
      title: 'Vega Helmets',
      items: [
        'Vega Axor',
        'Vega Gents Helmet',
        'Vega Yellow Ladies Helmet',
      ],
    },
    {
      title: 'Kitchenware',
      items: [
        'Milton Hot Box',
        'Cello Flask 24 Hot And Cold',
        'Cup And Saucer',
        'Cello Max Fresh Thermi Pack',
        'Atlasware Water Bottle',
      ],
    },
    {
      title: 'Personal Accessories',
      items: [
        'Mens Wallet Trendy Collection',
        'Mens Wallet',
        'Leather Belt',
        'Couple Keychain',
        'Original Titan Wallet',
      ],
    },
    {
      title: 'Stationery',
      items: [
        'Steel Pen Stand',
        'Parker Pen',
        'Electronic Keyboard',
      ],
    },
    {
      title: 'Outdoor Gear',
      items: [
        'Mosquito Bat',
        'Shield',
        'Cap for Boys',
        'Kaiser Wallclock',
        'Board Games',
        'American Tourister Trolley',
      ],
    },
    {
      title: 'Fitness Equipment',
      items: [
        'Hammer',
        'Supreme Yoga Mate',
        'Nivia Shaker',
        'Boxing Kit',
      ],
    },
 ];

 return (
  <div style={{ paddingTop: '80px' }}>
    <h1>General Goods Categories</h1>
    <div className="goods-categories">
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

export default GoodsCategories;
