// ✅ Example of using State in React

import React, { useState } from "react";

const StateExample = () => {
  const [likes, setLikes] = useState(0); // 🔢 Initial state = 0

  return (
    <div
      style={{
        textAlign: "center",
        padding: "30px",
        backgroundColor: "#fef9c3",
        borderRadius: "12px",
        maxWidth: "400px",
        margin: "40px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2>❤️ Likes: {likes}</h2>

      <button
        onClick={() => setLikes(likes + 1)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#facc15",
          color: "#111",
          fontWeight: "bold",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Like 👍
      </button>
    </div>
  );
};

export default StateExample;
