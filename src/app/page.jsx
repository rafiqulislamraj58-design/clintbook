import FeaturedBooks from '@/components/home/FeaturedBooks'
import Hero from '@/components/home/Hero'
import PopularCategories from '@/components/home/PopularCategories'
import TopLibrarians from '@/components/home/TopLibrarians'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <FeaturedBooks/>
      <PopularCategories/>
      <TopLibrarians/>
    </div>
  )
}

export default page