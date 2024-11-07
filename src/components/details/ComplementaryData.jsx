import React from "react";

export default function ComplementaryData({ data }) {
  if (!data || !Array.isArray(data)) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <h2 className="text-3xl font-poppins text-center mx-auto font-bold">
        Recursos adicionales
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data.map((item, index) => {
          switch (item.type) {
            case "link":
              return (
                <div
                  key={index}
                  className=" bg-white shadow-md p-4 border border-gray-200 my-2 transition ease-in-out hover:-translate-y-1 hover:scale-15"
                >
                  <p>
                    <a className="underline" href={item.link}>
                      {item.text}
                    </a>
                  </p>
                </div>
              );

            case "image-horizontal":
              return (
                <div
                  key={index}
                  className="flex flex-row items-center bg-white shadow-md p-4 border border-gray-200 my-2 transition ease-in-out hover:-translate-y-1 hover:scale-15"
                >
                  <img
                    src={item.url}
                    alt={item.text}
                    className="w-full max-w-96"
                    style={{ width: "100%", maxWidth: "400px" }}
                  />
                  {item.text && <p>{item.text}</p>}
                </div>
              );
            case "image-vertical":
              return (
                <div
                  key={index}
                  className="flex flex-row items-center bg-white shadow-md p-4 border border-gray-200 my-2 transition ease-in-out hover:-translate-y-1 hover:scale-15"
                >
                  <img
                    src={item.url}
                    alt={item.text}
                    className="h-full max-h-96"
                  />
                  {item.text && <p>{item.text}</p>}
                </div>
              );

            case "quote":
              return (
                <div
                  key={index}
                  className="flex flex-row items-center bg-white shadow-md p-4 border border-gray-200 my-2 transition ease-in-out hover:-translate-y-1 hover:scale-15"
                >
                  <blockquote>
                    <q className="text-monserrat font-semibold">{item.text}</q>
                    <p>{item.author}</p>
                  </blockquote>
                </div>
              );

            case "video":
              return (
                <div
                  key={index}
                  className="flex flex-row items-center bg-white shadow-md p-4 border border-gray-200 my-2 transition ease-in-out hover:-translate-y-1 hover:scale-15"
                >
                  <iframe
                    width="560"
                    height="315"
                    src={item.url}
                    title="Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              );

            default:
              return (
                <div key={index}>
                  <p>Unknown type</p>
                </div>
              );
          }
        })}
      </div>
    </div>
  );
}
