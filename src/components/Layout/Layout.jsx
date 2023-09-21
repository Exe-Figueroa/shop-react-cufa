import React from 'react';

export function Layout({children}) {
  return (
    <div className='flex flex-col mt-20 px-8 items-center'>
      {children}
    </div>
  );
}

