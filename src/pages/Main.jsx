import React from "react";
import NavBar from "../components/NavBar";

import Note from "../components/Note";

const Main = () => {
  return (
    <>
      <NavBar />
      {/* <Test/> */}
      <div className="container my-10 mx-auto bg-white/20 rounded-lg">
        <div className=" flex justify-end pt-3 pr-3">
          <button className="btn btn-square btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-center text-4xl">Medicamentos</h1>
        {/* Parámetro titulo */}
        <div className="py-10 gap-4 rounded-lg flex justify-center flex-wrap">
          <Note />
          <Note />
          <Note />
          <Note />
        </div>
      </div>
    </>
  );
};

export default Main;
