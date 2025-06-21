// ✅ Conditional rendering using AND (&&) operator

import React from "react";

const AndOperatorExample = () => {
  // 🔁 Simulate whether user has new notifications
  const hasNotification = true;

  return (
    <div style={styles.wrapper}>
      <h2>🔔 Notifications</h2>

      {/* ✅ Agar hasNotification true hai tabhi message dikhana */}
      {hasNotification && <p>You have 3 new messages.</p>}

      <p style={styles.note}>This uses && (AND) operator</p>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "30px",
    backgroundColor: "#fef2f2",
    textAlign: "center",
    borderRadius: "10px",
    fontFamily: "sans-serif",
  },
  note: { color: "#999", marginTop: "10px" },
};

export default AndOperatorExample;
