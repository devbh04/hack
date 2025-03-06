import React from 'react';

const AppBar = ({ itemName, itemCategory }) => {
  return (
    <div className='fixed top-0 left-0 w-full bg-white border-b-2 shadow-sm z-50'> {/* Make AppBar fixed and floating */}
      <div className='flex'>
        <div className='border-r px-36 p-4 bg-yellow-400 -mx-4.5'>
          <img src="img/logo2.png" alt="" className='h-14' />
        </div>
        <div className='flex gap-4 ml-10 items-center'>
          {itemName && <div className='flex gap-2 items-center'><img src="img/itemicon2.png" alt="" className='h-6 w-6'/><p className='text-2xl font-semibold'>Item: {itemName}</p></div>}
          {itemCategory && <div className='flex gap-2 items-center'><img src="img/itemicon1.png" alt="" className='h-6 w-6'/><p className='text-2xl font-semibold'>Category: {itemCategory}</p></div>}
        </div>
      </div>
    </div>
  );
};

export default AppBar;