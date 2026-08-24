import React, { useState } from 'react';

export default function Hook1() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <p><b>Video Link:- </b>https://www.youtube.com/watch?v=pe5ulXojRO8</p>
      <h1>useState Hook</h1>
      <p className="hook1">
        <button onClick={() => setCount(count + 1)}>+</button>
        <span>{count}</span>
        <button onClick={() => setCount(Math.max(0, count - 1))}>-</button>
      </p>
    </section>
  );
}