import React from 'react'
import Safin1 from "./Assests/IMG-20220307-WA0004_2.jpg"

const About = () => {
  return (
    <div name="About" className='w-full h-[750px] bg-[#053742] pt-8'>
        <p className='text-center sm:text-4xl md:text-4xl text-2xl text-white  font-bold tracking-wider underline underline-offset-8 decoration-[#EB1D36]'>About</p>
        <div className='max-w-[1000px] px-8 py-16  grid mx-auto md:grid-cols-2'>
        
        
        <div className=' mr-6'>
            <img className=' w-[320px]  rounded-lg text-center shadow-lg' src={Safin1} alt='Safin' />
        </div>
        <div className='flex flex-col justify-center text-white mt-2 p-4 md:text-xl sm:text-xl text-lg'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio ipsum numquam voluptatem nostrum. Facilis, ipsa veniam, quia temporibus reprehenderit ad quis illum ut recusandae nesciunt maiores soluta distinctio perferendis.</p>
        </div>
        
            
        </div>
      
    </div>
  )
}

export default About
