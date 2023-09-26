import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { DataProvider } from '../../dataContext/DataContext';

import { HiShoppingBag } from 'react-icons/hi';


export function Navbar(props) {
  const {
    count,
    setSearchedProductsByCategory
  } = useContext(DataProvider);

  const activeStyle = 'underline underline-offset-4';

  return (
    <nav className='flex justify-between items-center bg-red-100 fixed z-10 w-full py-5 px-8 text-sm font-light top-0'>
      <ul className='flex justify-evenly items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink
            onClick={()=>setSearchedProductsByCategory('')}
            className=''
            to='/'>
            Store
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={()=>setSearchedProductsByCategory('')}
            className={({ isActive }) => isActive ? activeStyle : null}
            to='/'>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={()=>setSearchedProductsByCategory('clothes')}
            className={({ isActive }) => isActive ? activeStyle : null}
            to='/clothes'>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? activeStyle : null}
            onClick={()=>setSearchedProductsByCategory('electronics')}
            to='/electronics'>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? activeStyle : null}
            onClick={()=>setSearchedProductsByCategory('furnitures')}
            to='/furnitures'>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? activeStyle : null}
            onClick={()=>setSearchedProductsByCategory('toys')}
            to='/toys'>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? activeStyle : null}
            onClick={()=>setSearchedProductsByCategory('others')}
            to='/others'>
            Others
          </NavLink>
        </li>
      </ul>

      <ul className='flex justify-evenly items-center gap-3'>
        <li className='text-black/60'>
          mail@gmail.com
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? activeStyle : null}
            to='/my-orders'>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? activeStyle : null}
            to='/my-account'>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? activeStyle : null}
            to='/sign-in'>
            Sign In
          </NavLink>
        </li>
        <li className='flex items-center'>
          <HiShoppingBag className='text-xl' />
          <span>
            {count}
          </span>
        </li>
      </ul>
    </nav>
  );
}

