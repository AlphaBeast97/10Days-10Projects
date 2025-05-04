import React from 'react'

const HeroSection = () => {
  return (
    <main className='p-5 flex justify-between items-center flex-wrap pl-50 mt-20 pr-50'>
        <div className='flex flex-col gap-10' >
            <div className='font-extrabold text-9xl'>YOUR FEET <br /> DESERVE <br /> THE BEST</div>
            <div className='text-[#6e6e6e]' >YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br /> SHOES.</div>
            <div className=''>
              <button className='w-40 text-lg h-15 bg-[#d01c28] text-white'>
                Shop Now
              </button>
              <button className='ml-20 text-[#6e6e6e] border-2 w-40 text-lg h-15 border-[#6e6e6e]'>
                Category
              </button>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='font-normal' >Also Avalible On</div>
              <div className='flex gap-5'>
                <img src="./flipkart.png" alt="" /><img src="./amazon.png" alt="" />
              </div>
            </div>
        </div>
        <div>
            <img src="./shoe_image.png" alt="" />
        </div>
    </main>
  )
}

export default HeroSection