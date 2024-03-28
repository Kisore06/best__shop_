import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css';
import { IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';

const BACKEND_URL = 'http://localhost:3001';

const CategoryTable = () => {
 const [categories, setCategories] = useState([]);
 const [editingCategory, setEditingCategory] = useState(null);
 const [editingName, setEditingName] = useState('');

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

 const handleEdit = (category) => {
   setEditingCategory(category);
   setEditingName(category.category);
 };

 const handleUpdate = async () => {
  try {
    await axios.put(`${BACKEND_URL}/categories/${editingCategory.id}`, { category: editingName });
    const updatedCategories = categories.map(cat => cat.id === editingCategory.id ? { ...cat, category: editingName } : cat);
    setCategories(updatedCategories);
    setEditingCategory(null);
    setEditingName('');
  } catch (error) {
    console.error('Error updating category:', error);
  }
};


 const handleCancel = () => {
   setEditingCategory(null);
   setEditingName('');
 };

 return (
    <div style={{ paddingTop: '80px' }}>
      <h2 className="product-table-title">Category List</h2>
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
                 <TextField value={editingName} onChange={e => setEditingName(e.target.value)} />
                ) : (
                 category.category
                )}
              </td>
              <td>
                {editingCategory && editingCategory.id === category.id ? (
                 <>
                    <IconButton aria-label="update" onClick={handleUpdate}>
                      <UpdateIcon />
                    </IconButton>
                    <IconButton aria-label="cancel" onClick={handleCancel}>
                      <DeleteIcon /> {/* Using DeleteIcon as a placeholder for cancel */}
                    </IconButton>
                 </>
                ) : (
                 <IconButton aria-label="edit" onClick={() => handleEdit(category)}>
                    <EditIcon />
                 </IconButton>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
};

export default CategoryTable;
