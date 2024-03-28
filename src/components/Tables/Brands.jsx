import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css'; 

const BACKEND_URL = 'http://localhost:3001';

const Brands = () => {
 const [brand, setBrand] = useState([]);

 useEffect(() => {
    const fetchBrand = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/brands`);
        setBrand(response.data);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    fetchBrand();
 }, []);

 return (
    <div style={{ paddingTop: '80px' }}>
      <h2 className="product-table-title">Brand List</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Brand ID</th>
            <th>Brand Name</th>
          </tr>
        </thead>
        <tbody>
          {brand.map((brands) => (
            <tr key={brands.brand_id}>
              <td>{brands.brand_id}</td>
              <td>{brands.brand_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
};

export default Brands;
