import React from "react";

export const MainTitle = () => {
  return (
    <div className="h-screen snap-start bg-fixed bg-title">
      <div className="h-screen snap-start bg-stone-500 bg-opacity-40 flex flex-wrap items-center justify-center">
        <div className="border shadow-lg border-slate-200 bg-opacity-45 bg-gradient-to-r from-orange-900/45 to-amber-600/45  p-5">
          <h1 className="text-center text-slate-200  text-4xl font-playwrite">
            Mujeres de las Escrituras
          </h1>
          <br />
          <h2 className="text-xl text-center justify-center text-slate-100 font-poppins">
            La manifestación del amor de Dios a traves de poderosas mujeres
            <br /> y sus acontecimientos narrados en las escrituras.
          </h2>
          <br />
        </div>
      </div>
    </div>
  );
};
