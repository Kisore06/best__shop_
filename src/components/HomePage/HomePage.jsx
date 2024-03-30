import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../TopDeals/ProductList';
import Slider from '../slider/Slider';
import Categories from '../Categories/Categories';
import Brands from '../Brands/Brands';
import ShopFinder from '../Shop/Branch/ShopFinder';
import AboutPage from '../Shop/About/AboutPage';

const BACKEND_URL = 'http://localhost:3001';

const HomePage = () => {
 const [offerProducts, setOfferProducts] = useState([]);

 useEffect(() => {
    fetchOfferProducts();
 }, []);

 const fetchOfferProducts = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/offer-products`);
      setOfferProducts(response.data);
    } catch (error) {
      console.error(error);
    }
 };

 return (
    <div>
      <Slider />
      <ProductList products={offerProducts} />
      <Categories />
      <Brands />
      <ShopFinder />
      <AboutPage />
    </div>
 );
};

export default HomePage;
