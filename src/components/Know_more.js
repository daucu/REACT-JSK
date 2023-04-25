import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import { API } from './constant'

//images
import aadhar from "./../assets/aadhar card 1.png"


const Know_more = () => {

    const [data, setData] = React.useState([])
    const [heading, setHeading] = React.useState([])
    const [description, setDescription] = React.useState([])
    //get id from search bar
    const id = window.location.pathname.split("/")[2]
    console.log(id)

    const get_data = () => {
        axios.get(`${API}/service/${id}`)
            .then(res => {
                console.log(res.data.service)
                setData(res.data.service.image)
                setHeading(res.data.service.serv_name)
                setDescription(res.data.service.description)

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

            <section className='mt-[20px]'>
                <div className="container">
                    <div className="bg-white sm:p-[15px]" id="know_more_section">
                     
                                    <div className="">
                                        <div className="font-bold text-[25px] flex justify-center items-centerv" id="heading_data">
                                            {heading}
                                        </div>
                                        <div className="flex justify-center items-center w-[300px] sm:w-[500px] m-auto" >
                                            <img className="" id="image_data" src={data} alt="" />
                                        </div>
                                        <div className="sm:w-[70%] text-center flex justify-center items-center m-auto pt-[40px] text-[18px]" id="description_data">
                                            {description}
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