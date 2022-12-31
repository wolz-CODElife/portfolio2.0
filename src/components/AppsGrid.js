import React from 'react'
import { works } from '../data/works'
import { IconGithub, IconLink } from '../icons/icons'

const AppsGrid = ({filter}) => {
  return (
    <div className='w-full flex flex-wrap'>
        {works.filter(work => filter !== 'All' ? work.tags.includes(filter) : true).map(work => (
            <div className="bg-cover m-[20px] min-w-[300px] max-w-[calc(100%-40px)] flex-grow lg:max-w-[60%] h-[300px] rounded-[20px]" style={{ backgroundImage: `url(${work.thumbnail})` }} key={work.title}>
                <div className="w-full h-full flex flex-col justify-end rounded-[20px] p-[30px]" style={{ background: 'linear-gradient(180deg, rgba(145, 140, 140, 0) 0%, rgba(115, 111, 111, 0.37) 18.22%, rgba(86, 83, 83, 0.72) 42.71%, rgba(0, 0, 0, 0.72) 79.17%)'}}>
                    <h1 className='text-white font-league text-[28px] font-[600]'>{work.title}</h1>
                    <p className='flex items-center'>
                        {work.tools.map(tool => ( 
                            <span className='mr-2 text-gray-400'>#{tool}</span> 
                        ))}
                    </p>
                    <p className='text-white font-league text-[16px] font-[400]'>{work.desc}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            {work.tags?.map(tag => (
                                <span className='rounded-full h-[22px] flex items-center px-[11px] mr-2 bg-white'>{tag}</span>
                            ))}
                        </div>
                        <div className="flex items-center">
                            <a href={work.link} target="_blank" rel="noopener noreferrer" className='hover:scale-125 duration-[0.4s] ease-in-out'><IconLink width='45' height='45' color='#0F80E8' /></a>
                            {work.source &&
                                <a href={work.source} target="_blank" rel="noopener noreferrer" className='hover:scale-125 duration-[0.4s] ease-in-out'><IconGithub width='45' height='45' color='#0F80E8' /></a>
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