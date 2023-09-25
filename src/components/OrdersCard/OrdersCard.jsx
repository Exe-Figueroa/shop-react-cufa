import React from 'react';
import { BsCalendarWeek } from 'react-icons/bs';
import { HiShoppingBag } from 'react-icons/hi';
import { IoChevronForwardSharp } from 'react-icons/io5'


export function OrdersCard({ totalPrice, totalProducts, date }) {
  const [newDate, _] = date.split('T')
  return (
    <div className='flex justify-between cursor-pointer items-center mb-3 border border-black w-80 p-4 rounded-lg'>
      <p className='flex  justify-between items-center w-full'>
        <div className='flex flex-col'>
          <span className='font-light flex gap-2 items-center'>
            <BsCalendarWeek className='text-lg' /> {newDate}
          </span>
          <span className='font-light flex gap-2 items-center'>
            <HiShoppingBag className='text-lg' />Products {totalProducts}
          </span>
        </div>
        <span className='font-semibold text-2xl flex items-center'>
          ${totalPrice}
          <IoChevronForwardSharp className='text-3xl'/>
        </span>
      </p>
    </div>
  );
}
