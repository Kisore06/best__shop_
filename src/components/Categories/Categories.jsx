import React from 'react';
import { Link } from 'react-router-dom';
import shoes from '../../Assets/shoess.jpg';
import cosmetics from '../../Assets/cosmetics.jpg';
import gift from '../../Assets/giftt.jpg';
import bags from '../../Assets/bags.jpg';
import watches from '../../Assets/watches.jpg';
import clothes from '../../Assets/clothes.jpg';
import sports from '../../Assets/sports.jpg';
import Trophy from '../../Assets/Trophy.jpg';
import BabyProducts from '../../Assets/BabyProducts.jpg';
import Mobiles from '../../Assets/Mobiles.jpeg';
import Toys from '../../Assets/Toys.jpg';
import GeneralGoods from '../../Assets/GeneralGoods.jpg';
import "./Categories.css";

const categories = [
 { name: 'Shoes', image: shoes },
 { name: 'Watches', image: watches },
 { name: 'Cosmetics', image: cosmetics },
 { name: 'Bags', image: bags },
 { name: 'Gifts', image:gift },
 { name: 'Clothes', image:clothes},
 { name: 'sports', image:sports},
 { name: 'GeneralGoods', image:GeneralGoods},
 { name: 'Toys', image:Toys},
 { name: 'Mobiles', image:Mobiles},
 { name: 'BabyProducts', image:BabyProducts},
 { name: 'Trophy', image:Trophy},
];

const Categories = () => {
 return (
    <div>
     <h1>Shop By Categories</h1>
     <br></br>
        <div className="categories">
        {categories.map((category, index) => (
            <Link key={index} to={`/${category.name.toLowerCase()}`}>
            <img src={category.image} alt={category.name} />
            <span>{category.name}</span>
            </Link>
        ))}
        </div>
    </div>
 );
};

export default Categories;
