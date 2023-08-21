import React, { useState, useEffect } from 'react'

// import components
import Header from '../components/Header'
import Footer from '../components/Footer'
import { PopupWidget } from 'react-calendly'
import { IconHome } from '../icons/icons'
import PresentationGrid from '../components/PresentationGrid'
import AOS from 'aos'

const Presentations = () => {
    const filters = ["All", "Open Source", "Technical Writing", "Web", "Design", "Blockchain"]
    const [filter, setFilter] = useState('All')

    useEffect(() => {
      AOS.init();
    }, [])

  return (
    <div className='flex flex-col w-full relative'>
        <Header />
        <div className='w-full px-[20px] md:px-[50px] py-[25px] mb-[50px] lg:mb-auto'>
            <h1 data-aos="slide-right" className='text-[28px] md:text-[40px] text-[#141a17] font-[400] font-marker flex items-center'> <a href="/"><IconHome width='30' height='50' color='#141a17'/> </a> / My Talks and Presentations</h1>
            <hr className='w-[80%] mx-auto my-[30px] border-top-[1px] border-[#00000033]' />
            <div data-aos="fade-up" className="flex flex-wrap items-center justify-center gap-[22px] md:gap-[45px]">
                {filters.map(item => (
                    <button onClick={() => {filter === item ? setFilter("All") : setFilter(item)}} className='rounded px-[15px] py-[5px] flex items-center justify-center' style={{ background: filter === item? "#141a17" : "transparent", color: filter === item? "#fff" : "#141a17" }}>{item}</button>
                ))}
            </div>
            <PresentationGrid filter={filter} />
        </div>

        <Footer />
        <br /> <br /><br />
        <PopupWidget 
            url="https://calendly.com/wolz-codelife"
            rootElement={document.getElementById("root")}
            text="Hit me up!"
            textColor="#a0b49c"
            color="#141a17"
        />
    </div>
  )
}

export default Presentations