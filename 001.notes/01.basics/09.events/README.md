# 🖱️ Handling Events in React

React mein events ko handle karna **HTML DOM** jaise hi hota hai — bas syntax thoda React-style hota hai.

---

## 🧠 Basic Differences (React vs HTML):

| Feature               | HTML                        | React (JSX)                   |
|------------------------|-----------------------------|-------------------------------|
| Event name             | lowercase (`onclick`)       | camelCase (`onClick`)         |
| Event handler value    | string (`"myFunction()"`)   | JS function (`{myFunction}`)  |

---

## 🔧 Example 1: Click Event

```jsx
<button onClick={handleClick}>Click Me</button>

function handleClick() {
  alert("Button Clicked!");
}
```

> 🧠 Yahan `onClick` mein humne string nahi, function diya `{handleClick}`

---

## 🎯 Popular Event Types in React

| Event Name    | Trigger                        |
|---------------|--------------------------------|
| `onClick`     | Button ya element click        |
| `onChange`    | Input field change             |
| `onSubmit`    | Form submit                    |
| `onMouseEnter`| Mouse over element             |
| `onKeyDown`   | Keyboard key press             |

---

## 🧪 Real-Life Analogy

> React ke events usi tarah kaam karte hain jaise real world mein signals —  
> Tumhare code mein kisi event (jaise button click) par action hota hai 🚦

---

## 🔥 Tips

- `onClick={() => handleClick()}` — agar arguments pass karne ho to arrow function lagao
- Input changes ke liye `onChange` use karo
- Form submit handle karte waqt `e.preventDefault()` zaroor likhna

---

## ✅ Summary

> React events are just like normal DOM events — **but handled in a React-y way**  
> CamelCase + functions only, no strings 🚫

