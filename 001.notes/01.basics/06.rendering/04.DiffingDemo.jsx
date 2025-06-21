// ✅ Visual example of diffing: list items update
import React, { useState } from "react";

const DiffingDemo = () => {
    const [items, setItems] = useState(["🍎 Apple", "🍌 Banana", "🍇 Grapes"]);

    const updateList = () => {
        // Slight change — Banana removed
        setItems(["🍎 Apple", "🍇 Grapes"]);
    };

    return (
        <div style={styles.card}>
            <h2>🔍 React Diffing Demo</h2>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li> // 🔑 key is important for diffing!
                ))}
            </ul>
            <button onClick={updateList}>Remove Banana</button>
        </div>
    );
};

const styles = {
    card: {
        border: "2px solid purple",
        padding: "20px",
        marginTop: "20px",
        borderRadius: "10px",
        fontFamily: "sans-serif"
    }
};

export default DiffingDemo;

/*
🧠 Diffing kya karta hai?
- Old VDOM: Apple, Banana, Grapes
- New VDOM: Apple, Grapes
- React identify karta hai Banana ko remove karna hai.
- Only that part of real DOM gets updated.
*/
