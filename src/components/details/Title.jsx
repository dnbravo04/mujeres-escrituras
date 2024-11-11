import React from "react";

function Title({ name, book }) {
  return (
    <div className="bg-title bg-fixed bg-stone-500 bg-opacity-60 h-80 flex items-center justify-center flex-col text-white">
      <div className="text-center border border-stone-300 bg-stone-700 bg-opacity-70 p-6">
        <h1 className="font-playwrite text-5xl mb-2">{name}</h1>
        <h2 className="font-poppins text-lg font-medium">{book}</h2>
      </div>
    </div>
  );
}

export default Title;
