import { Calendar, Mail, Users } from 'lucide-react';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import arrows from '../assets/city/icons/arrows.png';

const TravelBookingForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const [value, setValue] = useState();

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-6 my-4 p-2 bg-white rounded-lg shadow">
            {/* Trip Type */}
            <div className="flex gap-2 mb-6 bg-gray-100 rounded-lg">
                {['One way', 'Round Trip', 'Hourly'].map((type, i) => (
                    <label key={type} className="flex-1">
                        <input
                            type="radio"
                            name="tripType"
                            value={type}
                            defaultChecked={i === 0}
                            className="sr-only"
                        />
                        <span className={`block text-center px-4 py-2 rounded-lg cursor-pointer ${
                            i === 0 ? 'bg-white text-[#FF2D5C] h-10 mt-1/2 border-gray-200 border-2 font-semibold' : 'text-gray-600'
                        } font-medium`}
                        onClick={(e) => {
                            const labels = e.target.parentElement.parentElement.querySelectorAll('label span');
                            labels.forEach(label => label.classList.remove('bg-white', 'text-gray-500', 'border-gray-200', 'border-2', 'font-semibold'));
                            labels.forEach(label => label.classList.add('text-gray-600'));
                            e.target.classList.add('bg-white', 'text-gray-500', 'border-gray-200', 'border-2', 'font-semibold');
                            e.target.classList.remove('text-gray-600');
                        }}>
                            {type}
                        </span>
                    </label>
                ))}
            </div>

            {/* Locations */}
            <div className="space-y-4 mb-4 relative">
                <input
                    type="text"
                    name="from"
                    placeholder="From (airport, hotel, address)"
                    className="w-full p-3 border rounded-lg focus:ring-1 focus:ring-pink-500 bg-white"
                    required
                />
                <img src={arrows} alt="" className="absolute right-3 top-[40px]  transform -translate-y-1/2" />
                <input
                    type="text"
                    name="to"
                    placeholder="To (airport, hotel, address)"
                    className="w-full p-3 border rounded-lg focus:ring-1 focus:ring-pink-500 bg-white"
                    required
                />
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                {['date', 'time'].map((type) => (
                    <div key={type} className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type={type}
                            name={`pickup${type.charAt(0).toUpperCase() + type.slice(1)}`}
                            placeholder={`Pickup ${type.charAt(0).toUpperCase() + type.slice(1)}`}
                            className="w-full p-3 pl-10 border rounded-lg focus:ring-1 focus:ring-pink-500 bg-white text-gray-400"
                            required
                        />
                    </div>
                ))}
            </div>

            {/* Passengers */}
            <div className="relative mb-4">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select 
                    name="passengers"
                    className="w-full p-3 pl-10 border rounded-lg focus:ring-1 focus:ring-pink-500 bg-white text-gray-400"
                    required
                >
                    <option value="">Add Passenger & Baggage</option>
                    {[1, 2, 3, 4].map(num => (
                        <option key={num} value={num}>{num} Passenger(s)</option>
                    ))}
                </select>
            </div>

            {/* Contact */}
                        <div className="space-y-4 mb-4">
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full p-3 pl-10 border rounded-lg focus:ring-1 focus:ring-pink-500 bg-white"
                                    required
                                />
                            </div>
                        </div>
                            
                        <div className="max-w-md mx-auto">
                        <style>{`
                            .PhoneInput {
                            border: 1px solid #e5e7eb;
                            border-radius: 0.5rem;
                            padding: 0.5rem;
                            color: black;
                            placeholder: gray-400;
                            max-input: 10;
                            }
                            .PhoneInput:focus-within {
                            ring: 2px;
                            ring-color: rgb(59 130 246);
                            }
                            .PhoneInputInput {
                            border: none;
                            outline: none;
                            padding-left: 0.75rem;
                            background-color: white;
                            color: black;
                            }
                            .PhoneInputCountrySelect {
                            padding-right: 0.5rem;
                            border-right: 1px solid #e5e7eb;
                            background-color: white;
                            color: black;
                            }
                        `}</style>
                        <PhoneInput
                            placeholder="Phone number"
                            defaultCountry="US"
                            value={value}
                            onChange={setValue}/>
                        </div>

                        {/* Additional Requirements */}
            <label className="flex items-center gap-2 mb-6 cursor-pointer bg-white">
                <input
                    type="checkbox"
                    name="additionalRequirements"
                    className="w-4 h-4 rounded bg-white opacity-40 border-gray-300 mt-6"
                />
                <span className="text-gray-600 text-justify mt-6">Additional Requirements</span>
            </label>

            <button
                type="submit"
                className="w-full py-3 bg-[#FF2D5C] text-white font-medium rounded-lg hover:bg-red-600 transition-colors"
            >
                Search
            </button>
        </form>
    );
};

export default TravelBookingForm;