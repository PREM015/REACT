// ✅ HOC: Higher-Order Component to log props
import React from "react";

// 🧠 This is a function that takes a component and returns a new one
const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log("🧾 Props received:", props);

    return (
      <div style={styles.wrapper}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

// ✅ A simple example component to be wrapped
const Welcome = ({ name }) => {
  return <h2>Hello, {name} 👋</h2>;
};

// ✅ Wrap the component using the HOC
const WelcomeWithLogger = withLogger(Welcome);

// 🎨 Just some simple styling
const styles = {
  wrapper: {
    border: "2px dashed teal",
    padding: "16px",
    borderRadius: "8px",
    margin: "20px",
    fontFamily: "Arial"
  }
};

export default WelcomeWithLogger;
