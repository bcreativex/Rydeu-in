import React from 'react'
import logo2 from '../assets/logo2.png'

export default function Footer() {
    return (
      <footer className="bg-black text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src={logo2} alt="Rydeu Logo" className="h-10 mb-4" />
              <p className="text-sm">Solution for all ground transfers</p>
              <h5 className='mt-6 font-bold'>Connect with Us</h5>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">COMPANY</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 font-serif hover:text-white">About us</a></li>
                <li><a href="#" className="text-gray-400 font-serif hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 font-serif hover:text-white">Terms and Conditions</a></li>
                <li><a href="#" className="text-gray-400 font-serif hover:text-white">Imprint</a></li>
                <li><a href="#" className="text-gray-400 font-serif hover:text-white">Careers / Jobs</a></li>
                <li><a href="#" className="text-gray-400 font-serif hover:text-white">Sitemap</a></li>

              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">HELP CENTER</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 font-serif hover:text-white">Contact us</a></li>
                <li><a href="#" className="text-gray-400 font-serif hover:text-white">Customer FAQs</a></li>
                <li><a href="#" className="text-gray-400 font-serif hover:text-white">Business FAQs</a></li>
                <li><a href="#" className="text-gray-400 font-serif hover:text-white">Supplier FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">OUR SERVICES</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 font-serif hover:text-white">Airport Transfer</a></li>
                <li><a href="#" className="text-gray-400 font-serif hover:text-white">City Transfer</a></li>
                <li><a href="#" className="text-gray-400 font-serif hover:text-white">Hourly Transfer</a></li>
                <li><a href="#" className="text-gray-400 font-serif hover:text-white">Business</a></li>
                <li><a href="#" className="text-gray-400 font-serif hover:text-white">Supplier</a></li>

              </ul>
            </div>
          </div>
          
          <div className=" mt-9 pt-9 text-sm text-center">
            <p>Copyright © 2024 rydeu.com All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  

  