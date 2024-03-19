import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css'; 

const SubCategories = () => {
 const [subCategories, setSubCategories] = useState([]);

 useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/subcategories');
        setSubCategories(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
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
          {subCategories.map((subcategories) => (
            <tr key={subcategories.id}>
              <td>{subcategories.id}</td>
              <td>{subcategories.name}</td>
              <td>{subcategories.categoryId}</td>
              <td>{subcategories.genderId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
};

export default SubCategories;
