import React from "react";
import napples from "../assets/city/napples.png";
import florence from "../assets/city/florence.png";

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
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="w-full px-8 md:px-8 mx-auto">
        <h2 className="text-2xl mb-6 text-black font-semibold">
              Other cities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 grid-container"> 
          {/* Added grid-container class here */}
          {cities.map((city, index) => (
            <div
              key={index}
              className="relative group cursor-pointer rounded-lg overflow-hidden"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="text-white text-lg font-medium">
                  {city.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}