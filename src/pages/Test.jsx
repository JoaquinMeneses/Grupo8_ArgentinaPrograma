import React, { useState } from "react";

const Test = () => {
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

  return (
    <div>
      <button className="btn btn-primary" onClick={handleCreateNote}>
        Crear nota
      </button>

      {notes.map((note, index) => (
        <div key={index}>
          <h1>{note.title}</h1>
          <p>{note.content}</p>
          <span>{note.date}</span>
          <button
            className="btn btn-secondary"
            onClick={() => handleDeleteNote(note.id)}
          >
            Borrar nota
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleChangeNote(note.id)}
          >
            Editar nota
          </button>
        </div>
      ))}
    </div>
  );
};

export default Test;
