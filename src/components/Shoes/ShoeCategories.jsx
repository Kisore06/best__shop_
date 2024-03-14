<<<<<<< HEAD
// ShoeCategories.js
import React from 'react';
import './ShoeCategories.css'; // Import the CSS file

const ShoeCategories = () => {
 const menCategories = [
    { title: 'Men\'s Shoes', subCategories: ['Athletic shoes', 'Casual shoes', 'Dress shoes', 'Boots', 'Sandals', 'Slippers'] },
    { title: 'Men\'s Athletic Footwear', subCategories: ['Running shoes', 'Basketball shoes', 'Soccer cleats', 'Tennis shoes', 'Cross-training shoes', 'Skate shoes'] },
    { title: 'Men\'s Casual Footwear', subCategories: ['Sneakers', 'Loafers', 'Boat shoes', 'Espadrilles', 'Slip-on shoes', 'Moccasins'] },
    { title: 'Men\'s Dress Footwear', subCategories: ['Oxfords', 'Derbies', 'Monk straps', 'Brogues', 'Formal boots'] },
    { title: 'Men\'s Boots', subCategories: ['Ankle boots', 'Chelsea boots', 'Combat boots', 'Hiking boots', 'Work boots', 'Cowboy boots'] },
    { title: 'Men\'s Sandals', subCategories: ['Flip-flops', 'Slides', 'Sport sandals'] },
    { title: 'Men\'s Specialty Footwear', subCategories: ['Orthopedic shoes', 'Bowling shoes', 'Climbing shoes', 'Golf shoes', 'Ski boots'] },
 ];

 const womenCategories = [
    { title: 'Women\'s Shoes', subCategories: ['Athletic shoes', 'Casual shoes', 'Dress shoes', 'Boots', 'Sandals', 'Slippers'] },
    { title: 'Women\'s Athletic Footwear', subCategories: ['Running shoes', 'Tennis shoes', 'Yoga shoes', 'Dance shoes'] },
    { title: 'Women\'s Casual Footwear', subCategories: ['Sneakers', 'Ballet flats', 'Mary Janes', 'Espadrilles', 'Slip-on shoes'] },
    { title: 'Women\'s Dress Footwear', subCategories: ['Heels', 'Pumps', 'Flats', 'Wedges', 'Sandals'] },
    { title: 'Women\'s Boots', subCategories: ['Ankle boots', 'Knee-high boots', 'Over-the-knee boots', 'Rain boots', 'Snow boots'] },
    { title: 'Women\'s Sandals', subCategories: ['Wedge sandals', 'Gladiator sandals', 'Flip-flops', 'Slide sandals', 'Platform sandals'] },
    { title: 'Women\'s Specialty Footwear', subCategories: ['Orthopedic shoes', 'Dance shoes', 'Ballet pointe shoes', 'Bridal shoes', 'High-heeled boots'] },
=======
import React from 'react';
import './ShoeCategories.css'; // Import the CSS file
import bootsformen from "..//..//Assets//Shoes//bootsformen.jpg";
import dressshoesformen from "..//..//Assets//Shoes//dressshoesformen.jpg";
import menspecialityfootwear from "..//..//Assets//Shoes//menspecialityfootwear.jpg";
import womenspecialityfootwear from "..//..//Assets//Shoes//Womenspecialtyfootwear.jpg";
import womenshoes from "..//..//Assets//Shoes//womenshoes.jpg";
import womendressfootwear from "..//..//Assets//Shoes//WomensDressFootwear.jpg";
import womencasualfootwear from "..//..//Assets//Shoes//WomensCasualFootwear.jpg";
import womenboots from "..//..//Assets//Shoes//WomensBoots.jpg";
import womenatheleticfootwear from "..//..//Assets//Shoes//WomensAthleticFootwear.jpg";
import womensandals from "../../Assets/Shoes/WomenSandals.jpg";
import sandalsformen from "../../Assets/Shoes/sandalsformen.jpg";
import MenAtheleticfootwear from "../../Assets/Shoes/MensAthleticFootwear.jpg";
import menshoescasual from "..//..//Assets/Shoes//menshoescasual.jpg";
import menshoes from "..//..//Assets/Shoes//menshoes.jpg";
import { Link } from 'react-router-dom';

const ShoeCategories = () => {
 const menCategories = [
    { title: 'Men\'s Shoes', subCategories: ['Athletic shoes', 'Casual shoes', 'Dress shoes', 'Boots', 'Sandals', 'Slippers'],image:menshoes },
    { title: 'Men\'s Athletic Footwear', subCategories: ['Running shoes', 'Basketball shoes', 'Soccer cleats', 'Tennis shoes', 'Cross-training shoes', 'Skate shoes'],image:MenAtheleticfootwear },
    { title: 'Men\'s Casual Footwear', subCategories: ['Sneakers', 'Loafers', 'Boat shoes', 'Espadrilles', 'Slip-on shoes', 'Moccasins'],image:menshoescasual },
    { title: 'Men\'s Dress Footwear', subCategories: ['Oxfords', 'Derbies', 'Monk straps', 'Brogues', 'Formal boots'],image:dressshoesformen },
    { title: 'Men\'s Boots', subCategories: ['Ankle boots', 'Chelsea boots', 'Combat boots', 'Hiking boots', 'Work boots', 'Cowboy boots'],image:bootsformen },
    { title: 'Men\'s Sandals', subCategories: ['Flip-flops', 'Slides', 'Sport sandals'],image:sandalsformen },
    { title: 'Men\'s Specialty Footwear', subCategories: ['Orthopedic shoes', 'Bowling shoes', 'Climbing shoes', 'Golf shoes', 'Ski boots'],image:menspecialityfootwear },
 ];

 const womenCategories = [
    { title: 'Women\'s Shoes', subCategories: ['Athletic shoes', 'Casual shoes', 'Dress shoes', 'Boots', 'Sandals', 'Slippers'],image:womenshoes },
    { title: 'Women\'s Athletic Footwear', subCategories: ['Running shoes', 'Tennis shoes', 'Yoga shoes', 'Dance shoes'],image:womenatheleticfootwear },
    { title: 'Women\'s Casual Footwear', subCategories: ['Sneakers', 'Ballet flats', 'Mary Janes', 'Espadrilles', 'Slip-on shoes'],image:womencasualfootwear },
    { title: 'Women\'s Dress Footwear', subCategories: ['Heels', 'Pumps', 'Flats', 'Wedges', 'Sandals'],image:womendressfootwear },
    { title: 'Women\'s Boots', subCategories: ['Ankle boots', 'Knee-high boots', 'Over-the-knee boots', 'Rain boots', 'Snow boots'],image:womenboots },
    { title: 'Women\'s Sandals', subCategories: ['Wedge sandals', 'Gladiator sandals', 'Flip-flops', 'Slide sandals', 'Platform sandals'],image:womensandals },
    { title: 'Women\'s Specialty Footwear', subCategories: ['Orthopedic shoes', 'Dance shoes', 'Ballet pointe shoes', 'Bridal shoes', 'High-heeled boots'],image:womenspecialityfootwear },
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
 ];

 return (
  <div style={{ paddingTop: '80px' }}>
      <h1>Shoe Categories</h1>
      <div className="shoe-categories">
      <div className="men-categories">
<<<<<<< HEAD
        <h2>Men's Footwear</h2>
        {menCategories.map((category, index) => (
          <div key={index} className="category">
            <h3>{category.title}</h3>
            <ul>
              {category.subCategories.map((subCategory, subIndex) => (
                <li key={subIndex}>{subCategory}</li>
              ))}
            </ul>
          </div>
        ))}
=======
        <Link to={`/shoes/men`}>
          <h2>Men's Footwear</h2>
        </Link>
        {menCategories.map((category, index) => (
            <div key={index} className="category">
              <h3>{category.title}</h3>
              <ul className="subCategoryList">
               <img src={category.image} alt={category.title} className="category-image" />
                {category.subCategories.map((subCategory, subIndex) => (
                 <li key={subIndex}>
                    <Link to={`/shoes/men/${subCategory}`}>{subCategory}</Link>
                 </li>
                ))}
              </ul>
            </div>
          ))}
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
      </div>
      <div className="women-categories">
        <h2>Women's Footwear</h2>
        {womenCategories.map((category, index) => (
          <div key={index} className="category">
            <h3>{category.title}</h3>
<<<<<<< HEAD
            <ul>
=======
            <img src={category.image} alt={category.title} className="category-image" />

            <ul className="subCategoryList" >
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
              {category.subCategories.map((subCategory, subIndex) => (
                <li key={subIndex}>{subCategory}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
 );
};

export default ShoeCategories;
