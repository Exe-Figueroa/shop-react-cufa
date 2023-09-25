import React, { useContext } from 'react';
import { Layout } from '../../components/layout/Layout.jsx';
import { DataProvider } from '../../dataContext/DataContext.jsx';
import { OrderCard } from '../../components/OrderCard/OrderCard.jsx';
import { IoChevronBackSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export function MyOrder(props) {
  const { order } = useContext(DataProvider);
  let [_, __, index] = window.location.pathname.split('/');
  if (index === 'last') index = order?.length - 1;
  return (
    <Layout>
      <div className='flex items-center justify-center  w-80 relative mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <IoChevronBackSharp className='h-6 w-6 cursor-pointer text-black' />
        </Link>
        <h1>My Orders</h1>
      </div>
      <section className='flex flex-col gap-2 w-80'>
        {order?.[index]?.products.map(prod =>
          <OrderCard
            key={prod.id}
            id={prod.id}
            title={prod.title}
            image={prod.images[0]}
            price={prod.price}
          />
        )}
      </section>
    </Layout>
  );
}
