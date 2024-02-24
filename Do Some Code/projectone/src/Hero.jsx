import React from "react";
import mp from './assets/shops.png'
import heroimg from './assets/shoe_image.png'

const Hero = () => {
  return (
    <div className="w-full lg:flex min-h-full">
      <div className="px-10 py-3 lg:w-1/2 md:full ">
        <h1 className="text-8xl font-bold mb-2">YOUR FEET DESERVE THE BEST</h1>
        <p className="text-sm lg:w-[60%] mb-2 md:w-full ">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="flex gap-2 mb-2">
            <button className='bg-red-500 flex px-5 py-1 rounded items-center justify-center'>Shop Now</button>
            <button className='bg-white flex px-5 py-1 rounded items-center justify-center border-2'>Catagory</button>
        </div>
        <p className="text-xs mb-2">Also available on</p>
        <img src={mp} alt="marketplace" />
      </div>
      <div className="lg:w-1/2 md:w-full w-full h-full">
            <img src={heroimg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
