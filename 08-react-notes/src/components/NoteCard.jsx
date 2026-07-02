import React from "react";

const NoteCard = ({ id, titel, desc, deleteNote }) => {
  return (
    <div className="note-card">
      <h3>{titel}</h3>
      <p>{desc}</p>
      <button
        onClick={() => {
          deleteNote(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default NoteCard;
