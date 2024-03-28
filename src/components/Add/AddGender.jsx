// src/components/AddGender.jsx
import React, { useState } from 'react';
import axios from 'axios';

const BACKEND_URL = 'http://localhost:3001';

const AddGender = () => {
 const [genderName, setGenderName] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/genders`, { name: genderName });
      console.log(response.data);
      setGenderName('');
      window.alert('Gender added successfully!');
    } catch (error) {
      console.error(error);
      window.alert('An error occurred while adding the gender.')
    }
 };

 return (
 <div style={{ paddingTop: '80px', maxWidth: '500px', margin: '0 auto' }}>
    <div style={{ textAlign: 'center' }}>
      <h2>Add Gender</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
        <input
          type="text"
          value={genderName}
          onChange={(e) => setGenderName(e.target.value)}
          placeholder="Gender Name"
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          required
        />
        <button type="submit">Add Gender</button>
      </form>
      <p>
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

export default AddGender;
