// ✅ Input Change Event Example in React

import React, { useState } from "react";

const InputChangeEvent = () => {
  const [name, setName] = useState("");

  // 🔁 Handle input field change
  const handleChange = (e) => {
    setName(e.target.value); // 📦 Get value from input field
  };

  return (
    <div style={styles.card}>
      <h2>⌨️ Input Change Event</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        style={styles.input}
      />
      <p>Hello, {name || "Stranger"} 👋</p>
    </div>
  );
};

// 🎨 Styling
const styles = {
  card: {
    border: "2px dashed teal",
    padding: "20px",
    borderRadius: "8px",
    width: "300px",
    backgroundColor: "#e6ffff",
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  input: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #888",
    width: "80%",
    marginBottom: "10px",
  },
};

export default InputChangeEvent;
