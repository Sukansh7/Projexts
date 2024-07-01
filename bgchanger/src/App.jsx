import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className={`w-full h-screen`} style={{ backgroundColor: color }}>
      <div className="fixed flex justify-center flex-wrap bottom-12 px-2 inset-x-0">
        <div className="flex text-white flex-wrap justify-center gap-3 shadow-lg bg-gray-700 px-3 py-2 rounded-full">
          <button onClick={() => {setColor("red")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => {setColor("green")}}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => {setColor("blue")}}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => {setColor("yellow")}}  className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => {setColor("black")}}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>
          <button onClick={() => {setColor("orange")}}  className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "orange"}}>Orange</button>
          <button onClick={() => {setColor("pink")}}  className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={() => {setColor("purple")}}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}}>Purple</button>
        </div>
      </div>
    </div>
  );
}

export default App;
