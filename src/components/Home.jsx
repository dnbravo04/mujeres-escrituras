import React, { useState, useEffect } from "react";
import { MainTitle } from "./home/MainTitle";
import { Introduction } from "./home/Introduction";
import TestamentComponent from "./home/TestamentComponent";
import classNames from "classnames";

export const Home = () => {
  const [data, setData] = useState({ booksList: [], booksData: [] });
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

        setData({ booksList: booksData, booksData: charactersData });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <section className="h-screen snap-start">
        <MainTitle />
      </section>
      <section className="h-screen snap-start">
        <Introduction />
      </section>

      {data.booksList.map((book) => {
        const filteredCharacters = data.booksData.filter(
          (character) => character.book === book.book
        );

        return (
          <section
            key={book.book}
            className="h-screen snap-center grid grid-cols-2 place-items-center"
          >
            <TestamentComponent characters={filteredCharacters} />
            <div
              className={classNames(
                "relative w-full h-full bg-cover bg-center flex items-center justify-center",
                `bg-${book.background}`
              )}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <h2 className="relative p-4 border-2 border-white bg-black bg-opacity-80 text-2xl font-bold font-playwrite text-white text-center">
                {book.name}
              </h2>
            </div>
          </section>
        );
      })}
   </div>
  );
};
