import React from "react";

export default function KeyList({ list }) {

  return(
    <div>
      <h1 >Conceptos clave</h1>
      <ul className="list-disc m-6">
        {
          list.map((item,index)=>(
            <li  key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}
