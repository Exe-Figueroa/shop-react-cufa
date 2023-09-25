import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

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
    setCount,
    removeProductToCart,
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
    closeCheckoutSideMenu();
    setCount(0);
  }

  return (
    <aside aside
      className={`checkout-side-menu bg-white flex flex-col fixed left-full top-[68px] border border-black rounded-lg z-30 ${seeCheckoutSideMenu ? 'active' : ''}`} >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <IoCloseSharp
          onClick={closeCheckoutSideMenu}
          className='cursor-pointer' />
      </div>
      <section className='flex flex-col gap-2 p-6 flex-1 overflow-y-scroll min-h-[50vh]'>
        {cartProducts.length > 0 ? cartProducts.map(prod =>
          <OrderCard
            key={prod.id}
            id={prod.id}
            title={prod.title}
            image={prod.images[0]}
            price={prod.price}
            removeProductToCart={removeProductToCart}
          />
        ) : <h1>There are no purchase orders yet</h1>}
      </section>
      <div className="px-6 flex justify-center flex-col items-center mb-6">
        <p className='flex justify-between w-full items-center mb-2 '>
          <span className='font-light '>Total Price:</span>
          <span className='font-semibold text-2xl'> ${totalPrice}</span>
        </p>
        <Link
          to='/my-orders/last'
          className='w-full bg-black py-3 text-white rounded-lg'>
          <button
            className='w-full bg-black py-3 text-white rounded-lg'
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside >
  );
}


