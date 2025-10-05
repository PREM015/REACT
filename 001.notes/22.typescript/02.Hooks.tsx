// TypeScript with Hooks

import { useState, useEffect, useReducer } from 'react';

// useState with types
function Counter() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  
  return <div>{count}</div>;
}

// useReducer with types
type State = { count: number };
type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}
