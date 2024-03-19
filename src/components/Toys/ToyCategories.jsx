// ToyCategories.js
import React from 'react';
import './ToyCategories.css'; // Ensure this CSS file is created
// Import your images
import  actionfigure from '../../Assets/toys/action.jpeg';
import dolls from '../../Assets/toys/barbie.jpeg';
import lego from '../../Assets/toys/lego.jpeg';
import boardGames from '../../Assets/toys/board games.jpeg';
import puzzle from '../../Assets/toys/puzzle.jpeg';
import plushToys from '../../Assets/toys/plush toys.jpeg';
import outdoorToys from '../../Assets/toys/outdoor toys.jpg';
import educational from '../../Assets/toys/educational toys.jpeg';
import artandcraft from '../../Assets/toys/art.jpeg';
import music from '../../Assets/toys/music.jpeg';
import rolepaly from '../../Assets/toys/roleplay.jpeg';
import collective from '../../Assets/toys/collective.jpeg';
import { Link } from 'react-router-dom'; 


const ToyCategories = () => {
  const categories = [
    { title: 'Action Figures', subCategories: ['Superheroes', 'Movie characters', 'Cartoon characters', 'Action-packed figures'], image: actionfigure },
    { title: 'Dolls', subCategories: ['Fashion dolls', 'Baby dolls', 'Barbie dolls', 'Collectible dolls'], image: dolls },
    { title: 'Building Blocks and Construction Sets', subCategories: ['LEGO sets', 'Building blocks', 'Magnetic building tiles', 'Marble runs'], image: lego },
    { title: 'Board Games', subCategories: ['Classic board games', 'Strategy games', 'Family games', 'Educational board games'], image: boardGames },
    { title: 'Puzzles', subCategories: ['Jigsaw puzzles', '3D puzzles', 'Brain teaser puzzles', 'Puzzle games'], image: puzzle },
    { title: 'Plush Toys', subCategories: ['Stuffed animals', 'Teddy bears', 'Character plushies', 'Interactive plush toys'], image: plushToys },
    { title: 'Outdoor Toys', subCategories: ['Sports equipment', 'Ride-on toys', 'Water toys', 'Playground equipment'], image: outdoorToys },
    { title: 'Educational Toys', subCategories: ['STEM toys', 'Learning kits', 'Educational electronic toys', 'Language learning toys'], image:educational },
    { title: 'Creative Arts and Crafts', subCategories: ['Art supplies', 'Craft kits', 'DIY jewelry kits', 'Pottery and clay sets'], image: artandcraft },
    { title: 'Musical Instruments', subCategories: ['Toy pianos', 'Drum sets', 'Toy guitars', 'Musical activity toys'], image: music },
    { title: 'Role-Playing Toys', subCategories: ['Play kitchens', 'Doctor playsets', 'Dress-up costumes', 'Toy tools and workbenches'], image: rolepaly },
    { title: 'Collectibles', subCategories: ['Trading cards', 'Miniature figurines', 'Collectible toys', 'Model kits'], image: collective },
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      <h1>Toy Categories</h1>
      <div className="toy-categories">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <h2>{category.title}</h2>
            <img src={category.image} alt={category.title} className="category-image" />
            <ul>
              {category.subCategories.map((subCategory, subIndex) => (
                <li key={subIndex}>
                  <Link to={`/toys/${subCategory}`}>{subCategory}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToyCategories;