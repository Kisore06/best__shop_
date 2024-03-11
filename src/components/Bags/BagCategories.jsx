// BagCategories.jsx
import React from 'react';

const BagCategories = () => {
  // Define subcategories for bags
  const bagSubcategories = [
    "Handbags",
    "Backpacks",
    "Totes",
    "Crossbody Bags",
    // Add more subcategories as needed
  ];

  return (
    <div>
      <h1>Bag Categories</h1>
      {/* Display subcategories */}
      <ul>
        {bagSubcategories.map((subcategory, index) => (
          <li key={index}>{subcategory}</li>
        ))}
      </ul>
    </div>
  );
};

export default BagCategories;
