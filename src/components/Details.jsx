import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "./details/Title";
import KeyConcepts from "./details/KeyConcepts";
import Introduction from "./details/Introduction";
import ComplementaryData from "./details/ComplementaryData";
import Flowers from "../assets/svg/flowers-horizontalspring-composition-stroke-by-Vexels.svg?react";

const Details = () => {
  const { characterName } = useParams();
  const [characterDetails, setCharacterDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/details.json");
        if (!response.ok) throw new Error("Error al cargar los detalles");

        const data = await response.json();
        const character = data.find(
          (char) => char.name.toLowerCase() === characterName.toLowerCase()
        );
        if (!character) throw new Error("Personaje no encontrado");

        setCharacterDetails(character);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [characterName]);

  if (loading) return <div>Cargando detalles...</div>;

  if (error) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500 mb-4">Error: {error}</p>
        <Link to={-1} className="text-stone-800 underline">
          Regresar
        </Link>
      </div>
    );
  }

  if (!characterDetails) {
    return (
      <div className="text-center mt-10">
        <p className="text-stone-800">No se encontraron detalles del personaje</p>
        <Link to={-1} className="text-stone-800 underline mt-2 block">
          Regresar
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Title name={characterDetails.name} book={characterDetails.book} />

      <Introduction
        reference={characterDetails.introReference}
        quote={characterDetails.introQuote}
        intro={characterDetails.introParagraph}
        image={characterDetails.introImage}
      />

      <div className="flex justify-center my-6">
        <Flowers height="100" className="mx-auto" />
      </div>

      <KeyConcepts list={characterDetails.keyConcepts} image={characterDetails.keyConceptsImage} />

      <div className="flex justify-center my-6">
        <Flowers height="100" className="mx-auto" />
      </div>

      <ComplementaryData data={characterDetails.complementaryData} />

      <div className="p-6 bg-gradient-to-br from-orange-800 to-amber-700 flex justify-center mt-10">
        <Link to={-1} className="text-white font-playwrite text-2xl ">
          Regresar
        </Link>
      </div>
    </div>
  );
};

export default Details;
