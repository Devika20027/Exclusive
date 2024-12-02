import React from 'react'
import data from '../../data/ViewAll.json';
import { Link } from 'react-router-dom';

function ViewPage() {
  return (
    <div className="wrapper">
      <div className='mt-[80px] mb-[60px] mx-auto font-poppinReg flex gap-[12px] items-center'>
          <div className='text-[rgba(0,0,0,.5)]'>
            <Link to="/">Home</Link>
            </div>
          <span className='text-[rgba(0,0,0,.5)]'>/</span>
          <span className='text-[#000]'>Products</span>
      </div>
      <div className='mt-[30px] mb-[50px] grid grid-cols-4 gap-x-[30px] gap-y-[60px] max-[1040px]:flex max-[1040px]:flex-wrap max-[1040px]:justify-center '>
        {data.map((item, index) => (
          <div key={index}>
            <div className='bg-[#F5F5F5] rounded-[4px] relative flex justify-center items-center h-[250px] container'>
              <div>
                <Link to={`/product-details/${item.id}`}><img src={item.image} alt="Breed Dry Dog Food"/></Link>
              </div>
              <div className='absolute top-[12px] right-[12px]'>
                <img src='/assets/images/Fill Heart.png'/>
                <img src='/assets/images/Fill Eye.png' className='mt-[10px]'/>
              </div>
              <div className={item.red}>
                  <div className='bg-[#db4444] px-[12px] py-[4px] rounded-[4px] text-[#FAFAFA] text-[12px] font-poppinReg absolute top-[12px] left-[12px]'>-{item.discount}%</div>
                </div>
              <div>
                <div className={`bg-[#00FF66] px-[12px] py-[4px] rounded-[4px] text-[#FAFAFA] text-[12px] font-poppinReg absolute top-[12px] left-[12px] ${item.new ? 'block' : 'hidden'}`}>New</div>
              </div>  
              <button className='w-[100%] h-[41px] absolute bottom-[0px] bg-[#000] rounded-b-[4px] font-poppinMed text-[16px] text-[#fff] hidden cart'>Add to Cart</button> 
            </div>
            <h3 className="text-[16px] font-medium text-gray-800 pt-[15px] font-poppinMed">{item.title}</h3>
            <div className="flex items-center text-yellow-500 text-sm pt-[5px]">
              <p className="text-red-500 text-[16px] font-medium font-poppinReg pr-[10px]">${item.cost}</p>
              <span><img src={item.rating}/></span>
              <span className="text-gray-500">({item.review})</span>
            </div>
            <div className='mt-[10px]'>
                <div class={item.colorDiv}><img src={item.color} alt={item.colorAlt}/></div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewPage;
