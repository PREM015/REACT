// ✅ React Functional Component: ListRenderExample
// Goal: Show a basic list of fruits using .map() function

import React from "react";

// 📦 Sample data (array of fruits)
const fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes", "🍊 Orange"];

const ListRenderExample = () => {
  return (
    <div style={styles.card}>
      <h2>🍉 List of Fruits</h2>
      <ul>
        {/* 🔁 Mapping over fruits array to generate list items */}
        {fruits.map((fruit, index) => (
          // 🟡 Using index as key — okay if list is static & won't change
          // 🔑 React needs this 'key' to identify each <li> uniquely
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

// 🎨 Inline styling for the component layout
const styles = {
  card: {
    border: "2px solid skyblue",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    fontFamily: "sans-serif",
    background: "#e6f7ff"
  }
};

export default ListRenderExample;
