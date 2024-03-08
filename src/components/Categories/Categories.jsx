// Categories.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import shoes from '../../Assets/shoess.jpg';
import cosmetics from '../../Assets/cosmetics.jpg';
import gift from '../../Assets/giftt.jpg';
import bags from '../../Assets/bags.jpg';
import watches from '../../Assets/watches.jpg';
import clothes from '../../Assets/clothes.jpg';
import "./Categories.css";

const categories = [
 { name: 'Shoes', image: shoes },
 { name: 'Watches', image: watches },
 { name: 'Cosmetics', image: cosmetics },
 { name: 'Bags', image: bags, subcategories: ['Handbags', 'Backpacks', 'Totes', 'Crossbody Bags'] }, // Added subcategories here
 { name: 'Gifts', image:gift },
 { name: 'Clothes', image:clothes}
];

const Categories = () => {
 return (
    <div>
     <h1>Shop By Categories</h1>
     <br></br>
        <div className="categories">
        {categories.map((category, index) => (
            <div key={index}>
              <Link to={`/${category.name.toLowerCase()}`}>
                <img src={category.image} alt={category.name} />
                <span>{category.name}</span>
              </Link>
              {category.name === 'Bags' && ( // Check if the category is Bags
                <div className="subcategories">
                 <h2>Subcategories</h2>
                 <ul>
                    {category.subcategories.map((subcategory, subIndex) => (
                      <li key={subIndex}>{subcategory}</li>
                    ))}
                 </ul>
                </div>
              )}
            </div>
        ))}
        </div>
    </div>
 );
};

export default Categories;
