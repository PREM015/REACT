// ✅ Conditional rendering using early return (return null)

import React from "react";

const EarlyReturnExample = () => {
    // 🔁 Authorization flag
    const isAuthorized = false; // 👈 Change to true to show content

    // 🛑 Agar authorized nahi ho, toh kuch bhi render mat karo
    if (!isAuthorized) return null;

    // ✅ Authorized users ko content dikhana
    return (
        <div style={styles.wrapper}>
            <h2>🔓 You are authorized to view this content</h2>
            <p style={styles.note}>This uses early return (return null)</p>
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

export default EarlyReturnExample;
