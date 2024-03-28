// src/components/AddCategory.jsx
import React, { useState } from 'react';
import axios from 'axios';

const BACKEND_URL = 'http://localhost:3001';

const AddCategory = () => {
 const [categoryName, setCategoryName] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/category`, { name: categoryName });
      console.log(response.data);
      setCategoryName('');
      window.alert('Category added successfully!');  
    } catch (error) {
      console.error(error);
      window.alert('An error occurred while adding the Category.');
    }
 };

 return (
 <div style={{ paddingTop: '80px', maxWidth: '500px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Add Category</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Category Name"
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            required
          />
           <button type="submit">Add Category</button>
        </form>
        <p>
          <br></br>
          <a href="/add-gender" style={{ color: '#000', textDecoration: 'none', transition: 'color 0.3s ease', ':hover': { color: '#007bff' } }}>Add Gender</a>
          <br></br>
          <br></br>
          <a href="/add-subcategory" style={{ color: '#000', textDecoration: 'none', transition: 'color 0.3s ease', ':hover': { color: '#007bff' } }}>Add Sub Category</a>
          <br></br>
          <br></br>
          <a href="/add-brand" style={{ color: '#000', textDecoration: 'none', transition: 'color 0.3s ease', ':hover': { color: '#007bff' } }}>Add Brand</a>
          <br></br>
          <br></br>
          <a href="/add-product" style={{ color: '#000', textDecoration: 'none', transition: 'color 0.3s ease', ':hover': { color: '#007bff' } }}>Add Product</a>
        </p>
      </div>
    </div>
 );
};

export default AddCategory;
