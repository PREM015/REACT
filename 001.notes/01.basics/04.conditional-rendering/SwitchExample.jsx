// ✅ Conditional rendering using switch statement

import React from "react";

const SwitchExample = () => {
    // 🔁 Possible statuses: 'loading', 'success', 'error'
    const status = "error"; // 👈 Change to try different cases
    let content;

    // 🧠 Multiple condition options using switch-case
    switch (status) {
        case "loading":
            content = <p>⏳ Loading...</p>;
            break;
        case "success":
            content = <p>✅ Data loaded successfully!</p>;
            break;
        case "error":
            content = <p>❌ Something went wrong.</p>;
            break;
        default:
            content = <p>ℹ️ Waiting for action...</p>;
    }

    return (
        <div style={styles.wrapper}>
            <h2>Status:</h2>
            {/* 🧩 Dynamically chosen content based on status */}
            {content}
            <p style={styles.note}>This uses switch statement</p>
        </div>
    );
};

const styles = {
    wrapper: {
        padding: "30px",
        backgroundColor: "#fff7ed",
        textAlign: "center",
        borderRadius: "10px",
        fontFamily: "sans-serif",
    },
    note: { color: "#888", marginTop: "10px" },
};

export default SwitchExample;
