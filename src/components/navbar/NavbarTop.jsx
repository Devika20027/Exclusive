import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavbarTop() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="bg-black p-[10px] font-poppinReg">
      <div className="wrapper flex justify-between items-center flex-wrap">
        <small className="font-normal text-[14px] text-[#FAFAFA] xl:ml-[20rem] text-center font-poppins w-full md:w-auto lg:ml-0 px-4">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
          <Link to="#" className="underline mx-2 font-bold">
            Shop Now
          </Link>
        </small>
        <div className="text-[#FAFAFA] flex items-center relative mt-2 md:mt-0">
          <button 
            onClick={toggleDropdown} 
            className="flex items-center space-x-1 focus:outline-none"
          >
            <span className="text-sm md:text-base xl:flex min-[300px]:hidden">English</span>
            <img 
              src="/assets/images/DropDown.png" 
              alt="Dropdown Icon" 
              className="w-4 h-4 md:w-5 md:h-5 xl:flex min-[300px]:hidden" 
            />
          </button>
          {isDropdownOpen && (
            <ul className="absolute top-[30px] right-0 bg-white text-black rounded shadow-md w-[120px] p-[5px]">
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
