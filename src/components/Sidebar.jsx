import React from 'react'   

import { Link } from 'react-router-dom'
import { Bell, Car, Users, Building, FileText, User } from 'lucide-react'
import R from '../assets/R.png'

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-28 bg-blue-900 flex flex-col items-center py-4 ">
      <Link to="/" className="mb-8">
        <div className="w-20 h-20 text-blue-900 rounded flex items-center justify-center font-bold">
          <img src={R} className='w-12 h-12'
          alt="Rydeu" />
        </div>
      </Link>
      
      <nav className="flex flex-col items-center space-y-6 gap-4">
        <Link to="/notifications" className="text-white/60 hover:text-white">
          <Bell className="w-6 h-6" />
        </Link>
        <Link to="/rides" className="text-white/60 hover:text-white">
          <Car className="w-6 h-6" />
        </Link>
        <Link to="/customers" className="text-white/60 hover:text-white">
          <Users className="w-6 h-6" />
        </Link>
        <Link to="/business" className="text-white/60 hover:text-white">
          <Building className="w-6 h-6" />
        </Link>
        <Link to="/requests" className="text-white">
          <FileText className="w-6 h-6" />
        </Link>
        <Link to="/profile" className="text-white/60 hover:text-white">
          <User className="w-6 h-6" />
        </Link>
      </nav>
    </div>
  )
}

