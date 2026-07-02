import React, { useState } from "react";

const NoteForm = ({addNote}) => {
  const [title, setTitle] = useState("");

  const [desc, setDesc] = useState("");

  function handelTitle(e) {
    setTitle(e.target.value);
  }

  function handleDesc(e) {
    setDesc(e.target.value);
  }

  return (
    <div className="form-container">
      <input
        placeholder="Enter Title"
        value={title}
        type="text"
        onChange={handelTitle}
      />
      <textarea
        placeholder="Enter Description"
        value={desc}
        type="text"
        onChange={handleDesc}
      ></textarea>
      <button
        onClick={() => {
          addNote(title, desc);
          setTitle("");
          setDesc("");
        }}
      >
        Add Notes
      </button>
    </div>
  );
};

export default NoteForm;
