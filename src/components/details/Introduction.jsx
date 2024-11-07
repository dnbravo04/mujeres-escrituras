import React from 'react';

export default function Introduction({ reference, quote, intro, image }) {
  return (
    <div className="grid grid-cols-2 gap-4 mx-3">
      <div className="col-span-1 items-center">
        <img src={image} alt="Image Description" className="border-double border-[6px] border-stone-500 max-h-96 mx-auto flex items-center justify-center object-cover" />
      </div>
      <div className="col-span-1 flex flex-col text-justify justify-center items-center ">
        <div className="flex flex-col items-end">
          <p className="text-sm text-gray-500">{reference}</p>
          <p className="text-lg font-bold">{quote}</p>
        <p className="text-lg pt-5">{intro}</p>
        </div>
      </div>
    </div>
  );
}
