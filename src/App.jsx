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


function App() {

  return (
    <div className="App">
     
      <Home />
      <Slider />
      <ProductList 
        products={products} 
      />
      <Categories />
      <Routes>
        <Route path="/shoes" element={<ShoeCategories/>} />
      </Routes>
      <Brands />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
