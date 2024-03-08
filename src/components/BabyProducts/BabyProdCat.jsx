// BabyProdCat.js
import React from 'react';
import './BabyProdCat.css'; // Ensure this CSS file is created

const BabyProdCat = () => {
 const categories = [
    { title: 'Diapering', subCategories: ['Disposable diapers', 'Cloth diapers', 'Diaper rash cream', 'Diaper bags', 'Changing pads'] },
    { title: 'Feeding', subCategories: ['Baby bottles', 'Bottle sterilizers', 'Bottle warmers', 'Breast pumps', 'Nursing pillows', 'Baby formula', 'Baby food makers'] },
    { title: 'Clothing and Apparel', subCategories: ['Onesies', 'Sleepsuits', 'Baby rompers', 'Baby socks', 'Baby hats', 'Bibs', 'Swaddles'] },
    { title: 'Nursery Furniture', subCategories: ['Crib', 'Bassinet', 'Changing table', 'Rocking chair', 'Dresser', 'Nursery glider'] },
    { title: 'Baby Gear and Accessories', subCategories: ['Strollers', 'Car seats', 'Baby carriers', 'Baby swings', 'Bouncers', 'Playards', 'Activity centers'] },
    { title: 'Health and Safety', subCategories: ['Baby monitors', 'Baby thermometers', 'Baby grooming kits', 'Nasal aspirators', 'Baby first aid kits', 'Outlet covers', 'Cabinet locks'] },
    { title: 'Toys and Entertainment', subCategories: ['Baby rattles', 'Teething toys', 'Soft plush toys', 'Activity gyms', 'Books for babies', 'Musical toys', 'Bath toys'] },
    { title: 'Baby Bath and Skincare', subCategories: ['Baby shampoo', 'Baby body wash', 'Baby lotion', 'Baby oil', 'Baby powder', 'Bath tubs', 'Bath sponges'] },
 ];

 return (
    <div style={{ paddingTop: '80px' }}>
    <h1>Baby Product Categories</h1>
    <div className="baby-prod-cat">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <h2>{category.title}</h2>
          <ul>
            {category.subCategories.map((subCategory, subIndex) => (
              <li key={subIndex}>{subCategory}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
 );
};

export default BabyProdCat;
