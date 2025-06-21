# 📋 Lists and Keys in React

React mein jab humein **list of items render** karni hoti hai (jaise array of strings ya objects), tab hum `.map()` ka use karke JSX return karte hain.

Lekin har item ko unique banane ke liye humein `key` prop deni padti hai — taaki React efficiently track kar sake kaun sa item update ya remove hua.

---

## 🔑 Why are Keys Important?

React ko fast rendering karne ke liye pata hona chahiye:
> "Kaunsa item list se remove hua, kaunsa add hua, aur kaunsa same hai?"

Isliye har list item ko ek **unique key** dena padta hai.

---

## ⚠️ Warning without Key

```jsx
// ❌ React warning deta hai agar key na ho
{items.map((item) => (
  <li>{item}</li>
))}
```

---

## ✅ Correct Usage with Key

```jsx
{items.map((item, index) => (
  <li key={index}>{item}</li>
))}
```

> ⚠️ Index as key sirf tab use karo jab list static ho.  
> Dynamic data ho to use karo `item.id` ya koi unique field.

---

## 🧪 Real-Life Example

Socho tumhare paas ek To-Do list hai. Agar kisi item ko remove karna ho, to key hi React ko batata hai:

> "Yeh naya item hai ya purana?"

Agar key sahi na di ho to React galat item ko update kar sakta hai.

---

## 📌 Summary

- ✅ `map()` ka use karke lists render karo
- ✅ Har list item ko `key` prop do
- ✅ Key unique aur consistent honi chahiye
- ❌ Kabhi bhi list render karte waqt key ko ignore mat karo

> "Key woh pehchan hai jiske bina React list ka hisaab nahi rakh sakta." 😄
