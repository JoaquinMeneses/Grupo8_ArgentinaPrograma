import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Note from "../components/Note";
import CreateNote from "../components/modals/CreateNote";

const Main = () => {
  const [notes, setNotes] = useState([]);

  const handleCreateNote = (titleInput, descriptionInput) => {
    let title = titleInput.current.value;
    let content = descriptionInput.current.value;
    const date = new Date();

    const newNote = {
      id: notes.length + 1,
      title: title,
      content: content,
      date: date.toLocaleString(),
    };
    console.log(notes);
    setNotes([...notes, newNote]);
    // setCurrentNotes ([...notes, newNote]);
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


  // Buscador
  // const [filter, setFilter] = useState('')
  // const [currentNotes, setCurrentNotes] = useState('')

  // const handleFilterChange = (e) => {
  //   setFilter(e.target.value);
  // };

  // useEffect(() => {
  //   const filteredNotes = notes.filter((note) =>
  //     note.title.toLowerCase().includes(filter.toLowerCase())
  //   );
  //   setNotes(filter !== "" ? filteredNotes : notes);
  // }, [filter, notes]);


  return (
    <>
      <NavBar />
      {/* Buscador */}
      {/* <input
        placeholder="Buscar tarea..."
        value={filter}
        onChange={handleFilterChange}
        className="p-2 ml-5 mt-10 mb-3 rounded-md text-black"
      /> */}
      <div className="container my-10 mx-auto bg-white/20 rounded-lg">
        <div className=" flex justify-end pt-3 pr-3 gap-2">
          <CreateNote handleCreateNote={handleCreateNote} />
          <div className="dropdown dropdown-bottom dropdown-end">
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
                  Borrar grupo de notas
                </a>
              </li>
              <li>
                <a
                  className="text-info hover:bg-info/50"
                  onClick={handleChangeNote}
                >
                  Editar grupo de notas
                </a>
              </li>
            </ul>
          </div>
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
