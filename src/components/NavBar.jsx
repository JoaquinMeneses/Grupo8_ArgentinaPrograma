import React, { useState, useEffect, useRef } from "react";
import CreateGroupNotes from "./modals/CreateGroupNotes";

const NavBar = () => {
  const [groupNotes, setGroupNotes] = useState([]);
  let title = useRef();

  const handleCreateGroupNotes = (titleInput) => {
    let title = titleInput.current.value;

    const newGroup = {
      id: groupNotes.length + 1,
      title: title,
      notes: [],
    };
    setGroupNotes([...groupNotes, newGroup]);
  };

  useEffect(() => {
    let localStorageData = localStorage.getItem("storageGroupNotes");
    localStorageData && setGroupNotes(JSON.parse(localStorageData));
  }, []);

  useEffect(() => {
    localStorage.setItem("storageGroupNotes", JSON.stringify(groupNotes));
  }, [groupNotes]);

  const [activeTab, setActiveTab] = useState(null);

  function changeTabActive(id) {
    setActiveTab(id);
  }
  
  return (
    <div className="bg-white/10 flex flex-row p-5 ">
      <div className="flex gap-2">
        <CreateGroupNotes
          handleCreateGroupNotes={handleCreateGroupNotes}
          title={title}
        />
        <div role="tablist" className="tabs tabs-boxed">
          {groupNotes.map((groupNote) => (
            <a
              role="tab"
              className={`tab ${
                activeTab === groupNote.id ? "tab-active" : ""
              }`}
              key={groupNote.id}
              onClick={() => changeTabActive(groupNote.id)}
            >
              {groupNote.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
