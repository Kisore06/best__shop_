import React, { useRef } from 'react';
import ProductRow from './ProductRow';
import "./TopDeals.css";

const ProductList = ({ products }) => {
  const productListRef = useRef(null);

  const scrollLeft = () => {
    if (productListRef.current) {
      productListRef.current.scrollBy({
        left: -250, // Adjust as needed
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (productListRef.current) {
      productListRef.current.scrollBy({
        left: 250, // Adjust as needed
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <h1 className="top-deals-title">Top Deals</h1>
      <div className="scrollable-container">
        <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
        <div className="product-list" ref={productListRef}>
          <div className="products-inner">
            {products.map(product => (
              <ProductRow 
                key={product.id} 
                product={product} 
              />
            ))}
          </div>
        </div>
        <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
}

export default ProductList;