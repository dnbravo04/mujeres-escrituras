import React from "react";

export const Introduction = () => {
  return (
    <div className="h-screen snap-start flex">
      <div className="h-screen bg-[url(src/assets/introimage.jpg)] bg-cover bg-center flex-1 items-center justify-center">
        <div className="grid place-items-center h-screen">
          <div className="mx-8 text-white border-2 p-4 bg-orange-800 bg-opacity-55">
            <blockquote
              cite="https://www.churchofjesuschrist.org/study/manual/institute-secondary-electives-student-readings-and-selected-course-outlines/women-in-the-scriptures-course-outline?lang=spa&id=p2#p2"
              className=" font-playwrite text-2xl"
            >
              “La vida de las mujeres de la Iglesia es un fuerte testimonio de
              que los dones espirituales, las promesas y las bendiciones del
              Señor son para todos los que sean dignos de ellos, ‘para que se
              beneficien todos’ [D. y C. 46:9]”
            </blockquote>
            <p className="pt-4 text-lg">
              - Dieter F. Uchtdorf, “La influencia de una mujer justa”, pág. 5
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen bg-gradient-to-br from-orange-800 to-amber-700 flex-1 grid place-items-center">
        <div className="mx-8 text-white">
          <h2 className="text-xl font-semibold font-poppins">
            ¿Por qué es importante estudiar a las mujeres en las escrituras?
          </h2>
          <p className="text-justify ">
            El Señor ha mandado a sus hijos a buscar "sabiduría de los mejores
            libros; buscad conocimiento, tanto por el estudio como por la fe",
            una invitación a poder analizar la vida de aquellas personas que
            tenían comunicación con el, y suiguiendo ese ejemplo, que nosotros
            mismos podamos adquirir conocimiento y sabiduría.
            <br />
            El proposito de esta clase será entonces buscar la sabiduria de
            aquellas mujeres que a traves de sus palabas y/o ejemplo le
            demostraron a sus comunidades que el Señor no solamente manifestaba
            su poder y su amor por medio de los profetas, sino que tambien lo
            hacía con mujeres justas.
          </p>
          <br />
          <h2 className="text-xl font-semibold font-poppins">
            ¿Que aprenderemos al finalizar este curso?
          </h2>
          <p className="text-justify">
            Las diferentes historias de fe de Mujeres a traves de la historia y
            el como podremos aplicarlas a nuestra vida, al hacer un estudio de
            las esrituras con una perspectiva diferente, enfocada en estas
            mujeres y su contexto
          </p>
        </div>
      </div>
    </div>
  );
};
