import React from "react";
import EditNote from "./modals/EditNote";

const Note = ({
  titleNote,
  contentNote,
  dateNote,
  idNote,
  onChangeNote,
  onDeleteNote,
}) => {
  const handleChangeNote = () => {
    onChangeNote(idNote);
  };
  const handleDeleteNote = () => {
    onDeleteNote(idNote);
  };

  return (
    <div className="card w-2/3 sm:w-1/4 lg:w-1/5 bg-base-100 shadow-xl">
      <div className="card-body p-3">
        {/* Header */}
        <header className="dropdown dropdown-bottom dropdown-end flex justify-end">
          <label tabIndex={0} className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                className="text-error hover:bg-error/50"
                onClick={handleDeleteNote}
              >
                Borrar nota
              </a>
            </li>
            <li>
              <EditNote handleChangeNote={handleChangeNote}/>
            </li>
          </ul>
        </header>
        {/* Content */}
        <div className="border-b-[1px] border-gray-600 pb-4">
          <h2 className="text-center text-ellipsis overflow-hidden text-2xl">
            {titleNote}
          </h2>
        </div>
        <p className="text-ellipsis overflow-hidden py-2"> {contentNote} </p>
        {/* Footer */}
        <footer className="border-t-[1px] border-gray-600 flex justify-center pt-4 pb-1">
          <span className="text-ellipsis overflow-hidden"> {dateNote} </span>
        </footer>
      </div>
    </div>
  );
};

export default Note;
