# 🔁 Render Props in React

**Render Props** ek technique hai jisme tum React component ke andar ek **function (prop ke form mein)** pass karte ho jo **render logic return karta hai**.

> Naam se hi clear hai: **“Prop that renders something”**

---

## 🧠 Simple Definition

> Render prop = ek prop jo **function hoti hai** aur **React element return karti hai**

---

## 🤔 Kab use karte hain?

Jab tum **ek hi logic (e.g., mouse position)** ko multiple components mein share karna chahte ho,  
lekin har component **alag UI dikhaye**, tab render props perfect hai!

---

## 💡 Syntax

```jsx
<Component render={(data) => <h1>{data}</h1>} />
```

Or sometimes:

```jsx
<Component>{(data) => <h1>{data}</h1>}</Component>
```

---

## 📦 Example: Mouse Tracker

```jsx
<MouseTracker
  render={(position) => (
    <p>Mouse is at {position.x}, {position.y}</p>
  )}
/>
```

`MouseTracker` internally mouse position track karega, lekin UI tumhara hoga 🔥

---

## 🔁 Render Props vs Children Props

| Pattern      | Description                                |
|--------------|--------------------------------------------|
| `render` prop | Component ke render logic ko customize karna |
| `children` function | Same thing, but passed as children     |

---

## 🧪 Real-Life Analogy

| Concept      | Analogy                                      |
|--------------|----------------------------------------------|
| Render prop  | Ek chef tumse poochta hai: “Topping tum banao, base pizza main banaunga” |

---

## 🧼 Summary

- 🔁 Render prop = function prop that returns JSX
- 🔁 Used to share component logic (like mouse position, data fetching)
- ⚙️ Highly customizable and reusable
- 🧠 Usually replaced by custom hooks in modern React (but still useful pattern!)

