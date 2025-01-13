import React from "react";
import { useState } from "react";
import {
  ArrowLeft,
  Handshake,
  Wifi,
  Baby,
  ShipWheelIcon as Wheelchair,
  Users,
  Wine,
  BatteryCharging,
} from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import PriceBreakdown from "../components/PriceBreakdown";

export default function RequestsPage() {
  const [selectedServices, setSelectedServices] = useState([
    "porter",
    "child",
    "water",
    "charger",
    "meet",
    "wifi",
    "wheelchair",
  ]);
  const [bookingType, setBookingType] = useState("both");

  const ancillaryServices = [
    {
      id: "porter",
      icon: <Handshake className="w-6 h-6 stroke-current" />,
      label: "Porter Service",
    },
    {
      id: "wifi",
      icon: <Wifi className="w-6 h-6 stroke-current" />,
      label: "Wifi",
    },
    {
      id: "child",
      icon: <Baby className="w-6 h-6 stroke-current" />,
      label: "Child Seat",
    },
    {
      id: "wheelchair",
      icon: <Wheelchair className="w-6 h-6 stroke-current" />,
      label: "Wheel Chair",
    },
    {
      id: "meet",
      icon: <Users className="w-6 h-6 stroke-current" />,
      label: "Meet & greet",
    },
    {
      id: "water",
      icon: <Wine className="w-6 h-6 stroke-current" />,
      label: "Bottled Water",
    },
    {
      id: "charger",
      icon: <BatteryCharging className="w-6 h-6 stroke-current" />,
      label: "Phone Charger",
    },
  ];

  const toggleService = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 text-black">
      <Sidebar />

      <div className="flex-1 md:ml-16">
        <div className="p-4 md:p-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center mb-4 md:mb-8">
              <Link
                to="/"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <h1 className="text-lg md:text-xl font-medium">Requests</h1>
              </Link>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-8">
            <div className="h-15"></div> 
              <div className="border-t border-gray-300 mb-4 md:mb-8"></div>
              {/* Ancillary Services */}
              
              <div className="mb-8 md:mb-12">
                <h2 className="text-sm md:text-lg font-medium mb-4 md:mb-6">
                  Offer Ancillary
                </h2>
                <div className="flex flex-wrap gap-4 md:gap-8">
                  {ancillaryServices.map((service) => (
                    <div
                      key={service.id}
                      className="flex flex-col items-center space-y-2"
                    >
                      <button
                        onClick={() => toggleService(service.id)}
                        className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-1 transition-colors
                          ${
                            selectedServices.includes(service.id)
                              ? "border-gray-300 bg-gray-100 text-gray-400"
                              : "border-orange-500 bg-orange-50 text-orange-500"
                          }`}
                      >
                        {service.icon}
                      </button>
                      <span className="text-xs md:text-sm font-medium text-gray-600">
                        {service.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-300 mb-4 md:mb-8"></div>

              {/* Offer Price */}
              <div className="flex flex-wrap md:flex-nowrap space-y-4 md:space-y-0 md:space-x-4">
                {/* Left Section - Type of Booking */}
                <div className="flex-1">
                  <h2 className="text-sm md:text-lg font-medium mb-4 md:mb-6">
                    Offer Price
                  </h2>
                  {/* Booking Type Dropdown */}
                  <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Type of booking
  </label>
  <div className="relative w-80">
    <select
      value={bookingType}
      onChange={(e) => setBookingType(e.target.value)}
      className="block w-full p-3 bg-gray-100 border border-gray-300 text-gray-900 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 pr-8 text-sm h-12"
    >
      <option value="pre" className="text-xs py-3">
        Pre-Payment (Full amount paid on the website)
      </option>
      <option value="pickup" className="text-xs py-3">
        Payment on pickup (Reservation amount paid on website)
      </option>
      <option value="both" className="text-xs py-3">Both</option>
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </div>
</div>

                  <div className="text-xs mt-10 md:text-sm font-bold text-gray-500 mb-4 md:mb-8">
                  Offer Available until <span className="font-medium">10th May, 19:00</span>
                </div>
                </div>
                

                {/* Vertical Line */}
                <div className="hidden md:block w-px bg-gray-100"></div>

                {/* Middle Section - Pre-Payment */}
                <div className="grid gap-4 md:gap-6 mb-4 md:mb-8 md:grid-cols-2">
                  <PriceBreakdown
                    title="Pre-Payment"
                    youGet={425}
                    commission={15}
                    total={500}
                    description="Customer pays the full amount on the website while booking."
                  />
                  <PriceBreakdown
                    title="Payment on Pickup"
                    youGet={400}
                    commission={20}
                    total={500}
                    description="Customer pays only the commission amount on the website to reserve the booking. Balance amount is paid to the driver during pickup."
                  />
                </div>
                
              </div>
              <div className="flex justify-center mt-15">
                <button className="bg-pink-500 text-white px-8 py-2 md:px-12 md:py-2.5 rounded-lg hover:bg-pink-600 transition-colors">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
