// import React from 'react'

// const App = () => {



//   return (
//     <div>
//       <h1>🚩 Happy Ratha Yatra 🚩</h1>
//       <iframe src="src/assets/ratha-yatra.mp4" frameborder="0"></iframe>
//     </div>
//   )
// }

// export default App


import "./App.css";
import rathaVideo from "./assets/ratha-yatra.mp4";

const App = () => {
  return (
    <div className="container">
      <h1>🚩 Happy Ratha Yatra 🚩</h1>

      <video
        className="video"
        src={rathaVideo}
        controls
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default App;