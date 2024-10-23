import React, { useState, useEffect } from "react";
import { MainTitle } from "./MainTitle";
import { Introduction } from "./Introduction";
import { Closure } from "./Closure";
import TestamentComponent from "./TestamentComponent";
import { Footer } from "./Footer";

export const Home = () => {
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(true);

  let books = {
    oldTestament: "Antiguo Testamento",
    newTestament: "Nuevo Testamento",
    bookOfMormon: "Libro de Mormón",
    churchHistory: "Historia de la Iglesia",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/index.json");
        if (!response.ok) {
          throw new Error("Error al cargar los datos");
        }
        const data = await response.json();
        setBooksData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="h-screen snap-start">
        <MainTitle />
      </div>
      <div className="h-screen snap-start">
        <Introduction />
      </div>
      {Object.entries(books).map(([key, value]) => {
        const filteredCharacters = booksData.filter(
          (character) => character.book === key
        );
        return (
          <div key={key} className="h-screen snap-center flex flex-col">
            <h2 className="text-2xl font-bold mb-4">{value}</h2>
            <TestamentComponent characters={filteredCharacters} />
          </div>
        );
      })}
      <div className="h-screen snap-start">
        <Closure />
      </div>
    </div>
  );
};
