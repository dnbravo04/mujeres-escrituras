import React from 'react';

export default function Introduction({ reference, quote, intro, image }) {
  return (
    <div className="grid grid-cols-2 gap-4 mx-3">
      <div className="col-span-1">
        <img src={image} alt="Image Description" className="w-full h-full object-cover" />
      </div>
      <div className="col-span-1 text-justify">
        <div className="flex flex-col items-end">
          <p className="text-sm text-gray-500">{reference}</p>
          <p className="text-lg font-bold">{quote}</p>
        </div>
        <p className="text-lg">{intro}</p>
      </div>
    </div>
  );
}
