import React, { useContext, useState } from 'react';

import { Layout } from "../../components/layout/Layout.jsx";
import { Card } from '../../components/card/Card.jsx';
import { ProductDetail } from '../../components/ProductDetail/ProductDetail.jsx';
import { DataProvider } from '../../dataContext/DataContext.jsx';


export function Home(props) {
  const {
    products,
    searchedProduct,
    setSearchedProduct,
    productFiltered,
    searchedProductsByCategory
  } = useContext(DataProvider);

  function onChange(inputValue) {
    setSearchedProduct(inputValue.toLowerCase());
  };

  function renderResults() {
    if (searchedProduct && productFiltered.length === 0) {
      return (<h1 className='font-medium text-xl '>Products not found!!!</h1>)
    }
    if (!searchedProduct && productFiltered.length === 0) {
      return (
        products?.map(product => (
          <Card
            key={product.id}
            data={product}
          />
        ))
      );
    };
    if ((searchedProduct && productFiltered ) || (!searchedProduct && searchedProductsByCategory))  {
      return (productFiltered.map(product => (
        <Card
          key={product.id}
          data={product}
        />
      ))
      )
    }
    //Filtrado por categoria
  };

  return (
    <Layout>
      <div className='flex items-center justify-center  w-80 mb-6'>
        <h1 className='font-medium text-3xl'>Exclusive Products</h1>
      </div>
      <input
        type="text"
        value={searchedProduct}
        placeholder='Search a product'
        className='border border-black rounded-lg w-80 p-4 mb-4 focus:outline-none'
        onChange={e => onChange(e.target.value)}
      />
      <div className="grid grid-cols-4 gap-3 w-full max-w-screen-lg">
        {renderResults()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

