import React from "react";

export default function ComplementaryData({ data }) {
  if (!data || !Array.isArray(data)) {
    return <p>No hay datos disponibles</p>;
  }

  const renderContent = (item) => {
    switch (item.type) {
      case "link":
        return (
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="underline text-stone-800">
            {item.text}
          </a>
        );
      case "image-horizontal":
      case "image-vertical":
        return (
          <>
            <img
              src={item.url}
              alt={item.text || "Imagen adicional"}
              className={item.type === "image-horizontal" ? "w-full max-w-md" : "max-h-96"}
            />
            {item.text && <p className="text-stone-700 mt-2">{item.text}</p>}
          </>
        );
      case "quote":
        return (
          <blockquote className="text-stone-800 italic">
            <q className="font-semibold text-lg">{item.text}</q>
            <p className="text-stone-600 mt-2">- {item.author}</p>
          </blockquote>
        );
      case "video":
        return (
          <iframe
            width="100%"
            height="315"
            src={item.url}
            title="Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full max-w-md"
          ></iframe>
        );
      default:
        return <p>Tipo desconocido</p>;
    }
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-poppins text-center font-bold text-stone-800 mb-8">
        Recursos adicionales
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg border border-stone-300 p-6 transition-transform transform hover:scale-105"
          >
            {renderContent(item)}
          </div>
        ))}
      </div>
    </section>
  );
}
