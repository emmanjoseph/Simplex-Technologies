'use client'
import React from 'react';
import Image from 'next/image';
import Img1 from '@/public/cctv.jpg';
import Img2 from '@/public/internet.jpg';
import Img3 from '@/public/electrical.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='w-full max-container padding-container flex items-center justify-between py-20 lg:py-36 mt-5 gap-4'>
      <div className='w-full md:w-1/2 flex flex-col gap-2'>
        <h1 className='bold-40 md:bold-64'>Comprehensive <br /> IT Solutions </h1>
        <p className='w-full regular-14 md:regular-16 mt-6 text-gray-300 xl:max-w-[600px]'>
          We provide top-notch IT solutions tailored to meet your business needs. 
          From infrastructure management to your security, our expert team ensures 
          your technology operates at its best, driving your success forward.
        </p>

        {/* statistics */}
        <div className='mt-8'>
          <div className='flex gap-6'>
            <div className='flex flex-col gap-2'>
              <h1 className='bold-18 md:bold-20'>Quality Services</h1>
              <p className='regular-14 text-gray-30'>Excellence in every project</p>
            </div>
            <div className='bg-white/20 w-1'/>
            <div className='flex flex-col gap-2'>
              <h1 className='bold-18 md:bold-20'>Affordable Plans</h1>
              <p className='regular-14 text-gray-30'>Cost-effective solutions</p>
            </div>
          </div>
        </div>
        <button className="w-full md:w-1/2 relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-9">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Explore More
          </span>
        </button>
      </div>
      <div className='w-1/2 hidden md:grid grid-cols-1 gap-6'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image src={Img1} alt='IT Solutions' className='rounded-lg h-[300px] object-cover'/>
        </motion.div>
        <div className='grid grid-cols-2 gap-6'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image src={Img2} alt='IT Solutions' className='rounded-lg'/>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Image src={Img3} alt='IT Solutions' className='rounded-lg'/>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
