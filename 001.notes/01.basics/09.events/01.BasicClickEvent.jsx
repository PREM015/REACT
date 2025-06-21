// ✅ Simple Button Click Event Example in React

import React from "react";

const BasicClickEvent = () => {
  // 📦 Function to handle click
  const handleClick = () => {
    alert("🎉 You clicked the button!");
  };

  return (
    <div style={styles.card}>
      <h2>🖱️ React Click Event</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

// 🎨 Styling
const styles = {
  card: {
    border: "2px solid purple",
    padding: "20px",
    borderRadius: "8px",
    width: "300px",
    backgroundColor: "#f0e6ff",
    fontFamily: "sans-serif",
    textAlign: "center",
  },
};

export default BasicClickEvent;
