// ✅ Import React
import React from "react";

// 🔶 Functional Component: Reusable CustomCard with children support
const CustomCard = ({ children }) => {
  return (
    <div style={styles.card}>
      {/* 📦 children prop automatically milta hai */}
      {children}
    </div>
  );
};

// 🎨 Styling for the card layout
const styles = {
  card: {
    border: "2px solid #4c51bf",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#edf2f7",
    marginBottom: "20px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "sans-serif"
  }
};

export default CustomCard;
