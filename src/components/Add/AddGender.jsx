// src/components/AddGender.js
import React, { useState } from 'react';
import axios from 'axios';

const AddGender = () => {
 const [genderName, setGenderName] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/genders', { name: genderName });
      console.log(response.data);
      // Optionally, clear the form or update state to reflect the new gender added
    } catch (error) {
      console.error(error);
    }
 };

 return (
  <div style={{ paddingTop: '80px' }}>
    <div>
      <h2>Add Gender</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={genderName}
          onChange={(e) => setGenderName(e.target.value)}
          placeholder="Gender Name"
        />
        <button type="submit">Add Gender</button>
      </form>
    </div>
    </div>
 );
};

export default AddGender;
