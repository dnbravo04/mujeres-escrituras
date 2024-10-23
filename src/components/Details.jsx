// src/components/Details.jsx
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

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
          throw new Error('Error al cargar los detalles');
        }
        const data = await response.json();
        // Filtrar el personaje por nombre
        const character = data.find(char => char.name.toLowerCase() === characterName.toLowerCase());
        if (!character) {
          throw new Error('Personaje no encontrado');
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
    return <div>Error: {error}</div>;
    <Link to={-1}>regresar</Link>
  }

  if (!characterDetails) {
    return <div>No se encontraron detalles del personaje.</div>;
    <Link to={-1}>regresar</Link>
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{characterDetails.name}</h1>
      <p className="text-gray-600">{characterDetails.text}</p>
      <p className="mt-2">{characterDetails.details}</p>
      <p className="mt-2"><strong>Libro:</strong> {characterDetails.book}</p>
      <Link to={-1}>regresar</Link>
    </div>
  );
};

export default Details;