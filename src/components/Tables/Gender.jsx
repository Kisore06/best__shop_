import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css'; 

const BACKEND_URL = 'http://localhost:3001';

const Gender = () => {
 const [gender, setGender] = useState([]);

 useEffect(() => {
    const fetchGender = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/genders`);
        setGender(response.data);
      } catch (error) {
        console.error('Error fetching genders:', error);
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
          {gender.map((gender) => (
            <tr key={gender.g_id}>
              <td>{gender.g_id}</td>
              <td>{gender.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
};

export default Gender;
