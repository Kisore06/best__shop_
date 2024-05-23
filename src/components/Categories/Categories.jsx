import { Link } from 'react-router-dom';
import shoes from '../../Assets/Categories/footwear.jpg';
import bags from '../../Assets/Categories/Bag1.webp';
import watches from '../../Assets/Categories/watches1.jpg';
import sports from '../../Assets/Categories/sports1.avif';
import BabyProducts from '../../Assets/Categories/BabyProducts.jpg';
import Mobiles from '../../Assets/Categories/Mobiles.jpeg';
import Toys from '../../Assets/Categories/Toys1.jpg';
import general from '../../Assets/Categories/general.jpg';
import "./Categories.css";

const categories = [
 { name: 'Footwear', image: shoes },
 { name: 'Watches', image: watches },
 { name: 'Bags & Luggages', image: bags },
 { name: 'Sports Goods', image: sports },
 { name: 'Toys', image: Toys },
 { name: 'Mobiles', image: Mobiles },
 { name: 'Baby Products', image: BabyProducts },
 { name: 'General Goods', image: general },
];

const Categories = () => {

return (
    <div id="All-categories" className="categories-container">
        <div className="title-align">
            <h1 className="he1" style={{marginBottom:'35px'}}>Explore By Categories</h1>
        </div>
        <div className="categories">
            {categories.map((category, index) => (
                <Link key={index} to={`/${category.name.toLowerCase()}`} className="category-link">
                    <div className="category-item">
                        <img src={category.image} alt={category.name} />
                        <span>{category.name}</span>
                    </div>
                </Link>
            ))}
        </div>
    </div>
);
};

export default Categories;
