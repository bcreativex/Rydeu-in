import React from 'react'
import bgCity from '../assets/city/bgCity.png'

// import { Calendar, ChevronDown, Clock, Mail } from 'lucide-react'
import TravelBookingForm from './TravelBookingForm'
import MiniBus from './MiniBus'
// import BookAndPay from './BookAndPay'

export default function Hero() {
  return (
    <div className="min-h-[600px] relative bg-white ">
      <img 
        src={bgCity} 
        alt="Background" 
        className="absolute inset-0 w-full h-3/4 object-cover filter brightness-75"
      />
      <div className="relative w-full px-4 pt-24 pb-12"> {/*image behind this div*/}
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1600px] mx-auto">
          <div className="max-w-3xl lg:mb-64 leading-9">
            <h1 className="text-5xl font-bold mb-6 text-white">
              Private Transfer & Taxi services in Geneva
            </h1>
            <p className="text-3xl text-white">
              Book airport transfers, city transfers and hourly disposal services with driver
            </p>

            {/* minibus and book and pay testing */}

                  <div className='mt-20 flex gap-4 w-[1520px] h-[180px] '>
                  <MiniBus />
                  <MiniBus />
                  {/* <BookAndPay /> */}
                  </div>
          </div>
          <div className='mb-20'>
            <TravelBookingForm /> 
          </div>
        </div>

        {/* <div className='flex gap-4 w-[1520px] h-[180px] mb-9'>
        <MiniBus />
        <BookAndPay />
        </div> */}
        

      </div>
    </div>
  )
}



