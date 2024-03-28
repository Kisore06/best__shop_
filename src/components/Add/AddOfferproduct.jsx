import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ProductList from '../TopDeals/ProductList'; // Ensure this import path is correct

const BACKEND_URL = 'http://localhost:3001';

const AddOfferProduct = () => {
 const [productName, setProductName] = useState('');
 const [productPrice, setProductPrice] = useState('');
 const [offerPercentage, setOfferPercentage] = useState('');
 const [offerProducts, setOfferProducts] = useState([]); // State to hold offer products
 const [selectedFile, setSelectedFile] = useState(null);
 const fileInputRef = useRef(); // Reference to the file input

 useEffect(() => {
    fetchOfferProducts();
 }, []);

 const fetchOfferProducts = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/offer-products`);
      console.log(response.data); // Log the fetched data to verify structure
      setOfferProducts(response.data);
    } catch (error) {
      console.error(error);
    }
 };

 const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('product_name', productName); // Ensure this is correctly set
  formData.append('product_price', productPrice); // Ensure this is correctly set
  formData.append('offer_percent', offerPercentage); // Ensure this is correctly set
  formData.append('image', selectedFile); // Append the file to the form data

  try {
    const response = await axios.post(`${BACKEND_URL}/offer-products`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response.data);
    setProductName('');
    setProductPrice('');
    setOfferPercentage('');
    setSelectedFile(null); // Reset the file input
    window.alert('Offer product added successfully!');
    fetchOfferProducts(); // Refresh the list after adding a new product
  } catch (error) {
    console.error(error);
    window.alert('An error occurred while adding the offer product.');
  }
};



 return (
    <div style={{ paddingTop: '80px', maxWidth: '500px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Add Offer Product</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Product Name"
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            required
          />
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="Product Price"
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            required
          />
          <input
            type="number"
            value={offerPercentage}
            onChange={(e) => setOfferPercentage(e.target.value)}
            placeholder="Offer Percentage"
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            required
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            required
          />
          <button type="submit">Add Offer Product</button>
        </form>
      </div>
      <ProductList products={offerProducts} /> {/* Display the offer products */}
    </div>
 );
};

export default AddOfferProduct;
