import React from "react";
import { Note } from "./Note";

export const Main = () => {
  return (
    <div className="w-screen h-screen flex justify-center ">
      <div className="bg-white/10 w-[80%] h-full">
        <h1 className="text-center p-2">Medicamentos</h1>
        <div className="flex justify-center">
          <Note />
          <Note />
          <Note />
        </div>
      </div>
    </div>
  );
};
