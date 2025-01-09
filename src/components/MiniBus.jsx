import React from "react";
import bus from "../assets/city/bus.png";
import van from "../assets/city/van.png";

const MiniBus = () => (
  <div className="hidden sm:block absolute w-full max-w-[420px] mt-[390px] bg-white rounded-xl shadow-lg overflow-hidden">
    <div className="absolute w-[300px] h-[300px] sm:block bg-[#6DE3C7AB] rounded-full z-0 -top-12 -left-40" />

    <div className="flex flex-col md:flex-row items-center p-4 gap-9">
      <div className="flex-1 relative h-16">
        <img
          src={van}
          alt="Mercedes Sprinter Minibus"
          className="absolute mt-3 w-3/5 object-contain z-10"
        />
        <img
          src={bus}
          alt="Coach Bus"
          className="absolute mb-9 mt-2 right-0 w-[150px] object-contain"
        />
      </div>

      <div className="flex-1 space-y-4 text-center md:text-left">
        <h2 className="text-2xl text-black">
          Hire <span className="text-gray-900 font-bold">MiniBus</span> &
          <br />
          <span className="text-gray-900 font-bold">Coach/Bus</span>
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
