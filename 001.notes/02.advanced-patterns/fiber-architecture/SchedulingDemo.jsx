import React, { useState } from "react";

// ❗ Simulate heavy UI work
const SlowComponent = () => {
  const start = performance.now();
  while (performance.now() - start < 100) {} // ❌ Blocks rendering
  return <p>😴 Slow Rendered Content</p>;
};

const SchedulingDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h2>🔄 Fiber Scheduling Demo</h2>
      <button onClick={() => setCount(count + 1)}>Click Me: {count}</button>
      <SlowComponent />
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "8px",
    marginTop: "20px"
  }
};

export default SchedulingDemo;
