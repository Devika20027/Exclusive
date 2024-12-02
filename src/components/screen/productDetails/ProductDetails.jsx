import React from 'react'
import NavbarTop from '../../navbar/NavbarTop'
import Navbar from '../../navbar/Navbar'
import Footer from '../footer/Footer'
import { useParams,Link } from "react-router-dom";
import data from '../../data/ViewAll.json';


function ProductDetails() {
    const { id } = useParams();
    const product = data.find((item) => item.id.toString() === id);
    const filtered = product ? data.filter((item)=> {
        if( item.category===product.category && item.title!=product.title )
            return item
               }) :[]

  return (
    <div>
        <NavbarTop />
        <Navbar />
        <div className='wrapper'>
        <div className='mt-[80px] mb-[60px] mx-auto font-poppinReg flex gap-[12px] items-center'>
          <div className='text-[rgba(0,0,0,.5)]'>
            <Link to="/">Home</Link>
            </div>
          <span className='text-[rgba(0,0,0,.5)]'>/</span>
          <span className='text-[rgba(0,0,0,.5)]'>{product.category}</span>
          <span className='text-[rgba(0,0,0,.5)]'>/</span>
          <span className='text-[#000]'>{product.title}</span>
      </div>
      <div className='flex gap-[50px]'>
        <div className='bg-[#f5f5f5] h-[600px] flex items-center justify-center w-[700px] h-[600px] pic-div'>
                    <img src={product.image} alt={product.imgAlt} className='w-[446px] h-[315px]'/>
        </div>
        <div className='flex flex-col gap-[16px]' >
                    <h1 className='font-interSemi text-[24px]'>{product.title}</h1>
                    <div className='flex flex-col gap-[16px]'>
                        <div  className='flex items-center gap-[8px]'>
                            <div className='self-center'>
                                <img src={product.rating} alt="Four Star.png" />
                            </div>
                            <div className='flex items-center gap-[16px]'>
                                <span className='font-poppinReg text-[14px] text-[#000] opacity-[50%]'>({product.review})</span>
                                <span className='w-[16px] h-0 border-[.5px] rotate-[90deg] border-[#000] opacity-[50%]'></span>
                                <div className={`${product.stock ? '' : 'hidden'}`}>
                                  <span className='font-poppinSemi text-[14px] text-[#00ff66] '>In Stock</span>
                                </div>
                                <div className={`${product.stock ? 'hidden' : ''}`}>
                                  <span className='font-poppinSemi text-[14px] text-[#d46666] '>Out of Stock</span>
                                </div>
                            </div>
                            
                        </div> 
                        </div> 
                        <div className='font-interBold text-[18px]'>${product.cost}</div>
                        <div>
                            <p className='font-poppinReg text-[16px]'>PlayStation 5 Controller Skin High quality vinyl with air<br/>
                               channel adhesive for easy bubble free install & mess <br/>
                               free removal Pressure sensitive.
                            </p>
                            <hr className='mt-[10px]'/>
                        </div>
                        <div className={`flex gap-[24px] items-center ${product.colorDiv ? 'hidden' :  ''}`}>
                            <h4 className='font-interReg text-[20px]'>Colours:</h4>
                            <div>
                                <img src={product.color} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className=' flex items-center gap-[16px] w-[400px] h-[90px] border-[rgba(0,0,0,.4)] border-[1px] rounded-t-[4px] pl-[16px] pt-[24px] pr-[20px] pb-[16px]'>
                                 <div>
                                    <img src='/assets/images/icon-delivery.png' alt="" />
                                 </div>
                                 <div>
                                    <h3 className='text-[16px] font-poppinMed'>Free Delivery</h3>
                                    <p className='text-[12px] font-poppinMed underline'>Enter your postal code for Delivery Availability</p>
                                 </div>
                            </div>
                            <div className='flex items-center  gap-[16px] w-[400px] h-[90px] border-[rgba(0,0,0,.4)] border-[1px] border-t-0 rounded-b-[4px] pl-[16px] pt-[24px] pr-[20px] pb-[16px]'>
                                 <div>
                                    <img src='/assets/images/Icon-return.png' alt="" />
                                 </div>
                                 <div>
                                    <h3 className='text-[16px] font-poppinMed'>Return Delivery</h3>
                                    <p className='text-[12px] font-poppinMed'>Free 30 Days Delivery Returns. <span className='underline'>Details</span></p>
                                 </div>
                            </div>
      </div>
      </div>
      </div>
      <div className='mb-[100px] mt-[100px]'>
                <div className='flex gap-[16px] items-center'>
                    <div className='w-[20px] h-[40px] rounded-[4px] bg-[#DB4444]'></div>
                    <h3 className='font-poppinSemi text-[16px] text-[#DB4444]'>Related Items</h3>
                        </div>
                </div>
                <div className={`mt-[54px] mx-auto  pb-[30px] font-poppinSemi font-bold text-[36px] text-center ${filtered.length > 0? 'hidden' : ''}`}>Oops No Related Items Found!!!</div>
                <div className='mt-[54px] mx-auto  pb-[30px]'>

                <div className='mt-[30px] mb-[50px] grid grid-cols-4 gap-x-[30px] gap-y-[60px] max-[1040px]:flex max-[1040px]:flex-wrap max-[1040px]:justify-center '>
        {filtered.map((item, index) => (
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
              <div>
                {/* <div className='bg-[#db4444] px-[12px] py-[4px] rounded-[4px] text-[#FAFAFA] text-[12px] font-poppinReg absolute top-[12px] left-[12px]'>-{item.discount}%</div> */}
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
                        
                        </div>
      
        <Footer />
    </div>
  )
}

export default ProductDetails