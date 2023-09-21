import React, { useContext, useEffect, useState } from 'react';
import { DataProvider } from '../../dataContext/DataContext';
import { IoAddSharp, IoCloseSharp } from 'react-icons/io5';

import './styles.css';

export function Card({ data }) {
  const [isInProductCart, setIsInProductCart] = useState(false)

  const {
    openProductDetail,
    setProductToShow,
    cartProducts,
    closeCheckoutSideMenu,
    addProductToCart,
    removeProductToCart,
  } = useContext(DataProvider);

  function showProduct(obj) {
    setProductToShow(obj);
    setTimeout(() => openProductDetail(), 300);
    closeCheckoutSideMenu();
  };

  function toggleIsInProductCard() {
    const verify = cartProducts.some(product => product.id === data.id);
    setIsInProductCart(verify);
  }
  
  useEffect(() => toggleIsInProductCard(data.id), [cartProducts]);

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct(data)}>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg  text-black text-xs m-2 px-3 py-0.5'>
          {data.category.name}
        </span>
        <img src={data.images[0]} alt={data.description}
          className='w-full h-full object-cover rounded-lg' />

        <div
          className={`card-icon-remove-add flex absolute justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 ${!isInProductCart? '' : 'remove'}`}>
          {!isInProductCart ?
            <IoAddSharp onClick={(e) => addProductToCart(e, data)} className='w-full h-full'/>
            : 
            <IoCloseSharp onClick={(e) => removeProductToCart(e, data.id)} className='w-full h-full'/>
          }
        </div>
      </figure>
      <p className='flex justify-between items-center'>
        <span className='text-sm font-light'>{data.title}</span>
        <span className='text-lg font-medium'>${data.price} </span>
      </p>
    </div>
  );
}

