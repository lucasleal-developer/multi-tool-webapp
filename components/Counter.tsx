"use client";

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2>Contador Simples</h2>
      <div className="counter-display">
        <span className="count-number">{count}</span>
      </div>
      <div className="button-group">
        <button 
          className="btn btn-increment" 
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>
        <button 
          className="btn btn-decrement" 
          onClick={() => setCount(count - 1)}
        >
          -1
        </button>
        <button 
          className="btn btn-reset" 
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}