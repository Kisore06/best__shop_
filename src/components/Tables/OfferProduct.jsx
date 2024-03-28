import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css'; // Ensure you have a CSS file for styling
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const BACKEND_URL = 'http://localhost:3001';

const OfferProducts = () => {
 const [offerProducts, setOfferProducts] = useState([]);
 const [editingProduct, setEditingProduct] = useState(null);
 const [editingDetails, setEditingDetails] = useState({
    product_name: '',
    product_image: '',
    product_price: '',
    offer_percent: ''
 });

 useEffect(() => {
  const fetchOfferProducts = async () => {
     try {
       const response = await axios.get(`${BACKEND_URL}/offer-products`);
       console.log(response.data); // Log the fetched data to check the structure
       setOfferProducts(response.data);
     } catch (error) {
       console.error('Error fetching offer products:', error);
     }
  };
 
  fetchOfferProducts();
 }, []);
 

 const handleEdit = (product) => {
    setEditingProduct(product);
    setEditingDetails({
      product_name: product.product_name,
      product_image: product.product_image,
      product_price: product.product_price,
      offer_percent: product.offer_percent
    });
 };

 const handleUpdate = async () => {
  if (window.confirm('Are you sure you want to update this product?')) {
      try {
          await axios.put(`${BACKEND_URL}/offer-products/${editingProduct.product_id}`, editingDetails);
          const updatedProducts = offerProducts.map(p => p.product_id === editingProduct.product_id ? { ...p, ...editingDetails } : p);
          setOfferProducts(updatedProducts);
          setEditingProduct(null);
          setEditingDetails({
              product_name: '',
              product_image: '',
              product_price: '',
              offer_percent: ''
          });
      } catch (error) {
          console.error('Error updating product:', error);
      }
  }
};


 const handleDelete = async (productId) => {
    try {
      if (window.confirm('Are you sure you want to delete this product?')) {
        await axios.delete(`${BACKEND_URL}/offer-products/${productId}`);
        const updatedProducts = offerProducts.filter(p => p.product_id !== productId);
        setOfferProducts(updatedProducts);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
 };

 const handleCancel = () => {
    setEditingProduct(null);
    setEditingDetails({
      product_name: '',
      product_image: '',
      product_price: '',
      offer_percent: ''
    });
 };

 return (
    <div style={{ paddingTop: '80px' }}>
      <h2 className="product-table-title">Offer Products List</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Product Price</th>
            <th>Offer Percent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {offerProducts.map((product) => (
            <tr key={product.product_id}>
              <td>{product.product_id}</td>
              <td>
                {editingProduct && editingProduct.product_id === product.product_id ? (
                 <input type="text" value={editingDetails.product_name} onChange={e => setEditingDetails({ ...editingDetails, product_name: e.target.value })} />
                ) : (
                 product.product_name
                )}
              </td>
              <td>
                {editingProduct && editingProduct.product_id === product.product_id ? (
                 <input type="text" value={editingDetails.product_image} onChange={e => setEditingDetails({ ...editingDetails, product_image: e.target.value })} />
                ) : (
                 <img src={product.product_image} alt={product.product_name} style={{ width: '50px', height: '50px' }} />
                )}
              </td>
              <td>
                {editingProduct && editingProduct.product_id === product.product_id ? (
                 <input type="text" value={editingDetails.product_price} onChange={e => setEditingDetails({ ...editingDetails, product_price: e.target.value })} />
                ) : (
                 product.product_price
                )}
              </td>
              <td>
                {editingProduct && editingProduct.product_id === product.product_id ? (
                 <input type="text" value={editingDetails.offer_percent} onChange={e => setEditingDetails({ ...editingDetails, offer_percent: e.target.value })} />
                ) : (
                 product.offer_percent + '%'
                )}
              </td>
              <td>
                {editingProduct && editingProduct.product_id === product.product_id ? (
                 <>
                    <IconButton aria-label="update" onClick={handleUpdate}>
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="cancel" onClick={handleCancel}>
                      <DeleteIcon /> {/* Using DeleteIcon as a placeholder for cancel */}
                    </IconButton>
                 </>
                ) : (
                 <>
                    <IconButton aria-label="edit" onClick={() => handleEdit(product)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handleDelete(product.product_id)}>
                      <DeleteIcon />
                    </IconButton>
                 </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
};

export default OfferProducts;
