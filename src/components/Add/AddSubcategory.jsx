import React, { useState, useEffect } from 'react';

const AddSubcategoryForm = () => {
 const [subcategory, setSubcategory] = useState({
    name: '',
    categoryId: '',
    genderId: '', 
 });
 const [categories, setCategories] = useState([]);
 const [genders, setGenders] = useState([]); 

 useEffect(() => {
    // Fetch categories and genders from your backend API
    fetchCategories();
    fetchGenders(); 
 }, []);

 const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3001/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
 };

 const fetchGenders = async () => {
    try {
      const response = await fetch('http://localhost:3001/genders');
      const data = await response.json();
      setGenders(data);
    } catch (error) {
      console.error('Error fetching genders:', error);
    }
 };

 const handleChange = (e) => {
    setSubcategory({ ...subcategory, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://localhost:3001/subcategories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subcategory),
    });

    if (response.ok) {
      alert('Subcategory added successfully');
      setSubcategory({
        name: '',
        categoryId: '',
        genderId: '',
      });
    } else {
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
            name="categoryId" 
            value={subcategory.categoryId} 
            onChange={handleChange} 
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            required>
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.category}
                </option>
              ))}
          </select>
          </label>
          <label>
          Gender:
          <select 
            name="genderId" 
            value={subcategory.genderId} 
            onChange={handleChange} 
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            required>
              <option value="">Select a gender</option>
              {genders.map((gender) => (
                <option key={gender.id} value={gender.g_id}>
                  {gender.gender}
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
