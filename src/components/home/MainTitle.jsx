import React from "react";

export const MainTitle = () => {
  return (
    <div className="h-screen snap-start bg-fixed bg-title bg-stone-600 bg-opacity-50">
      <div className="h-full flex flex-col justify-center items-center bg-stone-700 bg-opacity-60 p-8">
        <div className="border border-stone-400 shadow-xl bg-gradient-to-r from-yellow-900/70 to-amber-950/60 p-6 max-w-4xl mx-auto">
          <h1 className="text-center text-slate-200 text-4xl font-playwrite">
            Mujeres de las Escrituras
          </h1>
          <h2 className="text-center text-slate-100 text-xl font-poppins mt-4">
            La manifestación del amor de Dios a través de poderosas mujeres
            <br /> y sus acontecimientos narrados en las escrituras.
          </h2>
        </div>
      </div>
    </div>
  );
};
