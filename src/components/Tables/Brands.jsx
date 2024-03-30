import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Products.css';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';

// const BACKEND_URL = 'http://localhost:3001';

const Brands = () => {
 const [brands, setBrands] = useState([]);
 const [editingBrand, setEditingBrand] = useState(null);
 const productListRef = useRef(null);

 useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get('http://localhost:3001/brands');
        setBrands(response.data);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    fetchBrands();
 }, []);

 const handleEditClick = (brand) => {
    setEditingBrand(brand);
 };

 const handleUpdateClick = async (brand) => {
    try {
      await axios.put(`http://localhost:3001/brands/${brand.brand_id}`, { brand_name: editingBrand.brand_name });
      const response = await axios.get('http://localhost:3001/brands');
      setBrands(response.data);
      setEditingBrand(null);
    } catch (error) {
      console.error('Error updating brand:', error);
    }
 };

 const handleDeleteClick = async (brand) => {
    try {
      await axios.delete(`http://localhost:3001/brands/${brand.brand_id}`);
      setBrands(brands.filter(b => b.brand_id !== brand.brand_id));
    } catch (error) {
      console.error('Error deleting brand:', error);
    }
 };

 const handleBrandNameChange = (event, brand) => {
    setEditingBrand({ ...brand, brand_name: event.target.value });
 };

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
    <div style={{ paddingTop: '80px' }}>
      <h2 className="product-table-title">Brand List</h2>
      <div className="scrollable-container">
      <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
      <table className="product-table">
        <thead>
          <tr>
            <th>Brand ID</th>
            <th>Brand Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <tr key={brand.brand_id}>
              <td>{brand.brand_id}</td>
              <td>
                {editingBrand && editingBrand.brand_id === brand.brand_id ? (
                 <input
                    type="text"
                    value={editingBrand.brand_name}
                    onChange={(event) => handleBrandNameChange(event, brand)}
                 />
                ) : (
                 brand.brand_name
                )}
              </td>
              <td>
                {editingBrand && editingBrand.brand_id === brand.brand_id ? (
                 <IconButton aria-label="update" onClick={() => handleUpdateClick(brand)}>
                    <UpdateIcon />
                 </IconButton>
                ) : (
                 <IconButton aria-label="edit" onClick={() => handleEditClick(brand)}>
                    <EditIcon />
                 </IconButton>
                )}
                <IconButton aria-label="delete" onClick={() => handleDeleteClick(brand)}>
                 <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
 );
};

export default Brands;
