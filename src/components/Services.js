import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import { Navigator } from 'react-router-dom'
import { API } from './constant'

//images
import Pan_Card_Image from "./../assets/Pan_Card_Image.jpg"
import aadhar from "./../assets/aadhar card 1.png"
import driving from "./../assets/driving-licence.jpg"


//icons
import { BsWhatsapp } from "react-icons/bs"
import { Link } from 'react-router-dom'

const Services = () => {
  const [user, setUser] = useState("")

  const get_data = () => {
    axios.get(`${API}/service`)
      .then(res => {
        console.log(res.data.services)
        setUser(res.data.services)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    get_data()
  }, [])

  //scroll to top on page change 
  useEffect(res=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'

    })
  },[])


  return (
    <>
      <Navbar />
      <div>
        <div className=' bg-[#F5F7F9] p-[15px] mt-[80px]'>
          <div className=" text-center text-[35px] font-bold py-[40px] ">
            <h2>Services</h2>
          </div>

          <div className='p-[20px] '>
          <div className="grid grid-cols-1 gap-6 mb-6  sm:grid-cols-2 lg:grid-cols-3">
            {
              user && user.map((item) => {
                return (
                  
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                      <img className="w-full h-[200px]" src={item.image} alt="Random image" />
                      <div className="px-6 pt-2">
                        <div className="font-bold text-xl mb-2 text-center">{item.serv_name}</div>
                      </div>
                      <div className="px-6 pt-2 pb-2">
                        <div class="flex flex-wrap justify-between  items-stretch">
                          <div class="bg-[#09B0C2] text-white mt-[10px] h-[36px] flex justify-center  p-[5px] w-full sm:w-[45%]">
                            <Link to={`/know-more/${item._id}`}>
                              <h3 class="cursor-pointer text-white p-0">Know more</h3>
                            </Link>
                          </div>
                          <div class="w-full sm:w-[45%] mt-[10px] h-[36px]   bg-[#29A71A]">
                            <a href="https://wa.me/+914574454755/?text=" className='w-full h-[36px] flex justify-center items-center'>
                              <div><BsWhatsapp className='text-white' /></div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

               
                  
                );
              })
            }
            </div>


          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Services