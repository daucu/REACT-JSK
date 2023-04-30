import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import { API } from './constant'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const send_message = () => {
    const data = {
      name: name,
      email: email,
      message: message
    }
    // console.log(data)
    axios.post(`${API}/contact`, data,{
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log(res)
        alert(res.data.message)
        window.location.reload()
      })
      .catch((err) => {
        console.log(err.response.data.message)
        alert(err.response.data.message)
      })
  }


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
      <Navbar/>
      <div> <div className="flex justify-center items-center mt-[100px]">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              maxLength={150}
              placeholder="Your message"
              onChange={(e)=>setMessage(e.target.value)}
            ></textarea>
            <p className='text-[12px] text-red-500'>maximum 150 characters are allowed</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={send_message}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact