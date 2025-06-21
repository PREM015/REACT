// ✅ Simple Virtual DOM concept demonstration
import React, { useState } from "react";

const VirtualDOM = () => {
  const [count, setCount] = useState(0);

  // 🔁 Event handler to update state
  const increase = () => setCount(count + 1);

  return (
    <div style={styles.box}>
      <h2>🧠 Virtual DOM Demo</h2>
      <p>Count: {count}</p>
      <button onClick={increase}>➕ Increase</button>
    </div>
  );
};

// 🎨 Styling
const styles = {
  box: {
    padding: "20px",
    border: "2px solid #ddd",
    borderRadius: "8px",
    textAlign: "center",
    fontFamily: "Arial"
  }
};

export default VirtualDOM;

/*
🧠 Note:
- Jab button click hota hai, count update hota hai.
- React VDOM naya tree banata hai.
- Diffing se React sirf <p> element update karta hai, pura page nahi.
*/
