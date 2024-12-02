import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="pt-[50px] pb-[10px] border-b-2 font-poppinReg">
      <div className="wrapper flex justify-between items-center">
        <div>
          <h1>
            <img
              src="/assets/images/exclusivelogo.png"
              alt="Exclusive Logo"
              className="w-[150px]"
            />
          </h1>
        </div>
        <div className="hidden lg:flex mr-[18rem]">
          <ul className="flex gap-[40px] text-[16px] font-normal items-center">
            <li className="mb-[5px] border-b border-black">Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
        </div>
        <div className="flex gap-[10px] items-center pb-[10px]">
          <span className="bg-[#F5F5F5] hidden lg:flex py-[8px] px-[10px] rounded items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-[#F5F5F5] px-[10px] text-[12px] mr-[10px]"
            />
            <IoSearchOutline size={20} />
          </span>
          <span className="flex items-center gap-[15px]">
            <IoSearchOutline size={25} className="lg:hidden" />
            <GoHeart size={25} />
            <IoCartOutline size={25} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

