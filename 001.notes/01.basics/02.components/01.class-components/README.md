# 🧱 Class Components in React

Class Components React ke purane version ka feature hai, jisme hum `class` keyword ka use karke components banate the.

---

## 🔍 Features:

| Feature              | Description                            |
|----------------------|----------------------------------------|
| 🔹 Syntax             | `class` extends `React.Component`      |
| 🔹 State              | `this.state` se manage hoti hai        |
| 🔹 Props              | `this.props` ke through milti hai      |
| 🔹 Lifecycle Methods  | e.g., `componentDidMount()`, `render()`|

---

## 🧠 Kab Use Karte Hain?

- Mostly **legacy codebase** mein
- Hooks ke aane ke baad, ab **functional components recommended** hain

---

## ✅ Basic Example:

```jsx
import React from "react";

class Welcome extends React.Component {
  render() {
    return <h2>Hello, Class Component!</h2>;
  }
}
```

---

## 🔄 With State Example:

```jsx
import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.increment}>➕ Increase</button>
      </div>
    );
  }
}
```

---

## 📌 Summary

Class Component = `class` + `render()` + `this.state/this.props`

Use only if:
- Legacy project
- You want to learn older approach

Otherwise:
✅ Prefer Functional Components with Hooks
