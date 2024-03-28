//import Home from './components/HomePage/Header';
//import Content from './components/Content';
//import Footer from './components/HomePage/Footer';
//import Slider from './components/slider/Slider';
//import ProductList from './components/TopDeals/ProductList';
//import products from './components/TopDeals/Products';
//import Categories from './components/Categories/Categories';
import { Route, Routes, useLocation } from "react-router-dom";
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
import ShopLocations from "./components/Shop/Branch/ShopLocations";
import BagCategories from "./components/Bags/BagCategories";
import GiftCategories from "./components/Gifts/GiftCategories";
import ClothCategories from "./components/Clothes/ClothCategories";
import ProductForm from "./components/Shoes/ProductForm";
import AddCategory from "./components/Add/AddCategory";
import AddGender from "./components/Add/AddGender";
import AddSubcategory from "./components/Add/AddSubcategory";
import AddBrand from "./components/Add/AddBrand";
import AddProduct from "./components/Add/AddProduct";
import ProductList from "./components/Shoes/ProductList";
import AddOfferProduct from "./components/Add/AddOfferproduct";
import './app.css'
import BrandProducts from "./components/Brands/BrandProducts";
import { useEffect } from "react";
import TableDetails from "./components/Tables/TableDetails";
import SubCategories from "./components/Tables/SubCategoriesTable";
import ProductTable from "./components/Tables/Products";
import CategoryTable from "./components/Tables/Categories";
import Gender from "./components/Tables/Gender";
import Brands from "./components/Tables/Brands";
import OfferProducts from "./components/Tables/OfferProduct";
//import Brands from './components/Brands/Brands';


function App() {
  const location = useLocation();

 useEffect (() => {
    window.scrollTo(0, 0);
 }, [location]);

  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/home" element={<HomePage />} />
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
      <Route path="/shop-locations" element={<ShopLocations/>} />
      <Route path="/shoes/men" element={<ProductForm/>} />
      
      <Route path="/add-category" element={<AddCategory/>} />
      <Route path="/add-gender" element={<AddGender/>} />
      <Route path="/add-subcategory" element={<AddSubcategory/>} />
      <Route path="/add-brand" element={<AddBrand/>} />
      <Route path="/add-product" element={<AddProduct/>} />
      <Route path="/offer-products" element={<AddOfferProduct/>} />

      <Route path="/shoes/:subCategory" element={<ProductList />} />
      <Route path="/cosmetics/:subCategory" element={<ProductList />} />
      <Route path="/babyproducts/:subCategory" element={<ProductList />} />
      <Route path="/bags/:subCategory" element={<ProductList />} />
      <Route path="/clothes/:subCategory" element={<ProductList />} />
      <Route path="/gifts/:subCategory" element={<ProductList />} />
      <Route path="/toys/:subCategory" element={<ProductList />} />
      <Route path="/generalGoods/:subCategory" element={<ProductList />} />
      <Route path="/mobiles/:subCategory" element={<ProductList />} />
      <Route path="/mobileAccessories/:subCategory" element={<ProductList />} />
      <Route path="/sports/:subCategory" element={<ProductList />} />
      <Route path="/watches/:subCategory" element={<ProductList />} />

      <Route path="/:brandName" element={<BrandProducts />} />

      <Route path="/table-details" element={<TableDetails />} />
      <Route path="/table-details-products" element={<ProductTable />} />
      <Route path="/table-details-categories" element={<CategoryTable />} />
      <Route path="/table-details-gender" element={<Gender />} />
      <Route path="/table-details-subCategories" element={<SubCategories />} />
      <Route path="/table-details-brands" element={<Brands />} />
      <Route path="/table-details-offer-products" element={<OfferProducts />} />

      

      </Routes>
      <Content/>
      <Footer/>
      
    </div>
  );
}

export default App;