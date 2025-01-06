import React from 'react';
import girl from '../assets/city/girl.png';
const BookAndPay = () => (
    <div className="relative w-[1500px] max-w-md bg-gradient-to-r from-[#ECFFE5] to-[#26DADA] rounded-xl shadow-lg overflow-hidden">
        
        
        <div className="flex items-center p-6 gap-2">
            <div className="flex-1 relative h-16 mb-[250px]">
                <img
                    src={girl}
                    alt="Mercedes Sprinter Minibus"
                    className="absolute w-[1750px] object-contain z-10"
                />
                
            </div>
            
            <div className="flex-1 space-y-2 mb-[200px]">
        
          <span className="text-[#FF2D5C] text-[17px] font-bold">BOOK AND PAY LATER</span>
          <br />
          <span className="text-gray-900 text-sm font-bold">Book your ride now and pay only on arrival</span>
        
        
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

export default BookAndPay;