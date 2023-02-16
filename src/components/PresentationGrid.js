import React, { useEffect } from 'react'
import { presentations } from '../data/presentations'
import { IconGithub, IconLink } from '../icons/icons'

import AOS from 'aos'

const PresentationGrid = ({filter}) => {

    useEffect(() => {
      AOS.init();
    }, [])
  return (
    <div className='w-full'>
        {presentations.filter(presentation => filter !== 'All' ? presentation.tools.includes(filter) : true).map(presentation => (
            <div data-aos={ ['fade-left', 'flip-up', 'fade-right', 'slide-right', 'flip-down', 'slide-left', 'zoom-in-left', 'zoom-in-right'][Math.floor(Math.random() * 8)] } className="bg-cover my-[20px] md:m-[20px] w-full min-h-[400px] rounded-[20px]" style={{ backgroundImage: `url(${presentation.thumbnail})`, backgroundPosition: 'center center' }} key={presentation.title}>
                <div className="w-full min-h-[400px] flex flex-col justify-end rounded-[20px] p-[30px]" style={{ background: 'rgba(0, 0, 0, 0.7)', backgroundPosition: 'center center'}}>
                    <div className="w-full flex-grow flex flex-col items-center justify-center">
                        <h1 className='text-white font-league text-[20px] md:text-[28px] font-[600]'>{presentation.title}</h1>
                        <p className='flex items-center'>
                            {presentation.tools.map(tool => ( 
                                <span key={tool} className='mr-2 text-gray-200'>#{tool}</span> 
                            ))}
                        </p>
                        <p className='text-white font-league text-[16px] font-[400]'>{presentation.desc}</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex flex-wrap items-center">
                            {presentation.tags?.map(tag => (
                                <span key={tag} className='rounded-full h-[22px] flex items-center px-[11px] mr-2 my-1 bg-[#a0b49c] text-[#141a17]'>{tag}</span>
                            ))}
                        </div>
                        <div className="flex items-center my-1">
                            <a href={presentation.link} target="_blank" rel="noopener noreferrer" className='hover:scale-125 duration-[0.4s] ease-in-out'><IconLink width='45' height='45' color='#a0b49c' /></a>
                            {presentation.source &&
                                <a href={presentation.source} target="_blank" rel="noopener noreferrer" className='hover:scale-125 duration-[0.4s] ease-in-out'><IconGithub width='45' height='45' color='#a0b49c' /></a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default PresentationGrid