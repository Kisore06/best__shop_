import ProductList from '../TopDeals/OfferProductList';
import Slider from '../slider/Slider';
import Categories from '../Categories/Categories';
import Brands from '../Brands/Brands';
import ShopFinder from '../Shop/Branch/ShopFinder';
import AboutPage from '../Shop/About/AboutPage';


const HomePage = () => {
 

 return (
    <div>
      <Slider />
      <ProductList />
      <Categories />
      <Brands />
      <ShopFinder />
      <AboutPage />
    </div>
 );
};

export default HomePage;
