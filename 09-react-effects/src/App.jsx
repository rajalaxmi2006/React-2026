import React, { useState } from 'react'

const App = () => {
  

  const [count,setCount]=useState(0);
  console.log(count);
  
  return (
    <div>
      <h1>Side Effects in React</h1>
    </div>
  )
}

export default App 