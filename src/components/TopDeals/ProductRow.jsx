import React from 'react';
import "./TopDeals.css";
import api from '../../utils/api'

const ProductRow = ({ product }) => {
 // Assuming BACKEND_URL is the base URL of your backend
//  const BACKEND_URL = 'http://localhost:3001'; // Adjust this to match your backend's URL

 // Construct the full URL for the image
 const imageUrl = product.product_image.startsWith('http') ? product.product_image : `${api}/${product.product_image}`;

 return (
    <div className="product-row">
      <img src={imageUrl} alt={product.product_name} className="product-imageTD" />
      <h3 className="product-name">{product.product_name}</h3>
      <p className="product-description">Price: {product.product_price}</p>
      <p className="product-description">Offer: {product.offer_percent}%</p>
    </div>
 );
}

export default ProductRow;