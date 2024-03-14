<<<<<<< HEAD
import React from 'react';
import './GoodsCatego.css'; // Ensure you have this CSS file for styling
=======
/* GoodsCategories.jsx */
import React from 'react';
import './GoodsCatego.css'; // Ensure you have this CSS file for styling
import Kitchenware from '../../Assets/GeneralGoods/kitchenware.jpg';
import Swimming from '../../Assets/GeneralGoods/Swimminggear.jpg';
import Vega from '../../Assets/GeneralGoods/vegahelmets.jpg';
import Stationery from '../../Assets/GeneralGoods/Stationery.jpg';
import Outdoor from '../../Assets/GeneralGoods/OutdoorGear.jpg';
import Personal from '../../Assets/GeneralGoods/personalaccesories.jpg';
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04

const GoodsCategories = () => {
 const categories = [
    {
      title: 'Swimming Gear',
      items: [
        'Swimming glasses',
        'Swim caps',
        'Swimwear',
<<<<<<< HEAD
      ],
=======
      ],image:Swimming
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
    },
    {
      title: 'Vega Helmets',
      items: [
        'Vega Axor',
        'Vega Gents Helmet',
        'Vega Yellow Ladies Helmet',
<<<<<<< HEAD
      ],
=======
      ],image:Vega
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
    },
    {
      title: 'Kitchenware',
      items: [
        'Milton Hot Box',
        'Cello Flask 24 Hot And Cold',
        'Cup And Saucer',
        'Cello Max Fresh Thermi Pack',
        'Atlasware Water Bottle',
<<<<<<< HEAD
      ],
=======
      ],image:Kitchenware
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
    },
    {
      title: 'Personal Accessories',
      items: [
        'Mens Wallet Trendy Collection',
        'Mens Wallet',
        'Leather Belt',
        'Couple Keychain',
        'Original Titan Wallet',
<<<<<<< HEAD
      ],
=======
      ],image:Personal
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
    },
    {
      title: 'Stationery',
      items: [
        'Steel Pen Stand',
        'Parker Pen',
        'Electronic Keyboard',
<<<<<<< HEAD
      ],
=======
      ],image:Stationery
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
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
<<<<<<< HEAD
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
=======
      ],image:Outdoor
    },
    
 ];

 return (
  <div style={{ paddingTop: '80px' }}>
    <h1>General Goods Categories</h1>
    <div className="goods-categories">
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

<<<<<<< HEAD
export default GoodsCategories;
=======
export default GoodsCategories;
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
