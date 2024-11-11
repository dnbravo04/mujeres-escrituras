import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const { image, name, text } = character;

  return (
    <Link
      to={`/details/${name}`}
      key={name}
      className="flex flex-row bg-white shadow-md p-4 border border-gray-200 transition ease-in-out hover:-translate-y-1 hover:scale-105"
    >
      <img
        src={image}
        alt={name}
        className="rounded-full mr-2 object-cover h-12 sm:h-14 md:h-16 lg:h-20 w-12 sm:w-14 md:w-16 lg:w-20"
      />
      <div className="text-xl font-semibold font-poppins mb-2">
        {name}
        <p className="text-gray-600 font-normal font-monserrat">{text}</p>
      </div>
    </Link>
  );
};

const CharacterList = ({ characters }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-4 w-full">
      {characters.map((character) => (
        <CharacterCard key={character.name} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;