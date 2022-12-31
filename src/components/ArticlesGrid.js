import React from 'react'
import { articles } from '../data/articles'
import { IconGithub, IconLink } from '../icons/icons'

const ArticlesGrid = ({filter}) => {
  return (
    <div className='w-full'>
        {articles.filter(article => filter !== 'All' ? article.tags.includes(filter) : true).map(article => (
            <div className="bg-cover m-[20px] w-full h-[400px] rounded-[20px]" style={{ backgroundImage: `url(${article.thumbnail})` }} key={article.title}>
                <div className="w-full h-full flex flex-col justify-end rounded-[20px] p-[30px]" style={{ background: 'rgba(0, 0, 0, 0.7)', backgroundPosition: 'center center'}}>
                    <div className="w-full flex-grow flex flex-col items-center justify-center">
                        <h1 className='text-white font-league text-[28px] font-[600]'>{article.title}</h1>
                        <p className='flex items-center'>
                            {article.tools.map(tool => ( 
                                <span className='mr-2 text-gray-400'>#{tool}</span> 
                            ))}
                        </p>
                        <p className='text-white font-league text-[16px] font-[400]'>{article.desc}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            {article.tags?.map(tag => (
                                <span className='rounded-full h-[22px] flex items-center px-[11px] mr-2 bg-white'>{tag}</span>
                            ))}
                        </div>
                        <div className="flex items-center">
                            <a href={article.link} target="_blank" rel="noopener noreferrer" className='hover:scale-125 duration-[0.4s] ease-in-out'><IconLink width='45' height='45' color='#0F80E8' /></a>
                            {article.source &&
                                <a href={article.source} target="_blank" rel="noopener noreferrer" className='hover:scale-125 duration-[0.4s] ease-in-out'><IconGithub width='45' height='45' color='#0F80E8' /></a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ArticlesGrid