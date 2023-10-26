import { useState } from "react";

function App() {
  const [color, setColor] = useState(null);

  const handleColor = (color) => {
    setColor(color);
  };

  return (
    <div>
      <button
        onClick={() => {
          handleColor("red");
        }}
      >
        Red
      </button>
      <button
        onClick={() => {
          handleColor("blue");
        }}
      >
        Blue
      </button>
      <button
        onClick={() => {
          handleColor("green");
        }}
      >
        Green
      </button>
      <button
        onClick={() => {
          handleColor("yellow");
        }}
      >
        Yellow
      </button>
      <p>
        {color === null ? "no color selected" : `selected color is ${color}`}
      </p>
    </div>
  );
}

export default App;
