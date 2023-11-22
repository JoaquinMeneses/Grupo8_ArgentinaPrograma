import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

import Note from "../components/Note";

const Main = () => {
  const [notes, setNotes] = useState([]);

  const handleCreateNote = () => {
    const title = prompt("Ingresa el título de la nota:");
    const content = prompt("Ingresa la nota:");
    const date = new Date();

    const newNote = {
      id: notes.length + 1,
      title: title,
      content: content,
      date: date.toLocaleString(),
    };

    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleChangeNote = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);

    const newTitle = prompt(
      "Ingresa el nuevo título de la nota:",
      noteToEdit.title
    );
    const newContent = prompt(
      "Ingresa el nuevo contenido de la nota:",
      noteToEdit.content
    );

    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, title: newTitle, content: newContent } : note
    );

    setNotes(updatedNotes);
  };

  useEffect(() => {
    let localStorageData = localStorage.getItem("storageNotes");
    localStorageData && setNotes(JSON.parse(localStorageData));
  }, []);

  useEffect(() => {
    localStorage.setItem("storageNotes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <NavBar />
      {/* <Test/> */}
      <div className="container my-10 mx-auto bg-white/20 rounded-lg">
        <div className=" flex justify-end pt-3 pr-3">
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
                <button className="btn btn-primary" onClick={handleCreateNote}>
                  Crear nota
                </button>
              </li>
              <li>
                <a>...</a>
              </li>
            </ul>
          </details>
        </div>
        <h1 className="text-center text-4xl">Medicamentos</h1>
        {/* Parámetro titulo */}
        <div className="py-10 gap-4 rounded-lg flex justify-center flex-wrap">
          {notes.map((note, index) => (
            <Note
              key={index}
              titleNote={note.title}
              contentNote={note.content}
              dateNote={note.date}
              idNote={note.id}
              onChangeNote={handleChangeNote}
              onDeleteNote={handleDeleteNote}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
