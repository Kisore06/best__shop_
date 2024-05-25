import ProductList from '../TopDeals/OfferProductList';
import Slider from '../slider/Slider';
// import Categories from '../Categories/Categories';
import Brands from '../Brands/Brands';
import ShopFinder from '../Shop/Branch/ShopFinder';
import AboutPage from '../Shop/About/AboutPage';
import HotPicks from '../HotPicks/HotPicks';
import FlexBoxComponent from '../Categories/Flex/Flex';
import Testimonial from '../Testimonial/Testimonial';


const HomePage = () => {
 

 return (
    <div>
      <Slider />
      <HotPicks />
      <ProductList />
      {/* <Categories id="All-categories" /> */}
      <FlexBoxComponent id="All-categories"/>
      <Brands />
      <ShopFinder />
      <AboutPage id="About" />
      <Testimonial />
    </div>
 );
};

export default HomePage;
