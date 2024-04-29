import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './ProductDetails.css';
import api from "../../utils/api";


const ProductDetails = () => {
 const { id } = useParams();
 const [product, setProduct] = useState(null);
 const [currentImageIndex, setCurrentImageIndex] = useState(0);
 const [images, setImages] = useState([]);
 const [similarProductsBySubcategory, setSimilarProductsBySubcategory] = useState([]);
 const [similarProductsByBrand, setSimilarProductsByBrand] = useState([]);

 useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${api}/product/${id}`);
        setProduct(response.data);
        setImages([
          response.data.image1,
          response.data.image2,
          response.data.image3,
          response.data.image4,
        ].filter(image => image)); // Filter out null or undefined images

        // Fetch similar products by subcategory
        const similarBySubcategoryResponse = await axios.get(`${api}/product?subCategoryName=${response.data.subCategoryName}`);
        setSimilarProductsBySubcategory(similarBySubcategoryResponse.data);

        // Fetch similar products by brand
        const similarByBrandResponse = await axios.get(`${api}/product?brandName=${response.data.brandName}`);
        setSimilarProductsByBrand(similarByBrandResponse.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
 }, [id]);

 const handleImageClick = (index) => {
    setCurrentImageIndex(index);
 };

 if (!product) {
    return <div style={{ paddingTop: '80px' }}>No products listed...</div>;
 }

 const connectWhatsApp = () => {
    const whatsappNumber = '1234567890'; // WhatsApp number
    const message = encodeURIComponent('Hello, I would like to order a customized trophy.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
 };

 return (
    <div style={{ paddingTop: '80px' }}>
      <div className="product-details-container">
        <div className="description-images">
          {images.map((image, index) => (
            image && ( // Check if the image is not null or undefined before rendering
              <img
                key={index}
                src={`${api}/${image}`}
                alt={product.productName}
                onClick={() => handleImageClick(index)}
                style={{ cursor: 'pointer', transition: 'transform 0.3s ease', marginRight: '10px' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            )
          ))}
        </div>
        <div className="main-image-container">
          <IconButton
            className="arrow-button left"
            onClick={() => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)}
            disabled={currentImageIndex === 0}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <img src={`${api}/${images[currentImageIndex]}`} alt={product.productName} />
          <IconButton
            className="arrow-button right"
            onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
            disabled={currentImageIndex === images.length - 1}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>

        <div className="product-info">
          <h2 className="he2">{product.productName}</h2>
          <h4>MRP : {product.price}</h4>
          <b>Product Details :</b>
          <p className="description-wrap">{product.description}</p>
          <p>Brand: {product.brandName}</p>
          <p>Category: {product.categoryName}</p>
          <p>Sub Category: {product.subCategoryName}</p>
          <p>Gender: {product.genderName}</p>
          <button style={{marginLeft:'0'}}onClick={connectWhatsApp}>Connect on WhatsApp</button>
        </div>
      </div>
      <br></br><br></br>
      {/* similar subcate*/}
      <div>
        <h2>Similar Products by Subcategory</h2>
        <br></br>
        <div className="product-cards-similar">
          {similarProductsBySubcategory.map((product) => (
            <div key={product.product_id} className="product-card-similar">
              <Link to={`/product/${product.product_id}`}>
                <img src={`${api}/${product.image1}`} alt={product.productName} className="product-image" />
                <div className="product-details">
                 <h3 className="he3">{product.productName}</h3>
                 <p>MRP: {product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <br></br><br></br>
        {/* similar brands */}
        <h2>Similar Products by Brand</h2>
        <br></br>
        <div className="product-cards-similar">
          {similarProductsByBrand.map((product) => (
            <div key={product.product_id} className="product-card-similar">
              <Link to={`/product/${product.product_id}`}>
                <img src={`${api}/${product.image1}`} alt={product.productName} className="product-image" />
                <div className="product-details">
                 <h3 className="he3">{product.productName}</h3>
                 <p>MRP: {product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
 );
};

export default ProductDetails;
