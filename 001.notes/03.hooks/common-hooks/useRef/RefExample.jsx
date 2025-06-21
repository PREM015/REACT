// ✅ useRef Hook Example: Accessing input DOM element
import React, { useRef } from "react";

const RefExample = () => {
  // 🔖 Create a reference to be attached to an input element
  const inputRef = useRef(null);

  // 🎯 Function to focus the input using the ref
  const handleFocus = () => {
    inputRef.current?.focus(); // ✅ Directly access DOM node with optional chaining
  };

  return (
    <div style={styles.card}>
      <h2>🔍 useRef DOM Access Example</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click button to focus me"
        style={styles.input}
      />
      <br />
      <button onClick={handleFocus} style={styles.button}>
        🎯 Focus Input
      </button>
    </div>
  );
};

// 🎨 Simple styling
const styles = {
  card: {
    border: "2px solid teal",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "400px",
    margin: "auto",
    fontFamily: "sans-serif",
    backgroundColor: "#e6fffa"
  },
  input: {
    padding: "8px",
    marginTop: "10px",
    width: "80%",
    fontSize: "16px"
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "14px",
    cursor: "pointer"
  }
};

export default RefExample;
