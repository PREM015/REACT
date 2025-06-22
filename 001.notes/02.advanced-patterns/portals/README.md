# 🪟 React Portals

React Portals allow you to render components **outside the normal DOM hierarchy**.  
Yeh especially helpful hota hai jab tum modals, dropdowns, ya tooltips banate ho.

---

## 🧠 What is a Portal?

> Normally sab kuch `<div id="root">` ke andar render hota hai.  
> Portal tumhe allow karta hai kisi aur DOM node mein render karne ka — like `<div id="modal-root">`.

```jsx
ReactDOM.createPortal(
  <ModalContent />,
  document.getElementById("modal-root")
);
```

---

## 💡 Use Case

- ✅ Modal windows  
- ✅ Tooltip dropdowns  
- ✅ Notification toasts  
- ✅ Pop-up confirmations

---

## 📦 Example Code

```jsx
<ModalPortal isOpen={true} onClose={() => setShow(false)} />
```

Aur `ModalPortal` render karega:

```jsx
ReactDOM.createPortal(
  <ModalContent />,
  document.getElementById("modal-root")
);
```

---

## ⚙️ Setup Required

Yeh HTML mein hona chahiye:

```html
<!-- public/index.html -->
<div id="root"></div>
<div id="modal-root"></div> <!-- 👈 Portal yahan render hoga -->
```

---

## 🔁 Real-Life Analogy

> **"Socho ek modal ko tum DOM ke kisi corner mein nahi ghusa sakte, toh uske liye ek alag jaga (modal-root) banate ho — jahan wo bebas hokar dikhega."**

---

## ✅ Benefits

| Feature               | Why it's helpful |
|------------------------|------------------|
| Escape parent overflow | Modal dikh sakta hai properly |
| Avoid z-index fights   | Independent stacking |
| Cleaner DOM structure  | No nested mess |

---

## 🧼 Summary

> React Portals tumhe allow karte hain ki tumhara component kisi bhi DOM node mein render ho — even outside root.  
> Use them for modals, dropdowns, or floating UI elements.
