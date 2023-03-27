import React from 'react'

import HTML from "./Assests/Logo/HTML.png"

import CSS from "./Assests/Logo/CSS.png"
import JS from "./Assests/Logo/JS.png"
import TAIlWIND from "./Assests/Logo/TAILWIND.png"
import SASS from "./Assests/Logo/Sass.png"
import REACT1 from "./Assests/Logo/React-logo.png"

const Skills = () => {
  return (
    <div name="Skill" className='bg-[#053742] text-white pb-40'>
      
    <div className='w-full h-full p-4  flex flex-col justify-center mx-auto max-w-[1000px]'>
      <div>
      <p className='text-center sm:text-4xl md:text-4xl text-2xl text-white  font-bold tracking-wider underline underline-offset-8 decoration-[#EB1D36] py-8'>Skills</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3  py-8 text-center gap-4 w-full'>
         <div className='shadow-lg hover:shadow-md hover:shadow-orange-500 shadow-[#040c16] hover:scale-110 duration-500 p-2 cursor-pointer'>
          <img className='mx-auto w-24 py-2' src={HTML} alt="HTML" />
          <p className='text-white mt-3 text-xl'>HTML</p>

         </div>
         <div className='shadow-lg hover:shadow-md hover:shadow-blue-500 shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
          <img className=' mx-auto w-32 ' src={CSS} alt="HTML" />
          <p className='text-white mb-4 text-xl'>CSS</p>

         </div>
         <div className='shadow-lg hover:shadow-md hover:shadow-amber-400  shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
          <img className=' mx-auto w-44 py-4' src={JS} alt="HTML" />
          <p className='text-white mb-5 text-xl'>Javascript</p>

         </div>
         <div className='shadow-lg hover:shadow-md hover:shadow-[#2DCDDF] shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
          <img className=' mx-auto w-28 py-2' src={TAIlWIND} alt="HTML" />
          <p className='text-white mb-4 text-xl '>Tailwind Css</p>

         </div>
         <div className='shadow-lg hover:shadow-md hover:shadow-pink-600 shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
          <img className=' mx-auto w-32' src={SASS} alt="HTML" />
          <p className='text-white mb-4 text-xl'>Sass</p>

         </div>
         <div className='shadow-lg hover:shadow-md hover:shadow-[#2DCDDF] shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
          <img className=' mx-auto w-40 py-2' src={REACT1} alt="HTML" />
          <p className='text-white mb-4 text-xl'>React.Js</p>

         </div>
         
      </div>
    </div>
    </div>
  )
}

export default Skills

