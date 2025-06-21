# 🔀 Conditional Rendering in React

React mein **Conditional Rendering** ka matlab hai — condition ke basis pe **kya UI dikhana hai aur kya nahi**, ye decide karna.

> Jaise: "Agar user login hai to Dashboard dikhao, warna Login screen."

---

## 🧠 Simple Definition

🗣️ "**React mein JSX ko condition ke basis pe dikhana ya chhupana — usi ko conditional rendering kehte hain.**"

---

## ✅ 5 Popular Techniques for Conditional Rendering

| Method                | Syntax                             | Use When |
|-----------------------|------------------------------------|----------|
| ✅ Ternary Operator    | `{condition ? A : B}`              | If-else logic |
| ✅ AND Operator (`&&`) | `{condition && JSX}`               | Show if true |
| ✅ `if-else` statement | JS block logic + `return`          | Complex cases |
| ✅ `switch` statement  | Multiple condition options         | Multi-states |
| ✅ Early Return        | `if (!condition) return null`      | Skip render early |

---

## 🎯 Ternary Operator Example

```jsx
{isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Login</h1>}
```

---

## 🎯 AND (`&&`) Operator Example

```jsx
{hasMessage && <p>You have new message!</p>}
```

---

## 🧪 Real-World Example:  
> "Agar exam pass hua toh certificate dikhana; warna kuch mat dikhana."

```jsx
{marks >= 33 && <h3>✅ Certificate Issued</h3>}
```

---

## 🧼 Summary 
| ☑️ Situation       | 💬 Bola jaye to...                    |
|--------------------|----------------------------------------|
| Ternary (`? :`)    | Agar ye to wo, warna dusra             |
| AND (`&&`)         | Agar true hai to dikhana               |
| `if-else`          | Thoda complex decision ho toh          |
| `return null`      | Kuch nahi dikhana toh jaldi se skip    |

---

> "React mein UI ko chalate waqt live decision lena hi conditional rendering hoti hai."

---
