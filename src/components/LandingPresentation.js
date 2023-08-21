import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { presentations } from '../data/presentations'
import { IconArrowRight } from '../icons/icons'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Tilt from 'react-parallax-tilt';
import AOS from 'aos'

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import ImageLoader from './ImageLoader';

const LandingPresentation = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div data-aos={ ['fade-left', 'flip-up', 'fade-right', 'slide-right', 'flip-down', 'slide-left', 'zoom-in-left', 'zoom-in-right'][Math.floor(Math.random() * 8)] } className='md:h-[calc(100vh-150px)] relative w-full bg-[#141a17] flex flex-col justify-center px-[20px] py-[60px] md:p-[50px] gap-[20px]'>
    <div className="w-full h-6 absolute top-[-1px] left-0 z-20 bg-fadeup"></div>
        <h1 className='text-[30px] md:text-[40px] flex justify-center font-[400] font-marker text-[#a0b49c]'>My Talks and Presentations</h1>
        <Swiper 
            direction={"vertical"} 
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            pagination={false}
            navigation={false}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            mousewheel={false}
            modules={[Pagination, Navigation, Autoplay]}
            className="h-[250px] md:h-[80%] w-full"
        >
        {presentations?.map(presentation => (
            <SwiperSlide key={presentation.title} className="my-4">
                <Tilt scale={0.7} className="bg-[#a0b49c] rounded-[15px] md:rounded-[20px] overflow-hidden block md:flex justify-start items-center  py-[18px] px-[20px] gap-[20px] md:gap-[30px]">
                    <ImageLoader url={presentation.thumbnail} alt={presentation.title} classname="w-[180px] lg:w-[280px] max-h-[150px] object-cover rounded-[20px] hidden md:block" />
                    <div className='grow'>
                        <a href={presentation.link} target="_blank" rel="noopener noreferrer" className='text-[18px] lg:text-[28px] font-[600] hover:underline'>{presentation.title}</a>
                        <p className='lg:text-[18px] hidden sm:block md:block'>{presentation.desc}</p>
                        <p>{presentation.tags?.map(tag => (
                            <i className='text-[#30353E] text-[15px]' key={tag} >#{tag} </i>
                        ))}</p>
                    </div>
                </Tilt>
            </SwiperSlide>
        ))}
        </Swiper>
        <div data-aos="slide-right" className="w-full flex justify-center items-center font-league">
            <NavLink to={"/presentations"} className='shadow-light shadow-down rounded-[50px] px-[30px] py-[10px] text-[#a0b49c] flex justify-between items-center'> My Presentations <span className='ml-8'></span> <IconArrowRight width='31' color='#a0b49c' /></NavLink>
        </div>
        <div className="w-full h-6 absolute bottom-[-1px] left-0 z-20 bg-fadebottom"></div>
    </div>
  )
}

export default LandingPresentation