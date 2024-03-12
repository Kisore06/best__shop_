import React from 'react';
import './BagCategories.css'; // Import the CSS file

const BagCategories = () => {
 const menCategories = [
    { title: 'Backpacks', subCategories: ['Laptop backpacks', 'Travel backpacks', 'Hiking backpacks', 'Tactical backpacks', 'Fashion backpacks'] },
    { title: 'Messenger Bags', subCategories: ['Laptop messenger bags', 'Crossbody messenger bags', 'Satchels', 'Briefcases'] },
    { title: 'Duffel Bags', subCategories: ['Gym duffel bags', 'Weekend duffel bags', 'Travel duffel bags', 'Sports duffel bags'] },
    { title: 'Briefcases', subCategories: ['Classic leather briefcases', 'Modern briefcases', 'Portfolio bags'] },
    { title: 'Wallets', subCategories: ['Bifold wallets', 'Trifold wallets', 'Money clips', 'Cardholders'] },
    { title: 'Travel Bags', subCategories: ['Wheeled luggage', 'Carry-on bags', 'Garment bags', 'Toiletry bags', 'Travel organizers'] },
    { title: 'Crossbody Bags', subCategories: ['Everyday crossbody bags', 'Leather crossbody bags', 'Canvas crossbody bags'] },
 ];

 const womenCategories = [
    { title: 'Handbags', subCategories: ['Tote bags', 'Shoulder bags', 'Satchels', 'Hobo bags', 'Bucket bags'] },
    { title: 'Clutches and Evening Bags', subCategories: ['Clutch purses', 'Evening bags', 'Wristlets'] },
    { title: 'Backpacks', subCategories: ['Fashion backpacks', 'Mini backpacks', 'Convertible backpacks', 'Leather backpacks'] },
    { title: 'Crossbody Bags', subCategories: ['Crossbody purses', 'Messenger bags', 'Chain strap bags'] },
    { title: 'Wallets and Cardholders', subCategories: ['Zip-around wallets', 'Coin purses', 'Passport holders', 'ID holders'] },
    { title: 'Totes', subCategories: ['Canvas totes', 'Leather totes', 'Beach totes', 'Work totes'] },
    { title: 'Travel Bags', subCategories: ['Rolling luggage', 'Weekend bags', 'Cosmetic cases', 'Jewelry organizers'] },
    { title: 'Diaper Bags', subCategories: ['Fashion diaper bags', 'Backpack diaper bags', 'Tote diaper bags'] },
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
            <ul>
              {category.subCategories.map((subCategory, subIndex) => (
                <li key={subIndex}>{subCategory}</li>
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

export default BagCategories;
