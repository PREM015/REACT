# ⚔️ Props vs State in React

React mein data manage karne ke do main tareeke hote hain — **Props** aur **State**.  
Dono ka kaam UI ko data dena hota hai, lekin **origin**, **control**, aur **usage** alag hota hai.

---

## 🧠 Simple Definition:

| Concept | Simple Explanation |
|--------|--------------------|
| **Props** | Parent se child ko data bhejne ka tareeka |
| **State** | Component ke andar ka data jo change ho sakta hai |

---

## 📦 Props (🧳 Parent se aaya hua samaan)

### ✅ Key Points:

- Props **read-only** hote hain
- Parent component child ko props bhejta hai
- Child sirf **use** karta hai, **modify** nahi

```jsx
function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}

<Welcome name="Prem" />
```

🧠 Yahan `name` ek prop hai — value "Prem" parent ne bheji.

---

## 🔁 State (🧠 Apna khud ka data)

### ✅ Key Points:

- State **component ke andar** hoti hai
- `useState()` hook se banate hain
- Component khud change kar sakta hai

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}
```

🧠 Yahan `count` ek state variable hai — user ke click pe change hota hai.

---

## ⚖️ Props vs State Table

| Feature       | Props                         | State                          |
|---------------|-------------------------------|--------------------------------|
| Data Source   | Parent se aata hai             | Component ke andar hota hai    |
| Editable?     | ❌ Nahi (read-only)            | ✅ Haan (setState se)          |
| Purpose       | Child ko data bhejna           | UI update/interaction handle   |
| Reusability   | High                           | Local to component             |
| Lifecycle     | Parent update se change hota   | Internal events se change hota |

---

## 🧪 Real World Analogy

| Term   | Analogy                              |
|--------|--------------------------------------|
| Props  | Maa ne tiffin diya — tum kha rahe ho, badal nahi sakte |
| State  | Apne ghar mein fridge ka khana — tum badal sakte ho 😄 |

---

## 🧼 Summary

> Props = "Mujhe parent se mila hai, main bas use kar raha hoon."  
> State = "Ye mera apna data hai, main ise update kar sakta hoon."

---

