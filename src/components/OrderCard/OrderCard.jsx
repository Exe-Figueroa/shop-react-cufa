import React, { useContext } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { DataProvider } from '../../dataContext/DataContext';

export function OrderCard({ id, title, image, price }) {
  const {
    removeProductToCart,
    cartProducts
  } = useContext(DataProvider);


  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img src={image} alt={title} className='w-full h-full object-cover rounded-lg ' />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>
        <IoCloseSharp
          onClick={(e) => removeProductToCart(e, id)}
          className='cursor-pointer' />
      </div>
    </div>
  );
}

