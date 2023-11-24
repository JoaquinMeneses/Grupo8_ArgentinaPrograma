import React, { useState, useEffect }from "react";
import CreateGroupNotes from "./CreateGroupNotes";

const NavBar = () => {
  // Guardar Títulos colocados en input
  const [buttons, setButtons] = useState([])

  //recibimos por parámetro el inputTitle
  const showButtons = (inputTitle) => {
    // Guardar lógica en setButton y ...prevButton copia todos los elementos anteriores del array
    setButtons((prevButton) => [...prevButton, inputTitle]);
  }

  /*useEffect (() =>{
    let data = localStorage.getItem('titulo');
    data && CreateGroupNotes(JSON.parse(data));
  },[]);


  useEffect (() =>{
    console.log(setButtons);
  },[setButtons]);*/


  return (
    <div className="bg-white/10 flex flex-row p-5 ">
      <CreateGroupNotes showButton={showButtons}/>
      <div className="ml-20 flex gap-10">
        {/* Renderizado de botones */}
        {buttons.map((buttonRender, index) => (
          <button className="btn" key={index}>
            {buttonRender}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;