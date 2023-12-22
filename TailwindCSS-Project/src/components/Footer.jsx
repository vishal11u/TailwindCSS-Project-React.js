import React from 'react';
// import {Brouserouter as Router,Routes,Route}
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div id='Contact' className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <a href='/'><FaFacebookSquare size={30} /></a>
          <a href='/'><FaInstagram size={30} /></a>
          <a href='/'><FaTwitterSquare size={30} /></a>
          <a href='/'><FaGithubSquare size={30} /></a>
          <a href='/'><FaDribbbleSquare size={30} /></a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-[#00df9a]'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'><a href="/">Analytics</a></li>
            <li className='py-2 text-sm'><a href="/">Marketing</a></li>
            <li className='py-2 text-sm'><a href="/">Commerce</a></li>
            <li className='py-2 text-sm'><a href="/">Insights</a></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-[#00df9a]'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-[#00df9a]'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-[#00df9a]'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
