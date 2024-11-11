import React from "react";

function KeyConcept({ name, description, link, hasLink, category }) {
  return (
    <article
      key={name}
      className="bg-white shadow-lg border border-stone-300 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
    >
      {hasLink ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6"
        >
          <h3 className="text-xl font-semibold text-stone-800 mb-2">{name}</h3>
          <p className="text-stone-700">{description}</p>
        </a>
      ) : (
        <div className="p-6">
          <h3 className="text-xl font-semibold text-stone-800 mb-2">{name}</h3>
          <p className="text-stone-700">{description}</p>
          <p className="text-sm text-stone-500 italic mt-2">
            No hay enlace disponible.
          </p>
        </div>
      )}
      {category && (
        <div className="bg-stone-200 text-stone-700 text-xs uppercase font-medium py-1 px-3 border-t border-stone-300 mx-6 mb-4 mt-2 inline-block">
          {category}
        </div>
      )}
    </article>
  );
}

export default function KeyConcepts({ list, image }) {
  return (
    <section className="container mx-auto px-4 py-8 bg-stone-100 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {list.length > 0 ? (
            list.map((item) => <KeyConcept key={item.name} {...item} />)
          ) : (
            <p className="text-center text-stone-600">
              No se encontraron conceptos clave.
            </p>
          )}
        </div>
        <div className="col-span-1 flex items-center justify-center">
          {image && (
            <img
              src={image}
              alt="Image Description"
              className="border-4 border-double border-stone-300 shadow-lg object-cover h-96 w-full max-w-xs"
            />
          )}
        </div>
      </div>
    </section>
  );
}
