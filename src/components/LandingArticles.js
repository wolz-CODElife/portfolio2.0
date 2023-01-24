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
    <div className='md:h-[calc(100vh-150px)] relative w-full bg-[#0F80E8] flex flex-col justify-center px-[20px] py-[60px] md:p-[50px] gap-[20px]'>
    <div className="w-full h-6 absolute top-[-1px] left-0 z-20 bg-fadeup"></div>
        <h1 className='text-[30px] md:text-[40px] flex justify-center font-[400] font-marker text-white'>My Articles</h1>
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
        {articles?.map(article => (
            <SwiperSlide className="bg-white rounded-[15px] md:rounded-[20px] overflow-hidden block md:flex justify-start items-center p-[20px] gap-[20px] md:gap-[30px]" key={article.title}>
                <ImageLoader url={article.thumbnail} alt={article.title} classname="w-[180px] lg:w-[280px] max-h-[150px] object-contain rounded-[20px] hidden md:block" />
                <div className='grow'>
                    <a href={article.link} target="_blank" rel="noopener noreferrer" className='text-[18px] lg:text-[28px] font-[600] hover:underline'>{article.title}</a>
                    <p className='lg:text-[24px] hidden sm:block md:block'>{article.desc}</p>
                    <p>{article.tags?.map(tag => (
                        <i className='text-[#30353E]' key={tag} >#{tag} </i>
                    ))}</p>
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
        <div className="w-full flex justify-center items-center font-league">
            <NavLink to={"/articles"} className='shadow-light shadow-down rounded-[50px] px-[30px] py-[10px] text-white flex justify-between items-center'> My Articles <span className='ml-8'></span> <IconArrowRight width='31' color='white' /></NavLink>
        </div>
        <div className="w-full h-6 absolute bottom-[-1px] left-0 z-20 bg-fadebottom"></div>
    </div>
  )
}

export default LandingArticles