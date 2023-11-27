import React from "react";

const Alert = ({ type }) => {
  return (
    <>
      {type === "deleted" ? (
        <div
          role="alert"
          className="alert alert-error fixed w-auto bottom-0 right-0 z-10 m-2"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span>Nota eliminada</span>
        </div>
      ) : (
        <div
          role="alert"
          className="alert alert-success fixed w-auto bottom-0 right-0 z-10 m-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          <span className="text-black">Nota creada</span>
        </div>
      )}
    </>
  );
};

export default Alert;
