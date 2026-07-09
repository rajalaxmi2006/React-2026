import React, { useEffect, useState } from "react";

const App = () => {
  // const [count, setCount] = useState(0);

  const [name, setName] = useState("");

  //  function handelClick(){
  //   setCount(count+1);
  //  }
  //  console.log(count);
  //  document.title= `react-effect ${count}`;

  // useEffect(() => {

  //   console.log("useEffect Activated!!");
  //   document.title = `09-react-effects (${count}) `;

  // }, [count]);

  useEffect(() => {
    document.title = name;
  }, [name]);

  const handelClick = () => {
    alert(name);
  };

  return (
    <div>
      {/* <h1>Side Effects in React</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button> */}

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <button>Submit</button>
    </div>
  );
};

export default App;