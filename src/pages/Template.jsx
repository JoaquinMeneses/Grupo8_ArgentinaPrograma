import React from "react";

const Template = () => {
  return (
    <body>
      <header>
        <div className="header">
          <input
            type="text"
            placeholder="Buscar"
            className="buscador btn-buscador"
          />
          <button className="btn btn-hoy">Hoy</button>
          <button className="btn btn-manana">Mañana</button>
          <button className="btn btn-semana">Semana</button>
          <button className="btn btn-mes">Mes</button>
        </div>
      </header>

      <aside>
        <div className="sidebar">
          <button className="btn-create btn-sidebar">Crear sección</button>
          <div className="tareas">
            <button className="btn-sidebar btn-tareas">Agregar</button>
            <button className="btn-sidebar btn-tareas">Eliminar</button>
          </div>
        </div>
      </aside>

      <main>
        <div className="container">
          <input type="text" placeholder="Nombre de la tarea..." />
          <select className="input-priority">
            <option>Hecho</option>
            <option>Poca prioridad</option>
            <option>Prioridad Media</option>
            <option>Urgente</option>
          </select>
          <button>Crear tarea</button>
        </div>
      </main>
    </body>
  );
};

export default Template;
