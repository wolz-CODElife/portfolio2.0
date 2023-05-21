import React, { useEffect } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Tilt from 'react-parallax-tilt';
import AOS from 'aos'

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { NavLink } from 'react-router-dom';
import { IconArrowRight } from '../icons/icons';
import { works } from '../data/works';


const LandingApps = () => {


  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div data-aos={ ['fade-left', 'flip-up', 'fade-right', 'slide-right', 'flip-down', 'slide-left', 'zoom-in-left', 'zoom-in-right'][Math.floor(Math.random() * 8)] } className='md:h-[calc(100vh-150px)] flex flex-col justify-center items-center px-[20px] py-[50px] md:p-[50px]'>
      <h1 className='text-[30px] md:text-[40px] text-[#141a17] flex justify-center font-[400] font-marker'>My Apps</h1>
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"2"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="h-[250px] md:h-min md:max-h-[70%] w-full"
        >
          {works.map(work => (
            <SwiperSlide className='w-full h-full flex justify-center items-center' key={work.title}>
              <Tilt scale={0.7} className="h-full w-full">
                <img src={work.thumbnail} alt={work.title} className='h-full max-h-[40vh] object-contain rounded-[20px]' />
              </Tilt>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full mt-10 flex justify-center items-center font-league">
            <NavLink to={"/apps"} className='shadow-top shadow-down rounded-[50px] px-[30px] py-[10px] text-[#141a17] flex justify-between items-center'> My Apps <span className='ml-8'></span> <IconArrowRight width='31' height='' color='#141a17' /></NavLink>
        </div>
    </div>
  )
}

export default LandingApps
