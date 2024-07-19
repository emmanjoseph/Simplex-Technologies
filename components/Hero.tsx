import React from 'react'

const Hero = () => {
  return (
    <div
    className='w-full max-container padding-container flex items-center justify-between py-20 lg:py-36 mt-10'>
      <div className='w-full md:w-1/2 flex flex-col gap-2'>
      <h1 className='bold-40 md:bold-64'>Comprehensive <br /> IT Solutions </h1>
      <p className='w-full regular-14 md:regular-16 mt-6 text-gray-300 xl:max-w-[600px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error distinctio, sunt iure consequatur necessitatibus perspiciatis nam fugit optio saepe, cupiditate asperiores voluptatem laudantium facilis possimus quo.  </p>

      {/* statistics */}
      <div className='mt-8'>
        <div className='flex gap-6'>
          <div className='flex flex-col gap-2'>
            <h1 className='bold-18 md:bold-20'>Quality Services</h1>
            <p className='regular-14 text-gray-30'>On your projects</p>

          </div>
          <div className='bg-white/20 w-1'/>
          <div className='flex flex-col gap-2'>
            <h1 className='bold-18 md:bold-20'>Affordable Plans</h1>
            <p className='regular-14 text-gray-30'>On our services</p>

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
      <div className='hidden xl:flex'>
     
      </div>

    </div>
  )
}

export default Hero