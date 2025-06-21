// ✅ Example of using State in React

import React, { useState } from "react";

const containerStyle = {
  textAlign: "center",
  padding: "30px",
  backgroundColor: "#fef9c3",
  borderRadius: "12px",
  maxWidth: "400px",
  margin: "40px auto",
  fontFamily: "sans-serif",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#facc15",
  color: "#111",
  fontWeight: "bold",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "10px",
};

const StateExample = () => {
  const [likes, setLikes] = useState(0); // 🔢 Initial state = 0

  return (
    <div style={containerStyle}>
      <h2>❤️ Likes: {likes}</h2>

      <button
        onClick={() => setLikes(likes + 1)}
        style={buttonStyle}
      >
        Like 👍
      </button>
    </div>
  );
};

export default StateExample;
