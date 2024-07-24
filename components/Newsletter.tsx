'use client'
import React from 'react'
import { BackgroundGradient } from './ui/BackgroundGradient'
import Button from './ui/Button'
import SignUpImg from '@/public/signUp.jpg'
import Image from 'next/image'

const Newsletter = () => {
  return (
    <div className="max-container padding-container py-10 lg:py-24">
      <BackgroundGradient className="rounded-[22px] max-w-full p-4 sm:p-10 bg-white dark:bg-zinc-900 py-11">
        <div className='flexCenter flex-col gap-2'>
          <Image 
            src={SignUpImg} 
            alt='Person signing up' 
            className='w-[200px] h-[200px] object-cover rounded-full'
          />
          <h1 className='bold-20 md:bold-32 py-2'>Sign Up with Us</h1>
          <p className='w-full md:w-3/4 mt-2 text-left md:text-center regular-14 md:regular-16'>
            Join our newsletter to stay updated with the latest news and special sales. Let’s your email address here!
          </p>          
          <Button
            text='Sign Up'
            className='rounded-full my-3'
          />
        </div>
      </BackgroundGradient>
    </div>
  )
}

export default Newsletter
