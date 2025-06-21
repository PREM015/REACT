# ⚛️ What is JSX in React?

JSX ka matlab hai **JavaScript XML**.  
Yeh ek syntax extension hai jo JavaScript ke andar HTML jaise code likhne deta hai. React JSX ko use karke UI define karta hai.

---

## 🧠 JSX in Simple Words:

🗣️ "**JSX wo hota hai jo tumhe JavaScript ke andar HTML likhne ka shortcut deta hai.**"  
React ke andar JSX likhna easy hota hai, lekin **React usko internally convert karta hai JavaScript ke `React.createElement()` function mein.**

---

## ✅ JSX Syntax Example:

```jsx
const name = "Prem";
const element = <h1>Hello, {name}!</h1>;
```

> Yeh internally ban jaata hai:
```js
React.createElement("h1", null, `Hello, ${name}!`);
```

---

## 📦 JSX is NOT HTML

| ❌ HTML              | ✅ JSX |
|---------------------|--------|
| class               | className |
| onclick             | onClick |
| style="color:red;"  | style={{ color: 'red' }} |
| Multiple root tags allowed | ❌ Nahi — JSX mein ek single parent hona chahiye |

---

## 🪛 JSX Rules (Very Important)

| Rule 🔧            | Explanation 🧾 |
|--------------------|----------------|
| 1️⃣ One parent tag only | JSX mein return sirf ek hi root element hona chahiye |
| 2️⃣ Use `className` not `class` | `class` JS keyword hota hai |
| 3️⃣ `onClick` capital C | camelCase use hota hai JSX mein |
| 4️⃣ JS inside `{}` curly braces | JSX mein JS expression likhne ke liye braces chahiye |
| 5️⃣ Comments like `{/* */}` | JSX ke andar comments ka special syntax hota hai |

---

## 🔍 Real Example:

```jsx
const JSXExample = () => {
  const user = "Prem";
  const loggedIn = true;

  return (
    <div>
      <h1>Hello, {user}!</h1>
      <p>{loggedIn ? "Welcome back!" : "Please login"}</p>
    </div>
  );
};
```

---

## 🧪 JSX Behind the Scenes

```jsx
const element = <h1>Hello!</h1>;

// Yeh ban jata hai:
const element2 = React.createElement("h1", null, "Hello!");
```

📌 React JSX file ko compile karke `React.createElement()` mein convert karta hai — jisse browser mein DOM render ho jaata hai.

---

## 🔚 Summary 

> "JSX ek shortcut hai jo React mein HTML likhne jaise feel deta hai, lekin asli mein wo sab kuch JavaScript ka code hota hai."  
> Yeh syntax developer ke liye asaan banata hai aur code zyada readable hota hai.  
> **Jaise `HTML + JS` ka fusion hota hai — wohi JSX hai.** ✅

---
