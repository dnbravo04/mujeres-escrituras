import React, { useState, useEffect, useMemo } from "react";
import { MainTitle } from "./home/MainTitle";
import { Introduction } from "./home/Introduction";
import CharacterList from "./home/CharacterList";
import classNames from "classnames";

export const Home = () => {
  const [books, setBooks] = useState([]);
  const [characters, setCharacters] = useState([]);
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
          throw new Error("Error loading data. Please try again later.");
        }

        const booksData = await booksResponse.json();
        const charactersData = await charactersResponse.json();

        setBooks(booksData);
        setCharacters(charactersData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const charactersByBook = useMemo(() => {
    return books.reduce((acc, book) => {
      acc[book.book] = characters.filter(
        (character) => character.book === book.book
      );
      return acc;
    }, {});
  }, [books, characters]);

  if (loading)
    return <div className="text-center text-stone-800">Cargando...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-stone-100">
      <section className="h-screen snap-start">
        <MainTitle />
      </section>

      <section className="h-screen snap-start flex flex-col items-center justify-center bg-stone-300 p-8">
        <Introduction />
      </section>

      {books.map((book, index) => (
        <section
          key={book.book}
          className="h-screen snap-center grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center bg-stone-300 p-6"
        >
          <div
            className={classNames(
              "w-full mx-auto",
              index % 2 === 0 ? "order-last" : "order-first"
            )}
          >
            <CharacterList characters={charactersByBook[book.book] || []} />
          </div>

          <div
            className={classNames(
              "relative w-full h-full bg-cover bg-center flex items-center justify-center",
              `bg-${book.background}`,
              index % 2 === 0 ? "order-first" : "order-last"
            )}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h2 className="relative font-playwrite p-4 border-2 border-stone-600 bg-stone-700 bg-opacity-80 text-3xl font-bold text-white text-center">
              {book.name}
            </h2>
          </div>
        </section>
      ))}
    </div>
  );
};
