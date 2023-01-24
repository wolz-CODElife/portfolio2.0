import React from 'react'

const LandingCompanies = () => {
    const companies = [
        {
            name: 'Ethereum',
            img: 'https://i.postimg.cc/R0f0Pkcx/ethereum.png'
        },
        {
            name: 'Polygon',
            img: 'https://i.postimg.cc/ZngtzRS7/polygon.png'
        },
        {
            name: 'FounderCulture',
            img: 'https://i.postimg.cc/HxZFbxVY/founderculture.png'
        },
        {
            name: 'LogRocket',
            img: 'https://i.postimg.cc/fLLrWN56/logrocket.png'
        },
        {
            name: 'OneID',
            img: 'https://i.postimg.cc/QMx37v0q/oneid.png'
        },
        {
            name: 'Fauna',
            img: 'https://i.postimg.cc/VNH3CvSY/fauna.png'
        },
        {
            name: 'Refine',
            img: 'https://i.postimg.cc/vZ0KJTtW/refine.png'
        },
        {
            name: 'Tatum',
            img: 'https://i.postimg.cc/2jnKz2xj/tatum.png'
        },
        {
            name: 'IOD',
            img: 'https://i.postimg.cc/gkYNGdJ4/iod.png'
        },
        {
            name: 'Tunga',
            img: 'https://i.postimg.cc/j5H4rkYG/tunga.png'
        },
        {
            name: 'Technovate',
            img: 'https://i.postimg.cc/NfzTZwrK/technocate.png'
        },
        {
            name: 'Koza Kloset',
            img: 'https://i.postimg.cc/c15rLB1j/koza.png'
        },
        {
            name: 'Crunch Network',
            img: 'https://i.postimg.cc/VLxvjsCW/crunch.png'
        },
        {
            name: '3T Impex',
            img: 'https://i.postimg.cc/wj5qLXH9/3t-Impex.png'
        }
    ]
  return (
    <div className='md:h-[calc(100vh-150px)] w-full flex flex-col justify-center items-center px-[20px] py-[50px] md:p-[50px] gap-[20px]'>
        <p>I’m proud to have collaborated with these companies:</p>
        <div className="flex flex-wrap gap-[20px] md:gap-[50px] items-center justify-center">
            {companies.map(company => (
                    <img src={company.img} key={company.name} alt={company.name} title={company.name} className="max-w-[40px] md:max-w-[60px] lg:max-w-[100px] max-h-[40px] md:max-h-[80px] object-contain" />
            ))}
        </div>
    </div>
  )
}

export default LandingCompanies