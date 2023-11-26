import React, { useRef } from "react";

const EditNote = ({ handleChangeNote }) => {
  let titleChanged = useRef();
  let descriptionChanged = useRef();
  return (
    <>
      <a
        className=""
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Editar Nota
      </a>
      <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle place-content-center">
        <div className="modal-box">
          <h3 className="font-bold text-2xl text-center">Editar nota</h3>
          <form className="form-control w-full">
            <div>
              <label className="label pb-[0.2rem]" htmlFor="inputTitle">
                <span className="label-text">Editar título</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                id="inputTitle"
                required
                ref={titleChanged}
              />
            </div>
            <div>
              <label className="label pb-[0.2rem]" htmlFor="inputDescription">
                <span className="label-text">Editar descripción</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full resize-none"
                id="inputDescription"
                required
                rows={6}
                ref={descriptionChanged}
              ></textarea>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog" className="w-full flex justify-end gap-5">
              <button className="btn btn-error hover:shadow-[0_0_10px_#cb185e]">Cancelar</button>
              <button
                className="btn btn-success hover:shadow-[0_0_10px_#8acb18]"
                onClick={() => handleChangeNote(titleChanged, descriptionChanged)}
              >
                Editar
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default EditNote;
