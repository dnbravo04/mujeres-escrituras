import React from "react";

export default function ComplementaryData({ data }) {
  if (!data || !Array.isArray(data)) {
    return <p>No hay datos disponibles</p>;
  }

  const renderContent = (item) => {
    switch (item.type) {
      case "link":
        return (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-stone-800 hover:text-stone-600 transition-colors"
          >
            {item.text}
          </a>
        );
      case "image-horizontal":
        return (
          <div className="w-full max-w-lg mx-auto">
            <img
              src={item.url}
              alt={item.text || "Imagen horizontal"}
              className="w-full h-auto object-cover border border-stone-300 shadow-md"
            />
            {item.text && (
              <p className="text-stone-700 mt-2 text-center">{item.text}</p>
            )}
          </div>
        );
      case "image-vertical":
        return (
          <div className="w-full max-w-xs mx-auto">
            <img
              src={item.url}
              alt={item.text || "Imagen vertical"}
              className="w-full h-auto object-cover border border-stone-300 shadow-md"
            />
            {item.text && (
              <p className="text-stone-700 mt-2 text-center">{item.text}</p>
            )}
          </div>
        );
      case "quote":
        return (
          <>
          <blockquote className="text-stone-800 italic border-l-4 border-stone-500 pl-4">
            <q className="font-semibold text-lg">{item.text}</q>
          </blockquote>
            <p className="text-stone-600 mt-2">- {item.author}</p>
          </>
        );
      case "video":
        return (
          <div className="w-full max-w-lg mx-auto aspect-video">
            <iframe
              src={item.url}
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border border-stone-300 shadow-md"
            ></iframe>
          </div>
        );
      default:
        return <p>Tipo desconocido</p>;
    }
  };

  return (
    <section className="container mx-auto px-4 py-8 bg-stone-100 shadow-sm">
      <ul className="space-y-6">
        {data.map((item, index) => (
          <li
            key={index}
            className="bg-white border border-stone-300 p-6 shadow-lg rounded-none transition-transform transform hover:scale-105"
          >
            {renderContent(item)}
          </li>
        ))}
      </ul>
    </section>
  );
}
