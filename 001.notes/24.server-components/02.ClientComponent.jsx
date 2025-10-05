// Client Component (traditional React)

'use client'; // This directive marks it as a client component

import { useState } from 'react';

function Counter() {
  // Client-side interactivity
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
