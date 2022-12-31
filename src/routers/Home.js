import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, HashNavigation, Mousewheel } from "swiper";

// import components
import Header from '../components/Header'
import Hero from '../components/Hero'
import Resume from '../components/Resume'
import LandingApps from '../components/LandingApps'
import LandingArticles from '../components/LandingArticles'
import LandingDesigns from '../components/LandingDesigns'
import LandingCompanies from '../components/LandingCompanies'
import Footer from '../components/Footer'
import { PopupWidget } from 'react-calendly'

const Home = () => {
  return (
    <div className='flex flex-col w-full relative'>
        <Header />
        <div className="relative h-[calc(100vh-150px)]">
            <div className="w-full h-6 absolute top-[-1px] z-20 bg-fadeup"></div>
            <Swiper direction={"vertical"} 
            pagination={{
                clickable: true,
            }}
            hashNavigation={{
              watchState: true,
            }}
            navigation={false}
            mousewheel={{
              sensitivity: 1
            }}
            modules={[Pagination, Navigation, HashNavigation, Mousewheel]}
            className="h-full w-full"
            >
                <SwiperSlide data-hash="hero"><Hero /></SwiperSlide>
                <SwiperSlide data-hash="resume"><Resume /></SwiperSlide>
                <SwiperSlide data-hash="apps"><LandingApps /></SwiperSlide>
                <SwiperSlide data-hash="articles"><LandingArticles /></SwiperSlide>
                <SwiperSlide data-hash="designs"><LandingDesigns /></SwiperSlide>
                <SwiperSlide data-hash="companies"><LandingCompanies /></SwiperSlide>
                <SwiperSlide data-hash="links"><Footer /></SwiperSlide>
            </Swiper>
            <div className="w-full h-6 absolute bottom-[-1px] z-20 bg-fadebottom"></div>
        </div>
        <PopupWidget 
            url="https://calendly.com/wolz-codelife"
            rootElement={document.getElementById("root")}
            text="Schedule a meeting!"
            textColor="#ffffff"
            color="#00a2ff"
        />
    </div>
  )
}

export default Home