// ✅ Example of using Props in React

import React from "react";

// 💡 Reusable component jo kisi bhi naam ko accept karega
const Greeting = ({ name }) => {
  return (
    <div
      style={{
        padding: "10px 20px",
        backgroundColor: "#e0f2fe",
        margin: "10px auto",
        width: "fit-content",
        borderRadius: "8px",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Hello, {name} 👋</h2>
    </div>
  );
};

// 🔁 Parent component: multiple Greetings render karta hai
const PropsExample = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Greeting name="Prem" />
      <Greeting name="Neha" />
      <Greeting name="Alex" />
    </div>
  );
};

export default PropsExample;
