import React from 'react';
import { Link } from 'react-router-dom';
import adidas from '../../Assets/Brands/adidas.jpg';
import americanTourister from '../../Assets/Brands/americanTourister.jpeg';
import buccabucci from '../../Assets/Brands/buccabucci.jpg';
import fastrack from '../../Assets/Brands/fastrack.jpg';
import lakme from '../../Assets/Brands/lakme.jpg';
import levis from '../../Assets/Brands/levis.jpg';
import mamaEarth from '../../Assets/Brands/mamaEarth.jpg';
import netplay from '../../Assets/Brands/netplay.png';
import nike from '../../Assets/Brands/nike.jpg';
import roadster from '../../Assets/Brands/roadster.jpg';
import skybags from '../../Assets/Brands/skybags.jpg';
import sonata from '../../Assets/Brands/sonata.jpg';

import "./Brand.css";

const brands = [
 { name: 'Adidas', image: adidas },
 { name: 'Nike', image: nike },
 { name: 'Skybags', image: skybags },
 { name: 'American Tourister', image: americanTourister },
 { name: 'Fastrack', image:fastrack },
 { name: 'Sonata', image:sonata},
 { name: 'MamaEarth', image:mamaEarth },
 { name: 'Lakme', image:lakme},
 { name: 'levis', image:levis },
 { name: 'Bucca Bucci', image:buccabucci},
 { name: 'Netplay', image:netplay },
 { name: 'Roadster', image:roadster}
];

const Brands = () => {
 return (
    <div>
<<<<<<< HEAD
     <h1>Shop By Trending Brands</h1>
=======
     <h1 className="he1">Trending Brand Partners</h1>
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
     <br></br>
        <div className="brands">
        {brands.map((brand, index) => (
            <Link key={index} to={`/${brand.name.toLowerCase()}`}>
            <img src={brand.image} alt={brand.name} />
            <span>{brand.name}</span>
            </Link>
        ))}
        </div>
    </div>
 );
};

export default Brands;
