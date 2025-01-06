import React from 'react';
import bus from '../assets/city/bus.png';
import van from '../assets/city/van.png';
const MiniBus = () => (
  <div className="relative w-[1500px] max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
    <div className="absolute w-1/2 h-full bg-emerald-100 rounded-full z-1" />
    
    <div className="flex items-center p-6 gap-8">
      <div className="flex-1 relative h-16">
        <img
          src={van}
          alt="Mercedes Sprinter Minibus"
          className="absolute mt-3 w-3/5 object-contain z-10"
        />
        <img
          src={bus}
          alt="Coach Bus"
          className="absolute mb-6 mt-2 right-0 w-4/5 object-contain"
        />
      </div>
      
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl text-black">
          Hire <span className="text-gray-900 font-bold">MiniBus &</span>
          <br />
          <span className="text-gray-900">Coach/Bus</span>
        </h2>
        
        <button className="inline-flex items-center px-5 py-2 text-lg font-semibold text-[#FF2D5C] bg-white border-[#FF2D5C] border-2 rounded-full hover:bg-pink-600 hover:text-white transition-colors">
          Book Now
          <svg 
            className="ml-2 w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default MiniBus;