import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Products.css';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';

const Gender = () => {
 const [genders, setGenders] = useState([]);
 const [editingGender, setEditingGender] = useState(null);
 const productListRef = useRef(null);


 useEffect(() => {
    const fetchGenders = async () => {
      try {
        const response = await axios.get('http://localhost:3001/genders');
        setGenders(response.data);
      } catch (error) {
        console.error('Error fetching genders:', error);
      }
    };

    fetchGenders();
 }, []);

 const handleEditClick = (gender) => {
    setEditingGender(gender);
 };

 const handleUpdateClick = async (gender) => {
    try {
      await axios.put(`http://localhost:3001/genders/${gender.g_id}`, { gender: editingGender.gender });
      const response = await axios.get('http://localhost:3001/genders');
      setGenders(response.data);
      setEditingGender(null);
    } catch (error) {
      console.error('Error updating gender:', error);
    }
 };

 const handleDeleteClick = async (gender) => {
    try {
      await axios.delete(`http://localhost:3001/genders/${gender.g_id}`);
      setGenders(genders.filter(g => g.g_id !== gender.g_id));
    } catch (error) {
      console.error('Error deleting gender:', error);
    }
 };

 const handleGenderChange = (event, gender) => {
    setEditingGender({ ...gender, gender: event.target.value });
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
      <h2 className="product-table-title">Genders</h2>
      <div className="scrollable-container">
      <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
      <table className="product-table">
        <thead>
          <tr>
            <th>Gender ID</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {genders.map((gender) => (
            <tr key={gender.g_id}>
              <td>{gender.g_id}</td>
              <td>
                {editingGender && editingGender.g_id === gender.g_id ? (
                 <input
                    type="text"
                    value={editingGender.gender}
                    onChange={(event) => handleGenderChange(event, gender)}
                 />
                ) : (
                 gender.gender
                )}
              </td>
              <td>
                {editingGender && editingGender.g_id === gender.g_id ? (
                 <IconButton aria-label="update" onClick={() => handleUpdateClick(gender)}>
                    <UpdateIcon />
                 </IconButton>
                ) : (
                 <IconButton aria-label="edit" onClick={() => handleEditClick(gender)}>
                    <EditIcon />
                 </IconButton>
                )}
                <IconButton aria-label="delete" onClick={() => handleDeleteClick(gender)}>
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

export default Gender;
