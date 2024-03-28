import React from 'react';
import Products from './Products'
import Categories from './Categories';
import Gender from './Gender';
import SubCategories from './SubCategoriesTable';
import Brands from './Brands';
import OfferProduct from './OfferProduct';

const TableDetails = () => {
  return (
    <div>
        <Categories/>
        <Gender/>
        <SubCategories/>
        <Brands/>
        <Products/>
        <OfferProduct />
        
    </div>
  )
}

export default TableDetails