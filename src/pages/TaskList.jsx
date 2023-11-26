import React, { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import TaskItem from "../components/TaskItem";
import CreateNote from "../components/modals/TaskForm";

const Main = () => {
  const [notes, setNotes] = useState([]);

  const handleCreateNote = (titleInput, descriptionInput) => {
    let title = titleInput.current.value;
    let content = descriptionInput.current.value;
    const date = new Date();

    const newNote = {
      id: uuidv4(),
      title: title,
      content: content,
      isRealized: false,
      date: date.toLocaleString(),
    };
    setNotes([...notes, newNote]);
    console.log(newNote.id + " created");
  };

  const handleDeleteNote = (id) => {
    console.log(id + " deleted");
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleRealizedNote = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, isRealized: !note.isRealized } : note
    );

    notes.map((note) => {
      if (note.id === id) {
        console.log(note.isRealized);
      }
    });
    setNotes(updatedNotes);
  };

  useEffect(() => {
    let localStorageData = localStorage.getItem("storageNotes");
    localStorageData && setNotes(JSON.parse(localStorageData));
  }, []);

  useEffect(() => {
    localStorage.setItem("storageNotes", JSON.stringify(notes));
  }, [notes]);

  const [searchString, setSearchString] = useState("");
  const [currentNotes, setCurrentNotes] = useState([]);

  const handleFilterChange = (e) => {
    setSearchString(e.target.value);
  };
  useEffect(() => {
    setCurrentNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(searchString.toLowerCase())
      )
    );
  }, [searchString, notes]);

  return (
    <>
      <div className="container my-5 mx-auto bg-white/20 rounded-lg">
        <div className=" flex justify-between px-3 pt-3">
          <input
            type="text"
            placeholder="Buscar tarea..."
            value={searchString}
            onChange={handleFilterChange}
            className="input input-bordered w-full max-w-xs focus:outline-0	 focus:input-primary"
          />
          <CreateNote handleCreateNote={handleCreateNote} />
        </div>
        <h1 className="text-center text-5xl mt-2 font-bold">Notas</h1>
        {/* Parámetro titulo */}
        <div className="py-10 gap-4 rounded-lg flex justify-center flex-wrap">
          {currentNotes.map((note, index) => (
            <TaskItem
              key={index}
              titleNote={note.title}
              contentNote={note.content}
              dateNote={note.date}
              idNote={note.id}
              isRealizedNote={note.isRealized}
              handleRealizedNote={handleRealizedNote}
              handleDeleteNote={handleDeleteNote}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
