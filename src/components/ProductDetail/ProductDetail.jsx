import React, { useContext } from 'react';
import './styles.css';

import { IoCloseSharp } from 'react-icons/io5';
import { DataProvider } from '../../dataContext/DataContext';

export function ProductDetail({ data }) {
  const { seeProductDetail, closeProductDetail, productToShow } = useContext(DataProvider);

  return (
    <aside aside
      className={`product-detail bg-white  flex flex-col fixed left-full top-[68px] border border-black rounded-lg z-30 ${seeProductDetail ? 'active' : ''}`} >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <IoCloseSharp
          onClick={closeProductDetail}
          className='cursor-pointer' />
      </div>
      <figure className='px-6'>
        <img
          src={productToShow.images[0]}
          alt={productToShow.title}
          className='w-full h-full rounded-lg object-cover' />
      </figure>
      <p className='flex flex-col p-6 gap-2'>
        <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
        <span className='font-medium text-md'>{productToShow.title}</span>
        <span className='font-light text-md'>{productToShow.description}</span>
      </p>
    </aside >
  );
}


