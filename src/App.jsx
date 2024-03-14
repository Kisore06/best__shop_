<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> d8149865c98e9d24bb227d2c31aa3089c7bb1fae
=======
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
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
<<<<<<< HEAD
<<<<<<< HEAD
// import Login from './components/Login/login';
import AddCategory from './components/AddProducts/AddCategory'; // Assuming you have an AddCategoryPage component


=======
=======
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
import ShopLocations from "./components/Shop/Branch/ShopLocations";
import BagCategories from "./components/Bags/BagCategories";
import GiftCategories from "./components/Gifts/GiftCategories";
import ClothCategories from "./components/Clothes/ClothCategories";
<<<<<<< HEAD
>>>>>>> d8149865c98e9d24bb227d2c31aa3089c7bb1fae
=======
import ProductForm from "./components/Shoes/ProductForm";
import AddCategory from "./components/Add/AddCategory";
import AddGender from "./components/Add/AddGender";
import AddSubcategory from "./components/Add/AddSubcategory";
import AddBrand from "./components/Add/AddBrand";
import AddProduct from "./components/Add/AddProduct";
import ProductList from "./components/Shoes/ProductList";
import './app.css'
import BrandProducts from "./components/Brands/BrandProducts";
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
//import Brands from './components/Brands/Brands';


function App() {

  return (
    <div className="App">
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> d8149865c98e9d24bb227d2c31aa3089c7bb1fae
    <Header/>
    {/* <Login /> */}
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/add-category" component={AddCategory} />
=======
    <Header/>
    <Routes>
      <Route path="/home" element={<HomePage />} />
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
      <Route path="/shoes" element={<ShoeCategories/>} />
      <Route path="/watches" element={<WatchCategories/>} />
      <Route path="/cosmetics" element={<CosmeticsCategory/>} />
      <Route path="/bags" element={<BagCategories/>} />
      <Route path="/generalgoods" element={<GoodsCategories/>} />
      <Route path="/sports" element={<SportsCategories/>} />
      <Route path="/gifts" element={<GiftCategories/>}/>
      <Route path="/clothes" element={<ClothCategories/>}/>
      <Route path="/mobiles" element={<MobileCategories/>} />
      <Route path="/toys" element={<ToyCategories/>} />
      <Route path="/babyproducts" element={<BabyProdCat/>} />
      <Route path="/trophy" element={<Trophy/>} />
<<<<<<< HEAD
<<<<<<< HEAD

=======
      <Route path="/shop-locations" element={<ShopLocations/>} />
>>>>>>> d8149865c98e9d24bb227d2c31aa3089c7bb1fae
      </Routes>
      <Content/>
      <Footer/>
=======
      <Route path="/shop-locations" element={<ShopLocations/>} />
      <Route path="/shoes/men" element={<ProductForm/>} />
      
      <Route path="/add-category" element={<AddCategory/>} />
      <Route path="/add-gender" element={<AddGender/>} />
      <Route path="/add-subcategory" element={<AddSubcategory/>} />
      <Route path="/add-brand" element={<AddBrand/>} />
      <Route path="/add-product" element={<AddProduct/>} />

      <Route path="/shoes/:gender/:subCategory" element={<ProductList />} />
      <Route path="/:brandName" element={<BrandProducts />} />

      </Routes>
      <Content/>
      <Footer/>
      
>>>>>>> 75345111110549f3123912ca50aa655f65b5dd04
    </div>
  );
}

export default App;
