import React from 'react'
import { NavLink } from 'react-router-dom'
import { articles } from '../data/articles'
import { IconArrowRight } from '../icons/icons'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import ImageLoader from './ImageLoader';

const LandingArticles = () => {
  return (
    <div className='h-[calc(100vh-150px)] w-full bg-[#0F80E8] flex flex-col justify-center p-[20px] md:p-[50px] gap-[20px]'>
        <Swiper 
            direction={"vertical"} 
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            pagination={false}
            navigation={false}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            mousewheel={false}
            modules={[Pagination, Navigation, Autoplay]}
            className="h-[80%] w-full"
        >
        {articles?.map(article => (
            <SwiperSlide  className="block md:flex justify-start items-center gap-[30px]" key={article.title}>
                <ImageLoader url={article.thumbnail} alt={article.title} classname="w-[180px] lg:w-[280px] max-h-[150px] object-contain rounded-[20px] hidden md:block" />
                <div className='grow'>
                    <a href={article.link} className='text-white text-[18px] lg:text-[28px] font-[600] hover:underline'>{article.title}</a>
                    <p className='text-white lg:text-[24px] hidden sm:block md:block'>{article.desc}</p>
                    <p>{article.tags?.map(tag => (
                        <i className='text-[#30353E]' key={tag} >#{tag} </i>
                    ))}</p>
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
        <div className="w-full mb-8 flex justify-center items-center font-league">
            <NavLink to={"/articles"} className='shadow-light shadow-down rounded-[50px] px-[30px] py-[10px] text-white flex justify-between items-center'> My Articles <span className='ml-8'></span> <IconArrowRight width='31' color='white' /></NavLink>
        </div>
    </div>
  )
}

export default LandingArticles