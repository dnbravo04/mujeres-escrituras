import React from "react";
import { Link } from "react-router-dom";
const TestamentComponent = ({ characters }) => {
  return (
    <div className="snap-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {characters.map((character) => (
        <div
          key={character.name}
          className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
        >
          <Link to={`/details/${character.name}`} className="text-xl font-semibold mb-2">{character.name}</Link>
          <p className="text-gray-600">{character.text}</p>
        </div>
      ))}
    </div>
  );
};
export default TestamentComponent;
