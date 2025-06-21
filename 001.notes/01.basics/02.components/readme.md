# ⚛️ React Components

React mein **component** ek chhota part hota hai UI ka, jo independent hota hai aur reuse ho sakta hai.

---

## 🔶 Why use components?

✅ Reusable  
✅ Maintainable  
✅ Independent  
✅ Testable

---

## 🧩 Types of Components

| Type | Description | Use |
|------|-------------|-----|
| Functional | Modern, with Hooks | ✅ Recommended |
| Class-based | Old way, uses `this` | ❌ Avoid now |
| Presentational | Sirf UI | Mostly for layout |
| Container | State + Logic | Data handling |

---

## ✅ Functional Component Example

```jsx
const Header = () => {
  return <h1>Welcome to React</h1>;
};
```

---

## 🔁 Class Component Example

```jsx
class Header extends React.Component {
  render() {
    return <h1>Welcome to React (Class)</h1>;
  }
}
```

---

## 📌 React kehta hai:
> "Prefer Functional Components + Hooks instead of Class Components."

```js
// Modern approach = Functional + useState, useEffect etc.
```

---

