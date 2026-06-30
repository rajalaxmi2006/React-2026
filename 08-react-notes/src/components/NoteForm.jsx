import React, { useState } from "react";

const NoteForm = () => {
  const [title, setTitle] = useState("");

  const [desc, setDesc] = useState("");

  function handelChange(e) {
    setTitle(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div>
      <input
        placeholder="Enter Title"
        value={title}
        type="text"
        onChange={handelChange}
      />
      <textarea placeholder="Enter Description" value={desc}></textarea>
      <button>Add Notes</button>
    </div>
  );
};

export default NoteForm;
