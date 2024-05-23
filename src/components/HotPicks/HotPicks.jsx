import React from 'react';
import './HotPicks.css';
import { Link } from 'react-router-dom';
import sneakers from "../../Assets/HotPicks/sneakers.png"
import formal from "../../Assets/HotPicks/formal-shoe.avif"
import digital from "../../Assets/HotPicks/digital-watch.jpg"
import steel from "../../Assets/HotPicks/steel-watch.png"
import schoolBag from "../../Assets/HotPicks/school-bag.jpg"
import OfficeBag from "../../Assets/HotPicks/office-bag.jpg"
import cricketBat from "../../Assets/HotPicks/cricket-bat.jpg"
import sports from "../../Assets/HotPicks/sports-garments.jpg"
import plushToys from "../../Assets/HotPicks/plush-toys.jpg"
import lego from "../../Assets/HotPicks/lego.jpg"
import mobileAcc from "../../Assets/HotPicks/mobile-acc.jpg"
import feeding from "../../Assets/HotPicks/feeding.jpg"
import diapers from "../../Assets/HotPicks/diapers.jpg"
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import { IconButton } from '@mui/material';

const hotPicks = [
    { name: 'Sneakers', image: sneakers, url:`/shoes/sneakers` },
    { name: 'Formal Shoes', image: formal, url:`/shoes/sneakers` },
    { name: 'Digital Watches', image: digital, url:`/shoes/sneakers` },
    { name: 'Steel Watches', image: steel, url:`/watches/stainless steel watches` },
    { name: 'School Bags', image: schoolBag, url:`/shoes/sneakers` },
    { name: 'Office Bags', image: OfficeBag, url:`/shoes/sneakers` },
    { name: 'Cricket Bats', image: cricketBat , url:`/shoes/sneakers`},
    { name: 'Sports Garments', image: sports, url:`/shoes/sneakers` },
    { name: 'Plush Toys', image: plushToys, url:`/shoes/sneakers` },
    { name: 'Lego Sets', image: lego, url:`/shoes/sneakers` },
    { name: 'Mobile Accessories', image: mobileAcc, url:`/shoes/sneakers` },
    { name: 'Feeding Bottles', image: feeding, url:`/shoes/sneakers` },
    { name: 'Diapers', image: diapers, url:`/shoes/sneakers` },
    ];

const HotPicks = () => {
  
  return (
    <div>
    <div className="special-deals-container">
    <h1 className="continuous-text">
      <span className="first-text">Mother's Day Deals</span>
      <span className="second-text"> Starting from 20%OFF</span>
      <span className="first-text">Mother's Day Deals</span>
      <span className="second-text"> Starting from 20%OFF</span>
      <span className="first-text">Mother's Day Deals</span>
      <span className="second-text"> Starting from 20%OFF</span>
      <span className="first-text">Mother's Day Deals</span>
      <span className="second-text"> Starting from 20%OFF</span>
      <span className="first-text">Mother's Day Deals</span>
      <span className="second-text"> Starting from 20%OFF</span>
      <span className="first-text">Mother's Day Deals</span>
      <span className="second-text"> Starting from 20%OFF</span>
      <span className="first-text">Mother's Day Deals</span>
      <span className="second-text"> Starting from 20%OFF</span>
      <span className="first-text">Mother's Day Deals</span>
      <span className="second-text"> Starting from 20%OFF</span>
      <span className="first-text">Mother's Day Deals</span>
      <span className="second-text"> Starting from 20%OFF</span>
    </h1>
  </div>
    <div className="flex-container">
    {/* <IconButton className="arrow-left" onClick={prevItem}><KeyboardArrowLeftIcon/></IconButton>
    <IconButton className="arrow-right" onClick={nextItem}><KeyboardArrowRightIcon/></IconButton> */}
            {hotPicks.map((hotpick, index) => (
                <Link key={index} to={hotpick.url} style={{textDecoration:'none', color:'black'}}>
                    <div className="flex-item">
                        <img src={hotpick.image} alt={hotpick.name} />
                        <span>{hotpick.name}</span>
                    </div>
                </Link>
            ))}
    </div>
    </div>
  );
};

export default HotPicks;