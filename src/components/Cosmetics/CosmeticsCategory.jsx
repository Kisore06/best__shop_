// CosmeticsCategory.js
import React from 'react';
import './CosmeticsCategory.css'; // Ensure this CSS file is created
import Makeup from "..//..//Assets//Cosmetics//Makeup.jpg";
import Mencosmetics from "..//..//Assets//Cosmetics//MenCosmetics.jpg";
import menfragrances from "..//..//Assets//Cosmetics//menfragrances.jpg";
import menhair from "..//..//Assets//Cosmetics//MenHairCare.jpg";
import Menskin from "..//..//Assets//Cosmetics//MenSkincare.jpg";
import Nail from "..//..//Assets//Cosmetics//nailCare.jpg";
import Personalcare from "..//..//Assets//Cosmetics//PersonalCare.jpg";
import Shaving from "..//..//Assets//Cosmetics//ShavingProducts.jpg";
import Skincarewomen from "..//..//Assets//Cosmetics//Skincarewomen.jpg";
import womencosmetics from "..//..//Assets//Cosmetics//WomenCosmetics.jpg";
import womenfragrance from "..//..//Assets//Cosmetics//womenfragrances.jpg";
import womenhair from "..//..//Assets//Cosmetics//womenHairCare.jpg";
import { Link } from 'react-router-dom';


const CosmeticsCategory = () => {
 const menCategories = [
    { title: 'Men\'s Cosmetics', subCategories: ['Skincare', 'Shaving Products', 'Hair Care', 'Fragrances'],image:Mencosmetics },
    { title: 'Skincare', subCategories: ['Cleansers', 'Moisturizers', 'Serums', 'Sunscreens', 'Anti-aging products'],image:Menskin },
    { title: 'Shaving Products', subCategories: ['Shaving creams', 'Aftershaves', 'Razors', 'Trimmers'],image:Shaving},
    { title: 'Hair Care', subCategories: ['Shampoos', 'Conditioners', 'Styling gels', 'Hair serums'],image:menhair },
    { title: 'Fragrances', subCategories: ['Cologne', 'Aftershave lotions'],image:menfragrances },
 ];

 const womenCategories = [
    { title: 'Women\'s Cosmetics', subCategories: ['Skincare', 'Makeup', 'Hair Care', 'Nail Care', 'Fragrances', 'Personal Care'],image:womencosmetics },
    { title: 'Skincare', subCategories: ['Cleansers', 'Toners', 'Moisturizers', 'Serums', 'Masks'],image:Skincarewomen },
    { title: 'Makeup', subCategories: ['Foundation', 'Concealer', 'Blush', 'Eyeshadow', 'Eyeliner', 'Mascara', 'Lipstick', 'Lip gloss'],image:Makeup },
    { title: 'Hair Care', subCategories: ['Shampoos', 'Conditioners', 'Hair masks', 'Hair oils', 'Styling products'],image:womenhair },
    { title: 'Nail Care', subCategories: ['Nail polish', 'Nail polish remover', 'Nail treatments'],image:Nail },
    { title: 'Fragrances', subCategories: ['Perfume', 'Body mist', 'Body lotion'],image:womenfragrance },
    { title: 'Personal Care', subCategories: ['Body wash', 'Body lotion', 'Deodorant', 'Feminine hygiene products'],image:Personalcare },
 ];

 return (
  <div style={{ paddingTop: '80px' }}>
  <h1>Cosmetics Categories</h1>
    <div className="cosmetics-categories">
      <div className="men-categories">
        <h2>Men's Cosmetics</h2>
        {menCategories.map((category, index) => (
          <div key={index} className="category">
            <h3>{category.title}</h3>
            <img src={category.image} alt={category.title} className="category-image" />
            <ul>
              {category.subCategories.map((subCategory, subIndex) => (
                <li key={subIndex}>
                  <Link to={`/cosmetics/${subCategory}`}>{subCategory}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="women-categories">
        <h2>Women's Cosmetics</h2>
        {womenCategories.map((category, index) => (
          <div key={index} className="category">
            <h3>{category.title}</h3>
            <img src={category.image} alt={category.title} className="category-image" />
            <ul>
              {category.subCategories.map((subCategory, subIndex) => (
                <li key={subIndex}>                
                  <Link to={`/cosmetics/${subCategory}`}>{subCategory}</Link>
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

export default CosmeticsCategory;