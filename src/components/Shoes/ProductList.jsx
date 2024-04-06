import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductList.css';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Box, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';



const ProductList = () => {
 const {subCategory } = useParams();
 const [products, setProducts] = useState([]);
 const [genders, setGenders] = useState([]);
 const [brands, setBrands] = useState([]);
 const [selectedGender, setSelectedGender] = useState('all');
 const [selectedBrand, setSelectedBrand] = useState('all');
 const [showFilters, setShowFilters] = useState(false);

 useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/product?subCategoryName=${subCategory}`);
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
  
   const fetchBrands = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/brands/${subCategory}`);
      setBrands(response.data);
      } catch (error) {
          console.error('Error fetching brands by subcategory:', error);
      }
   };
  
    fetchGenders();
    fetchBrands();
    fetchProducts();
 }, [subCategory]);

 return (
  <div style={{ paddingTop: '80px' }}>
  <div className="topnav">
    <a href='/home'>&lt; Home </a>
  </div>
  <div className="categories-container">
  <h2>Products in {subCategory}</h2>
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
          
          <Select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            displayEmpty
          >
            <MenuItem value="all">All Brands</MenuItem>
            {brands.map((brand) => (
              <MenuItem key={brand.brand_name} value={brand.brand_name}>
                {brand.brand_name}
              </MenuItem>
            ))}
          </Select>
        </Box>
      )}
    </Box>

      <div className="product-cards">
      {products.filter(product => (selectedGender === 'all' || product.genderName === selectedGender) && (selectedBrand === 'all' || product.brandName === selectedBrand)).map((product) => (
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

export default ProductList;