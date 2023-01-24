import React from 'react'

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
import LandingPresentation from '../components/LandingPresentation'

const Home = () => {
  return (
    <div className='flex flex-col w-full relative'>
        <Header />
        <Hero />
        <Resume />
        <LandingArticles />
        <LandingApps />
        <LandingPresentation />
        <LandingDesigns />
        <LandingCompanies />
        <Footer />
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