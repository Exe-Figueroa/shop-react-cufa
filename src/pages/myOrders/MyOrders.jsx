import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Layout } from '../../components/layout/Layout.jsx';
import { OrdersCard } from '../../components/OrdersCard/OrdersCard.jsx';
import { DataProvider } from '../../dataContext/DataContext.jsx';

export function MyOrders(props) {
  const { order } = useContext(DataProvider);

  return (
    <Layout>
      <div className='flex items-center justify-center  w-80 mb-6'>
        <h1>My Orders</h1>
      </div>
      {
        order.map((item, index) =>
          <Link to={`/my-orders/${index}`}>
            <OrdersCard
              key={index}
              date={item.date}
              totalPrice={item.totalPrice}
              totalProducts={item.totalProducts}
            />
          </Link>
        )
      }
    </Layout>
  );
}

