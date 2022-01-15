import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  const incrementX = () => {
    setX(x + 1);
  };
  useEffect(() => {
    setY(y + 1);
  }, [x]);
  useEffect(() => {
    setZ(z + 1);
  }, [x, y]);
  return (
    <div className="App">
      <div>
        {x},{y},{z}
      </div>
      <button onClick={incrementX}>click</button>
    </div>
  );
}
