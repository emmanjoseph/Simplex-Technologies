import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/app/Constants'

const Testimonials = () => {
  return (
    <div
    className='max-container padding-container py-10 lg:py-24 my-0 md:my-5 flex flex-col gap-2 items-center overflow-hidden'
    >
        <h1 className='bold-20 md:bold-32 '>Testimonials</h1>
        <p className="regular-14 md:regular-16 text-gray-300 text-center py-2">Discover heartfelt accounts of joy and fulfillment from our esteemed clients</p>
      
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
   
    </div>
  )
}

export default Testimonials


  