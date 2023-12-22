import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex sticky left-0 top-0 z-99 bg-black justify-evenly items-center h-16 w-full mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df30]'>VISHAL.JR</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'><a href="/#">Home</a></li>
        <li className='p-4'><a href="#dvd">About</a></li>
        <li className='p-4'><a href="#pro">Projects</a></li>
        <li className='p-4'><a href="/">Links</a></li>
        <li className='p-4'><a href="#Contact">Contact</a></li>
        
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df2d] m-4'>VISHAL.JR</h1>
          <li className='p-4 border-b border-gray-600'><a href="/">Home</a></li>
          <li className='p-4 border-b border-gray-600'><a href="/">About</a></li>
          <li className='p-4 border-b border-gray-600'><a href="/">Projects</a></li>
          <li className='p-4 border-b border-gray-600'><a href="/">Social link</a></li>
          <li className='p-4'><a href="/">Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
