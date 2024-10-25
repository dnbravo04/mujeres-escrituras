//fix image situation
import React, { useState, useEffect } from "react";
import { MainTitle } from "./home/MainTitle";
import { Introduction } from "./home/Introduction";
import { Closure } from "./home/Closure";
import TestamentComponent from "./home/TestamentComponent";

export const Home = () => {
  const [booksData, setBooksData] = useState([]);
  const [booksList, setBooksList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [booksResponse, charactersResponse] = await Promise.all([
          fetch("/books.json"),
          fetch("/index.json"),
        ]);

        if (!booksResponse.ok || !charactersResponse.ok) {
          throw new Error("Error al cargar los datos");
        }

        const booksData = await booksResponse.json();
        const charactersData = await charactersResponse.json();

        setBooksList(booksData);
        setBooksData(charactersData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="h-screen snap-start">
        <MainTitle />
      </div>
      <div className="h-screen snap-start">
        <Introduction />
      </div>
      {booksList.map((book) => {
        const filteredCharacters = booksData.filter(
          (character) => character.book === book.book
        );

        return (
          <div
            key={book.book}
            className="h-screen snap-center grid grid-cols-2 grid-rows-1 place-items-center"
          >
            <TestamentComponent characters={filteredCharacters} />
            <div className="relative overflow-hidden bg-no-repeat bg-cover bg-center w-full">
              <div className={`fixed inset-0 bg-cover bg-center bg-opacity-75 bg-${book.background}`}></div>
              <h2 className="text-2xl text-center justify-center font-bold mb-4 font-playwrite">
                {book.name}
              </h2>
            </div>
          </div>
        );
      })}

      <div className="h-screen snap-start">
        <Closure />
      </div>
    </div>
  );
};
