import React from "react";

export const Introduction = () => {
  return (
    <div className="h-screen flex flex-col">

      <div className="h-full flex-1 relative bg-no-repeat bg-cover bg-center bg-introduction bg-stone-600 bg-opacity-60 grid place-items-center">
        <div className="mx-8 text-white shadow-lg border-2 p-6 bg-stone-700 bg-opacity-80">
          <blockquote
            cite="https://www.churchofjesuschrist.org/study/manual/institute-secondary-electives-student-readings-and-selected-course-outlines/women-in-the-scriptures-course-outline?lang=spa&id=p2#p2"
            className="font-playwrite text-3xl text-center italic"
          >
            “La vida de las mujeres de la Iglesia es un fuerte testimonio de que
            los dones espirituales, las promesas y las bendiciones del Señor son
            para todos los que sean dignos de ellos, ‘para que se beneficien
            todos’ [D. y C. 46:9]”
          </blockquote>
          <p className="pt-4 text-lg font-poppins">
            - Dieter F. Uchtdorf, “La influencia de una mujer justa”, pág. 5
          </p>
        </div>
      </div>

      <div className="h-screen flex-1 bg-stone-100 grid place-items-center px-8 py-6">
        <div className="max-w-3xl text-stone-800">
          <h2 className="text-2xl font-semibold font-poppins mb-4">
            ¿Por qué es importante estudiar a las mujeres en las escrituras?
          </h2>
          <p className="text-justify mb-4">
            El Señor ha mandado a sus hijos a buscar "sabiduría de los mejores
            libros; buscad conocimiento, tanto por el estudio como por la fe",
            una invitación a poder analizar la vida de aquellas personas que
            tenían comunicación con Él y, siguiendo ese ejemplo, que nosotros
            mismos podamos adquirir conocimiento y sabiduría.
            <br />
            El propósito de esta clase será entonces buscar la sabiduría de
            aquellas mujeres que, a través de sus palabras y/o ejemplo,
            demostraron a sus comunidades que el Señor no solamente manifestaba
            su poder y su amor por medio de los profetas, sino también con
            mujeres justas.
          </p>

          <h2 className="text-2xl font-semibold font-poppins mb-4">
            ¿Qué aprenderemos al finalizar este curso?
          </h2>
          <p className="text-justify">
            Las diferentes historias de fe de mujeres a través de la historia y
            cómo podremos aplicarlas a nuestra vida, haciendo un estudio de las
            escrituras con una perspectiva diferente, enfocada en estas mujeres
            y su contexto.
          </p>
        </div>
      </div>
    </div>
  );
};
