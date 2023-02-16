import React, { useEffect } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import AOS from 'aos'

// import required modules
import { FreeMode, Autoplay, Pagination } from "swiper";
import { IconArrowRight } from '../icons/icons';


const LandingDesigns = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div data-aos="slide-right" className='md:h-[calc(100vh-150px)] flex flex-col justify-center items-center px-[20px] py-[50px] md:p-[50px]'>
      <h1 className='text-[30px] md:text-[40px] text-[#141a17] flex justify-center font-[400] font-marker'>My Designs</h1>
        <Swiper
            slidesPerView={3}
            spaceBetween={0}
            freeMode={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={false}
            loop={true}
            modules={[ FreeMode, Autoplay, Pagination]}
            className="h-[250px] md:h-min md:max-h-[70%] w-full"
        >
            <SwiperSlide className='w-full h-full'>
            <img src="https://i.postimg.cc/nrBJGS3L/design1.png" alt="Design1" className='h-full object-contain' />
            </SwiperSlide>
            <SwiperSlide className='w-full h-full'>
            <img src="https://i.postimg.cc/8csqsZz6/design2.png" alt="Design1" className='h-full object-contain' />
            </SwiperSlide>
            <SwiperSlide className='w-full h-full'>
            <img src="https://i.postimg.cc/nrBJGS3L/design1.png" alt="Design1" className='h-full object-contain' />
            </SwiperSlide>
            <SwiperSlide className='w-full h-full'>
            <img src="https://i.postimg.cc/8csqsZz6/design2.png" alt="Design1" className='h-full object-contain' />
            </SwiperSlide>
        </Swiper>
        <div className="w-full mt-10 flex justify-center items-center font-league">
            <a href='https://www.behance.net/wolz-codelife' target="_blank" rel="noopener noreferrer" className='shadow-top shadow-down rounded-[50px] px-[30px] py-[10px] text-[#141a17] flex justify-between items-center'> My Designs <span className='ml-8'></span> <IconArrowRight width='31' height='' color='#141a17' /></a>
        </div>
    </div>
  )
}

export default LandingDesigns
