import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductList.css'

const ProductList = () => {
 const {subCategory } = useParams();
 const [products, setProducts] = useState([]);

 useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/product?subCategoryName=${subCategory}`);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
 }, [subCategory]);

 return (
    <div style={{ paddingTop: '80px' }}>
    <div>
      <h2>Products in {subCategory}</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Sub Category Name</th>
            <th>Gender</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
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
    </div>
 );
};

export default ProductList;
