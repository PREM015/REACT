// ✅ Import React and useState hook
import React, { useState } from "react";

// ⚛️ Functional Component with internal state
const FunctionalComponent = () => {
  // 🔁 useState Hook: count state initialize to 0
  const [count, setCount] = useState(0);

  // 🧠 Function to handle button click and update state
  const handleClick = () => {
    setCount(count + 1); // Increment count by 1
  };

  // 🔃 JSX returned by the component
  return (
    <div style={styles.container}>
      <h2>⚛️ This is a Functional Component</h2>
      <p>Current Count: {count}</p>
      <button onClick={handleClick}>➕ Click to Increase</button>
    </div>
  );
};

// 🎨 Inline styles object
const styles = {
  container: {
    border: "2px solid teal",
    padding: "20px",
    marginTop: "20px",
    borderRadius: "8px",
    textAlign: "center",
    fontFamily: "sans-serif",
    backgroundColor: "#e6fffa",
    maxWidth: "400px",
    marginLeft: "auto",
    marginRight: "auto"
  }
};

// 🚀 Export component to use in other parts of app
export default FunctionalComponent;
