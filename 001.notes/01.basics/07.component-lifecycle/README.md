# 🔄 Component Life Cycle in React

React component ek **zinda object** ki tarah hota hai — jiska ek proper jeevan cycle hota hai.  
Ye cycle 3 major phases mein divide hoti hai:

---

## 🧬 Life Cycle Phases (React ke nazariye se)

| 🔢 Phase        | 📖 Explanation |
|----------------|----------------|
| **Mounting**   | Component screen pe pehli baar dikh raha hai |
| **Updating**   | Jab `props` ya `state` change hoti hai, to component dubara render hota hai |
| **Unmounting** | Jab component DOM se hata diya jata hai (destroy) |

---

## 👴 Class Components (Old Style)

Class-based components mein React kuch **predefined lifecycle methods** deta hai:

| 📛 Method               | ⏱️ Kab chalta hai?                        |
|------------------------|-------------------------------------------|
| `componentDidMount()`  | Component jab pehli baar render ho chuka ho |
| `componentDidUpdate()` | Jab props ya state update ho jaaye         |
| `componentWillUnmount()` | Jab component destroy hone wala ho        |

📌 Ye tareeka ab old-school mana jata hai, lekin abhi bhi legacy code mein milta hai.

---

## ⚛️ Functional Components (Modern Way)

Modern React mein hum lifecycle ko handle karte hain **Hooks** ke through, specially:

```js
useEffect(() => {
  // ✅ Ye chalega jab component mount ya update ho

  return () => {
    // 🔴 Cleanup: Unmount hone se pehle chalega
  };
}, [dependency]);
```

| 🧠 Dependency Array | 🔄 Behavior                 |
| ------------------- | --------------------------- |
| `[]`                | Sirf Mount + Unmount (once) |
| `[state]`           | Mount + jab state change ho |
| *na de*             | Har render pe chalega       |

✅ Ye method **modern**, **clean**, aur **officially recommended** hai by React Team.

---

## 🎯 Real-Life Analogy

| Phase      | Example                                            |
| ---------- | -------------------------------------------------- |
| Mounting   | Tum app ko open kar rahe ho                        |
| Updating   | Tum theme ya settings change kar rahe ho           |
| Unmounting | Tum app close kar rahe ho / page close kar rahe ho |

---

## 📌 Summary

* ⚛️ React components ke life ke teen phase hote hain: **Mount → Update → Unmount**
* ❌ Class lifecycle methods ab legacy hain
* ✅ Modern React mein hum **`useEffect()`** se sab control karte hain
* 🎯 Har phase mein code run karne ka full control hota hai

> “Component ka janm, badlav, aur antim sanskaar — sab `useEffect` ke haathon mein hai.” 😄
