// ✅ JSX Example Component with Explanation

import React from "react";

const JSXExample = () => {
    const username = "Prem";
    const isLoggedIn = true;

    // 👇 Yeh JSX hai — HTML jaisa lagta hai, lekin JavaScript ke andar likha gaya hai
    return (
        <div
            style={{
                padding: "20px",
                maxWidth: "500px",
                margin: "40px auto",
                backgroundColor: "#f3f4f6",
                borderRadius: "12px",
                fontFamily: "sans-serif",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
        >
            {/* 👋 JSX heading with JS expression */}
            <h1>Hello, {username}!</h1>

            {/* 🔁 Conditional Rendering using ternary operator */}
            <p>{isLoggedIn ? "Welcome back!" : "Please login to continue"}</p>

            {/* 🧠 Behind the scenes explanation */}
            <div style={{ marginTop: "20px", color: "#555" }}>
                <h3>🧠 How JSX Works:</h3>
                <p>
                    This JSX: <code>{`<h1>Hello, {username}</h1>`}</code><br />
                    is converted to:<br />
                    <code>
                        React.createElement("h1", null, `Hello, ${username}`);
                    </code>
                </p>
            </div>
        </div>
    );
};

export default JSXExample;
