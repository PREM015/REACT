// ✅ React and Component import
import React, { Component } from "react";

// ⚠️ This component will throw an error intentionally for demo
const ProblemComponent = () => {
    throw new Error("Something went wrong in ProblemComponent!");
};

// 🛡️ ErrorBoundary Class Component
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    // ✅ If any child throws error, this runs
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    // ✅ For logging errors or reporting to monitoring tools
    componentDidCatch(error, info) {
        console.error("Caught error:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={styles.errorBox}>
                    <h2>🚨 Something went wrong!</h2>
                    <p>Please try refreshing the page.</p>
                </div>
            );
        }

        // 🔁 Render children if no error
        return this.props.children;
    }
}

// 🎨 Simple styling
const styles = {
    errorBox: {
        border: "2px solid red",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#ffe6e6",
        fontFamily: "sans-serif",
        margin: "20px auto",
        maxWidth: "400px",
        textAlign: "center"
    }
};

// ✅ Main App demo using ErrorBoundary
const ErrorBoundaryExample = () => {
    return (
        <div>
            <h1>⚛️ Error Boundary Demo</h1>

            {/* Wrap only part that can crash */}
            <ErrorBoundary>
                <ProblemComponent />
            </ErrorBoundary>
        </div>
    );
};

export default ErrorBoundaryExample;
