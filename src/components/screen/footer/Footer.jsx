import React from 'react'

function Footer() {
  return (
    <div>
        <div className='bg-[#000] pb-[16px]'>
            <div className='mx-auto w-[90%] pt-[80px] pb-[60px] text-[#fff] flex justify-between  max-[1100px]:flex-col max-[1100px]:gap-y-[40px] max-[1100px]:items-center wrapper'>
                <div className='flex flex-col gap-[14px]'>
                    <div className='flex flex-col gap-[24px] max-[1100px]:items-center'>
                        <h1 className='text-[#fafafa] font-interBold text-[24px]'>Exclusive</h1>
                        <div className='font-poppinMed text-[20px] text-[#fafafa]'>Subscribe</div>
                        <div className='font-poppinReg text-[16px] text-[#fafafa]'>Get 10% off your first order</div>
                    </div>
                    <div className='flex items-center relative'>
                        <input type="email" placeholder="Enter your email" className='bg-[#000] border-[1.5px] rounded-[4px] py-[10px] pl-[16px] font-poppinReg text-[16px] text-[#fafafa]'/>
                        <div className='absolute right-[12px]'>
                            <img src="/assets/images/icon-send.png" alt="send.svg"/>
                        </div>
                    </div>
                </div>
                <ul className=' flex flex-col gap-[24px] max-[1100px]:items-center'>
                    <li className='font-poppinMed text-[20px] text-[#fafafa]'>Support</li>
                    <div className=' flex flex-col gap-[16px] max-[1100px]:items-center'>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'>111 Bijoy sarani, Dhaka,<br/> DH 1515, Bangladesh.</li>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'>exclusive@gmail.com</li>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'>+88015-88888-9999</li>
                    </div>
                </ul>
                <ul className=' flex flex-col gap-[24px] max-[1100px]:items-center'>
                    <li className='font-poppinMed text-[20px] text-[#fafafa]'>Account</li>
                    <div className=' flex flex-col gap-[16px] max-[1100px]:items-center'>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'>My Account</li>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'>Login / Register</li>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'>Cart</li>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'>Wishlist</li>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'>Shop</li>
                    </div>
                </ul>
                <ul className=' flex flex-col gap-[24px] max-[1100px]:items-center'>
                    <li className='font-poppinMed text-[20px] text-[#fafafa]'>Quick Link</li>
                    <div className=' flex flex-col gap-[16px] max-[1100px]:items-center'>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'>Privacy Policy</li>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'>Terms Of Use</li>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'>FAQ</li>
                        <li className='font-poppinReg text-[16px] text-[#fafafa]'>Contact</li>
                    </div>
                </ul>
                <ul className=' flex flex-col gap-[24px] max-[1100px]:items-center'>
                    <li className='font-poppinMed text-[20px] text-[#fafafa]'>Download App</li>
                    <div className='flex flex-col gap-[24px] max-[1100px]:items-center'>
                        <div className='flex flex-col gap-[8px]'>
                            <li className='font-poppinMed text-[12px] text-[#fafafa] opacity-[70%]'>Save $3 with App New User Only</li>
                            <li className='flex items-center gap-[8px]'>
                                <picture>
                                    <img src="/assets/images/Qr Code.png" alt="Qrcode.png"/>
                                </picture>
                                <img src="/assets/images/Playstore.png" alt="App.png" class="app"/></li>
                        </div>
                        <li>
                                <img src="/assets/images/Icons.png" alt="social-media.png"/>
                        </li>
                    </div>
                </ul>
            </div>
            <div className='border-t-[1px] border-[rgba(255,255,255,.3)] opacity-[30%] pt-[16px] font-poppinReg text-[16px] text-center text-[rgba(255,255,255,1)] '>
                © Copyright Rimel 2024. All right reserved
            </div>
        </div>
    </div>
  )
}

export default Footer