import React from 'react';
import { FaDropbox, FaSlack, FaSpotify } from 'react-icons/fa6';
import { MdOutlineArrowCircleRight } from 'react-icons/md';

const Companies = () => {
    return (
        <div className="bg-gradient-to-br from-[#05080f] via-[#0a0f1c] to-[#1a1f2e] text-white font-sans min-h-screen relative">
            {/* Add your two blurred circles here */}
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00fff7] opacity-10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#00fff7] opacity-10 rounded-full blur-3xl pointer-events-none" />

            {/* Top section with company logos */}
            <div className="container mx-auto px-4 md:px-8 py-16">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Title */}
                    <div className="max-w-2xl text-center lg:text-left mb-12 lg:mb-0">
                        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
                            Our Stack Powers of<br />the <span className='text-[#A5A5A5]'>World's </span>Most<br /><span className='text-[#A5A5A5]'>Beloved Companies</span>
                        </h2>
                    </div>

                    {/* Company logos grid */}
 <div className="grid grid-cols-2 gap-4">
  {/* Spotify */}
  <div className="flex items-center space-x-2 py-3 px-6 rounded-full shadow-md 
                  bg-gradient-to-r from-teal-300 to-teal-800
                  w-full max-w-[200px]">
    <div className="w-8 h-8 rounded-full bg-[#1db954] flex items-center justify-center">
      {/* Spotify SVG */}
     <FaSpotify />
    </div>
    <span className="text-sm font-semibold text-white">Spotify</span>
  </div>

  {/* TalentIQ */}
 <div className="flex items-center space-x-2 py-3 px-6 rounded-full shadow-md 
    bg-gradient-to-r from-teal-300 to-teal-800
    w-full max-w-[200px]">
  
  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1">
    <img
      src="/src/assets/Group 42665.png"
      alt=""
      className="w-full h-full object-contain filter"
    />
  </div>
  
  <span className="text-sm font-semibold text-white">TalentIQ</span>
</div>

  {/* Dropbox */}
  <div className="flex items-center space-x-2 py-3 px-6 rounded-full shadow-md  ml-12
                  bg-gradient-to-r from-teal-300 to-teal-800
                  w-full max-w-[200px]">
    <div className="w-8 h-8 rounded-full bg-[#0070e0] flex items-center justify-center">
      {/* Dropbox SVG */}
      <FaDropbox />
    </div>
    <span className="text-sm font-semibold text-white">DropBox</span>
  </div>

  {/* Flipay */}
 <div className="flex items-center space-x-2 py-3 px-6 rounded-full shadow-md ml-14
    bg-gradient-to-r from-teal-300 to-teal-800
    w-full max-w-[200px]">
  
  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1">
    <img
      src="/src/assets/Vector (1).png"
      alt=""
      className="w-full h-full object-contain filter"
    />
  </div>
  
  <span className="text-sm font-semibold text-white">Flipay</span>
</div>

  {/* Slack */}
  <div className="col-span-2 flex items-center justify-center sm:justify-start space-x-2 py-3 px-6 rounded-full shadow-md ml-40
                  bg-gradient-to-r from-teal-300 to-teal-800
                  w-full max-w-[200px]">
    <div className="w-8 h-8 rounded-full bg-[#e01e5a] flex items-center justify-center">
      {/* Slack SVG */}
     <FaSlack />
    </div>
    <span className="text-sm font-semibold text-white">Slack</span>
  </div>
</div>



                </div>
            </div>

            {/* Bottom section with call to action */}
            <div className="px-4 md:px-8 py-16">
  <div className="container mx-auto max-w-5xl text-center relative p-8 md:p-12 rounded-3xl overflow-hidden shadow-2xl">
    {/* Background glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#2dd4bf] to-transparent opacity-20" />
    
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center">
      <div className="flex items-center space-x-2 text-xs font-semibold uppercase text-white py-1 px-3 rounded-full mb-8">
        <img src="/src/assets/Logo Icon Wrapper.png" alt="" className="w-4 h-4" />
        <span>Smarter Idea, instant solutions</span>
      </div>

      <h3 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8">
        Uncover the Design and Development<br />Projects That Set Us Apart
      </h3>

      {/* Center the button horizontally */}
     <div className="flex justify-center items-center">
  <button className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-transparent text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 hover:text-white flex items-center space-x-2">
    <span>Contact Us</span>
    <MdOutlineArrowCircleRight className="text-3xl" />
  </button>
</div>
    </div>
  </div>
</div>

            </div>
        
    );
};

export default Companies;
