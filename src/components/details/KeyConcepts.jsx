import React from "react";

export default function KeyConcepts({ list, image }) {
  return (
    <div>
      <h2 className="font-poppins font-bold text-center text-3xl">
        Conceptos clave
      </h2>
      <div className="grid grid-cols-2">
        <div className="m-6 col-span-1">
          {list.map((item, index) => (
            <div className="cursor-pointer bg-white shadow-md p-4 border border-gray-200 my-2 transition ease-in-out hover:-translate-y-1 hover:scale-15">
              <a href={item.link} target="_blank" key={index}>
                <h3>{item.name}</h3>
                <div>{item.description}</div>
              </a>
            </div>
          ))}
        </div>

        <div className="col-span-1 flex items-center">
          <img
            src={image}
            alt="Image Description"
            className="border-double border-[6px] border-stone-500 max-h-96 mx-auto flex items-center justify-center object-cover"
          />
        </div>
      </div>
    </div>
  );
}
