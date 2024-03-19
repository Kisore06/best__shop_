import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css'; 

const Gender = () => {
 const [gender, setGender] = useState([]);

 useEffect(() => {
    const fetchGender = async () => {
      try {
        const response = await axios.get('http://localhost:3001/genders');
        setGender(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchGender();
 }, []);

 return (
    <div style={{ paddingTop: '80px' }}>
      <h2 className="product-table-title">Genders</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Gender ID</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {gender.map((genders) => (
            <tr key={genders.g_id}>
              <td>{genders.g_id}</td>
              <td>{genders.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
};

export default Gender;
