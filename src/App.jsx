<<<<<<< HEAD
import React from 'react';
import Home from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Slider from './components/slider/Slider';
import ProductList from './components/TopDeals/ProductList';
import products from './components/TopDeals/Products';
import Categories from './components/Categories/Categories';
import { Route, Routes } from "react-router-dom";
import ShoeCategories from './components/Shoes/ShoeCategories';
import Brands from './components/Brands/Brands';
import BagCategories from './components/Bags/BagCategories'; // Corrected import statement
=======
//import Home from './components/HomePage/Header';
//import Content from './components/Content';
//import Footer from './components/HomePage/Footer';
//import Slider from './components/slider/Slider';
//import ProductList from './components/TopDeals/ProductList';
//import products from './components/TopDeals/Products';
//import Categories from './components/Categories/Categories';
import { Route, Routes } from "react-router-dom";
import ShoeCategories from './components/Shoes/ShoeCategories';
import HomePage from './components/HomePage/HomePage';
import Header from "./components/HomePage/Header";
import Footer from "./components/HomePage/Footer";
import WatchCategories from "./components/Watches/WatchCategories";
import Content from "./components/Content";
import CosmeticsCategory from "./components/Cosmetics/CosmeticsCategory";
import GoodsCategories from "./components/GeneralGoods/GoodsCatego";
import SportsCategories from "./components/Sports/SportsCategories";
import MobileCategories from "./components/Mobiles/MobileCategories";
import ToyCategories from "./components/Toys/ToyCategories";
import BabyProdCat from "./components/BabyProducts/BabyProdCat";
import Trophy from "./components/Trophy/Trophy";
//import Brands from './components/Brands/Brands';

>>>>>>> 1a81c652bdc58e1f5de201ae9158dd6f20709d41

function App() {
 return (
    <div className="App">
<<<<<<< HEAD
      <Home />
      <Slider />
      <ProductList products={products} />
      <Categories />
      <Routes>
        <Route path="/shoes" element={<ShoeCategories/>} />
        <Route path="/bags" element={<BagCategories/>} /> {/* Corrected usage */}
=======
    <Header/>
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/shoes" element={<ShoeCategories/>} />
      <Route path="/watches" element={<WatchCategories/>} />
      <Route path="/cosmetics" element={<CosmeticsCategory/>} />
      <Route path="/generalgoods" element={<GoodsCategories/>} />
      <Route path="/sports" element={<SportsCategories/>} />
      <Route path="/mobiles" element={<MobileCategories/>} />
      <Route path="/toys" element={<ToyCategories/>} />
      <Route path="/babyproducts" element={<BabyProdCat/>} />
      <Route path="/trophy" element={<Trophy/>} />

>>>>>>> 1a81c652bdc58e1f5de201ae9158dd6f20709d41
      </Routes>
      <Content/>
      <Footer/>
    </div>
 );
}

export default App;
