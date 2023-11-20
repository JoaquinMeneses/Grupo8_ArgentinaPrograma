import React from "react";
import CreateGroupNotes from "./CreateGroupNotes";

const NavBar = () => {
  return (
    <div className="bg-white/10 flex flex-row p-5 ">
      <CreateGroupNotes />
      <div className="ml-20 flex gap-10">
        <button className="btn btn-secondary text-white">Lista de super</button>
        <button className="btn btn-secondary text-white">Medicamentos</button>
        <button className="btn btn-secondary text-white">Herramientas</button>
      </div>
    </div>
  );
};

export default NavBar;
