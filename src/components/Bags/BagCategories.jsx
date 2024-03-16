import React from 'react';
import './BagCategories.css'; // Import the CSS file
import briefcases from "..//..//Assets//Bags//Briefcases.jpg";
import diaper from "..//..//Assets//Bags//DiaperBags.jpg";
import duffel from "..//..//Assets//Bags//DuffelBags.jpg";
import totes from "..//..//Assets//Bags//Totes.jpg";
import wallets from "..//..//Assets//Bags//Wallets.jpg";
import messenger from "..//..//Assets//Bags//MessengerBags.jpg";
import Clutch from "..//..//Assets//Bags//ClutchesandEveningBags.jpg";
import MenbackpacksBags from "..//..//Assets//Bags//Menbackpacks.jpg";
import Travel from "..//..//Assets//Bags//TravelBags.jpg";
import womencrossbodybags from "..//..//Assets//Bags//CrossbodyBags.jpg";
import CrossbodyBagsmen from "..//..//Assets//Bags//CrossbodyBagsmen.jpg";
import walletsandcard from "..//..//Assets//Bags//WalletsandCardholders.jpg";
import womenbackpacks from "..//..//Assets//Bags//womenbackpacks.jpg";
import womentravelbackpags from "..//..//Assets//Bags//womenTravelBags.jpg";
import Handbags from "..//..//Assets//Bags//handbags.webp";
import { Link } from 'react-router-dom';


const BagCategories = () => {
 const menCategories = [
    { title: 'Backpacks', subCategories: ['Laptop backpacks', 'Travel backpacks', 'Hiking backpacks', 'Tactical backpacks', 'Fashion backpacks'], image: MenbackpacksBags },
    { title: 'Messenger Bags', subCategories: ['Laptop messenger bags', 'Crossbody messenger bags', 'Satchels', 'Briefcases'], image: messenger },
    { title: 'Duffel Bags', subCategories: ['Gym duffel bags', 'Weekend duffel bags', 'Travel duffel bags', 'Sports duffel bags'], image: duffel },
    { title: 'Briefcases', subCategories: ['Classic leather briefcases', 'Modern briefcases', 'Portfolio bags'], image: briefcases },
    { title: 'Wallets', subCategories: ['Bifold wallets', 'Trifold wallets', 'Money clips', 'Cardholders'], image: wallets },
    { title: 'Travel Bags', subCategories: ['Wheeled luggage', 'Carry-on bags', 'Garment bags', 'Toiletry bags', 'Travel organizers'], image: Travel },
    { title: 'Crossbody Bags', subCategories: ['Everyday crossbody bags', 'Leather crossbody bags', 'Canvas crossbody bags'], image: CrossbodyBagsmen },
 ];

 const womenCategories = [
    { title: 'Handbags', subCategories: ['Tote bags', 'Shoulder bags', 'Satchels', 'Hobo bags', 'Bucket bags'], image: Handbags },
    { title: 'Clutches and Evening Bags', subCategories: ['Clutch purses', 'Evening bags', 'Wristlets'], image: Clutch },
    { title: 'Backpacks', subCategories: ['Fashion backpacks', 'Mini backpacks', 'Convertible backpacks', 'Leather backpacks'], image: womenbackpacks },
    { title: 'Crossbody Bags', subCategories: ['Crossbody purses', 'Messenger bags', 'Chain strap bags'], image: womencrossbodybags },
    { title: 'Wallets and Cardholders', subCategories: ['Zip-around wallets', 'Coin purses', 'Passport holders', 'ID holders'], image: walletsandcard },
    { title: 'Totes', subCategories: ['Canvas totes', 'Leather totes', 'Beach totes', 'Work totes'], image: totes },
    { title: 'Travel Bags', subCategories: ['Rolling luggage', 'Weekend bags', 'Cosmetic cases', 'Jewelry organizers'], image: womentravelbackpags },
    { title: 'Diaper Bags', subCategories: ['Fashion diaper bags', 'Backpack diaper bags', 'Tote diaper bags'], image: diaper },
 ];

 return (
 <div style={{ paddingTop: '80px' }}>
      <h1>Bag Categories</h1>
      <div className="bag-categories">
      <div className="men-categories">
        <h2>Men's Bags</h2>
        {menCategories.map((category, index) => (
          <div key={index} className="category">
            <h3>{category.title}</h3>
            <img src={category.image} alt={category.title} className="category-image" />
            <ul>
              {category.subCategories.map((subCategory, subIndex) => (
                <li key={subIndex}>
                  <Link to={`/shoes/men/${subCategory}`}>{subCategory}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="women-categories">
        <h2>Women's Bags</h2>
        {womenCategories.map((category, index) => (
          <div key={index} className="category">
            <h3>{category.title}</h3>
            <img src={category.image} alt={category.title} className="category-image" />
            <ul>
              {category.subCategories.map((subCategory, subIndex) => (
                <li key={subIndex}>         
                  <Link to={`/shoes/men/${subCategory}`}>{subCategory}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
 );
};

export default BagCategories;
