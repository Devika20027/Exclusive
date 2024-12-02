// // import React from 'react'

// // function Spotlight() {
// //   return (
// //     <div className='mt-[40px] font-poppinReg'>
// //         <div className='wrapper bg-black rounded-lg flex justify-between'>
// //             <div className='text-white pl-[50px] my-[100px] ml-[20px]'>
// //                 <div className='flex gap-[25px] items-center pb-[15px]'>
// //                 <span><img src='/assets/images/apple.png'/></span>
// //                 <p className='text-[16px] font-normal'>iPhone 14 Series</p>
// //                 </div>
// //                 <div>
// //                   <span className='text-[48px] font-semibold leading-[60px]'>Up to 10% <br/>off Voucher</span>
// //                 </div>
// //                 <div className='pt-[15px] flex'>
// //                   <span className='text-[16px] font-medium border-b border-white'>Shop Now</span>
// //                     <img src="/assets/images/arrow-right.png" className='pl-[10px]'/>
// //                 </div>
// //             </div>
// //             <span><img src='/assets/images/picture1.png' className='rounded-lg'/></span>
// //         </div>
// //     </div>
// //   )
// // }

// // export default Spotlight


// import React from 'react'

// function Spotlight() {
//   return (
//     <div className='mt-[45px] font-poppinReg'>
//         <div className='wrapper bg-black rounded-lg flex flex-col md:flex-row justify-between'>
//             {/* Left Section (Text) */}
//             <div className='text-white pl-[50px] ml-[50px] md:my-[50px] md:pl-[30px]'>
//                 <div className='flex gap-[25px] items-center pb-[15px]'>
//                     <span><img src='/assets/images/apple.png' alt="apple"/></span>
//                     <p className='text-[16px] font-normal md:text-[18px]'>iPhone 14 Series</p>
//                 </div>
//                 <div>
//                     <span className='text-[48px] font-semibold leading-[60px] md:text-[36px] md:leading-[45px]'>
//                         Up to 10% <br className='' /> off Voucher
//                     </span>
//                 </div>
//                 <div className='pt-[15px] flex'>
//                     <span className='text-[16px] font-medium border-b border-white cursor-pointer md:text-[18px]'>
//                         Shop Now
//                     </span>
//                     <img src="/assets/images/arrow-right.png" className='pl-[10px]' alt="arrow"/>
//                 </div>
//             </div>

//             {/* Right Section (Image) */}
//             <span>
//                 <img src='/assets/images/picture1.png' className='rounded-lg h-[400px] md:w-[400px]' alt="spotlight"/>
//             </span>
//         </div>
//     </div>
//   )
// }

// export default Spotlight

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