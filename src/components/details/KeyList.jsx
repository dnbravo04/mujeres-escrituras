import React from "react";

export default function KeyList({ list }) {

  return(
    <div>
      <h1 className="font-poppins font-bold">Conceptos clave</h1>
      <div className="list-disc m-6">
        {
          list.map((item,index)=>(
            <div key={index}>

            <div>{item.name}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
