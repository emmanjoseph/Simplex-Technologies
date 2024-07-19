import { Grid } from '@/components/Grid'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Intro/>
      <Grid/>
      <Testimonials/>
      <Newsletter/>
    </div>
  )
}

export default page