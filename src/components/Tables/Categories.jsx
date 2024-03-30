import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Products.css';
import { IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';


const BACKEND_URL = 'http://localhost:3001';

const CategoryTable = () => {
 const [categories, setCategories] = useState([]);
 const [editingCategory, setEditingCategory] = useState(null);
 const productListRef = useRef(null);

 useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
 }, []);

 const handleEditClick = (category) => {
    setEditingCategory(category);
 };

 const handleUpdateClick = async (category) => {
    try {
       await axios.put(`http://localhost:3001/categories/${category.id}`, { category: editingCategory.category });
       const response = await axios.get('http://localhost:3001/categories');
       setCategories(response.data);
       setEditingCategory(null);
    } catch (error) {
       console.error('Error updating category:', error);
    }
   };
   

 const handleDeleteClick = async (category) => {
    try {
      await axios.delete(`http://localhost:3001/categories/${category.id}`);
      setCategories(categories.filter(cat => cat.id !== category.id));
    } catch (error) {
      console.error('Error deleting category:', error);
    }
 };

 const handleCategoryNameChange = (event, category) => {
    setEditingCategory({ ...category, category: event.target.value });
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
      <h2 className="product-table-title">Category List</h2>
      <div className="scrollable-container">
      <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
      <table className="product-table">
        <thead>
          <tr>
            <th>Category ID</th>
            <th>Category Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>
                {editingCategory && editingCategory.id === category.id ? (
                 <input
                    type="text"
                    value={editingCategory.category}
                    onChange={(event) => handleCategoryNameChange(event, category)}
                 />
                ) : (
                 category.category
                )}
              </td>
              <td>
                {editingCategory && editingCategory.id === category.id ? (
                 <IconButton aria-label="update" onClick={() => handleUpdateClick(category)}>
                    <UpdateIcon />
                 </IconButton>
                ) : (
                 <IconButton aria-label="edit" onClick={() => handleEditClick(category)}>
                    <EditIcon />
                 </IconButton>
                )}
                <IconButton aria-label="delete" onClick={() => handleDeleteClick(category)}>
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

export default CategoryTable;
