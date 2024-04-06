import { Link } from 'react-router-dom';
import shoes from '../../Assets/Categories/shoes1.webp';
import bags from '../../Assets/Categories/Bag1.webp';
import watches from '../../Assets/Categories/watches1.jpg';
import sports from '../../Assets/Categories/sports1.avif';
import BabyProducts from '../../Assets/Categories/BabyProducts.jpg';
import Mobiles from '../../Assets/Categories/Mobiles.jpeg';
import Toys from '../../Assets/Categories/Toys1.jpg';
import Gifts from '../../Assets/Categories/gift1.webp';
import "./Categories.css";

const categories = [
 { name: 'Footwear', image: shoes },
 { name: 'Watches', image: watches },
 { name: 'Bags & Luggages', image: bags },
 { name: 'Sports Goods', image: sports },
 { name: 'Toys', image: Toys },
 { name: 'Mobiles', image: Mobiles },
 { name: 'Baby World', image: BabyProducts },
 { name: 'Gifts', image: Gifts },
];

const Categories = () => {

return (
    <div className="categories-container">
        <h1 className="he1">Explore By Categories</h1>
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
