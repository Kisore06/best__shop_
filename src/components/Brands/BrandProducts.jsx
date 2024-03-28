import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './BrandProducts.css';
import IconButton from '@mui/material/IconButton';
import { Box, Select, MenuItem } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';


const BrandProducts = () => {
 const { brandName } = useParams();
 const [products, setProducts] = useState([]);
 const [genders, setGenders] = useState([]);
 const [selectedGender, setSelectedGender] = useState('all');
 const [showFilters, setShowFilters] = useState(false);

 useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/product?brandName=${brandName}`);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchGenders = async () => {
      try {
        const response = await axios.get('http://localhost:3001/genders');
        setGenders(response.data);
      } catch (error) {
        console.error('Error fetching genders:', error);
      }
   };

    fetchGenders()
    fetchProducts();
 }, [brandName]);

 return (
    <div style={{ paddingTop: '80px' }}>
      <div>
        <h2>Products in {brandName}</h2>
        <Box>
      <IconButton onClick={() => setShowFilters(!showFilters)}>
        <FilterListIcon />
      </IconButton>

      {showFilters && (
        <Box sx={{ bgcolor: 'background.paper', p: 2, borderRadius: 1 }}>
          <Select
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
            displayEmpty
          >
            <MenuItem value="all">All Genders</MenuItem>
            {genders.map((gender) => (
              <MenuItem key={gender.g_id} value={gender.gender}>
                {gender.gender}
              </MenuItem>
            ))}
          </Select>
          </Box>
      )}
    </Box>
        <div className="product-cards">
          {products.map((product) => (
            <div key={product.product_id} className="product-card">
            <Link to={`/product/${product.product_id}`}>
           <img src={`http://localhost:3001/${product.image1}`} alt={product.productName} className="product-image" />
              <div className="product-details">
                <h3 className="he3">{product.productName}</h3>
                <p>MRP: {product.price}</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
 );
};

export default BrandProducts;