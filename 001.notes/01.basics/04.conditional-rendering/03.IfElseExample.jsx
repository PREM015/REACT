// ✅ Conditional rendering using traditional if-else statement

import React from "react";

const IfElseExample = () => {
    // 🔁 User object with login status
    const user = { name: "Prem", loggedIn: false };

    // ❌ Agar user logged in nahi hai, toh turant restricted UI dikhao
    if (!user.loggedIn) {
        return (
            <div style={styles.wrapper}>
                <h2>🔒 Access Denied</h2>
                <p>Please login to access this page.</p>
                <p style={styles.note}>This uses if-else logic</p>
            </div>
        );
    }

    // ✅ Agar user logged in hai toh welcome message dikhao
    return (
        <div style={styles.wrapper}>
            <h2>✅ Welcome, {user.name}!</h2>
            <p style={styles.note}>This uses if-else logic</p>
        </div>
    );
};

const styles = {
    wrapper: {
        padding: "30px",
        backgroundColor: "#e0f7fa",
        textAlign: "center",
        borderRadius: "10px",
        fontFamily: "sans-serif",
    },
    note: { color: "#555", marginTop: "10px" },
};

export default IfElseExample;
