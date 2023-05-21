import React, { useEffect } from 'react'
import { IconDownload } from '../icons/icons'

import AOS from 'aos'

const Resume = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-aos={ ['fade-left', 'flip-up', 'fade-right', 'slide-right', 'flip-down', 'slide-left', 'zoom-in-left', 'zoom-in-right'][Math.floor(Math.random() * 8)] } className='md:h-[calc(100vh-150px)] w-full flex flex-col justify-center items-center font-marker px-[20px] py-[50px] md:p-[50px]'>
        <p className='font-[400] text-[25px]'>Hi!, I’m <span className='text-[#f4f4f4]'>Joel Adewole</span> 😎</p>
        <h1 className='my-[30px] font-[400] text-[25px] md:text-[36px] text-center'>TECHNICAL CONTENT DEVELOPER <br />&<br/> DEVELOPER ADVOCATE 🥑</h1>

        <div className="flex justify-center items-center font-league">
            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1HjGDJ8MMCZG3PHq7E5otxzMQ2SkH9SDFxbuBDjCt5bs/edit?usp=sharing" className='shadow-top shadow-down rounded-[50px] px-[40px] py-[10px] bg-[#141a17] text-[#a0b49c]'> My Resume</a>
        </div>
    </div>
  )
}

export default Resume
