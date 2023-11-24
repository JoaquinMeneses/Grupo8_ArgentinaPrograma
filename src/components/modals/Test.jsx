import React, { useRef } from "react";

const ModalNote = ({ handleCreateNote }) => {
  let title = useRef();
  let description = useRef();
  return (
    <>
      <button
        className="btn btn-primary text-white"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Crear grupo de notas
      </button>
      <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">
            Crear grupo de notas
          </h3>
          <form className="form-control w-full">
            <div>
              <label className="label pb-[0.2rem]" htmlFor="inputTitle">
                <span className="label-text">Título</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                id="inputTitle"
                required
                ref={title}
              />
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog" className="flex gap-2">
              <button className="btn btn-error">Cancelar</button>
              <button
                className="btn btn-success"
                onClick={() => console.log("Probando")}
              >
                Crear
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalNote;
