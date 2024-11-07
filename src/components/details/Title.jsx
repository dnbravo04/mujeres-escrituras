import React from "react";

function Title({ name, book }) {
  return (
    <div className="bg-title text-white bg-fixed bg-stone-500 bg-opacity-40 h-60 flex items-center justify-center flex-col">
      <div className=" text-center border shadow-lg border-slate-200 bg-opacity-45 bg-stone-500 p-6">
        <h1 className="font-playwrite text-5xl p-4">{name}</h1>
        <h2 className="font-poppins text-xl text-semibold">{book}</h2>
      </div>
    </div>
  );
}

export default Title;
