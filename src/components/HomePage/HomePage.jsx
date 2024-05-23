import ProductList from '../TopDeals/OfferProductList';
import Slider from '../slider/Slider';
import Categories from '../Categories/Categories';
import Brands from '../Brands/Brands';
import ShopFinder from '../Shop/Branch/ShopFinder';
import AboutPage from '../Shop/About/AboutPage';
import HotPicks from '../HotPicks/HotPicks';


const HomePage = () => {
 

 return (
    <div>
      <Slider />
      <HotPicks />
      <ProductList />
      <Categories />
      <Brands />
      <ShopFinder />
      <AboutPage id="About" />
    </div>
 );
};

export default HomePage;
