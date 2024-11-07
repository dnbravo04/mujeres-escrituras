import React from "react";

function Title({name, book }) {
  return (
    <div className="bg-cyan-200 bg-fixed h-52 flex items-center justify-center flex-col">
      <div className="font-playwrite text-5xl p-4">
      {name}
      </div >
      <div className="font-poppins">
      {book}
      </div>
    </div>
  );
}

export default Title;
