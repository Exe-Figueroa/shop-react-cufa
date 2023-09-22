import React, { useContext } from 'react';
import './styles.css';

import { IoCloseSharp } from 'react-icons/io5';
import { DataProvider } from '../../dataContext/DataContext';
import { OrderCard } from '../OrderCard/OrderCard';

export function CheckoutSideMenu({ data }) {
  const {
    seeCheckoutSideMenu,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    totalPrice,
    setTotalPrice,
    order,
    setOrder,
  } = useContext(DataProvider);

  function handleCheckout() {
    const currentDate = new Date();
  
    const formattedDate = currentDate.toISOString();
    
    const orderToAdd = {
      date: formattedDate,
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice,
    };
    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    setTotalPrice(0);
    console.log(orderToAdd);
  }

  return (
    <aside aside
      className={`checkout-side-menu bg-white overflow-y-auto flex flex-col fixed left-full top-[68px] border border-black rounded-lg z-30 ${seeCheckoutSideMenu ? 'active' : ''}`} >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <IoCloseSharp
          onClick={closeCheckoutSideMenu}
          className='cursor-pointer' />
      </div>
      <section className='flex flex-col gap-2 p-6'>
        {cartProducts.length > 0 ? cartProducts.map(prod =>
          <OrderCard
            key={prod.id}
            id={prod.id}
            title={prod.title}
            image={prod.images[0]}
            price={prod.price}
          />
        ) : <h1>There are no purchase orders yet</h1>}
      </section>
      <div className="px-6 flex justify-center items-center">
        <p className='flex justify-center gap-4 items-center bg-red-100 p-4 mb-3 rounded-lg min-w-[200px]'>
          <span className='font-light '>Total Price:</span>
          <span className='font-semibold text-2xl'> ${totalPrice}</span>
        </p>
        <button onClick={() => handleCheckout()}>Checkout</button>
      </div>
    </aside >
  );
}


