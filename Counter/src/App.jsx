import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  function addValue() {
    counter++;
    setCounter(counter);
    if (counter > 20) {
      setCounter((counter = 20));
    }
  }

  function removeValue() {
    setCounter(counter - 1);
    if (counter < 1) {
      setCounter((counter = 0));
    }
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
