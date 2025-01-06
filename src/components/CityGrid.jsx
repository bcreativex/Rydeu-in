import React from "react"
import napples from '../assets/city/napples.png'
import florence from '../assets/city/florence.png'
export default function CityGrid() {
    const cities = [
      { name: "Naples", image: napples },
      { name: "Florence", image: florence },
      { name: "Naples", image: napples },
      { name: "Florence", image: florence },
      { name: "Naples", image: napples },
      { name: "Florence", image: florence },
      { name: "Naples", image: napples },
      { name: "Florence", image: florence },

    ]
  
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-black font-semibold">Other cities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {cities.map((city, index) => (
              <div key={index} className="relative group cursor-pointer">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/10 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">{city.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  