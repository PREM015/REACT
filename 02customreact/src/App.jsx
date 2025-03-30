// Importing the useState hook from React to manage state
import { useState } from 'react';

import './App.css'; // Importing CSS file for styling

function App() {
  // State declaration: 'counter' holds the count value, initialized to 15
  // 'setCounter' is the function to update 'counter'
  let [counter, setCounter] = useState(15); 

  /**
   * Function to increase counter value
   * Ensures the counter does not exceed 20
   */
  const addValue = () => {
    if (counter < 20) { // Prevent counter from exceeding 20
      setCounter(counter + 1); // Update counter state by adding 1
    }
  };

  /**
   * Function to decrease counter value
   * Ensures the counter does not go below 0
   */
  const removeValue = () => {
    if (counter > 0) { // Prevent counter from going below 0
      setCounter(counter - 1); // Update counter state by subtracting 1
    }
  };

  return (
    <>
      {/* Main heading */}
      <h1>React</h1>

      {/* Displaying the counter value dynamically */}
      <h2>Counter: {counter}</h2>

      {/* Button to increase counter value */}
      <button 
        onClick={addValue} // Calls addValue function on click
        type="button"
      >
        Add Value
      </button>

      <br /> {/* Line break for spacing */}

      {/* Button to decrease counter value */}
      <button 
        onClick={removeValue} // Calls removeValue function on click
        type="button"
      >
        Remove Value
      </button>
    </>
  );
}

// Exporting the App component so it can be used in other files
export default App;
