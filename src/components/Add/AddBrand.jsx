// src/components/AddBrand.jsx
import React, { useState } from 'react';
import axios from 'axios';
import api from "../../utils/api";

const AddBrand = () => {
 const [brandName, setBrandName] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${api}/brands`, { name: brandName });
      console.log(response.data);
      setBrandName('');
      window.alert('Brand added successfully!');  
    } catch (error) {
      console.error(error);
      window.alert('An error occurred while adding the Brand.');  
    }
 };

 return (
 <div style={{ paddingTop: '80px', maxWidth: '500px', margin: '0 auto' }}>
    <div style={{ textAlign: 'center' }}>
      <h2>Add Brand</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
        <input
          type="text"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
          placeholder="Brand Name"
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          required
        />
        <button type="submit">Add Brand</button>
      </form>
      <p>
        <br></br>
        <a href="/add-product" style={{ color: '#000', textDecoration: 'none', transition: 'color 0.3s ease', ':hover': { color: '#007bff' } }}>Add Product</a>
      </p>
    </div>
 </div>
 );
};

export default AddBrand;
