import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "./details/Title";
import KeyConcepts from "./details/KeyConcepts";
import Introduction from "./details/Introduction";
import Extra from "./details/Extra";

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
        No se encontraron detalles del personaje.
        <Link to={-1}>regresar</Link>;
      </div>
    );
  }

  return (
    <div>
      <Title name={characterDetails.name} book={characterDetails.book} />
      <Introduction quote={characterDetails.introQuote} intro={characterDetails.introParagraph}/>
      <KeyConcepts list={characterDetails.KeyConcepts}/>
      <Extra items={characterDetails.extra}/>
      <Link to={-1}>regresar</Link>
    </div>
  );
};

export default Details;
