import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Carousel from 'react-bootstrap/Carousel';

import agriculture1 from "./../assets/slider/agriculture csc 1.jpg"
import agriculture from "./../assets/slider/agriculture csc.png"
import csc from "./../assets/slider/csc 1.jpg"
import health from "./../assets/slider/health csc.jpeg"
import UncontrolledExample from './UncontrolledExample';
import About from './About';
import Footer from './Footer';


const Home = () => {
  //scroll to top on page change
  useEffect(res=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'

    })
  },[])
  return (
    <div>
      <Navbar />
     
      <div className='w-full h-[800px] mt-[80px]'>
        <UncontrolledExample />
        {/* <About/> */}
        <Footer/>
      </div>
    </div>
  )
}

export default Home