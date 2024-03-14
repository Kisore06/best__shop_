// src/components/AddBrand.js
import React, { useState } from 'react';
import axios from 'axios';

const AddBrand = () => {
 const [brandName, setBrandName] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/brands', { name: brandName });
      console.log(response.data);
      // Optionally, clear the form or update state to reflect the new brand added
    } catch (error) {
      console.error(error);
    }
 };

 return (
  <div style={{ paddingTop: '80px' }}>
    <div>
      <h2>Add Brand</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
          placeholder="Brand Name"
        />
        <button type="submit">Add Brand</button>
      </form>
    </div>
    </div>
 );
};

export default AddBrand;
