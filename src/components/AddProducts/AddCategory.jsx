import React, { useState } from 'react';
import './AddCategory.css';
import axios from 'axios';

const AddCategory = () => {
    const [categoryName, setCategoryName] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('category_name', categoryName);
        formData.append('image_path', image);

        try {
            const response = await axios.post('http://localhost:5000/add-category', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert(response.data);
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="category_name">Category Name:</label>
            <input
                type="text"
                id="category_name"
                name="category_name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
            />
            <br />
            <label htmlFor="image_path">Image Path:</label>
            <input
                type="file"
                id="image_path"
                name="image_path"
                onChange={handleImageChange}
            />
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default AddCategory;
