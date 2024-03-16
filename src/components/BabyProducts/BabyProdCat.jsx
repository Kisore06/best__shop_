// BabyProdCat.js
import React from 'react';
import './BabyProdCat.css';
import diapering from '../../Assets/baby/diaper.jpeg';
import feeding from '../../Assets/baby/feeding bottle.jpeg';
import clothing from '../../Assets/baby/babydress.jpeg';
import nurseryFurniture from '../../Assets/baby/nursery.jpg';
import babyGear from '../../Assets/baby/gear.jpg';
import healthSafety from '../../Assets/baby/baby care.jpg';
import toysEntertainment from '../../Assets/baby/babydoll.jpeg';
import bathSkincare from '../../Assets/baby/babyskincare.jpeg';
import { Link } from 'react-router-dom';


const BabyProdCat = () => {
 const categories = [
  { title: 'Diapering', subCategories: ['Disposable diapers', 'Cloth diapers', 'Diaper rash cream', 'Diaper bags', 'Changing pads'], image: diapering },
  { title: 'Feeding', subCategories: ['Baby bottles', 'Bottle sterilizers', 'Bottle warmers', 'Breast pumps', 'Nursing pillows', 'Baby formula', 'Baby food makers'], image: feeding },
  { title: 'Clothing and Apparel', subCategories: ['Onesies', 'Sleepsuits', 'Baby rompers', 'Baby socks', 'Baby hats', 'Bibs', 'Swaddles'], image: clothing },
  { title: 'Nursery Furniture', subCategories: ['Crib', 'Bassinet', 'Changing table', 'Rocking chair', 'Dresser', 'Nursery glider'], image: nurseryFurniture },
  { title: 'Baby Gear and Accessories', subCategories: ['Strollers', 'Car seats', 'Baby carriers', 'Baby swings', 'Bouncers', 'Playards', 'Activity centers'], image: babyGear },
  { title: 'Health and Safety', subCategories: ['Baby monitors', 'Baby thermometers', 'Baby grooming kits', 'Nasal aspirators', 'Baby first aid kits', 'Outlet covers', 'Cabinet locks'], image: healthSafety },
  { title: 'Toys and Entertainment', subCategories: ['Baby rattles', 'Teething toys', 'Soft plush toys', 'Activity gyms', 'Books for babies', 'Musical toys', 'Bath toys'], image: toysEntertainment },
  { title: 'Baby Bath and Skincare', subCategories: ['Baby shampoo', 'Baby body wash', 'Baby lotion', 'Baby oil', 'Baby powder', 'Bath tubs', 'Bath sponges'], image: bathSkincare },
];

 return (
    <div style={{ paddingTop: '80px' }}>
    <h1>Baby Product Categories</h1>
    <div className="baby-prod-cat">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <h2>{category.title}</h2>
          <ul>
          <img src={category.image} alt={category.title} className="category-image" />
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
 );
};

export default BabyProdCat;