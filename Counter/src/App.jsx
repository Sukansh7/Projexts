import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  function addValue() {
    setCounter((prevCounter) => {
      if (prevCounter >= 20) {
        return 20;
      }
      return prevCounter + 1;
    });
  }

  function removeValue() {
    setCounter((prevCounter) => {
      if (prevCounter <= 0) {
        return 0;
      }
      return prevCounter - 1;
    });
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value : {counter} </h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
