import React from "react";
import CardContainer from "../components/card/CardContainer";

const Template = () => {
  return (
    <>
      <div className="nav-var bg-black flex flex-row p-9 ">
        <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Crear Grupo</button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
              </svg></button>
            </form>
            <h3 className="font-bold text-lg">Titulo</h3>
            <input type="text" />
            <h3 className="font-bold text-lg h-10000">Titulo</h3>
            <select name="priority">
              <option>Hecho</option>
              <option>Poco urgente</option>
              <option>Urgente</option>
            </select>
            <h3 className="font-bold text-lg">Descripción</h3>
            <input type="text" className="p-8" />
            <div className="modal-action">
              <button className="btn">Guardar</button>
            </div>
          </div>
        </dialog>
        <div className="create-var">
          <button className="btn btn-secondary">Button</button>
          <button className="btn btn-secondary">Button</button>
        </div>
      </div>
      <div className="container mt-20 mx-auto bg-[#455A64] rounded-lg">
        <div className=" text-black flex justify-end pt-3 pr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        </div>
        <h1 className="text-center text-black text-4xl">Medicamentos</h1>               {/* Parámetro titulo */}
        <div className="mt-20 rounded-lg flex justify-center">
          <CardContainer />
        </div>
      </div>

    </>
  );
};

export default Template;
