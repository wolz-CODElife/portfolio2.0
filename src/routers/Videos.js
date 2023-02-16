import React, { useState } from 'react'

// import components
import Header from '../components/Header'
import Footer from '../components/Footer'
import { PopupWidget } from 'react-calendly'
import { IconHome } from '../icons/icons'
import ArticlesGrid from '../components/ArticlesGrid'

const Videos = () => {
    const filters = ["All", "Open Source", "Contract", "Web", "Design", "Blockchain"]
    const [filter, setFilter] = useState('All')
  return (
    <div className='flex flex-col w-full relative'>
        <Header />
        <div className='w-full px-[50px] py-[25px] mb-[50px] lg:mb-[0px]'>
            <h1 className='text-[40px] font-[400] font-marker flex items-center'> <a href="/"><IconHome width='30' height='50' color='#0F80E8'/> </a> / My ARTICLES</h1>
            <hr className='w-[80%] mx-auto my-[30px] border-top-[1px] border-[#00000033]' />
            <div className="flex items-center justify-center gap-[45px]">
                {filters.map(item => (
                    <button onClick={() => {filter === item ? setFilter("All") : setFilter(item)}} className='rounded px-[15px] py-[5px] flex items-center justify-center' style={{ background: filter === item? "#0F80E8" : "transparent", color: filter === item? "#fff" : "#0F80E8" }}>{item}</button>
                ))}
            </div>
            <ArticlesGrid filter={filter} />
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

export default Videos