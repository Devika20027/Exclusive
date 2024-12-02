
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function NavbarTop() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   return (
//     <div className="bg-black p-[10px] font-poppinReg">
//       <div className="wrapper flex justify-between">
//         <small className="font-normal text-[14px] text-[#FAFAFA] text-center font-poppins ml-[20rem]">
//           Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
//           <Link to="#" className="underline m-[10px] font-bold">ShopNow</Link>
//         </small>
//         <div className="text-[#FAFAFA] flex items-center relative">
//           <button 
//             onClick={toggleDropdown} 
//             className="flex items-center space-x-1 focus:outline-none"
//           >
//             <span>English</span>
//             <img src="/assets/images/DropDown.png" alt="Dropdown Icon" />
//           </button>
//           {isDropdownOpen && (
//             <ul className="absolute top-[30px] left-0 bg-white text-black rounded shadow-md w-[100px] p-[5px]">
//               <li className="p-[5px] hover:bg-gray-200 cursor-pointer">French</li>
//               <li className="p-[5px] hover:bg-gray-200 cursor-pointer">Malayalam</li>
//               <li className="p-[5px] hover:bg-gray-200 cursor-pointer">Hindi</li>
//               <li className="p-[5px] hover:bg-gray-200 cursor-pointer">Dutch</li>
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NavbarTop;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavbarTop() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="bg-black p-[10px] font-poppinReg">
      <div className="wrapper flex justify-between items-center flex-wrap">
        {/* Sale message */}
        <small className="font-normal text-[14px] text-[#FAFAFA] text-center font-poppins pl-[16rem] md:mx-[5rem]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
          <Link to="#" className="underline m-[10px] font-bold">ShopNow</Link>
        </small>

        {/* Language dropdown */}
        <div className="text-[#FAFAFA] flex items-center relative mt-2 md:mt-0">
          <button 
            onClick={toggleDropdown} 
            className="flex items-center space-x-1 focus:outline-none"
          >
            <span>English</span>
            <img src="/assets/images/DropDown.png" alt="Dropdown Icon" />
          </button>
          {isDropdownOpen && (
            <ul className="absolute top-[30px] left-0 bg-white text-black rounded shadow-md w-[100px] p-[5px]">
              <li className="p-[5px] hover:bg-gray-200 cursor-pointer">French</li>
              <li className="p-[5px] hover:bg-gray-200 cursor-pointer">Malayalam</li>
              <li className="p-[5px] hover:bg-gray-200 cursor-pointer">Hindi</li>
              <li className="p-[5px] hover:bg-gray-200 cursor-pointer">Dutch</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavbarTop;

