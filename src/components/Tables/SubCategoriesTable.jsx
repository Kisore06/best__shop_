import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css'; 

const BACKEND_URL = 'http://localhost:3001';

const SubCategories = () => {
 const [subCategories, setSubCategories] = useState([]);

 useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/subcategories`);
        setSubCategories(response.data);
      } catch (error) {
        console.error('Error fetching subcategories:', error);
      }
    };

    fetchSubCategories();
 }, []);

 return (
 <div style={{ paddingTop: '80px' }}>
 <h2 className="product-table-title">Sub Categories List</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Sub Category ID</th>
            <th>Sub Category Name</th>
            <th>Category ID</th>
            <th>Gender ID</th>
          </tr>
        </thead>
        <tbody>
          {subCategories.map((subcategory) => (
            <tr key={subcategory.id}>
              <td>{subcategory.id}</td>
              <td>{subcategory.name}</td>
              <td>{subcategory.categoryId}</td>
              <td>{subcategory.genderId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
};

export default SubCategories;
