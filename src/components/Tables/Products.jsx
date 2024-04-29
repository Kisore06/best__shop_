import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import api from '../../utils/api'

// const BACKEND_URL = 'http://localhost:3001';

const ProductTable = () => {
 const [products, setProducts] = useState([]);
 const [editingProduct, setEditingProduct] = useState(null);


 useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${api}/product`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
 }, []);

 const handleEditClick = (product) => {
    setEditingProduct(product);
 };

 const handleUpdateClick = async (product) => {
    try {
      await axios.put(`${api}/product/${product.product_id}`, {
        productName: editingProduct.productName,
        price: editingProduct.price,
        description: editingProduct.description,
        categoryName: editingProduct.categoryName,
        subCategoryName: editingProduct.subCategoryName,
        genderName: editingProduct.genderName,
        brandName: editingProduct.brandName,
      });
      const response = await axios.get(`${api}/product`);
      setProducts(response.data);
      setEditingProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
    }
 };

 const handleDeleteClick = async (product) => {
    try {
      await axios.delete(`${api}/product/${product.product_id}`);
      setProducts(products.filter(p => p.product_id !== product.product_id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
 };

 const handleProductChange = (event, product) => {
    setEditingProduct({ ...product, [event.target.name]: event.target.value });
 };


 return (
    <div style={{ paddingTop: '80px', marginLeft:'50px', marginRight:'50px'}}>
      <h2 className="product-table-title">Product List</h2>
      <div className="scrollable-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th> 
            <th>Description</th>
            <th>Category</th>
            <th>Subcategory</th>
            <th>Gender</th>
            <th>Brand</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.product_id}>
              <td>{product.product_id}</td>
              <td>
                {editingProduct && editingProduct.product_id === product.product_id ? (
                 <input
                    type="text"
                    name="productName"
                    value={editingProduct.productName}
                    onChange={(event) => handleProductChange(event, product)}
                 />
                ) : (
                 product.productName
                )}
              </td>
              <td>
                {editingProduct && editingProduct.product_id === product.product_id ? (
                 <input
                    type="text"
                    name="price"
                    value={editingProduct.price}
                    onChange={(event) => handleProductChange(event, product)}
                 />
                ) : (
                 product.price
                )}
              </td>
              <td>
                {editingProduct && editingProduct.product_id === product.product_id ? (
                 <input
                    type="text"
                    name="description"
                    value={editingProduct.description}
                    onChange={(event) => handleProductChange(event, product)}
                 />
                ) : (
                 product.description
                )}
              </td>
              <td>{product.categoryName}</td>
              <td>{product.subCategoryName}</td>
              <td>{product.genderName}</td>
              <td>{product.brandName}</td>
              <td>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {editingProduct && editingProduct.product_id === product.product_id ? (
                 <IconButton aria-label="update" onClick={() => handleUpdateClick(product)} title="Update">
                    <UpdateIcon />
                 </IconButton>
                ) : (
                 <IconButton aria-label="edit" onClick={() => handleEditClick(product)} title="Edit">
                    <EditIcon />
                 </IconButton>
                )}
                <IconButton aria-label="delete" onClick={() => handleDeleteClick(product)} title="Delete">
                 <DeleteIcon />
                </IconButton>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
 );
};

export default ProductTable;
