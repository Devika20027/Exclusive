import React from 'react'

function Spotlight() {
  return (
    <>
        <div className='bg-[#000] mx-auto w-[90%] mt-10 flex items-center justify-between rounded-[10px] max-[1060px]:flex-col-reverse max-[1060px]:justify-center ' >
          <div className='py-[110px] pl-[64px] flex flex-col gap-y-[20px] apple'>
            <div className='flex items-center gap-x-[24px]'>
              <div >
                <img src='/assets/images/apple.png' alt="apple.svg" />
              </div>
              <div className='text-[#FAFAFA] font-poppinReg'>iPhone 14 Series</div>
            </div>
            <div  className='text-[#FAFAFA] font-interSemi text-[48px] max-[510px]:text-[36px]  max-[400px]:text-[32px] '>Up to 10% <br/>off Voucher</div>
            <div className='flex items-center gap-x-[8px]'>
              <p  className='text-[#FAFAFA] font-poppinReg border-b border-solid pb-[4px] max-[400px]:text-[12px] max-[510px]:text-[14px]'>Shop now</p>
              <div>
                <img src='/assets/images/arrow-right.png' alt="Vector.svg"/>
              </div>
            </div>
          </div>
          <div className='w-[610px] max-[720px]:w-[100%]  max-[720px]:h-auto max-[1060px]:pt-[50px] '>
            <img src='/assets/images/picture1.png' alt="iPhone.png" className='rounded-[10px]' />
          </div>
        </div>
    </>
  )
}

export default Spotlight