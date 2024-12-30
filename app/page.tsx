import React from 'react'
// import Shery from 'sheryjs'
import Loader from './Components/Loader/loader'
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/hero'
import Work from './Components/Work/Work'
import Connect from './Components/Connect/connect'
import Footer from './Components/Footer/footer'

const page = () => {
  // Shery.mouseFollower();
  
  return (
    <>
    <Loader />
    <div className="relative  min-h-screen overflow-y-auto">
      <div className="main"></div>
      <Navbar />
      <Hero />
      <Work />
      <Connect />
      <Footer />
      
    </div>
    </>
  )
}

export default page