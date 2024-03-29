import React from 'react';
import './WatchCategories.css'; 
import aviation from "..//..//Assets//Watches//Aviation.jpg";
import bracelet from "..//..//Assets//Watches//Bracelet.jpg";
import diamond from "..//..//Assets//Watches//Diamond.jpg";
import Fashion from "..//..//Assets//Watches//Fashion.jpg";
import mencasual from "..//..//Assets//Watches//Mencasual.jpg";
import mensmart from "..//..//Assets//Watches//mensmart.jpg";
import military from "..//..//Assets//Watches//Military .jpg";
import sport from "..//..//Assets//Watches//sport.jpg";
import womencasual from "..//..//Assets//Watches//womencasual.jpg";
import womendress from "..//..//Assets//Watches//womendress.jpg";
import womensmart from "..//..//Assets//Watches//womensmart.jpg";
import { Link } from 'react-router-dom';

const WatchCategories = () => {
 const menCategories = [
    { title: 'Sport Watches', subCategories: ['Dive watches', 'Chronograph watches', 'Racing watches', 'Pilot watches', 'Field watches'],image:sport },
    { title: 'Dress Watches', subCategories: ['Classic dress watches', 'Minimalist dress watches', 'Dress chronographs'],image:mencasual },
    { title: 'Casual Watches', subCategories: ['Stainless steel watches', 'Leather strap watches', 'Canvas strap watches', 'Digital watches'],image:mencasual },
    { title: 'Smart Watches', subCategories: ['Fitness trackers', 'GPS watches', 'Smartwatches with health monitoring features'],image:mensmart },
    { title: 'Military Watches', subCategories: ['Tactical watches', 'Field watches with military-inspired designs', 'Military-issue watches'],image:military },
    { title: 'Aviation Watches', subCategories: ['Pilot watches', 'Flight chronographs', 'Watches with aviation-themed complications'],image:aviation },
 ];

 const womenCategories = [
    { title: 'Fashion Watches', subCategories: ['Trendy designs', 'Colorful straps', 'Fashion-forward dials'],image:Fashion },
    { title: 'Dress Watches', subCategories: ['Elegant dress watches', 'Jewelry-inspired watches', 'Slim and feminine designs'],image:womendress },
    { title: 'Casual Watches', subCategories: ['Everyday watches with versatile designs', 'Leather or fabric straps', 'Minimalist dials'],image:womencasual },
    { title: 'Smart Watches', subCategories: ['Fitness trackers with feminine designs', 'Smartwatches with customizable straps and watch faces'],image:womensmart },
    { title: 'Diamond Watches', subCategories: ['Watches with diamond accents', 'Luxury timepieces with gemstone embellishments'],image:diamond },
    { title: 'Bracelet Watches', subCategories: ['Watches with bracelet-style straps', 'Stainless steel or precious metal bracelets'],image:bracelet },
 ];

 return (
    <div style={{ paddingTop: '80px' }}>
    <h1>Watch Categories</h1>
    <div className="watch-categories">
      <div className="men-categories">
        <h2>Men's Watches</h2>
        {menCategories.map((category, index) => (
          <div key={index} className="category">
            <h3>{category.title}</h3>
            <img src={category.image} alt={category.title} className="category-image" />

            <ul>
              {category.subCategories.map((subCategory, subIndex) => (
                <li key={subIndex}>
                 <Link to={`/watches/${subCategory}`}>{subCategory}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="women-categories">
        <h2>Women's Watches</h2>
        {womenCategories.map((category, index) => (
          <div key={index} className="category">
            <h3>{category.title}</h3>
            <img src={category.image} alt={category.title} className="category-image" />
            <ul>
              {category.subCategories.map((subCategory, subIndex) => (
                <li key={subIndex}>
                 <Link to={`/watches/${subCategory}`}>{subCategory}</Link>
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

export default WatchCategories;