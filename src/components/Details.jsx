import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "./details/Title";
import KeyConcepts from "./details/KeyConcepts";
import Introduction from "./details/Introduction";
import ComplementaryData from "./details/ComplementaryData";
import Flowers from "../assets/svg/flowers-horizontalspring-composition-stroke-by-Vexels.svg?react"
const Details = () => {
  const { characterName } = useParams();
  const [characterDetails, setCharacterDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/details.json");
        if (!response.ok) {
          throw new Error("Error al cargar los detalles");
        }
        const data = await response.json();
        const character = data.find(
          (char) => char.name.toLowerCase() === characterName.toLowerCase()
        );
        if (!character) {
          throw new Error("Personaje no encontrado");
        }
        setCharacterDetails(character);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [characterName]);

  if (loading) {
    return <div>Cargando detalles...</div>;
  }

  if (error) {
    return (
      <div>
        Error: {error}
        <Link to={-1}>regresar</Link>
      </div>
    );
  }

  if (!characterDetails) {
    return (
      <div>
        No se encontraron detalles del personaje
        <Link to={-1}>regresar</Link>;
      </div>
    );
  }
  return (
    <div>
      <Title name={characterDetails.name} book={characterDetails.book} />
      <br />
      <Introduction
        reference={characterDetails.introReference}
        quote={characterDetails.introQuote}
        intro={characterDetails.introParagraph}
        image={characterDetails.introImage}
      />
      <div className="m-full">
      <Flowers className="mx-auto m-12" height="100"/>
      </div>
      <KeyConcepts list={characterDetails.keyConcepts} image={characterDetails.keyConceptsImage}/>
      <Flowers className="mx-auto m-12" height="100"/>
      <ComplementaryData data={characterDetails.complementaryData} />
      <br />
      <div className="p-6 flex-1 bg-gradient-to-br from-orange-800 to-amber-700 grid place-items-center">
      <Link className="text-white font-monserrat text-2xl" to={-1}>Regresar</Link>
      </div>
    </div>
  );
};
export default Details;
