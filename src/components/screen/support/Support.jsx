
import React from 'react';

function Support() {
  return (
    <div>
      <div className='mx-auto w-[90%]'>
        <ul className='px-[20px] pt-[60px] pb-[80px] flex flex-wrap justify-center gap-[40px] customer text-[16px] sm:px-[40px] md:px-[60px] lg:px-[80px]'>
          
          <li className='flex items-center flex-col gap-[16px] w-full sm:w-[45%] md:w-[45%] lg:w-[30%]'>
            <div>
              <img src="/assets/images/Services.png" alt="delivery.png" className="max-w-[120px]" />
            </div>
            <div className='flex flex-col items-center gap-[6px]'>
              <div className='font-semibold text-[18px] sm:text-[20px] lg:text-[22px] text-center'>
                FREE AND FAST DELIVERY
              </div>
              <div className='font-poppinReg text-[12px] sm:text-[14px] lg:text-[16px] text-center'>
                Free delivery for all orders over $140
              </div>
            </div>
          </li>

          <li className='flex items-center flex-col gap-[16px] w-full sm:w-[45%] md:w-[45%] lg:w-[30%]'>
            <div>
              <img src="/assets/images/Services (1).png" alt="customer service" className="max-w-[120px]" />
            </div>
            <div className='flex flex-col items-center gap-[6px]'>
              <div className='font-semibold text-[18px] sm:text-[20px] lg:text-[22px] text-center'>
                24/7 CUSTOMER SERVICE
              </div>
              <div className='font-poppinReg text-[12px] sm:text-[14px] lg:text-[16px] text-center'>
                Friendly 24/7 customer support
              </div>
            </div>
          </li>

          <li className='flex items-center flex-col gap-[16px] w-full sm:w-[45%] md:w-[45%] lg:w-[30%]'>
            <div>
              <img src="/assets/images/Services (2).png" alt="money back guarantee" className="max-w-[120px]" />
            </div>
            <div className='flex flex-col items-center gap-[6px]'>
              <div className='font-semibold text-[18px] sm:text-[20px] lg:text-[22px] text-center'>
                MONEY BACK GUARANTEE
              </div>
              <div className='font-poppinReg text-[12px] sm:text-[14px] lg:text-[16px] text-center'>
                We return money within 30 days
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Support;
