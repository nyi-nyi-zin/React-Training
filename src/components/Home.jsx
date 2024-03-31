import React, { useState, useEffect } from "react";

export default function Home() {
  const [key, setKey] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setKey(event.currentTarget.value);
        }}
      />
      <p onChange={() => {}}>Your Key is - {key}</p>
      <br />
      <br />
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
}
