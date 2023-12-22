import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className=' font-bold '>
          Hello Everyone
        </p>
        <h1 className='text-[#00df9a] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          I'am Vishal Shitole
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 p-3'
            strings={['Web Developer', 'Frontend Developer', 'UI/UX Designer','Graphic Designer']}
            typeSpeed={60}
            backSpeed={60}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'></p>
        <a href="/"><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Hire Me</button></a>
      </div>
    </div>
  );
};

export default Hero;
