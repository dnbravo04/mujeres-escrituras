import React from "react";

export default function Introduction({ reference, quote, intro, image }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-6 py-8">
      <div className="flex items-center justify-center">
        <img
          src={image}
          alt="Descripción de la imagen"
          className="border-double border-4 border-stone-500 max-h-96 object-contain"
        />
      </div>
      <div className="flex flex-col justify-center items-start p-4 space-y-4">
        <p className="text-sm text-stone-700 italic self-end">{reference}</p>
        <blockquote className="border-l-4 border-stone-600 pl-4">
          <p className="text-2xl font-semibold text-stone-800 leading-relaxed">
            “{quote}”
          </p>
        </blockquote>
        <p className="text-lg text-stone-700 leading-relaxed">{intro}</p>
      </div>
    </div>
  );
}
