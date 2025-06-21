

// 👴 Class Component Lifecycle Example with Console Logs
import React from "react";

class LifecycleDemoClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("🔹 Constructor: Component created (start)");
  }

  // 🟢 Mounting: component DOM mein dikh gaya
  componentDidMount() {
    console.log("🟢 componentDidMount: Mounted successfully");
  }

  // 🔁 Updating: jab state ya props change ho
  componentDidUpdate() {
    console.log("🔁 componentDidUpdate: Component updated");
  }

  // 🔴 Unmounting: cleanup ke liye use hota hai
  componentWillUnmount() {
    console.log("🔴 componentWillUnmount: Component removed");
  }

  render() {
    return (
      <div style={styles.card}>
        <h2>👴 Class Component Lifecycle</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          ➕ Increase
        </button>
      </div>
    );
  }
}

// 🎨 Basic UI Styling
const styles = {
  card: {
    border: "2px solid gray",
    padding: "20px",
    borderRadius: "10px",
    fontFamily: "sans-serif",
    textAlign: "center",
    background: "#f0f0f0"
  }
};

export default LifecycleDemoClass;
