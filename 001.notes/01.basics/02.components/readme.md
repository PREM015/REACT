# ⚛️ React Components

React mein **component** ek chhota UI block hota hai — jise hum baar-baar use kar sakte hain, alag-alag data ke saath.

---

## 🔶 Why Use Components?

✅ Reusable  
✅ Maintainable  
✅ Independent  
✅ Testable  
✅ Easy to break into small parts

---

## 🧩 Types of Components in React

| Type               | Description                      | Recommended? |
|--------------------|----------------------------------|--------------|
| **Functional**     | Modern JS functions + Hooks      | ✅ YES        |
| **Class-based**    | Uses `class`, `this`, lifecycle  | ❌ Legacy     |
| **Presentational** | Sirf UI (no logic)               | ✅ Often used |
| **Container**      | Logic + state + data fetch       | ✅ Often used |

---

## ✅ Functional Component (Modern)

```jsx
const Header = () => {
  return <h1>Welcome to React</h1>;
};
```

- Uses `useState`, `useEffect`, etc.
- No `this`, no complex syntax
- Fast and readable

📁 Check full example in:  
[`02.functional-components`](./02.functional-components/README.md)

---

## 🔁 Class Component (Legacy)

```jsx
import React from 'react';

class Header extends React.Component {
  render() {
    return <h1>Welcome to React (Class)</h1>;
  }
}
```

- Uses `this.props`, `this.state`, etc.
- Lifecycle methods: `componentDidMount`, etc.
- Mostly for old projects

📁 Check full example in:  
[`01.class-components`](./01.class-components/README.md)

---

## 🛠️ React Ka Suggestion:

> ✅ **Use Functional Components with Hooks**  
> ❌ **Avoid Class Components unless legacy support is needed**

---

📌 **Summary**:
React Components = **independent UI blocks**  
Jo tum app mein reuse kar sakte ho.  
**Functional Components** = future-proof, clean & powerful.  
