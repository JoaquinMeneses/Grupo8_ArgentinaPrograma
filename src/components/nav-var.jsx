import React from 'react'
import "./nav-var.css"
 const Var = () => {
  return (
    <div className="nav-var bg-black flex flex-row p-9 ">
    <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Crear Grupo</button>
    <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <form method="dialog" className="method flex flex-row-reverse">
              <button className="btn btn-close"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square-fill" viewBox="0 0 16 16">
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
              </svg></button>
            </form>
            <div className="new-gorup">
              <h3 className="font-bold text-lg">Titulo</h3>
              <input type="text" className="mb-9 "/>
              <h3 className="font-bold text-lg">Descripción</h3>
              <input type="text" className="p-8" />
            </div>
            <div className="modal-action">
              <button className="btn">Guardar</button>
            </div>
        </div>
    </dialog>
    <div className="create-var pl-20 flex gap-10 overflow-x-auto overscroll-x-contain ">
      <button className="btn btn-secondary w-20">Button</button>
      <button className="btn btn-secondary w-20">Button</button>
      <button className="btn btn-secondary w-20">Button</button>
      <button className="btn btn-secondary w-20">Button</button>
      <button className="btn btn-secondary w-20">Button</button>
      <button className="btn btn-secondary w-20">Button</button>
      <button className="btn btn-secondary w-20">Button</button>
      <button className="btn btn-secondary w-20">Button</button>
      <button className="btn btn-secondary w-20">Button</button>
      <button className="btn btn-secondary w-20">Button</button>
      </div>
  </div>
  )
}

export default Var