// src/contexts/ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

// 1️⃣ Create a ThemeContext with default values
export const ThemeContext = createContext({
  themeMode: "light", // Default theme is light
  darkTheme: () => {},
  lightTheme: () => {},
});

// 2️⃣ ThemeProvider component
export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState("light"); // Default theme is light

  // 3️⃣ Handle theme changes
  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");

  // 4️⃣ Persist theme in localStorage and apply it
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setThemeMode(storedTheme); // If theme exists in localStorage, use it
    }
  }, []);

  // 5️⃣ Apply the theme to the <html> element and store in localStorage
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeMode);
    localStorage.setItem("theme", themeMode); // Store theme in localStorage
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 6️⃣ Custom hook to access the theme context
export function useTheme() {
  return useContext(ThemeContext);
}
