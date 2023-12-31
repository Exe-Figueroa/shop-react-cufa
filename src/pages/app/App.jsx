import { BrowserRouter, useRoutes } from 'react-router-dom';

import { DataContextProvider } from '../../dataContext/DataContext.jsx';

import { Navbar } from '../../components/NavBar/Navbar.jsx';
import { Home } from '../home/Home.jsx';
import { MyAccount } from '../myAccount/MyAccount.jsx';
import { MyOrder } from '../myOrder/MyOrder.jsx';
import { MyOrders } from '../myOrders/MyOrders.jsx';
import { NotFound } from '../notFound/NotFound.jsx';
import { SignIn } from '../signIn/SignIn.jsx';

import { CheckoutSideMenu } from '../../components/CheckoutSideMenu/CheckoutSideMenu.jsx';

import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/clothes',
      element: <Home />
    },
    {
      path: '/electronics',
      element: <Home />
    },
    {
      path: '/furnitures',
      element: <Home />
    },
    {
      path: '/toys',
      element: <Home />
    },
    {
      path: '/others',
      element: <Home />
    },
    {
      path: '/my-account',
      element: <MyAccount />
    },
    {
      path: '/my-order',
      element: <MyOrder />
    },
    {
      path: '/my-orders',
      element: <MyOrders />
    },
    {
      path: '/my-orders/last',
      element: <MyOrder />
    },
    {
      path: '/my-orders/:id',
      element: <MyOrder />
    },
    {
      path: '/sign-in',
      element: <SignIn />
    },
    {
      path: '/*',
      element: <NotFound />
    },
  ]);
  return routes;
}

export function App() {

  return (
    <DataContextProvider>
      <BrowserRouter >
        <CheckoutSideMenu /> 
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </DataContextProvider>
  );
};


