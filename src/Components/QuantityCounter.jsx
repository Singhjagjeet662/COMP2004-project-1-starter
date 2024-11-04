import { useState } from "react";
// it is the quantity counter component which has two buttons for decresing and increasing

export default function QuantityCounter({ counter, setCounter }) {
  return (
    <div className="counter-container">
      <button onClick={() => setCounter(counter >= 0 ? counter + 1 : counter)}>
        +
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter <= 0 ? counter : counter - 1)}>
        -
      </button>
    </div>
  );
}
