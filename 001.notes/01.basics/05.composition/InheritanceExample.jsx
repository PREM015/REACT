// ❌ Not recommended: Class-based Inheritance in React

import React from "react";

// 👨‍👧‍ Parent component (class-based)
class Parent extends React.Component {
  render() {
    return <h3>Hello from Parent Component</h3>;
  }
}

// 👶 Child component extends Parent (OOP style)
class Child extends Parent {
  render() {
    return (
      <div style={styles.box}>
        <h2>🚫 Inheritance Example</h2>
        <p>This is the child component extending the parent.</p>
        <p style={styles.note}>
          Inheritance is not preferred in React. Use composition instead.
        </p>
      </div>
    );
  }
}

const styles = {
  box: {
    padding: "30px",
    backgroundColor: "#fef2f2",
    borderRadius: "10px",
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  note: {
    color: "#888",
    marginTop: "10px",
  },
};

export default Child;
