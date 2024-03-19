import React from 'react';
import Products from './Products'
import Categories from './Categories';
import Gender from './Gender';
import SubCategories from './SubCategoriesTable';
import Brands from './Brands';

const TableDetails = () => {
  return (
    <div>
        <Categories/>
        <Gender/>
        <SubCategories/>
        <Brands/>
        <Products/>
        
    </div>
  )
}

export default TableDetails