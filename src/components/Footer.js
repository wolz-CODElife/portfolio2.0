import React from 'react'
import { IconGithub, IconGmail, IconLinkedin, IconTwitch, IconTwitter, IconYoutube } from '../icons/icons'

const Footer = () => {const socials = [
    {
        img: <IconTwitch width='100%' height='100%' />,
        link: "https://www.twitch.tv/wolz_codelife",
        title: "Twitch"
    },
    {
        img: <IconLinkedin width='100%' height='100%' />,
        link: "https://linkedin.com/in/wolz-codelife",
        title: "LinkedIn"
    },
    {
        img: <IconTwitter width='100%' height='100%' />,
        link: "https://twitter.com/wolz_codelife",
        title: "Twitter"
    },
    {
        img: <IconYoutube width='100%' height='100%' />,
        link: "https://www.youtube.com/channel/UCYlGaNYqqmdnr2O5CctmTcw",
        title: "Youtube"
    },
    {
        img: <IconGithub width='100%' height='100%' />,
        link: "https://github.com/wolz-codelife",
        title: "GitHub"
    },
    {
        img: <IconGmail width='100%' height='100%' />,
        link: "mailto://joeladewole3@gmail.com",
        title: "Email"
    },
]
  return (
    <div className='min-h-[200px] md:min-h-[400px] w-full flex flex-col justify-center items-center p-[20px] md:p-[50px] gap-[20px]'>
        <hr className='border border-t-1 border-black w-full' />
        <div className="flex flex-wrap gap-[20px] md:gap-[50px] items-center justify-center">
            { socials.map((social) => (
                <a href={social.link} key={social.title} target="_blank" rel="noopener noreferrer" title={social.title} className="ml-[30px] w-[40px] md:w-[50px] lg:w-[80px] h-[40px] md:h-[50px] lg:h-[80px] hover:scale-125 ease-in-out duration-1000 cursor-link">{social.img}</a>
            ))}
        </div>
    </div>
  )
}

export default Footer