import React from 'react';
import './GoodsCatego.css';
import Kitchenware from '../../Assets/GeneralGoods/kitchenware.jpg';
import Swimming from '../../Assets/GeneralGoods/Swimminggear.jpg';
import Vega from '../../Assets/GeneralGoods/vegahelmets.jpg';
import Stationery from '../../Assets/GeneralGoods/Stationery.jpg';
import Outdoor from '../../Assets/GeneralGoods/OutdoorGear.jpg';
import Personal from '../../Assets/GeneralGoods/personalaccesories.jpg';
import { Link } from 'react-router-dom';

const GoodsCategories = () => {
 const categories = [
    {
      title: 'Swimming Gear',
      subCategories: [
        'Swimming glasses',
        'Swim caps',
        'Swimwear',
      ],image:Swimming
    },
    {
      title: 'Vega Helmets',
      subCategories: [
        'Vega Axor',
        'Vega Gents Helmet',
        'Vega Yellow Ladies Helmet',
      ],image:Vega
    },
    {
      title: 'Kitchenware',
      subCategories: [
        'Milton Hot Box',
        'Cello Flask 24 Hot And Cold',
        'Cup And Saucer',
        'Cello Max Fresh Thermi Pack',
        'Atlasware Water Bottle',
      ],image:Kitchenware
    },
    {
      title: 'Personal Accessories',
      subCategories: [
        'Mens Wallet Trendy Collection',
        'Mens Wallet',
        'Leather Belt',
        'Couple Keychain',
        'Original Titan Wallet',
      ],image:Personal
    },
    {
      title: 'Stationery',
      subCategories: [
        'Steel Pen Stand',
        'Parker Pen',
        'Electronic Keyboard',
      ],image:Stationery
    },
    {
      title: 'Outdoor Gear',
      subCategories: [
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
            {category.subCategories.map((subCategory, subIndex) => (
              <li key={subIndex}>
              <Link to={`/generalGoods/${subCategory}`}>{subCategory}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
   
 );
};

export default GoodsCategories;