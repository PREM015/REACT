// ✅ Import React and Component class
import React, { Component } from "react";

// 🧱 Class-based React Component (used before Hooks)
class ClassComponent extends Component {
  // 🧠 Constructor: Initialize local state
  constructor() {
    super(); // call parent constructor
    this.state = {
      message: "Hello from Class Component 🧓",
      count: 0
    };
  }

  // 🔁 Function to update state
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // 🔃 JSX via render method
  render() {
    return (
      <div style={styles.card}>
        <h2>🧱 This is a Class Component</h2>
        <p>{this.state.message}</p>
        <p>Current Count: {this.state.count}</p>
        <button onClick={this.handleClick}>➕ Click Me</button>
      </div>
    );
  }
}

// 🎨 Styling object
const styles = {
  card: {
    border: "2px solid #999",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "20px",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    fontFamily: "sans-serif",
    maxWidth: "400px",
    margin: "auto"
  }
};

// 🚀 Export component
export default ClassComponent;
