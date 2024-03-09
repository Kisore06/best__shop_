import React from 'react';
import Slider from '../slider/Slider';
import ProductList from '../TopDeals/ProductList';
import products from '../TopDeals/Products';
import Categories from '../Categories/Categories';
import Brands from '../Brands/Brands';
import ShopFinder from '../Shop/Branch/ShopFinder';



const HomePage = () => {
  return (
    <div>
      <Slider />
      <ProductList products={products} />
      <Categories/>
      <Brands/>
      <ShopFinder/>
    </div>
  )
}

export default HomePage
