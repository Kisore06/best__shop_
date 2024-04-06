import React from 'react';
import { Link } from 'react-router-dom';
import americantourister from '../../Assets/Brands/americantourister.png';
import applebaby from '../../Assets/Brands/applebaby.jpg';
import fastrack from '../../Assets/Brands/fastrack.webp';
import fsports from '../../Assets/Brands/fsports.jpg';
import himalaya from '../../Assets/Brands/himalaya.png';
import Lining from '../../Assets/Brands/Lining.jpg';
import nivia from '../../Assets/Brands/nivia.png';
import skybags from '../../Assets/Brands/skybags.png';
import sparx from '../../Assets/Brands/sparx.svg';
import titan from '../../Assets/Brands/titan.jpg';
import woodland from '../../Assets/Brands/woodland.png';
import yonex from '../../Assets/Brands/yonex.png';
import "./Brand.css";

const brands = [
 { name: 'F Sports', image: fsports },
 { name: 'Sparx', image: sparx },
 { name: 'Woodland', image: woodland },
 { name: 'Titan', image: titan },
 { name: 'Fastrack', image: fastrack },
 { name: 'American Tourister', image: americantourister },
 { name: 'Skybags', image: skybags },
 { name: 'Yonex', image: yonex },
 { name: 'Nivia', image: nivia },
 { name: 'Lining', image: Lining },
 { name: 'Apple Baby', image: applebaby },
 { name: 'Himalaya', image: himalaya }
];

const Brands = () => {
 return (
    <div className="categories-container">
    <br></br>
     <h1 className="he1" style={{marginBottom:'0px'}}>Trending Brand Partners</h1>
        <div className="brands">
        {brands.map((brand, index) => (
            <div key={index} className="brand-logo">
              <Link to={`/brands/${brand.name.toLowerCase()}`}>
                <img src={brand.image} alt={brand.name} />
              </Link>
            </div>
        ))}
        </div>
        <br></br>
        <br></br>
    </div>
 );
};

export default Brands;