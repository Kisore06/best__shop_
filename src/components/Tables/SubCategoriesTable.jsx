import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Products.css';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';

const SubCategories = () => {
 const [subCategories, setSubCategories] = useState([]);
 const [editingSubCategory, setEditingSubCategory] = useState(null);
 const productListRef = useRef(null);

 useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3001/subcategories');
        setSubCategories(response.data);
      } catch (error) {
        console.error('Error fetching subcategories:', error);
      }
    };

    fetchSubCategories();
 }, []);

 const handleEditClick = (subCategory) => {
    setEditingSubCategory(subCategory);
 };

 const handleUpdateClick = async (subCategory) => {
    try {
      await axios.put(`http://localhost:3001/subcategories/${subCategory.id}`, {
        name: editingSubCategory.name,
        categoryId: editingSubCategory.categoryId,
        genderId: editingSubCategory.genderId,
      });
      const response = await axios.get('http://localhost:3001/subcategories');
      setSubCategories(response.data);
      setEditingSubCategory(null);
    } catch (error) {
      console.error('Error updating subcategory:', error);
    }
 };

 const handleDeleteClick = async (subCategory) => {
    try {
      await axios.delete(`http://localhost:3001/subcategories/${subCategory.id}`);
      setSubCategories(subCategories.filter(sc => sc.id !== subCategory.id));
    } catch (error) {
      console.error('Error deleting subcategory:', error);
    }
 };

 const handleSubCategoryChange = (event, subCategory) => {
    setEditingSubCategory({ ...subCategory, [event.target.name]: event.target.value });
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
      <h2 className="product-table-title">Sub Categories List</h2>
      <div className="scrollable-container">
      <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
      <table className="product-table">
        <thead>
          <tr>
            <th>Sub Category ID</th>
            <th>Sub Category Name</th>
            <th>Category ID</th>
            <th>Gender ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subCategories.map((subCategory) => (
            <tr key={subCategory.id}>
              <td>{subCategory.id}</td>
              <td>
                {editingSubCategory && editingSubCategory.id === subCategory.id ? (
                 <input
                    type="text"
                    name="name"
                    value={editingSubCategory.name}
                    onChange={(event) => handleSubCategoryChange(event, subCategory)}
                 />
                ) : (
                 subCategory.name
                )}
              </td>
              <td>{subCategory.categoryId}</td>
              <td>{subCategory.genderId}</td>
              <td>
                {editingSubCategory && editingSubCategory.id === subCategory.id ? (
                 <IconButton aria-label="update" onClick={() => handleUpdateClick(subCategory)}>
                    <UpdateIcon />
                 </IconButton>
                ) : (
                 <IconButton aria-label="edit" onClick={() => handleEditClick(subCategory)}>
                    <EditIcon />
                 </IconButton>
                )}
                <IconButton aria-label="delete" onClick={() => handleDeleteClick(subCategory)}>
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

export default SubCategories;
