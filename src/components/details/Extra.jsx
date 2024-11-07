import React from "react";

export default function Extra({ data }) {
  if (!data || !Array.isArray(data)) {
    return <p>No data available</p>;
  }

  return (
    <div>
      {data.map((item, index) => {
        switch (item.type) {
          case "link":
            return (
              <div key={index}>
                <p>
                  <strong>Esta información tambien puede ser util:</strong>{" "}
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
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  src={item.url}
                  alt={item.text}
                  style={{ width: "100%", maxWidth: "400px" }}
                />
                {item.text && <p>{item.text}</p>}
              </div>
            );
          case "image-vertical":
            return <></>;

          case "quote":
            return (
              <div key={index}>
                <blockquote>
                  <p>{item.text}</p>
                  <footer>{item.author}</footer>
                </blockquote>
              </div>
            );

          case "video":
            return (
              <div key={index}>
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
  );
}
