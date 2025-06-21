// samplevite.jsx
// ✅ Simple React Component to test Vite setup

import React from 'react';

const SampleVite = () => {
  const message = "Hello from Vite + React 🔥";

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", textAlign: "center" }}>
      <h1 style={{ color: "#4f46e5" }}>{message}</h1>
      <p>JSX is working perfectly!</p>
    </div>
  );
};

export default SampleVite;
