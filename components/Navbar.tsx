'use client'
import { NAV_LINKS } from '@/app/Constants';
import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { IoMdMenu } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className='flexBetween max-container padding-container relative py-5'>
      <div className='flexCenter gap-20'>
        <h1 className='bold-20'>Simplex</h1>
        <ul className='hidden md:flex gap-7'>
          {NAV_LINKS.map((link) => (
            <li key={link.key} className='regular-14'>
              <a href='' className='text-gray-300 hover:text-white transition-all duration-200'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <button className='hidden md:flexCenter gap-1 bg-white px-6 py-2 text-black rounded-full'>
        <AiOutlineUser />
        <span className='regular-14'>login</span>
      </button>
      <div className='md:hidden' onClick={handleClick}>
        <IoMdMenu className='text-2xl text-white cursor-pointer' />
      </div>

      {/* mobile menu */}
      <motion.div
        initial={{ x: '200%' }}
        animate={{ x: openMenu ? '0%' : '100%' }}
        transition={{ duration: 0.5 }}
        className={`absolute top-0 left-0 w-full h-screen bg-black/90 z-10 px-3 py-6 md:hidden`}
      >
        <div className='w-full h-full flex flex-col gap-10'>
          <div className='flexBetween'>
            <h1 className='bold-18'>Simplex</h1>
            <AiOutlineClose size={25} onClick={handleClick} className='cursor-pointer' />
          </div>
          <ul className='flex flex-col gap-7'>
            {NAV_LINKS.map((link) => (
              <li key={link.key} className='regular-16'>
                <a href='' className='hover:text-white transition-all duration-200'>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button className='flexCenter gap-1 bg-white px-6 py-3 text-black rounded-full'>
            <AiOutlineUser />
            <span className='regular-14'>login</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
