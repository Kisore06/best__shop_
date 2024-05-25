import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./TopDeals.css";
import nextIcon from '../../Assets/next.png'; // Assign the imported image to a variable
import prevIcon from '../../Assets/back.png'; // Assign the imported image to a variable
import { Link } from 'react-router-dom';
import api from '../../utils/api';
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import slick css
import "slick-carousel/slick/slick-theme.css"; // Import slick theme css

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <div className="next-arrow" onClick={onClick}>
      <img src={nextIcon} alt="Next" /> {/* Use the variable as the image source */}
    </div>
  );
};

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <div className="prev-arrow" onClick={onClick}>
      <img src={prevIcon} alt="Previous" /> {/* Use the variable as the image source */}
    </div>
  );
};

const ProductList = () => {
  const [noOfSlides, setNoOfSlides] = useState(window.innerWidth / 300);

  useEffect(() => {
    const handleResize = () => {
      setNoOfSlides(window.innerWidth / 300);
    };
  
    window.addEventListener('resize', handleResize);
  
    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${api}/offerproducts`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProducts();
  }, []);

  // Slick settings
  const settings = {
    slidesToShow: noOfSlides,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    mobileFirst: true
  };

  return (
    <div className="ofp-all-container">
      <div className="title-align">
        <h1 className="he1">Season Sales</h1>
      </div>
      <div className="ofp-container">
        <div style={{ marginLeft: '50px', marginRight: '50px' }}>
          <Slider {...settings}>
            {products && products.map((product) => (
              <div key={product.ofp_id} className="ofp-product-card">
                <Link to={`/offerproducts/${product.ofp_id}`}>
                  <div style={{ height: "20vh", width: "100%" }}>
                    <img 
                      src={`${api}/${product.image1}`} 
                      alt={product.product_name} 
                      className="ofp-product-image" 
                      onMouseEnter={(e) => e.currentTarget.src = `${api}/${product.image2}`} 
                      onMouseLeave={(e) => e.currentTarget.src = `${api}/${product.image1}`} 
                    />
                    </div>
                    <div className="product-details">
                      <h3 className="head3">{product.product_name}</h3>
                      <p>{product.product_price}</p>
                      <p>{product.offer}</p>
                    </div>
                  </Link>
                </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
