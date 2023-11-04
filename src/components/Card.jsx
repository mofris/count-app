import { useState } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <button
        disabled={count <= 0}
        onClick={() => setCount((count) => count - 1)}
      >
        Min
      </button>
      <h1> {count == 10 ? "Done!" : count} </h1>
      <button
        disabled={count >= 10}
        onClick={() => setCount((count) => count + 1)}
      >
        Plus
      </button>
      <br />
      <button
        disabled={count == 0}
        style={{ marginTop: "5px" }}
        onClick={() => setCount((count) => (count = 0))}
      >
        Reset
      </button>
    </div>
  );
}
