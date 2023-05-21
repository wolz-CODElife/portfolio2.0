import React, { useState, useEffect } from 'react'
import GithubCorner from 'react-github-corner'
import { IconGithub, IconGmail, IconLinkedin, IconSocial, IconSocialOff, IconTwitch, IconTwitter, IconYoutube } from '../icons/icons'


import Tilt from 'react-parallax-tilt';
import AOS from 'aos'

const socials = [
    {
        img: <IconTwitch  color="#a0b49c"/>,
        link: "https://www.twitch.tv/wolz_codelife",
        title: "Twitch"
    },
    {
        img: <IconLinkedin color="#a0b49c" />,
        link: "https://linkedin.com/in/wolz-codelife",
        title: "LinkedIn"
    },
    {
        img: <IconTwitter color="#a0b49c" />,
        link: "https://twitter.com/wolz_codelife",
        title: "Twitter"
    },
    {
        img: <IconGithub color="#a0b49c" />,
        link: "https://github.com/wolz-codelife",
        title: "GitHub"
    },
    {
        img: <IconYoutube color="#a0b49c" />,
        link: "https://www.youtube.com/channel/UCYlGaNYqqmdnr2O5CctmTcw",
        title: "Youtube"
    },
    {
        img: <IconGmail color="#a0b49c" />,
        link: "mailto://joeladewole3@gmail.com",
        title: "Email"
    },
]
const Header = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        AOS.init();
    }, [])

  return (
    <>
        <GithubCorner
            href="https://github.com/wolz-CODElife/portfolio2.0.git"
            target="_blank"
            rel="noopener noreferrer"
            bannerColor="#141a17"
            octoColor="#a0b49c"
            size={80}
            direction="right" 
        />
        <div data-aos="fade-down" data-aos-delay="500" className="m-[30px] h-[100px] bg-[#141a17] z-40 flex items-center justify-between shadow-top shadow-down rounded-[100px] py-[15px] px-[20px] relative">
            <a href="/" className='h-full'>
                <img src="https://i.postimg.cc/R0qyjbwK/logo.png" alt="wolzcodelife" title='wolzcodelife' className='min-w-[50px] h-full object-contain' />
            </a>
            <div className="items-center flex-grow md:flex-grow-0 overflow-x-hidden h-full hidden md:flex">
                { socials.map((social) => (
                    <a href={social.link} key={social.title} target="_blank" rel="noopener noreferrer" title={social.title} className="ml-[30px] hover:scale-125 ease-in-out duration-[0.4s]">{social.img}</a>
                ))}
            </div>
            <button className='flex md:hidden' onClick={() => setShow(!show)}>{ !show ? <IconSocial color="#a0b49c" /> : <IconSocialOff color="#a0b49c" />}</button>
            {show &&
                // <div className="absolute flex md:hidden flex-col items-center gap-[30px] z-40 top-[120px] right-[5px] bg-white py-[30px] px-[20px] shadow-top shadow-down rounded-[100px]">
                //     { socials.map((social) => (
                //         <a href={social.link} key={social.title} target="_blank" rel="noopener noreferrer" title={social.title} className="hover:scale-125 ease-in-out duration-[0.4s]">{social.img}</a>
                //         ))}
                // </div>
                <div className="absolute h-[300px] animate-slidedown duration-[3000] w-full grid md:hidden grid-cols-3 items-center z-40 top-[120px] left-1/2 transform -translate-x-1/2 bg-[#141a17EA] shadow-top shadow-down rounded-[50px]">
                    { socials.map((social) => (
                        <a href={social.link} key={social.title} target="_blank" rel="noopener noreferrer" title={social.title} className="hover:scale-125 ease-in-out duration-[0.4s] w-full flex items-center justify-center">{social.img}</a>
                        ))}
                </div>
            }
        </div>
    </>
  )
}

export default Header