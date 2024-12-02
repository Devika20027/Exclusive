import React from 'react';
import data from '../../data/Category.json';

function Categories({ onCategoryClick }) {
  return (
    <div className='mt-[40px]'>
      <div className='wrapper'>
        <div className='flex items-center gap-[16px] pb-[20px]'>
          <div className='w-[20px] h-[40px] rounded bg-[#DB4444]'></div>
          <h3 className='font-poppinSemi text-[16px] text-[#DB4444]'>Categories</h3>
        </div> 

        <div className='mb-[25px]'>
          <span className='font-interSemi text-[36px] font-semibold tracking-wider mb-[10px]'>Browse By Category</span>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[30px]'>
          {data.map((item, index) => (
            <div key={index} onClick={() => onCategoryClick(item.category)}>
              <div className="flex flex-col items-center justify-center w-full h-[145px] border border-black border-opacity-30 rounded mb-[20px] hover:bg-red-500 hover:text-white">
                <img src={item.img} className="w-[80px] h-[80px] object-contain mb-[10px]" />
                <span className="text-[16px] font-normal font-poppinReg pt-[10px] hover:text-white">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>      
    </div>
  );
}

export default Categories;


