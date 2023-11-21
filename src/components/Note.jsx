import React from "react";

const Note = ({ titleNote, contentNote, dateNote, idNote, onChangeNote, onDeleteNote }) => {

  const handleChangeNote = () => {
    onChangeNote(idNote);
  }
  const handleDeleteNote = () => {
    onDeleteNote(idNote);
  }


  return (
    <div className="card w-2/3 sm:w-1/4 lg:w-1/5 bg-base-100 shadow-xl">
      <div className="card-body">
        {/* Header */}
        <div className="card-actions justify-end">
          <details className="dropdown dropdown-left">
            <summary className="m-1 btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <button className="btn btn-secondary" onClick={handleDeleteNote} >
                  Borrar nota
                </button>
              </li>

              <li>
                <button className="btn btn-secondary" onClick={handleChangeNote} >
                  Editar nota
                </button>
              </li>
            </ul>
          </details>
        </div>
        {/* Content */}
        <div className="border-b-[1px] border-gray-600">
          <h2 className="text-center text-ellipsis text-2xl">{titleNote}</h2>
        </div>
        <p> {contentNote} </p>
        {/* Footer */}
        <div className="border-t-[1px] border-gray-600">
          <span className="text-ellipsis"> {dateNote} </span>
        </div>
      </div>
    </div>
  );
};

export default Note;