import React from 'react'
import { presentations } from '../data/presentations'
import { IconGithub, IconLink } from '../icons/icons'

const PresentationGrid = ({filter}) => {
  return (
    <div className='w-full'>
        {presentations.filter(presentation => filter !== 'All' ? presentation.tools.includes(filter) : true).map(presentation => (
            <div className="bg-cover m-[20px] w-full min-h-[400px] rounded-[20px]" style={{ backgroundImage: `url(${presentation.thumbnail})`, backgroundPosition: 'center center' }} key={presentation.title}>
                <div className="w-full min-h-[400px] flex flex-col justify-end rounded-[20px] p-[30px]" style={{ background: 'rgba(0, 0, 0, 0.7)', backgroundPosition: 'center center'}}>
                    <div className="w-full flex-grow flex flex-col items-center justify-center">
                        <h1 className='text-white font-league text-[20px] md:text-[28px] font-[600]'>{presentation.title}</h1>
                        <p className='flex items-center'>
                            {presentation.tools.map(tool => ( 
                                <span key={tool} className='mr-2 text-gray-400'>#{tool}</span> 
                            ))}
                        </p>
                        <p className='text-white font-league text-[16px] font-[400]'>{presentation.desc}</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex flex-wrap items-center">
                            {presentation.tags?.map(tag => (
                                <span key={tag} className='rounded-full h-[22px] flex items-center px-[11px] mr-2 my-1 bg-white'>{tag}</span>
                            ))}
                        </div>
                        <div className="flex items-center my-1">
                            <a href={presentation.link} target="_blank" rel="noopener noreferrer" className='hover:scale-125 duration-[0.4s] ease-in-out'><IconLink width='45' height='45' color='#0F80E8' /></a>
                            {presentation.source &&
                                <a href={presentation.source} target="_blank" rel="noopener noreferrer" className='hover:scale-125 duration-[0.4s] ease-in-out'><IconGithub width='45' height='45' color='#0F80E8' /></a>
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