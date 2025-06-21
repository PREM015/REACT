// ✅ Conditional rendering using ternary operator (? :)

import React from "react";

const TernaryExample = () => {
  // 🔁 Simulate user login status (true = logged in, false = guest)
  const isLoggedIn = true;

  return (
    <div style={styles.wrapper}>
      {/* 🎯 Conditional rendering: Agar isLoggedIn true hai toh "Welcome", warna "Login" */}
      {isLoggedIn ? (
        <h2>🎉 Welcome back, user!</h2>
      ) : (
        <h2>🔒 Please login to continue</h2>
      )}

      {/* 👇 Note for reference */}
      <p style={styles.note}>This uses ternary operator (? :)</p>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "30px",
    backgroundColor: "#f0fdf4",
    textAlign: "center",
    borderRadius: "10px",
    fontFamily: "sans-serif",
  },
  note: { color: "#666", marginTop: "10px" },
};

export default TernaryExample;
