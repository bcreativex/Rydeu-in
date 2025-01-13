import React from 'react';
import { InfoIcon } from 'lucide-react';
import { PropTypes } from 'prop-types';

export default function PriceBreakdown({
  title = '',
  youGet = 0,
  commission = 0,
  total = 0,
  description = ''
}) {
  const commissionAmount = ((youGet * commission) / 100).toFixed(0);

  return (
    <div className=" p-4 rounded-md max-w-xs mx-auto">
      <h3 className="font-medium text-base mb-4">{title}</h3>
      <div className="bg-blue-50/80 space-y-3 p-5 rounded">
        <div className="flex justify-between items-center">
          <span className="text-gray-700 text-sm">You Get</span>
          <span className="font-medium text-sm">€ {youGet}</span>
        </div>
        <div className="flex justify-between items-center text-gray-500 text-sm">
          <span>Rydeu Commission {commission}%</span>
          <span>€ {commissionAmount}</span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t text-sm">
          <span className="font-medium">Total Offer Price</span>
          <span className="text-green-500 font-medium">€ {total}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-3 text-xs text-gray-500 group relative">
        <InfoIcon className="w-3 h-3" />
        <p>{description}</p>
        <div className="absolute bottom-full left-0 mb-1 w-48 bg-gray-800 text-white text-[10px] rounded p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          {description}
        </div>
      </div>
    </div>
  );
}

PriceBreakdown.propTypes = {
  title: PropTypes.string,
  youGet: PropTypes.number,
  commission: PropTypes.number,
  total: PropTypes.number,
  description: PropTypes.string
};
