import { error } from 'ajv/dist/vocabularies/applicator/dependencies';
import React, { useState, useEffect } from 'react';

const BACKEND_URL = 'http://localhost:3001';

const AddSubcategoryForm = () => {
 const [subcategory, setSubcategory] = useState({
    name: '',
    category: '',
 });
 const [categories, setCategories] = useState([]);

 useEffect(() => {
    fetchCategories();
 }, []);

 const fetchCategories = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/categories`);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
 };


 const handleChange = (e) => {
    setSubcategory({ ...subcategory, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
      const response = await fetch(`${BACKEND_URL}/subcategories`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subcategory),
      });
      console.log(response);
      setSubcategory({
        name: '',
        category: ''
      });
      window.alert('Sub Category added successfully!')
    }
   
    catch {
      console.error(error);
      alert('Failed to add subcategory');
    }
 };

 return (
 <div style={{ paddingTop: '80px', maxWidth: '500px', margin: '0 auto' }}>
    <div style={{ textAlign: 'center' }}>
      <h2>Add Sub Categories</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
        <label>
          Subcategory Name:
          <input 
            type="text" 
            name="name" 
            value={subcategory.name} 
            onChange={handleChange} 
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            required />
        </label>
        <label>
          Category:
          <select 
            name="category" 
            value={subcategory.category} 
            onChange={handleChange} 
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            required>
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.category}>
                 {category.category}
                </option>
              ))}
          </select>
          </label>
        <button type="submit">Add Subcategory</button>
      </form>
      <p>
        <br></br>
        <a href="/add-brand" style={{ color: '#000', textDecoration: 'none', transition: 'color 0.3s ease', ':hover': { color: '#007bff' } }}>Add Brand</a>
        <br></br>
        <br></br>
        <a href="/add-product" style={{ color: '#000', textDecoration: 'none', transition: 'color 0.3s ease', ':hover': { color: '#007bff' } }}>Add Product</a>
      </p>
      </div>
    </div>
 );
};

export default AddSubcategoryForm;
