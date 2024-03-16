import React from 'react';
import './GoodsCatego.css';
import Kitchenware from '../../Assets/GeneralGoods/kitchenware.jpg';
import Swimming from '../../Assets/GeneralGoods/Swimminggear.jpg';
import Vega from '../../Assets/GeneralGoods/vegahelmets.jpg';
import Stationery from '../../Assets/GeneralGoods/Stationery.jpg';
import Outdoor from '../../Assets/GeneralGoods/OutdoorGear.jpg';
import Personal from '../../Assets/GeneralGoods/personalaccesories.jpg';

const GoodsCategories = () => {
 const categories = [
    {
      title: 'Swimming Gear',
      items: [
        'Swimming glasses',
        'Swim caps',
        'Swimwear',
      ],image:Swimming
    },
    {
      title: 'Vega Helmets',
      items: [
        'Vega Axor',
        'Vega Gents Helmet',
        'Vega Yellow Ladies Helmet',
      ],image:Vega
    },
    {
      title: 'Kitchenware',
      items: [
        'Milton Hot Box',
        'Cello Flask 24 Hot And Cold',
        'Cup And Saucer',
        'Cello Max Fresh Thermi Pack',
        'Atlasware Water Bottle',
      ],image:Kitchenware
    },
    {
      title: 'Personal Accessories',
      items: [
        'Mens Wallet Trendy Collection',
        'Mens Wallet',
        'Leather Belt',
        'Couple Keychain',
        'Original Titan Wallet',
      ],image:Personal
    },
    {
      title: 'Stationery',
      items: [
        'Steel Pen Stand',
        'Parker Pen',
        'Electronic Keyboard',
      ],image:Stationery
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