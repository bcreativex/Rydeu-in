import React from 'react';
import girl from '../assets/city/girl.png';

const BookAndPay = () => (
  <div className="hidden md:block absolute w-full max-w-[420px] mt-[390px] left-[46%] gap-6 transform -translate-x-1/2 bg-gradient-to-r from-[#ECFFE5] to-[#26DADA] rounded-xl shadow-lg overflow-hidden">
    <div className="flex flex-col md:flex-row items-center w-full h-auto md:h-[160px] p-4">
      <div className="flex-1 relative h-32 flex items-center justify-center">
        <img
          src={girl}
          alt="Girl Image"
          className="w-[260px] h-[160px] md:w-[260px] md:h-[160px]" // Adjusted the size of the image
        />
      </div>

      <div className="flex-1 space-y-2 text-center md:text-left">
        <span className="text-[#FF2D5C] text-[17px] font-bold">
          BOOK AND PAY LATER
        </span>
        <br />
        <span className="text-gray-900 text-sm font-bold">
          Book your ride now and pay only on arrival
        </span>

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