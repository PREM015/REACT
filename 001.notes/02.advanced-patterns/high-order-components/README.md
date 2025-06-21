# 🔁 Higher-Order Components (HOC) in React

A **Higher-Order Component** is a function that **takes a component as input**, adds some **extra behavior**, and **returns a new component**.

---

## 🧠 What is HOC?

> HOC = A function that enhances another component with **reusable logic**.

```jsx
const EnhancedComponent = withFeature(OriginalComponent);
```

---

## 🔧 Real Use Case

- Logging props  
- Authentication check  
- Conditional rendering  
- Adding styles  
- Data fetching wrappers

---

## 🔁 HOC Structure

```jsx
const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log("Props:", props);
    return <WrappedComponent {...props} />;
  };
};
```

📌 **`withLogger`** ek aisa function hai jo ek component ko decorate karta hai logging logic ke saath.

---

## 🔍 Example Usage

```jsx
const Welcome = ({ name }) => <h2>Hello, {name}</h2>;

const WelcomeWithLogger = withLogger(Welcome);
```

When you render:

```jsx
<WelcomeWithLogger name="Prem" />
```

It will:

- Log all props to console
- Render the `Welcome` component normally

---

## 🧪 Real-Life Analogy

> "Socho ek chai ki dukaan hai (`Welcome`). Tum ek machine laga do jo har cup par log kare 'kisne liya?'  
> Wo machine = `withLogger()` — jo har chai serve hone pe log karega."

---

## ⚛️ Key Points

| Feature       | Description                            |
|---------------|----------------------------------------|
| Reusable      | Ek hi HOC multiple components ko enhance kar sakta hai |
| Stateless     | HOC usually doesn't store its own state |
| Wrapping      | HOC returns a **new component**         |

---

## 🧼 Summary

> `"HOC ek wrapper hota hai jo tumhare component ko upgrade karta hai without changing its actual code."`  
> Use karo jab **multiple components ko same behavior dena ho.**

---

📦 Common examples:  
- `withAuthCheck()`  
- `withLogger()`  
- `withLoadingSpinner()`
