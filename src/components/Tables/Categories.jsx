import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';

const CategoryTable = () => {
 const [categories, setCategories] = useState([]);
 const [editingCategory, setEditingCategory] = useState(null);

 useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3001/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchCategories();
 }, []);

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
              <td>{category.category}</td>
              <td>
                <IconButton aria-label="edit">
                 <EditIcon />
                </IconButton>
                <IconButton aria-label="update">
                 <UpdateIcon />
                </IconButton>
                <IconButton aria-label="delete">
                 <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
};

export default CategoryTable;
