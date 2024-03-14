import React from 'react';
import ProductRow from './ProductRow';
import "./TopDeals.css"

const ProductList = ({ products }) => {
  return (
    <div>
<<<<<<< HEAD
    <h1>Top Deals</h1>
=======
    <h1 className='he1'>Top Deals</h1>
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
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
