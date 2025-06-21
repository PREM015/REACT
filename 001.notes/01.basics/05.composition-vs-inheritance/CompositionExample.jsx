// ✅ Recommended pattern: Composition (Component inside Component)

import React from "react";

// 🎁 Card component: acts as a container/wrapper
const Card = ({ children }) => {
    return (
        <div style={styles.card}>
            {children}
        </div>
    );
};

// 💬 Message component to be placed inside Card
const Message = () => {
    return <p>This is a message inside the card.</p>;
};

// 👇 Composing Card + Message together
const CompositionExample = () => {
    return (
        <div style={styles.wrapper}>
            <h2>🧱 Composition Example</h2>

            {/* 🔀 Component within another component */}
            <Card>
                <Message />
            </Card>

            <p style={styles.note}>
                React prefers this pattern: small reusable components.
            </p>
        </div>
    );
};

const styles = {
    wrapper: {
        padding: "30px",
        fontFamily: "sans-serif",
        textAlign: "center",
    },
    card: {
        padding: "20px",
        border: "2px solid #4ade80",
        borderRadius: "12px",
        backgroundColor: "#ecfdf5",
        marginTop: "20px",
    },
    note: {
        color: "#666",
        marginTop: "10px",
    },
};

export default CompositionExample;
