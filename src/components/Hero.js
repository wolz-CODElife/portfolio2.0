import React from 'react'
import './styles/Hero.css'

const icons = [
    {
        name: 'bootstrap',
        img: 'https://i.postimg.cc/GtzTB1jS/bootstrap.png',
    },
    {
        name: 'react',
        img: 'https://i.postimg.cc/tCCVKYq0/react.png',
    },
    {
        name: 'firebase',
        img: 'https://i.postimg.cc/15CNssX8/firebase.png',
    },
    {
        name: 'git',
        img: 'https://i.postimg.cc/52XQtTQn/git.png',
    },
    {
        name: 'python',
        img: 'https://i.postimg.cc/BvD8TFgF/python.png',
    },
    {
        name: 'css',
        img: 'https://i.postimg.cc/kGjDJvn0/CSS.png',
    },
    {
        name: 'html',
        img: 'https://i.postimg.cc/2546bDkF/HTML.png',
    },
    {
        name: 'js',
        img: 'https://i.postimg.cc/ydj8jySD/JS.png',
    }
]

const Hero = () => {
  return (
    <div className='w-full h-[calc(100vh-150px)] m-auto grid place-items-center relative'>
        <img src="https://i.postimg.cc/yWqdSKFj/hero.png" alt="HeroImage" className='h-[calc(100vh-150px)] max-w-[90%] object-contain z-10' />

        {/* Icons particle */}
        {icons.map(icon => (
            <div className='animate-pulse'>
                <img src={icon.img} key={icon.name} alt={icon.name} className={`absolute w-[40px] lg:w-[70px] h-[40px] lg:h-[70px] ${icon.name + '-icon'} skill-icons`} />
            </div>
        ))}
    </div>
  )
}

export default Hero