import React, { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";
import Alert from "../components/Alert";

const Main = () => {
  const [notes, setNotes] = useState([]);
  const [alert, setAlert] = useState(null);

  const handleAlert = (type) => {
    setAlert(type);
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

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
    handleAlert("created");
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    handleAlert("deleted");
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
      {alert && <Alert type={alert} />}
      <div className="container my-5 mx-auto bg-white/20 rounded-lg">
        <div className=" flex justify-between px-3 pt-3">
          <input
            type="text"
            placeholder="Buscar tarea..."
            value={searchString}
            onChange={handleFilterChange}
            className="input input-bordered w-full max-w-xs focus:outline-0	 focus:input-primary"
          />
          <TaskForm handleCreateNote={handleCreateNote} />
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
