import React from "react";

const Loader = () => {
  return (
    <div className="loader" role="status" aria-live="polite">
      <div className="spinner">
        <p>Fetching Data.....</p>
      </div>
    </div>
  );
};

export default Loader;
