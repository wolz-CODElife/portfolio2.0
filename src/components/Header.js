import React from 'react'
import { IconGithub, IconGmail, IconLinkedin, IconTwitch, IconTwitter, IconYoutube } from '../icons/icons'

const socials = [
    {
        img: <IconTwitch />,
        link: "https://www.twitch.tv/wolz_codelife",
        title: "Twitch"
    },
    {
        img: <IconLinkedin />,
        link: "https://linkedin.com/in/wolz-codelife",
        title: "LinkedIn"
    },
    {
        img: <IconTwitter />,
        link: "https://twitter.com/wolz_codelife",
        title: "Twitter"
    },
    {
        img: <IconGithub />,
        link: "https://github.com/wolz-codelife",
        title: "GitHub"
    },
    {
        img: <IconYoutube />,
        link: "https://www.youtube.com/channel/UCYlGaNYqqmdnr2O5CctmTcw",
        title: "Youtube"
    },
    {
        img: <IconGmail />,
        link: "mailto://joeladewole3@gmail.com",
        title: "Email"
    },
]
const Header = () => {
  return (
    <div className="m-[30px] h-[100px] flex items-center justify-between shadow-top shadow-down rounded-[100px] py-[15px] px-[20px]">
    {/* <div className="xs:mt-[40px] lg:mt-[90px] m-auto w-[90%] md:w-[80%] h-fit flex items-center justify-between shadow-top shadow-down rounded-[100px] py-[15px] px-[20px]"> */}
        <a href="/" className='h-full'>
            <img src="https://i.postimg.cc/R0qyjbwK/logo.png" alt="wolzcodelife" title='wolzcodelife' className='min-w-[50px] h-full object-contain' />
        </a>
        <div className="items-center flex-grow md:flex-grow-0 overflow-x-hidden hidden md:flex">
            { socials.map((social) => (
                <a href={social.link} key={social.title} target="_blank" rel="noopener noreferrer" title={social.title} className="ml-[30px] hover:scale-125 ease-in-out duration-[0.4s]">{social.img}</a>
            ))}
        </div>
    </div>
  )
}

export default Header