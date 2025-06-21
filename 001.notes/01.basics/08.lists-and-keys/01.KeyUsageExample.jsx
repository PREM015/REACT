// ✅ React Functional Component: KeyUsageExample
// Goal: Render a list of tasks using unique keys (ids)

import React from "react";

// 📦 Sample data with unique IDs (best practice)
const todos = [
  { id: 1, task: "🛒 Buy Groceries" },
  { id: 2, task: "📚 Study React" },
  { id: 3, task: "🧹 Clean Room" },
];

const KeyUsageExample = () => {
  return (
    <div style={styles.card}>
      <h2>📋 Key Usage Example</h2>
      <ul>
        {/* 🔁 Render each task using map() and assign a unique key */}
        {todos.map((todo) => (
          // ✅ Best practice: Use unique ID as key (NOT index)
          // 🔑 This helps React efficiently update only changed items
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

// 🎨 Styling for better visibility
const styles = {
  card: {
    border: "2px dashed green",
    padding: "20px",
    borderRadius: "8px",
    width: "300px",
    fontFamily: "Arial",
    background: "#f1fff1"
  }
};

export default KeyUsageExample;
