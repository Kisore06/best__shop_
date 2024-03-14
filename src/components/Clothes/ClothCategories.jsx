import React from 'react';
import './ClothCategories.css'; // Ensure this CSS file is created

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

export default ClothCategories;
