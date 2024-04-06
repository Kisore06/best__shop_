import React from 'react';
import Products from './Products'
import Categories from './Categories';
import Gender from './Gender';
import SubCategories from './SubCategoriesTable';
import Brands from './Brands';
import OfferProduct from './OfferProduct';
import UserInfo from './UserInfo';

const TableDetails = () => {
  return (
    <div>
        <Categories/>
        <Gender/>
        <SubCategories/>
        <Brands/>
        <Products/>
        <OfferProduct />
        <UserInfo />
        
    </div>
  )
}

export default TableDetails