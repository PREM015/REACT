


// ✅ Final`02.functional-components/FunctionalComponent.jsx`


// ✅ Functional Component Example in React

// Importing React and useState Hook
import React, { useState } from "react";

// 👇 This is our functional component
const FunctionalComponent = () => {
    // useState creates a state variable 'likes' and a function to update it
    const [likes, setLikes] = useState(0); // Initial value is 0

    // Return JSX (HTML-like syntax) to display UI
    return (
        <div
            style={{
                padding: "20px",
                fontFamily: "Arial, sans-serif",
                textAlign: "center",
                backgroundColor: "#f3f4f6",
                borderRadius: "12px",
                maxWidth: "400px",
                margin: "40px auto",
                boxShadow: "0 0 12px rgba(0,0,0,0.1)"
            }}
        >
            {/* Heading */}
            <h1 style={{ color: "#4f46e5" }}>
                👋 Welcome to React Functional Component
            </h1>

            {/* Paragraph to show current like count */}
            <p style={{ fontSize: "18px" }}>
                You liked this <strong>{likes}</strong> times.
            </p>

            {/* Like Button */}
            <button
                onClick={() => setLikes(likes + 1)} // Increases count on click
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#6366f1",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.2s"
                }}
            >
                👍 Like
            </button>
        </div>
    );
};

// Exporting the component so it can be used in other files like App.jsx
export default FunctionalComponent;
