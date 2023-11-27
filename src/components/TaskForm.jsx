import React, { useRef, useState } from "react";

const TaskForm = ({ handleCreateNote }) => {
  const title = useRef();
  const description = useRef();
  const [isTitleDisabled, setIsTitleDisabled] = useState(true);
  const [isDescriptionDisabled, setIsDescriptionDisabled] = useState(true);

  const handleInputChange = () => {
    setIsTitleDisabled(title.current.value.trim().length === 0);
    setIsDescriptionDisabled(description.current.value.trim().length === 0);
  };

  const handleShowModal = () => {
    document.getElementById("my_modal_1").showModal();
    setIsTitleDisabled(true);
    setIsDescriptionDisabled(true);
  };

  const handleCreateNoteAndReset = () => {
    handleCreateNote(title, description);
    title.current.value = "";
    description.current.value = "";
    setIsTitleDisabled(true);
    setIsDescriptionDisabled(true);
    document.getElementById("my_modal_1").close();
  };

  return (
    <>
      <button className="btn btn-primary text-white" onClick={handleShowModal}>
        Crear nota
      </button>
      <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-2xl text-center">Crear nota</h3>
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
                autoComplete="off"
                ref={title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="label pb-[0.2rem]" htmlFor="inputDescription">
                <span className="label-text">Descripción</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full resize-none"
                id="inputDescription"
                required
                rows={6}
                ref={description}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog" className="w-full flex justify-end gap-4">
              <button className="btn btn-error">Cancelar</button>
              <button
                className="btn btn-success"
                onClick={() => handleCreateNoteAndReset(title, description)}
                disabled={isTitleDisabled || isDescriptionDisabled}
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

export default TaskForm;
