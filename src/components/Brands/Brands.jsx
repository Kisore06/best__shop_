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
import leecooper from '../../Assets/Brands/Lee-Cooper-logo.jpg';
import crocs from '../../Assets/Brands/crocs.jpg';
import casio from '../../Assets/Brands/Casio-logo.jpg';
import samsung from '../../Assets/Brands/samsung.png';
import apple from '../../Assets/Brands/apple.webp';
import oppo from '../../Assets/Brands/Oppo-Logo.png';
import vivo from '../../Assets/Brands/Vivo-Logo.png';
import wildcraft from '../../Assets/Brands/wildcraft.svg';
import genie from '../../Assets/Brands/genie.jpg';
import sebamed from '../../Assets/Brands/sebamed.jpg';
import "./Brand.css";

const brands = [
 { name: 'Sparx', image: sparx },
 { name: 'F Sports', image: fsports },
 { name: 'Woodland', image: woodland },
 { name: 'Lee Cooper', image: leecooper },
 { name: 'Crocs', image: crocs },
 { name: 'Titan', image: titan },
 { name: 'Fastrack', image: fastrack },
 { name: 'Casio', image: casio },
 { name: 'Samsung', image: samsung },
 { name: 'Apple', image: apple },
 { name: 'Vivo', image: vivo },
 { name: 'Oppo', image: oppo },
 { name: 'American Tourister', image: americantourister },
 { name: 'Skybags', image: skybags },
 { name: 'Wildcraft', image: wildcraft },
 { name: 'Genie', image: genie },
 { name: 'Yonex', image: yonex },
 { name: 'Nivia', image: nivia },
 { name: 'Lining', image: Lining },
 { name: 'Apple Baby', image: applebaby },
 { name: 'Himalaya', image: himalaya },
 { name: 'Seba Med', image: sebamed }
];

const Brands = () => {
 return (
    <div className="brands-container" style={{marginBottom:'30px'}}>
    <br></br>
    <div className="title-align">
      <h1 className="he1" style={{marginBottom:'5px'}}>Trending Brand Partners</h1>
    </div>
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