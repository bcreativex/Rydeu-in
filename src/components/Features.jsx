import React from "react"
import book from '../assets/city/icons/book.png'
import cancel from '../assets/city/icons/cancel.png'
import support from '../assets/city/icons/support.png'
import trip from '../assets/city/icons/trip.png'

export default function Features() {
    const features = [
      {
        title: "Book & pay later",
        icon: book
        
      },
      {
        title: "Flexible trip amendments",
        icon: trip
      },
      {
        title: "Free cancellation",
        icon: cancel
      },
      {
        title: "24/7 in-person support",
        icon: support
      }
    ]
  
    return (
      <div className="bg-gray-200 py-12 ">
        <div className="container mx-auto ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img src={feature.icon} alt={feature.title} className="mb-2 w-12 h-12" />
                <span className="text-gray-700">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  