import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./TopDeals.css";
import { Link } from 'react-router-dom';
import '../../utils/api';

const ProductList = ({ products }) => {
 const [product, setProduct] = useState(null);

 useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${api}/offerproducts`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
 }, []);

 

 return (
    <div className="categories-container" >
      <h1 className="he1">Season Sales</h1>
      <div className="scrollable-container">
        <div style={{ marginLeft:'50px', marginRight:'50px'}}>
          {product && product.map((product) => (
            <div key={product.ofp_id} className="product-card-similar">
            <Link to={`/offerproducts/${product.ofp_id}`}>
              <img src={`${api}/${product.image1}`} alt={product.product_name} className="product-image" />
              <div className="product-details">
                <h3 className="he3">{product.product_name}</h3>
                <p>{product.product_price}</p>
                <p>{product.offer}</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
 );
}

export default ProductList;