import React, { useContext } from 'react';
import './styles.css';

import { IoCloseSharp } from 'react-icons/io5';
import { DataProvider } from '../../dataContext/DataContext';

export function CheckoutSideMenu({ data }) {
  const { 
    seeCheckoutSideMenu, 
    closeCheckoutSideMenu, 
    removeProductToCart,
    cartProducts
  } = useContext(DataProvider);

  return (
    <aside aside
      className={`checkout-side-menu  flex flex-col fixed left-full top-[68px] border border-black rounded-lg z-30 ${seeCheckoutSideMenu ? 'active' : ''}`} >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <IoCloseSharp
          onClick={closeCheckoutSideMenu}
          className='cursor-pointer' />
      </div>
      
    </aside >
  );
}


