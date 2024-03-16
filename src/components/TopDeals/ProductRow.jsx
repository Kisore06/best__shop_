import React from 'react';
import "./TopDeals.css"

const ProductRow = ({ product }) => {
  return (
    <div className="product-row">
      <div className="product-info">
        <img src={product.image} alt={product.name} className="product-imageTD" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}</p>
      </div>
    </div>
  );
}

export default ProductRow;