// ToyCategories.js
import React from 'react';
import './ToyCategories.css'; // Ensure this CSS file is created

const ToyCategories = () => {
 const categories = [
    { title: 'Action Figures', subCategories: ['Superheroes', 'Movie characters', 'Cartoon characters', 'Action-packed figures'] },
    { title: 'Dolls', subCategories: ['Fashion dolls', 'Baby dolls', 'Barbie dolls', 'Collectible dolls'] },
    { title: 'Building Blocks and Construction Sets', subCategories: ['LEGO sets', 'Building blocks', 'Magnetic building tiles', 'Marble runs'] },
    { title: 'Board Games', subCategories: ['Classic board games', 'Strategy games', 'Family games', 'Educational board games'] },
    { title: 'Puzzles', subCategories: ['Jigsaw puzzles', '3D puzzles', 'Brain teaser puzzles', 'Puzzle games'] },
    { title: 'Plush Toys', subCategories: ['Stuffed animals', 'Teddy bears', 'Character plushies', 'Interactive plush toys'] },
    { title: 'Outdoor Toys', subCategories: ['Sports equipment', 'Ride-on toys', 'Water toys', 'Playground equipment'] },
    { title: 'Educational Toys', subCategories: ['STEM toys', 'Learning kits', 'Educational electronic toys', 'Language learning toys'] },
    { title: 'Creative Arts and Crafts', subCategories: ['Art supplies', 'Craft kits', 'DIY jewelry kits', 'Pottery and clay sets'] },
    { title: 'Musical Instruments', subCategories: ['Toy pianos', 'Drum sets', 'Toy guitars', 'Musical activity toys'] },
    { title: 'Role-Playing Toys', subCategories: ['Play kitchens', 'Doctor playsets', 'Dress-up costumes', 'Toy tools and workbenches'] },
    { title: 'Collectibles', subCategories: ['Trading cards', 'Miniature figurines', 'Collectible toys', 'Model kits'] },
 ];

 return (
    <div style={{ paddingTop: '80px' }}>
    <h1>Toy Categories</h1>
    <div className="toy-categories">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <h2>{category.title}</h2>
          <ul>
            {category.subCategories.map((subCategory, subIndex) => (
              <li key={subIndex}>{subCategory}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
 );
};

export default ToyCategories;
