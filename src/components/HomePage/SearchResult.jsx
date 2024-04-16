import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link
import './SearchResult.css'; // Adjust the import path as necessary

const SearchResultsPage = () => {
 const location = useLocation();
 const searchResults = location.state?.searchResults || [];

 return (
    <div className="search-results-page">
      <h2>Search Results</h2>
      <div className="product-cards">
        {searchResults.length === 0 ? (
          <p>No results found.</p>
        ) : (
          searchResults.map((product, index) => (
            <div key={index} className="product-card">
              <Link to={`/product/${product.product_id}`}> {/* Wrap the product card in a Link */}
                <img src={`http://localhost:3001/${product.image1}`} alt={product.productName} className="product-image" />
                <div className="product-details">
                 <h3 className="he3">{product.productName}</h3>
                 <p>MRP: {product.price}</p>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
 );
};

export default SearchResultsPage;
