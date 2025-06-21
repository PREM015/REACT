// ✅ Render Props Pattern Example: MouseTracker component
// Goal: Share mouse position logic while letting UI be flexible

import React, { useState, useEffect } from "react";

// 🔄 MouseTracker accepts a render function as prop
const MouseTracker = ({ render }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // 🔁 Update position when mouse moves
    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        // 🧹 Clean up event listener on unmount
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // 🎯 Instead of returning fixed JSX, we call the render prop
    return <div style={styles.box}>{render(position)}</div>;
};

// 🎨 Styling
const styles = {
    box: {
        border: "2px dashed purple",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
        fontFamily: "sans-serif",
        backgroundColor: "#f9e6ff"
    }
};

export default MouseTracker;
