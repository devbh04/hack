'use client'
import React from 'react';

import useStore from '@/app/store';
import AppBar from '@/components/shared/appbar';

const Layout = ({ children }) => {
  const { itemName, itemCategory } = useStore();

  return (
    <div>
      <AppBar itemName={itemName} itemCategory={itemCategory} />
      <div className='pt-20'> {/* Add padding to avoid content being hidden behind the fixed AppBar */}
        {children}
      </div>
    </div>
  );
};

export default Layout;