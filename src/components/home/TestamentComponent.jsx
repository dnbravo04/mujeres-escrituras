//Tarjetas
import React from "react";
import { Link } from "react-router-dom";
const TestamentComponent = ({ characters }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mx-2">
      {characters.map((character) => (
        <Link
          to={`/details/${character.name}`}
          key={character.name}
          className="bg-white shadow-md p-4 border border-gray-200 transition ease-in-out hover:-translate-y-1 hover:scale-15"
        >
          <div>
            <img src={character.image} className="rounded-full max-w-24"/>
          </div>
          <div className="text-xl font-semibold font-poppins mb-2">
            {character.name}
            <p className="text-gray-600 font-normal font-monserrat">
              {character.text}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default TestamentComponent;
