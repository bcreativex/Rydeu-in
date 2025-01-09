import React from 'react';
import bgCity from '../assets/city/bgCity.png';

import MiniBus from './MiniBus';
import TravelBookingForm from './TravelBookingForm';
import BookAndPay from './BookAndPay';

export default function Hero() {
  return (
    <div className="min-h-[600px] relative bg-white">
      <img
        src={bgCity}
        alt="Background"
        className="absolute inset-0 w-full h-3/4 object-cover filter brightness-75"
      />

      <div className="relative w-full px-8 pt-20 pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1400px] mx-auto">
          {/* Left Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-2 mb-[550px]">
            {/* Minibus */}
            <MiniBus />
            {/* MiniBus end */}

            {/* BookAndPay start */}
            <BookAndPay />
            {/* BookAndPay end */}
          </div>

          <div className="max-w-3xl lg:mb-64 leading-9 text-center lg:text-left mt-10 lg:mt-0">
            <h1 className="text-5xl font-bold mb-6 text-white">
              Private Transfer & Taxi services in Geneva
            </h1>
            <p className="text-3xl text-white">
              Book airport transfers, city transfers and hourly disposal
              services with driver
            </p>
          </div>

          {/* Right Section */}
          <div className="lg:ml-10 mt-10 lg:mt-0">
            <TravelBookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
