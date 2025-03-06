import React from 'react';

const AppBar = ({ itemName, itemCat }) => {
  return (
    <div className='fixed top-0 left-0 w-full bg-white border-b-2 shadow-sm z-50'> {/* Make AppBar fixed and floating */}
      <div className='flex'>
        <div className='border-r px-36 p-4 bg-yellow-400 -mx-4.5'>
          <img src="img/logo2.png" alt="" className='h-14' />
        </div>
      </div>
    </div>
  );
};

export default AppBar;