import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./../assets/neeraj_logo.png"
import { CiMenuBurger } from "react-icons/ci"
import { RxCross1 } from "react-icons/rx"

//icons
import {AiOutlineHome} from "react-icons/ai"
import {MdOutlineMiscellaneousServices} from "react-icons/md"
import {IoIosContact} from "react-icons/io"

const Navbar = () => {
    const [sidebar, setSidebar] = React.useState(false)

    return (
        <div  className='fixed w-full top-0 bg-white z-[20] border border-solid border-spacing-1'>
            <section>
                <div className='py-[15px] '>
                    <div className='max-w-[1102px] md:m-auto flex md:justify-around justify-between  items-center'>
                        <div className='mx-[30px] w-[70px] h-[50px] p-[5px] rounded-md bg-black'>
                            <img src={logo} alt="brand logo" />
                        </div>
                        <div className='hidden md:flex justify-around w-[500px] text-[18px] font-semibold text-[#0b213d'>
                            <Link to="/"><div>Home</div></Link>

                            <Link to="/services"><div>Services</div></Link>

                            <Link to="/contact"><div>Contact</div></Link>
                        </div>
                        <div className='md:hidden w-[70px] text-center' onClick={() => setSidebar(!sidebar)}>
                            <CiMenuBurger size={30} />
                        </div>
                    </div>
                </div>

                {/* // This is the sidebar   */}
                {sidebar ? (
                    <div className='z-20 w-full '>
                        <div className='bg-black opacity-[0.5] absolute top-0 left-[100%] w-full h-screen animate-slide_in ' onClick={() => setSidebar(false)}></div>
                        <div className=' w-[60%] sm:w-[50%] bg-black h-screen absolute top-0 right-0 text-white animate-menu_slide'>
                            <div className='' >
                                <div className='m-[10px]'>
                                    <div className='flex justify-end' onClick={() => setSidebar(false)}><RxCross1 /></div>
                                </div>
                                <div className='w-[100px] h-[50px] m-auto'>
                                    <img src={logo} alt="" />
                                </div>
                                <div className=' text-[16px] font-semibold p-[10px] ml-[5px] mt-[20px]'>
                                    <Link to="/"><div className='py-[5px] flex  items-center'> <div className='mr-[15px]'><AiOutlineHome size={18}/></div><div>Home</div> </div></Link>

                                    <Link to="/services"><div className='py-[5px] flex  items-center'> <div className='mr-[15px]'><MdOutlineMiscellaneousServices size={20}/></div><div>Services</div> </div></Link>

                                    <Link to="/contact"><div className='py-[5px] flex  items-center'> <div className='mr-[15px]'><IoIosContact size={20} /></div><div>Contact</div> </div></Link>
                                </div>
                            </div>
                        </div>
                    </div>


                ) : null}

            </section>
        </div>
    )
}

export default Navbar