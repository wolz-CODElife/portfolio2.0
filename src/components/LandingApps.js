import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { NavLink } from 'react-router-dom';
import { IconArrowRight } from '../icons/icons';
import { works } from '../data/works';


const LandingApps = () => {
  return (
    <div className='h-[calc(100vh-150px)] flex flex-col justify-center items-center'>
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
            className="h-min max-h-[70%] w-full"
        >
          {works.map(work => (
            <SwiperSlide className='w-full h-full' key={work.title}>
              <img src={work.thumbnail} alt={work.title} className='h-full max-h-[40vh] object-contain' />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full mt-10 flex justify-center items-center font-league">
            <NavLink to={"/apps"} className='shadow-top shadow-down rounded-[50px] px-[30px] py-[10px] text-[#4B4A4E] flex justify-between items-center'> My Apps <span className='ml-8'></span> <IconArrowRight width='31' height='' /></NavLink>
        </div>
    </div>
  )
}

export default LandingApps
