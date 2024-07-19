'use client'
import React from 'react'
import { BackgroundGradient } from './ui/BackgroundGradient'

const Newsletter = () => {
  return (
    <div
    className="max-container padding-container py-10 lg:py-20 "
    >
        <BackgroundGradient  className="rounded-[22px] max-w-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
           <div className='w-full bg-black text-white'>
<h1>signup</h1>
           </div>
        </BackgroundGradient>
    </div>
  )
}

export default Newsletter