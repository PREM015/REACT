// ✅ Functional Component simulating Lifecycle with useEffect
import React, { useState, useEffect } from "react";

const LifecycleDemoHook = () => {
  const [count, setCount] = useState(0);

  // 🧠 useEffect: Mounting + Updating phase
  useEffect(() => {
    console.log("🔄 useEffect: Component mounted or count updated");

    // 🔴 Cleanup: runs before component unmount OR next update
    return () => {
      console.log("💥 Cleanup: Component will unmount or rerender");
    };
  }, [count]); // 🔁 Dependency: Only runs when `count` changes

  return (
    <div style={styles.card}>
      <h2>⚛️ Functional Component Lifecycle</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>➕ Increase</button>
    </div>
  );
};

// 🎨 UI Styling
const styles = {
  card: {
    border: "2px solid teal",
    padding: "20px",
    borderRadius: "10px",
    fontFamily: "Arial",
    textAlign: "center",
    backgroundColor: "#e6fffa"
  }
};

export default LifecycleDemoHook;
