import React from 'react'
import Loader from './Components/Loader/loader'
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/hero'
import Work from './Components/Work/Work'

const page = () => {
  return (
    <>
    <Loader />
    <div className="relative min-h-screen overflow-y-auto">
      <div className="main"></div>
      <Navbar />
      <Hero />
      <Work />
      
    </div>
    </>
  )
}

export default page