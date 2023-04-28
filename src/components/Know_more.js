import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import { API } from './constant'

//images
import aadhar from "./../assets/aadhar card 1.png"
import loading_img from "./../assets/loading.gif"

//icons
import { BsWhatsapp } from "react-icons/bs"



const Know_more = () => {

    const [data, setData] = React.useState([])
    const [heading, setHeading] = React.useState([])
    const [description, setDescription] = React.useState([])
    const [phone, setPhone] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    //get id from search bar
    const id = window.location.pathname.split("/")[2]
    console.log(id)

    //scroll to top
    useEffect(() => {
        window.scrollTo(
            {
                top: 0,
                behavior: "smooth"
            })
    }, [])

    const get_data = () => {
        setLoading(true)

        axios.get(`${API}/service/${id}`)
            .then(res => {
                console.log(res.data.service)
                setData(res.data.service.image)
                setHeading(res.data.service.serv_name)
                setDescription(res.data.service.description)
                setPhone(res.data.service.serv_number)
                setLoading(false)

            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        get_data()
    }, [])

    return (
        <div>
            <Navbar />

            <section className='mt-[80px]'>

                <div className="container">
                    <div className="bg-white sm:p-[15px] " id="know_more_section">
                    
                        <div className="">
                        {loading ? <><div className='flex justify-center  w-full h-screen '>
                            <img className='w-[100px] h-[100px] mix-blend-color-lighten' src={loading_img} alt="loading" />
                        </div>
                        </> : null}
                            <div className="font-bold text-[25px] flex justify-center items-centerv" id="heading_data">
                                {heading}
                            </div>
                            <div className="flex justify-center items-center w-[300px] sm:w-[500px] m-auto" >
                                <img className="" id="image_data" src={data} alt="" />
                            </div>
                            <div className="sm:w-[70%] text-center flex justify-center items-center m-auto pt-[40px] text-[18px]" id="description_data">
                                {description}
                            </div>
                            <div>
                                <div className="flex justify-center items-center pt-[40px]">
                                    
                                    <a href={`https://wa.me/+91${phone}/?text=`} className='text-[#29A71A] flex items-center'><BsWhatsapp className='mr-[5px]'/>Contact us on whatsapp</a>
                                    </div>
                            </div>
                        </div>

                    </div>

                </div>


            </section>
            <Footer />
        </div>
    )
}

export default Know_more