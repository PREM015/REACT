import { useState } from 'react';

import './App.css';

function App() {
  // State declaration with initial value 15
  let [counter, setCounter] = useState(15); // useState takes a default value, here it's 15

  // Function to increase counter
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  // Function to decrease counter
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>React</h1>
      <h2>Counter: {counter}</h2>

      {/* Corrected `onClick` (React uses camelCase) */}
      <button 
        onClick={addValue} 
        type="button"
      >
        Add Value
      </button>

      <br />

      <button 
        onClick={removeValue} 
        type="button"
      >
        Remove Value
      </button>
    </>
  );
}

export default App;
