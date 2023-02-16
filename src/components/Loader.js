import React from 'react'

const Loader = () => {
  return (
    // 141a17
    <div className='bg-[#141a17] h-[100vh] w-[100vw] flex items-center justify-center'>
        <div className="bg-[#a0b49c] w-[200px] h-[200px] flex items-center justify-center rounded-full p-3 relative">
            <div className="absolute border-0 animate-ping border-t-[5px] border-l-[5px] h-[150px] w-[150px] rounded-full">
            </div>
            <img src="https://i.postimg.cc/SRfkDncG/wolzcodelife.png" alt="Logo" className='absolute w-[100px] h-[100px] object-contain z-40'/>
        </div>
    </div>
  )
}

export default Loader