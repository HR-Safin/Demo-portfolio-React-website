import React, { useState } from 'react'
import {FaStream, FaTimes, FaTelegramPlane}  from "react-icons/fa"


import { Link} from 'react-scroll'

const NavBar = () => {
    
    
    const [navBar, setNavBar] = useState(false)
    const handleClick = () => {
        setNavBar(!navBar)
    }
  return (
   
      <div className='fixed h-[80px] bg-[#053742] w-full flex justify-between items-center px-2 text-gray-300 drop-shadow-xl '>
        <div>
        <h2 className=' text-3xl text-white pl-5 tracking-widest cursor-pointer ' style={{fontFamily: "Pacifico, cursive"}}>HRS</h2>
        </div>
       
       {/* MENU */}
      
        <ul className=' hidden md:flex text-black tracking-widest px-20 text-sm text-white '>
            <li className='px-4 cursor-pointer'>
                <Link  to="Home"  smooth={true} duration={500} >
         Home
        </Link>
        </li>
            <li className='px-4 cursor-pointer'>    <Link  to="About"  smooth={true}  duration={500} >
         About
        </Link></li>
            <li className='px-4 cursor-pointer'>    <Link  to="Skill"  smooth={true} duration={500} >
         Skill
        </Link></li>
            {/* <li className='px-4'>CONTACT</li> */}
            
            
        </ul>
        
      
       {/* Humburger */}
       <div onClick={handleClick} className='md:hidden z-10 text-white text-xl'>
        {!navBar ? <FaStream /> : <FaTimes />}
       </div>

       {/* Mobile Menu */}
      
        <ul className={!navBar ? "hidden" : "absolute top-0 right-0 h-screen bg-[#053742] w-[70%] flex flex-col justify-center items-center text-white tracking-wider"}>
            <li className='py-6 text-3xl'>HOME</li>
            <li className='py-6 text-3xl'>ABOUT</li>
            <li className='py-6 text-3xl'>SKILL</li>
            <li className='py-6 text-3xl'>CONTACT</li>
        </ul>
       
       {/* Social Icons */}
       <div className='hidden'></div>
      </div>
   
  )
}

export default NavBar
