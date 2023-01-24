import React from 'react'
import { IconDownload } from '../icons/icons'
import resumeURl from "../data/Joel_Adewole_CV.pdf"

const Resume = () => {
  return (
    <div className='md:h-[calc(100vh-150px)] w-full flex flex-col justify-center items-center font-marker px-[20px] py-[50px] md:p-[50px]'>
        <p className='font-[400] text-[25px]'>Hi!, I’m <span className='text-[#0F80E8]'>Joel Adewole</span> 😎</p>
        <h1 className='my-[30px] font-[400] text-[25px] md:text-[36px] text-center'>TECHNICAL CONTENT DEVELOPER <br />&<br/> DEVELOPER ADVOCATE 🥑</h1>

        <div className="flex justify-center items-end font-league">
            <IconDownload width='100' height='60' />
            <a download href={resumeURl} className='shadow-top shadow-down rounded-[50px] ml-[-30px] px-[40px] py-[10px] text-[#4B4A4E]'> Download my Resume</a>
        </div>
    </div>
  )
}

export default Resume
