import React from 'react'

import { InfoIcon } from 'lucide-react'
import { PropTypes } from 'prop-types'

export default function PriceBreakdown({ 
  title = '', 
  youGet = 0, 
  commission = 0, 
  total = 0, 
  description = '' 
}) {
  const commissionAmount = (youGet * commission / 100).toFixed(0)

  return (
    <div className="bg-blue-50/50 p-6 rounded-lg">
      <h3 className="font-medium text-lg mb-6">{title}</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-700">You Get</span>
          <span className="font-medium">€ {youGet}</span>
        </div>
        <div className="flex justify-between items-center text-gray-500">
          <span>Rydeu Commission {commission}%</span>
          <span>€ {commissionAmount}</span>
        </div>
        <div className="flex justify-between items-center pt-4 border-t text-lg">
          <span className="font-medium">Total Offer Price</span>
          <span className="text-green-500 font-medium">€ {total}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4 text-sm text-gray-500 group relative">
        <InfoIcon className="w-4 h-4" />
        <p>{description}</p>
        <div className="absolute bottom-full left-0 mb-2 w-64 bg-gray-800 text-white text-xs rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          {description}
        </div>
      </div>
    </div>
  )
}

PriceBreakdown.propTypes = {
  title: PropTypes.string,
  youGet: PropTypes.number,
  commission: PropTypes.number,
  total: PropTypes.number,
  description: PropTypes.string
}

