# ⚔️ Props vs State in React

React mein data handle karne ke do powerful tareeke hote hain:  
**🧳 Props** (baahar se milta hai)  
**🧠 State** (andar se control hota hai)

Dono ka kaam UI ko data dena hai — par unka **kaun malik hai** ye farq samajhna zaroori hai.

---

## 🔍 Basic Bhasha Mein:

| 🧩 Concept | 📖 Kya Hota Hai? |
|-----------|------------------|
| **Props** | Parent se child ko data dena |
| **State** | Component ke andar ka khud ka data |

---

## 🧳 Props = "Jo Parent Bhejta Hai"

### ✅ Key Points:
- Props sirf **read kar sakte hain**, change nahi
- Props ko **parent component** bhejta hai
- Child bas **use** karta hai

### 🧪 Example:

```jsx
function Welcome(props) {
  return <h2>Namaste, {props.name}!</h2>;
}

<Welcome name="Prem" />
```

🧠 Yahan `name="Prem"` ek prop hai. Parent ne diya, child sirf display kar raha hai.

---

## 🧠 State = "Apna Ghar ka Data"

### ✅ Key Points:
- State component ke **andar hoti hai**
- `useState()` hook se banti hai
- Component hi usse change karta hai

### 🧪 Example:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>➕ +1</button>
    </>
  );
}
```

🧠 Yahan `count` ek state variable hai — har button click pe badalta hai.

---

## ⚖️ Props vs State — Comparison Table

| Feature       | Props (🧳)                  | State (🧠)                     |
|---------------|-----------------------------|-------------------------------|
| Source        | Parent component            | Component itself              |
| Editable?     | ❌ Nahi (read-only)         | ✅ Haan (setState se)         |
| Reusability   | High                        | Limited to that component     |
| Use Case      | Data bhejna                 | Data track/change karna       |
| Trigger       | Parent data change          | Internal events (click, etc.) |

---

## 🎯 Real Life Analogy

| Concept | Real Zindagi Mein |
|---------|-------------------|
| Props   | Maa ne tiffin diya — kha sakte ho, change nahi kar sakte |
| State   | Apne fridge ka khana — khud decide kar sakte ho 😄 |
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
---

## 📌 Summary

> 🔹 **Props** = "Mujhe baahar se mila hai, main bas use karta hoon."  
> 🔸 **State** = "Mere paas apna data hai, main usse control karta hoon."

Don’t confuse them — dono React ke king tools hain 👑  
Par samajhna zaroori hai: **data kahaan se aaya aur kaun change karega?**

---

```js
// React kehta hai: Props se data bhejo, State se handle karo. ✅
```
