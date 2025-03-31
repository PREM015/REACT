// src/contexts/ThemeProvider.jsx
import { ThemeContext } from "./ThemeContext"; // Import the ThemeContext
import { useState, useEffect } from "react";

// 2️⃣ ThemeProvider component
export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState("light"); // State to track the theme mode

  const darkTheme = () => setThemeMode("dark"); // Set theme to dark
  const lightTheme = () => setThemeMode("light"); // Set theme to light

  // 3️⃣ Apply theme changes to <html> tag whenever themeMode changes
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark"); // Remove existing classes
    document.documentElement.classList.add(themeMode); // Add the current theme class
  }, [themeMode]); // Runs whenever themeMode changes

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children} {/* Render the child components */}
    </ThemeContext.Provider>
  );
}
