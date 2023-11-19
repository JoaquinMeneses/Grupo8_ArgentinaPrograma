import React from "react";
import Var from "../components/nav-var";
import CardContainer from "../components/card/CardContainer";

const Template = () => {
  return (
    <>
      <Var/>
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
