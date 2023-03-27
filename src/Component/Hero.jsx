import React from 'react'
import {FaArrowDown} from "react-icons/fa"

import UseDarkMode from './UseDarkMode'
import React1 from "./Assests/Logo/React-logo.png"

const Hero = () => {
    const [colorTheme, setTheme] =UseDarkMode()
  return (
    <div name="Home" className='w-full bg-[#053742] h-screen'>
        <div className='max-w-[800px] px-8 flex flex-col justify-center  mx-auto h-full dark:text-white '>
            <h1 className='text-[#EB1D36] font-semibold  text-xl'>Hi, my name is</h1>
            <h1 className='sm:text-5xl md:text-5xl text-3xl font-medium text-white'>Hasibur Rahman Safin</h1>
            <p className='sm:text-5xl md:text-5xl  text-3xl font-medium  mb-3 text-gray-600'>I'm a Web Developer</p>
            <p className=' max-w-[600px] text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At voluptatum esse sint, doloribus doloremque eveniet magnam id laborum porro, voluptate quos</p>
            <div>
                
            <button className=' text-white  border-2  py-2 px-4 my-5 cursor-pointer hover:text-white border-[#EB1D36]  hover:bg-[#EB1D36] hover:border-[#EB1D36] rounded-md shadow-lg text-lg font-medium tracking-widest pr-6'>Contact Me </button>
            </div>
            
           
        </div>
      
    </div>
  )
}

export default Hero;
