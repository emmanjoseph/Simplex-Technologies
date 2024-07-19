'use client'
import React from 'react'
import {motion} from 'framer-motion'

const Intro = () => {
  return (
    <section
    className='max-container padding-container py-10 lg:py-20 '
    >
        <div className='flex flex-col md:flex-row justify-center '>
        <div className='w-full lg:w-1/2 flex items-center'>
            <h1 className='bold-32 md:bold-64'>Get<br />The Best<br /> From Us </h1>
            </div> 

            <div className='w-full lg:w-1/2 flex flex-col gap-3'>
            <div className='w-full flexEnd'>
            <motion.div
                initial={{opacity:0,x:50}}
                whileInView={{opacity:1,x:0}}
                transition={{delay:0.2,duration:0.6}}
                className='w-3 bg-slate-300 h-[50px] lg:h-[100px]'/>
            </div>
               
                <p className='text-justify md:text-left regular-14 md:regular-16 xl:max-w-[650px] my-3 text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sapiente culpa error, tempore beatae quo doloremque alias consequatur ipsum? Doloribus dignissimos magnam tempore, libero illo nobis animi explicabo minima architecto?</p>
                <motion.div
                initial={{opacity:0,x:-50}}
                whileInView={{opacity:1,x:0}}
                transition={{delay:0.2,duration:0.6}}
                className='w-3 bg-slate-300 h-[50px] lg:h-[100px]'/>

            </div>
        </div>
      
    </section>
  )
}

export default Intro