import { ChevronRight } from 'lucide-react';
import React from 'react';
import rome1 from '../assets/city/rome-1.png';
import rome2 from '../assets/city/rome-2.png';

export default function Content() {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mx-15">
          {/* Left Container */}
          <div className="w-full md:w-1/4 px-2">
            <div className="max-w-md mx-auto">
              <nav className="flex items-center space-x-2 text-gray-400 mb-8">
                <span className='cursor-pointer'>Home</span>
                <ChevronRight className="w-4 h-4" />
                <span className='cursor-pointer'>Cities</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-gray-900 cursor-pointer">Rome</span>
              </nav>
              <div className="space-y-9">
                {/* At a Glance section */}
                <div>
                  <h2 className="flex items-center text-3xl font-normal mb-6">
                    <span className="inline-block w-4 h-4 rounded-full border-2 border-orange-400 mr-4 mt-5"></span>
                    <span className="text-orange-400 mt-5 font-semibold">At a Glance</span>
                  </h2>
                </div>

                {/* Navigation links */}
                <div className="space-y-9 text-gray-400">
                  <ul className="list-disc list-inside leading-[60px]">
                    <li>Transportation in Rome</li>
                    <li>Airport Transfers in Rome</li>
                    <li>Sightseeing Transportation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Container */}
          <div className="w-full md:w-3/4 ml-auto mt-8 md:mt-[80px]">
            <div className="max-w-6xl mx-auto">
              <p className="text-gray-600 mb-6 text-justify">
                Nestled in the heart of Italian Peninsula, Rome is the capital of the country and one of the most populated cities in Italy. From its rich architecture to eye-catching artifacts, this city is known to maintain a history like none other. The ancient ruins of the Colosseum, a stunning sight to behold introduces it to travelers throughout the world. Rome is for all the travel fanatics out there.
              </p>
              
              <div className="mb-8 flex flex-col md:flex-row">
                <div>
                  <p className="text-gray-600 text-justify">
                    A perfect blend of gentle ruins, jaw-dropping art and lively nights, Rome sets an exemplary example for a place about how it should entertain its travelers. The city wholeheartedly welcomes travellers from a wide array of interests, from awe inspiring monuments to living life at its best.
                  </p>
                  <p className="text-gray-600 mt-5 text-justify">
                    A perfect blend of gentle ruins, jaw-dropping art and lively nights, Rome sets an exemplary example for a place about how it should entertain its travelers. The city wholeheartedly welcomes travellers from a wide array of interests, from awe inspiring monuments to living life at its best.The Roman Empire had cut the ribbons when Augustus Caesar announced to be the first emperor of Rome in 31BC and ended with the fall of Constantinople in 1453CE. Known to be the centre of the Roman Empire, Rome attracts the majority of the crowd due to its rich history and politics.
                  </p>
                </div>
                <img
                  src={rome1}
                  alt="Rome"
                  className="w-full md:w-[450px] h-64 ml-0 md:ml-8 mt-4 md:mt-0"
                />
              </div>
              <p className='text-gray-600 text-justify'>The Roman Empire has been an icon when it comes to historical importance. The Roman Empire had cut the ribbons when Augustus Caesar announced to be the first emperor of Rome in 31BC and ended with the fall of Constantinople in 1453CE. Known to be the centre of the Roman Empire, Rome attracts the majority of the crowd due to its rich history and politics.
              </p>

              <div className="mb-8 flex flex-col md:flex-row mt-5">
                <img
                  src={rome2}
                  alt="Rome"
                  className="w-full md:w-[450px] h-64 mr-0 md:mr-9 mb-4 md:mb-0"
                />
                <div>
                  <p className="text-gray-600 mb-6 text-justify">
                    Referred to as ‘An Eternal City’ in the beginning of the history, Rome is seen to be a dream for music lovers due to the Parco Della Musica which is known to be one of the largest music venues in the world. Not only music, Rome has also set itself in the most wanted places to visit in the world and is the third most visited places in the entire Europe. This place has experienced arts from different periods and became a home for some of the most renowned artists such as Borromini, Bernini, Carracci and Cortona.
                  </p>
                  <p className="text-gray-600 mb-6 text-justify">
                    Rome has also set itself in the most wanted places to visit in the world and is the third most visited places in the entire Europe. This place has experienced arts from different periods and became a home for some of the most renowned artists such as Borromini, Bernini, Carracci and Cortona.
                  </p>
                </div>
              </div>
              <p className='text-gray-600 text-justify'>Embracing the ancient art, Rome has now decided to use its innovation to give birth to contemporary art to keep enhancing their love for art and architecture, National Museum of the 21st Century Arts is a live example of that. The Italian cuisine has somehow managed to be a king of all cuisines, from the Carciofi alla romana to the Spaghetti alla carbonara- Delicious spaghetti topped with bacon, smokey eggs and pecorino is what makes it mouth watering.
              </p>
              <p className='text-gray-600 mt-5 text-justify'> Rome has a series of reasons to attract you and slip you into its warm arms to rejuvenate your soul with its authentic art, awe-inspiring architecture and mouth-watering food.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
