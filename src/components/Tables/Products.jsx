import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css'; 

const BACKEND_URL = 'http://localhost:3001';

const ProductTable = () => {
 const [products, setProducts] = useState([]);

 useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/product`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
 }, []);

 return (
    <div style={{ paddingTop: '80px' }}>
      <h2 className="product-table-title">Product List</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Subcategory</th>
            <th>Gender</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.product_id}>
              <td>{product.product_id}</td>
              <td>{product.productName}</td>
              <td>{product.description}</td>
              <td>{product.categoryName}</td>
              <td>{product.subCategoryName}</td>
              <td>{product.genderName}</td>
              <td>{product.brandName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
};

export default ProductTable;
