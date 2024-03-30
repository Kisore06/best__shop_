import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import "./TopDeals.css";
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
 const productListRef = useRef(null);
 const [product, setProduct] = useState(null);

 useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/offerproducts`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
 }, []);

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
    <div className="categories-container" >
      <h1 className="he1">Season Sales</h1>
      <div className="scrollable-container">
        <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
        <div>
          {product && product.map((product) => (
            <div key={product.ofp_id} className="product-card-similar">
            <Link to={`/offerproducts/${product.ofp_id}`}>
              <img src={`http://localhost:3001/${product.image1}`} alt={product.product_name} className="product-image" />
              <div className="product-details">
                <h3 className="he3">{product.product_name}</h3>
                <p>{product.product_price}</p>
                <p>{product.offer}</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
 );
}

export default ProductList;
