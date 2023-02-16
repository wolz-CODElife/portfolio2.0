import React, { useEffect } from 'react'
import { works } from '../data/works'
import { IconGithub, IconLink } from '../icons/icons'

import AOS from 'aos'

const AppsGrid = ({filter}) => {

    useEffect(() => {
      AOS.init();
    }, [])

  return (
    <div className='w-full flex flex-wrap'>
        {works.filter(work => filter !== 'All' ? work.tags.includes(filter) : true).map(work => (
            <div data-aos={ ['fade-left', 'flip-up', 'fade-right', 'slide-right', 'flip-down', 'slide-left', 'zoom-in-left', 'zoom-in-right'][Math.floor(Math.random() * 8)] } className="bg-cover m-[20px] min-w-[300px] max-w-[calc(100%-40px)] flex-grow lg:max-w-[60%] h-[300px] rounded-[20px]" style={{ backgroundImage: `url(${work.thumbnail})` }} key={work.title}>
                <div className="w-full h-full flex flex-col justify-end rounded-[20px] p-[30px]" style={{ background: 'linear-gradient(180deg, rgba(165, 160, 160, 0) 0%, rgba(115, 111, 111, 0.37) 30.22%, rgba(86, 83, 83, 0.72) 48.71%, rgba(0, 0, 0, 0.72) 89.17%)'}}>
                    <h1 className='text-white font-league text-[28px] font-[600]'>{work.title}</h1>
                    <p className='flex items-center'>
                        {work.tools.map(tool => ( 
                            <span key={tool} className='mr-2 text-gray-200'>#{tool}</span> 
                        ))}
                    </p>
                    <p className='text-white font-league text-[16px] font-[400]'>{work.desc}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            {work.tags?.map(tag => (
                                <span key={tag} className='rounded-full h-[22px] flex items-center px-[11px] mr-2 bg-[#a0b49c] text-[#141a17]'>{tag}</span>
                            ))}
                        </div>
                        <div className="flex items-center">
                            <a href={work.link} target="_blank" rel="noopener noreferrer" className='hover:scale-125 duration-[0.4s] ease-in-out'><IconLink width='45' height='45' color='#a0b49c' /></a>
                            {work.source &&
                                <a href={work.source} target="_blank" rel="noopener noreferrer" className='hover:scale-125 duration-[0.4s] ease-in-out'><IconGithub width='45' height='45' color='#a0b49c' /></a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default AppsGrid