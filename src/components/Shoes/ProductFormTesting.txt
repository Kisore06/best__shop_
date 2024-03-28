import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
 const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    subCategory: '',
    brand: ''
 });

 const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/products', product);
      console.log(response.data);
    } catch (error) {
      if (error.message.includes('net::ERR_CONNECTION_REFUSED')) {
        console.error('Server is not running or not accessible. Please start the server and try again.');
      } else {
        console.error(error);
      }
    }
 };

 return (
    <div style={{ paddingTop: '80px' }}>
      <form onSubmit={handleSubmit}>
        <input name="name" value={product.name} onChange={handleChange} placeholder="Product Name" />
        <input name="price" value={product.price} onChange={handleChange} placeholder="Price" />
        <input name="category" value={product.category} onChange={handleChange} placeholder="Category" />
        <input name="subCategory" value={product.subCategory} onChange={handleChange} placeholder="Sub-Category" />
        <input name="brand" value={product.brand} onChange={handleChange} placeholder="Brand" />
        <button type="submit">Add Product</button>
      </form>
    </div>
 );
};

export default ProductForm;