import React from 'react';
import './ClothCategories.css'; // Ensure this CSS file is created
<<<<<<< HEAD

const ClothCategories = () => {
 const menCategories = [
    { title: 'Tops', subCategories: ['T-shirts', 'Polo shirts', 'Casual shirts', 'Dress shirts', 'Henleys'] },
    { title: 'Bottoms', subCategories: ['Jeans', 'Chinos', 'Cargo pants', 'Shorts', 'Sweatpants'] },
    { title: 'Outerwear', subCategories: ['Jackets', 'Blazers', 'Coats', 'Hoodies', 'Sweaters'] },
    { title: 'Suits', subCategories: ['Business suits', 'Formal suits', 'Tuxedos'] },
    { title: 'Activewear', subCategories: ['Athletic shorts', 'Performance shirts', 'Track pants', 'Workout tops'] },
    { title: 'Underwear', subCategories: ['Boxers', 'Briefs', 'Boxer briefs', 'Undershirts'] },
    { title: 'Sleepwear', subCategories: ['Pajama sets', 'Lounge pants', 'Robes'] },
    { title: 'Swimwear', subCategories: ['Swim trunks', 'Board shorts', 'Rash guards'] },
 ];

 const womenCategories = [
    { title: 'Tops', subCategories: ['T-shirts', 'Blouses', 'Tank tops', 'Tunics', 'Crop tops'] },
    { title: 'Bottoms', subCategories: ['Jeans', 'Leggings', 'Skirts', 'Shorts', 'Trousers'] },
    { title: 'Dresses', subCategories: ['Casual dresses', 'Cocktail dresses', 'Maxi dresses', 'Midi dresses', 'Summer dresses'] },
    { title: 'Outerwear', subCategories: ['Jackets', 'Blazers', 'Coats', 'Cardigans', 'Ponchos'] },
    { title: 'Suits and Sets', subCategories: ['Pantsuits', 'Skirt suits', 'Co-ord sets'] },
    { title: 'Activewear', subCategories: ['Sports bras', 'Athletic leggings', 'Workout tops', 'Yoga pants'] },
    { title: 'Intimates', subCategories: ['Bras', 'Panties', 'Lingerie sets', 'Bralettes'] },
    { title: 'Swimwear', subCategories: ['Bikinis', 'One-piece swimsuits', 'Tankinis', 'Cover-ups'] },
=======
import Activewearmen from "..//..//Assets//Clothes//activewear.jpg";
import dresses from "..//..//Assets//Clothes//dresses.jpg";
import Intimates from "..//..//Assets//Clothes//intimates.jpg";
import menbottoms from "..//..//Assets//Clothes//menbottoms.jpg";
import menouter from "..//..//Assets//Clothes//menouterwear.jpg";
import menswim from "..//..//Assets//Clothes//menswimwear.jpg";
import mentop from "..//..//Assets//Clothes//mentops.jpg";
import Sleepwear from "..//..//Assets//Clothes//sleepwear.jpg";
import mensuits from "..//..//Assets//Clothes//suits.jpg";
import Underwear from "..//..//Assets//Clothes//underwear.jpg";
import womenactive from "..//..//Assets//Clothes//womenactivewear.jpg";
import womenbottoms from "..//..//Assets//Clothes//womenbottoms.jpg";
import womenouter from "..//..//Assets//Clothes//womenouterwear.jpg";
import womensuits from "..//..//Assets//Clothes//womensuits.jpg";
import womenswim from "..//..//Assets//Clothes//womenswimwear.jpg";
import womentop from "..//..//Assets//Clothes//womentops.jpg";
const ClothCategories = () => {
 const menCategories = [
    { title: 'Tops', subCategories: ['T-shirts', 'Polo shirts', 'Casual shirts', 'Dress shirts', 'Henleys'],image:mentop },
    { title: 'Bottoms', subCategories: ['Jeans', 'Chinos', 'Cargo pants', 'Shorts', 'Sweatpants'],image:menbottoms },
    { title: 'Outerwear', subCategories: ['Jackets', 'Blazers', 'Coats', 'Hoodies', 'Sweaters'],image:menouter },
    { title: 'Suits', subCategories: ['Business suits', 'Formal suits', 'Tuxedos'],image:mensuits },
    { title: 'Activewear', subCategories: ['Athletic shorts', 'Performance shirts', 'Track pants', 'Workout tops'],image:Activewearmen },
    { title: 'Underwear', subCategories: ['Boxers', 'Briefs', 'Boxer briefs', 'Undershirts'],image:Underwear },
    { title: 'Sleepwear', subCategories: ['Pajama sets', 'Lounge pants', 'Robes'],image:Sleepwear },
    { title: 'Swimwear', subCategories: ['Swim trunks', 'Board shorts', 'Rash guards'],image:menswim },
 ];

 const womenCategories = [
    { title: 'Tops', subCategories: ['T-shirts', 'Blouses', 'Tank tops', 'Tunics', 'Crop tops'],image:womentop },
    { title: 'Bottoms', subCategories: ['Jeans', 'Leggings', 'Skirts', 'Shorts', 'Trousers'],image:womenbottoms },
    { title: 'Dresses', subCategories: ['Casual dresses', 'Cocktail dresses', 'Maxi dresses', 'Midi dresses', 'Summer dresses'],image:dresses },
    { title: 'Outerwear', subCategories: ['Jackets', 'Blazers', 'Coats', 'Cardigans', 'Ponchos'],image:womenouter },
    { title: 'Suits and Sets', subCategories: ['Pantsuits', 'Skirt suits', 'Co-ord sets'],image:womensuits },
    { title: 'Activewear', subCategories: ['Sports bras', 'Athletic leggings', 'Workout tops', 'Yoga pants'],image:womenactive },
    { title: 'Intimates', subCategories: ['Bras', 'Panties', 'Lingerie sets', 'Bralettes'],image:Intimates },
    { title: 'Swimwear', subCategories: ['Bikinis', 'One-piece swimsuits', 'Tankinis', 'Cover-ups'],image:womenswim },
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
 ];

 return (
    <div style={{ paddingTop: '80px' }}>
    <h1>Clothing Categories</h1>
    <div className="cloth-categories">
      <div className="men-categories">
        <h2>Men's Clothing</h2>
        {menCategories.map((category, index) => (
          <div key={index} className="category">
            <h3>{category.title}</h3>
<<<<<<< HEAD
=======
            <img src={category.image} alt={category.title} className="category-image" />
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
            <ul>
              {category.subCategories.map((subCategory, subIndex) => (
                <li key={subIndex}>{subCategory}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="women-categories">
        <h2>Women's Clothing</h2>
        {womenCategories.map((category, index) => (
          <div key={index} className="category">
            <h3>{category.title}</h3>
<<<<<<< HEAD
=======
            <img src={category.image} alt={category.title} className="category-image" />
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
            <ul>
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

<<<<<<< HEAD
export default ClothCategories;
=======
export default ClothCategories;
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
