# 🧱 Composition vs Inheritance in React

React mein components banane ke 2 tareeke hote hain — **Composition** aur **Inheritance**.  
Lekin React clearly kehta hai:  
> "Prefer composition over inheritance." ✅

---

## 🔶 1. What is Composition?

🧩 **Composition = Ek component ke andar doosra component use karna**

> Yaani components ko combine kar ke naya layout banana.

### ✅ Example:
```jsx
<Card>
  <Message />
</Card>
```

- Card ek reusable wrapper hai
- Message andar ka content hai (children)

---

## 🔷 2. What is Inheritance?

❌ **Inheritance = Ek component doosre component se extend karta hai (like OOP)**

> Jaise class B extends class A

```jsx
class Child extends Parent {}
```

React mein ye recommended nahi hai — kyunki:

- Zyada complex ho jaata hai
- Component reusability kam hoti hai

---

## ⚖️ Composition vs Inheritance Table

| Feature         | ✅ Composition         | 🚫 Inheritance            |
|-----------------|------------------------|---------------------------|
| Code Style      | Function-based         | Class-based               |
| Reusability     | High                   | Low                       |
| Maintenance     | Easy                   | Complex                   |
| React's View    | Preferred 💯           | Not Recommended ❌        |
| Analogy         | LEGO blocks (combine)  | Blueprint extend (tight) |

---

## 🤔 Real-life Analogy:

- 🧱 Composition = Tiffin with compartments (sab alag lekin saath)
- 🧬 Inheritance = Ek hi bartan mein sab mila dena (messy)

---

> React prefer karta hai ki tum **reusable UI components** banaao using composition, instead of extending them like in traditional OOP.

