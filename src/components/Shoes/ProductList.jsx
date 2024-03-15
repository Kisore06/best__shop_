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
  <div style={{ paddingTop: '80px' }}>
  <div>
    <h2>Products in {subCategory}</h2>
    <div className="product-cards">
      {products.map((product) => (
        <div key={product.product_id} className="product-card">
          <img src={product.image} alt={product.productName} className="product-image" />
          <div className="product-details">
            <h3 className="he3">{product.productName}</h3>
            <p>{product.description}</p>
            <p>Category: {product.categoryName}</p>
            <p>Sub Category: {product.subCategoryName}</p>
            <p>Gender: {product.genderName}</p>
            <p>Brand: {product.brandName}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
);
};

export default ProductList;
