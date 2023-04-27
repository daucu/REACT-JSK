import React from 'react'
import footer from "./../assets/footer.jpg"
import logo from "./../assets/neeraj_logo.png"
import { Link } from 'react-router-dom'

//images
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai"


const Footer = () => {
    return (
        <div className='mt-[20px]'>
            <div className='bg-[#1d4695] text-[#bcc8e0] '>
                <div className='py-[70px] w-full'>
                    <div className='max-w-[1102px] flex flex-wrap justify-center sm:justify-around m-auto '>
                        <div className='w-[250px] sm:pr-[60px] mt-[10px]'>
                            <div className='w-[100px] h-[60px]'><img src={logo} alt="logo" /></div>
                            <div className='h-[10px]'></div>
                            <p>D-117,sangam vihar, ratiya marg new delhi</p>
                            <div className='h-[10px]'></div>
                            <div className='flex'>
                                <div>
                                    <Link to="https://www.facebook.com/">
                                        <AiFillFacebook size={25} />
                                    </Link>
                                </div>

                                <div>
                                <Link to="https://twitter.com/">
                                    <AiFillTwitterSquare size={25} />
                                </Link>
                                    </div>
                                <div>
                                <Link to="https://www.instagram.com/">
                                    <AiFillInstagram size={25} />
                                    </Link>
                                    </div>
                            </div>
                        </div>
                        <div className='w-[250px] mt-[10px]'>
                            <div className='text-[20px] font-semibold'>Quick Links</div>
                            <Link to="/"><div className='hover:text-black'>Home</div></Link>

                            <Link to="/services"><div className='hover:text-black'>Services</div></Link>

                            <Link to="/contact"><div className='hover:text-black'>Contact</div></Link>
                        </div>
                        <div className='w-[250px] mt-[10px]'>
                            <div className='text-[20px] font-semibold'>Our Services</div>
                            <div>Aadhar update</div>
                            <div>Pan card</div>
                            <div>Driving Licence</div>
                            <div>Flight Ticket</div>
                            <div>Train Ticket</div>


                        </div>
                        <div className='w-[250px] mt-[10px]'>
                            <div className='text-[20px] font-semibold'>Contact us</div>
                            <div>+919745547455</div>
                            <div>support@gmail.com</div>
                            <div></div>

                        </div>
                    </div>
                </div>
                <div className='border p-[10px]'>
                    <div className='flex justify-center'>Copyright@2023 All rights reserved</div>
                </div>

            </div>
        </div>
    )
}

export default Footer