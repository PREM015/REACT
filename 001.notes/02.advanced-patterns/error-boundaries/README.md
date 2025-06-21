# 🛡️ Error Boundaries in React

React apps mein kabhi kabhi aise errors aate hain jo pura component tree ko crash kar dete hain.  
Un situations ke liye React ne diya hai: **Error Boundaries**.

---

## 💥 Problem

Agar kisi child component mein runtime error aa jaye:

```js
throw new Error("Something broke!");
```

Toh pura UI crash ho jaata hai ❌

---

## 🧰 Solution: Error Boundaries

> A **React component** that catches JavaScript errors in its children tree  
> and shows a fallback UI instead of crashing the entire app.

---

## 🧠 How It Works?

| Lifecycle Method | Purpose |
|------------------|---------|
| `getDerivedStateFromError()` | UI fallback ke liye state update karta hai |
| `componentDidCatch()`        | Error ko log karta hai (e.g., Sentry) |

---

## 📦 Basic Structure

```jsx
class ErrorBoundary extends React.Component {
  constructor() {
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // log error
  }

  render() {
    return this.state.hasError ? <FallbackUI /> : this.props.children;
  }
}
```

---

## ✅ Usage

```jsx
<ErrorBoundary>
  <ComponentThatMightCrash />
</ErrorBoundary>
```

> 🧠 ErrorBoundary ke andar sirf wahi wrap karo jo crash kar sakta hai.

---

## 🔒 Real Use Case

- Cart page load mein error? --> Show fallback  
- Payment gateway crash? --> Show error safely  
- Dynamic dashboard widget? --> Show partial crash

---

## ⚠️ Note

- Sirf **class components** hi error boundary ban sakte hain (as of now)
- Functional components ke liye wrapper banana padta hai (ya future update ka wait karo)

---

## 🧼 Summary

> `"React mein Error Boundary ek safety net hai — jisse tumara poora UI crash hone se bacha jaata hai."`  
> Use karo production mein for better UX and graceful failure handling.
