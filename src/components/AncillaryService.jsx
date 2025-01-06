
import React from 'react'

import { PropTypes } from 'prop-types'

export default function AncillaryService({ icon, label, isSelected = false, onClick = () => {} }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center space-y-2 transition-colors ${
        isSelected ? 'text-orange-500' : 'text-gray-400 hover:text-gray-600'
      }`}
      title={`Click to ${isSelected ? 'remove' : 'add'} ${label}`}
    >
      <div 
        className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-colors
          ${isSelected ? 'border-orange-500 bg-orange-50' : 'border-gray-200 hover:border-gray-300'}`}
      >
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </button>
  )
}

AncillaryService.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
}

