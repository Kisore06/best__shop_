import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Products.css';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';


const BACKEND_URL = 'http://localhost:3001';

const OfferProducts = () => {
 const [offerProducts, setOfferProducts] = useState([]);
 const [editingProduct, setEditingProduct] = useState(null);
 const productListRef = useRef(null);


 useEffect(() => {
  const fetchOfferProducts = async () => {
     try {
       const response = await axios.get(`${BACKEND_URL}/offerproducts`);
       setOfferProducts(response.data);
     } catch (error) {
       console.error('Error fetching offer products:', error);
     }
  };
 
  fetchOfferProducts();
 }, []);
 

 const handleEditClick = (product) => {
  setEditingProduct(product);
};

const handleUpdateClick = async (offerproducts) => {
  try {
    await axios.put(`http://localhost:3001/offerproducts/${offerproducts.ofp_id}`, {
      product_name: editingProduct.product_name,
      product_price: editingProduct.product_price,
      offer: editingProduct.offer,
      description: editingProduct.description,
      brand_name: editingProduct.brand_name,
      category: editingProduct.category,
      sub_category: editingProduct.sub_category,
      gender: editingProduct.gender,
    });
    const response = await axios.get('http://localhost:3001/offerproducts');
    setOfferProducts(response.data);
    setEditingProduct(null);
  } catch (error) {
    console.error('Error updating offer product:', error);
  }
};


const handleDeleteClick = async (offerproducts) => {
  try {
    await axios.delete(`http://localhost:3001/offerproducts/${offerproducts.ofp_id}`);
    setOfferProducts(offerProducts.filter(p => p.ofp_id !== offerproducts.ofp_id));
  } catch (error) {
    console.error('Error deleting offer product:', error);
  }
};

const handleProductChange = (event, offerproducts) => {
  setEditingProduct({ ...offerproducts, [event.target.name]: event.target.value });
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
      <h2 className="product-table-title">Offer Products List</h2>
      <div className="scrollable-container">
      <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
      <table className="product-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Offer</th>
            <th>Description</th>
            <th>Category</th>
            <th>Subcategory</th>
            <th>Gender</th>
            <th>Brand</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {offerProducts.map((offerproducts) => (
            <tr key={offerproducts.ofp_id}>
              <td>{offerproducts.ofp_id}</td>
              <td>
                {editingProduct && editingProduct.ofp_id === offerproducts.ofp_id ? (
                 <input 
                    type="text" 
                    name="product_name"
                    value={editingProduct.product_name} 
                    onChange={(event) => handleProductChange(event, offerproducts)}
                 />
                ) : (
                 offerproducts.product_name
                )}
              </td>
              <td>
                {editingProduct && editingProduct.ofp_id === offerproducts.ofp_id ? (
                  <input 
                    type="text" 
                    name="product_price"
                    value={editingProduct.product_price} 
                    onChange={(event) => handleProductChange(event, offerproducts)}
                 />
                ) : (
                  offerproducts.product_price
                )}
              </td>
              <td>
                {editingProduct && editingProduct.ofp_id === offerproducts.ofp_id ? (
                  <input 
                    type="text" 
                    name="offer"
                    value={editingProduct.offer} 
                    onChange={(event) => handleProductChange(event, offerproducts)}
                 />
                ) : (
                  offerproducts.offer
                )}
              </td>
              <td>
                {editingProduct && editingProduct.ofp_id === offerproducts.ofp_id ? (
                  <input 
                    type="text" 
                    name="description"
                    value={editingProduct.description} 
                    onChange={(event) => handleProductChange(event, offerproducts)}
                 />
                ) : (
                  offerproducts.description
                )}
              </td>
              <td>{offerproducts.category}</td>
              <td>{offerproducts.sub_category}</td>
              <td>{offerproducts.gender}</td>
              <td>{offerproducts.brand_name}</td>
              <td>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {editingProduct && editingProduct.ofp_id === offerproducts.ofp_id ? (
                 <IconButton aria-label="update" onClick={() => handleUpdateClick(offerproducts)} title="Update">
                    <UpdateIcon />
                 </IconButton>
                ) : (
                 <IconButton aria-label="edit" onClick={() => handleEditClick(offerproducts)} title="Edit">
                    <EditIcon />
                 </IconButton>
                )}
                <IconButton aria-label="delete" onClick={() => handleDeleteClick(offerproducts)} title="Delete">
                 <DeleteIcon />
                </IconButton>
                </div>
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

export default OfferProducts;
