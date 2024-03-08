// CosmeticsCategory.js
import React from 'react';
import './CosmeticsCategory.css'; // Ensure this CSS file is created

const CosmeticsCategory = () => {
 const menCategories = [
    { title: 'Men\'s Cosmetics', subCategories: ['Skincare', 'Shaving Products', 'Hair Care', 'Fragrances'] },
    { title: 'Skincare', subCategories: ['Cleansers', 'Moisturizers', 'Serums', 'Sunscreens', 'Anti-aging products'] },
    { title: 'Shaving Products', subCategories: ['Shaving creams', 'Aftershaves', 'Razors', 'Trimmers'] },
    { title: 'Hair Care', subCategories: ['Shampoos', 'Conditioners', 'Styling gels', 'Hair serums'] },
    { title: 'Fragrances', subCategories: ['Cologne', 'Aftershave lotions'] },
 ];

 const womenCategories = [
    { title: 'Women\'s Cosmetics', subCategories: ['Skincare', 'Makeup', 'Hair Care', 'Nail Care', 'Fragrances', 'Personal Care'] },
    { title: 'Skincare', subCategories: ['Cleansers', 'Toners', 'Moisturizers', 'Serums', 'Masks'] },
    { title: 'Makeup', subCategories: ['Foundation', 'Concealer', 'Blush', 'Eyeshadow', 'Eyeliner', 'Mascara', 'Lipstick', 'Lip gloss'] },
    { title: 'Hair Care', subCategories: ['Shampoos', 'Conditioners', 'Hair masks', 'Hair oils', 'Styling products'] },
    { title: 'Nail Care', subCategories: ['Nail polish', 'Nail polish remover', 'Nail treatments'] },
    { title: 'Fragrances', subCategories: ['Perfume', 'Body mist', 'Body lotion'] },
    { title: 'Personal Care', subCategories: ['Body wash', 'Body lotion', 'Deodorant', 'Feminine hygiene products'] },
 ];

 return (
  <div style={{ paddingTop: '80px' }}>
  <h1>Cosmetics Categories</h1>
    <div className="cosmetics-categories">
      <div className="men-categories">
        <h2>Men's Cosmetics</h2>
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
        <h2>Women's Cosmetics</h2>
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

export default CosmeticsCategory;
