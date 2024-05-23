import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductList.css';
// import { Box, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import api from "../../utils/api";
import "./Shoeprod.css";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const ProductListByCategory = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]); 
  const [genders, setGenders] = useState([]);
  const [brands, setBrands] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedSubCategories, setSelectedSubCategories] = useState('all');
  // const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [filterVisibilities, setFilterVisibilities] = useState({
    gender: true,
    brand: true,
    subcategory: true,
  });
  

  const toggleFilterVisibility = (filterName) => {
    setFilterVisibilities(prevVisibilities => ({
     ...prevVisibilities,
      [filterName]:!prevVisibilities[filterName],
    }));
  };
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${api}/products/${category}`);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchGenders = async () => {
      try {
        const response = await axios.get(`${api}/genders`);
        setGenders(response.data);
      } catch (error) {
        console.error('Error fetching genders:', error);
      }
    };

    const fetchBrands = async () => {
      try {
        const response = await axios.get(`${api}/brands/${category}`);
        setBrands(response.data);
      } catch (error) {
        console.error('Error fetching brands by category:', error);
      }
    };

    const fetchSubCategories = async () => {
      try {
        const response = await axios.get(`${api}/subcategories/filter/${category}`);
        setSubCategories(response.data);
      } catch (error) {
        console.error('Error fetching subcategories:', error);
      }
    };

    fetchGenders();
    fetchBrands();
    fetchProducts();
    fetchSubCategories();
  }, [category]);

  const handleGenderChange = (e) => {
    const { value } = e.target;
    if (value === 'all') {
      setSelectedGender(['all']);
    } else {
      setSelectedGender(prevState => {
        if (prevState.includes('all')) {
          return [value];
        }
        if (prevState.includes(value)) {
          return prevState.filter(item => item!== value);
        } else {
          return [...prevState, value];
        }
      });
    }
  };
  

const handleBrandChange = (e) => {
  const { value } = e.target;
  if (value === 'all') {
    setSelectedBrand(['all']);
  } else {
    setSelectedBrand(prevState => {
      if (prevState.includes('all')) {
        return [value];
      }
      if (prevState.includes(value)) {
        return prevState.filter(item => item!== value);
      }
      else {
        return [...prevState, value];
      }
    });
  }
};

const handleSubCategoryChange = (e) => {
  const { value } = e.target;
  if (value === 'all') {
    setSelectedSubCategories(['all']);
  } else {
    setSelectedSubCategories(prevState => {
      if (prevState.includes('all')) {
        return [value];
      } 
      if (prevState.includes(value)) {
        return prevState.filter(item => item!== value);
      } else {
        return [...prevState, value];
      }
    });
  }
};

  return (
    <div style={{ paddingTop: '80px'}}>
    <div style={{backgroundColor:'#5D7261'}} className="title-align">
      <h1 className="he1" style={{marginBottom:'35px'}}>Products in {category}</h1>
    </div>
    <div style={{ display: 'flex' }}>
    <div style={{backgroundColor:'#f4f1ea'}} className="filter-column">
    {/* subcategory filter */}
    <div className="filter-section">
  <h3 className="filter-title">
    Subcategory
    <span className="filter-add-minus" onClick={() => toggleFilterVisibility('subcategory')}>
      {filterVisibilities.subcategory? <RemoveIcon/> : <AddIcon/>}
    </span>
  </h3>
  {filterVisibilities.subcategory && (
    <div className="filter-option">
      <input
        type="checkbox"
        id="subcategory-all"
        name="subcategory"
        value="all"
        checked={selectedSubCategories.includes('all')}
        onChange={handleSubCategoryChange}
      />
      <label htmlFor="subcategory-all">All</label>
    </div>
  )}
  {filterVisibilities.subcategory && subCategories.map((subCategory) => (
    <div key={subCategory.name} className="filter-option">
      <input
        type="checkbox"
        id={`subcategory-${subCategory.name}`}
        name="subcategory"
        value={subCategory.name}
        checked={selectedSubCategories.includes(subCategory.name)}
        onChange={handleSubCategoryChange}
      />
      <label htmlFor={`subcategory-${subCategory.name}`}>{subCategory.name}</label>
    </div>
  ))}
</div>

    {/* brand filter */}
    <div className="filter-section">
        <h3 className="filter-title">
        Brand
        <span className="filter-add-minus" onClick={() => toggleFilterVisibility('brand')}>
          {filterVisibilities.brand? <RemoveIcon/> : <AddIcon/>}
        </span>
        </h3>
        {filterVisibilities.brand && (
        <div className="filter-option">
          <input
            type="checkbox"
            id="brand-all"
            name="brand"
            value="all"
            checked={selectedBrand.includes('all')}
            onChange={handleBrandChange}
          />
          <label htmlFor="brand-all">All</label>
        </div>
        )}
        {filterVisibilities.brand && brands.map((brand) => (
          <div key={brand.brand_id} className="filter-option">
            <input
              type="checkbox"
              id={`brand-${brand.brand_id}`}
              name="brand"
              value={brand.brand_name}
              checked={selectedBrand.includes(brand.brand_name)}
              onChange={handleBrandChange}
            />
            <label htmlFor={`brand-${brand.brand_id}`}>{brand.brand_name}</label>
          </div>
        ))}
      </div>
      {/* gender filter */}
      <div className="filter-section">
        <h3 className="filter-title">
        Gender
        <span className="filter-add-minus" onClick={() => toggleFilterVisibility('gender')}>
          {filterVisibilities.gender? <RemoveIcon className="icon-transition"/> : <AddIcon/>}
        </span>
        </h3>
        {filterVisibilities.gender && (
        <div className="filter-option">
          <input
            type="checkbox"
            id="gender-all"
            name="gender"
            value="all"
            checked={selectedGender.includes('all')}
            onChange={handleGenderChange}
          />
          <label htmlFor="gender-all">All</label>
        </div>
        )}
        {filterVisibilities.gender && genders.map((gender) => (
          <div key={gender.g_id} className="filter-option">
            <input
              type="checkbox"
              id={`gender-${gender.g_id}`}
              name="gender"
              value={gender.gender}
              checked={selectedGender.includes(gender.gender)}
              onChange={handleGenderChange}
            />
            <label htmlFor={`gender-${gender.g_id}`}>{gender.gender}</label>
          </div>
        ))}
      </div>
      {/* price filter
      <div className="filter-section">
        <h3 className="filter-title">Price Range</h3>
        <div className="filter-option">
          <label>Min Price:</label>
          <input
            type="number"
            value={priceRange.min}
            onChange={(e) => setPriceRange({...priceRange, min: parseFloat(e.target.value) })}
          />
        </div>
        <div className="filter-option">
          <label>Max Price:</label>
          <input
            type="number"
            value={priceRange.max}
            onChange={(e) => setPriceRange({...priceRange, max: parseFloat(e.target.value) })}
          />
        </div>
      </div> */}
            

      </div>

        <div style={{paddingLeft:'20px',paddingTop:'20px'}} className="categories-container">
          <div className="product-cards">
          {products.filter(product => 
              (selectedGender.includes('all') || selectedGender.includes(product.genderName)) && 
              (selectedBrand.includes('all') || selectedBrand.includes(product.brandName)) &&
              (selectedSubCategories.includes('all') || selectedSubCategories.includes(product.subCategoryName))
            ).map((product) => (              
              <div key={product.product_id} className="product-card">
                <Link to={`/product/${product.product_id}`}>
                  <img src={`${api}/${product.image1}`} alt={product.productName} className="product-image" />
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
    </div>
  );
};

export default ProductListByCategory;
