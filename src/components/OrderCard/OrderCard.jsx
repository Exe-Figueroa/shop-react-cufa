import React, { useContext } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { DataProvider } from '../../dataContext/DataContext';

export function OrderCard({ id, title, image, price }) {
  const {
    removeProductToCart,
    cartProducts
  } = useContext(DataProvider);


  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img src={image} alt={title} className='w-full h-full object-cover rounded-lg ' />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center relative'>
        <p className='text-lg mr-4 font-medium'>${price}</p>
        <IoCloseSharp
          onClick={(e) => removeProductToCart(e, id)}
          className='cursor-pointer text-xl ml-2 absolute top-[-10px] right-[-10px]' />
      </div>
    </div>
  );
}

