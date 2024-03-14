// src/components/AddCategory.js
import React, { useState } from 'react';
import axios from 'axios';

const AddCategory = () => {
 const [categoryName, setCategoryName] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/categories', { name: categoryName });
      console.log(response.data);
      // Optionally, clear the form or update state to reflect the new category added
    } catch (error) {
      console.error(error);
    }
 };

 return (
  <div style={{ paddingTop: '80px' }}>
    <div>
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Category Name"
        />
        <button type="submit">Add Category</button>
      </form>
    </div>
    </div>
 );
};

export default AddCategory;