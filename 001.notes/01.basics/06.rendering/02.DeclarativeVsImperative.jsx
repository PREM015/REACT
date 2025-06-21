// ✅ Compare Declarative vs Imperative UI style
import React, { useState, useRef } from "react";

const DeclarativeVsImperative = () => {
    const [text, setText] = useState("Prem");
    const inputRef = useRef();

    // ✅ Declarative: React handles the update
    const handleDeclarative = () => setText("React");

    // ❌ Imperative: You manually change the DOM
    const handleImperative = () => {
        inputRef.current.value = "Manually Updated (JS)";
    };

    return (
        <div style={styles.container}>
            <h2>🎯 Declarative vs Imperative</h2>
            <p>Declarative Name: {text}</p>
            <button onClick={handleDeclarative}>✅ Change Declaratively</button>

            <hr />

            <input ref={inputRef} placeholder="Type here..." />
            <button onClick={handleImperative}>❌ Change Imperatively</button>
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        fontFamily: "sans-serif",
        border: "1px solid #aaa",
        borderRadius: "10px",
        marginTop: "20px"
    }
};

export default DeclarativeVsImperative;

/*
🧠 Declarative:
- Tum state update karte ho (text).
- React automatically UI update karta hai.

❌ Imperative:
- Tum manually DOM access karte ho (inputRef).
- Ye approach React style nahi hai.
*/
