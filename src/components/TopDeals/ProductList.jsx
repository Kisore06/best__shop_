import React from 'react';
import ProductRow from './ProductRow';
import "./TopDeals.css"

const ProductList = ({ products }) => {
  return (
    <div>
    <h1 className='he1'>Top Deals</h1>
    <br></br>
     <div className="product-list">
        {products.map(product => (
            <ProductRow 
                key={product.id} 
                product={product} 
            />
        ))}
     </div> 
    </div>
  );
}

export default ProductList;
