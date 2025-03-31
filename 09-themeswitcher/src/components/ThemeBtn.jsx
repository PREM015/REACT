// src/components/ThemeBtn.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme from ThemeContext

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme(); // Access theme mode and the toggle functions

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked; // Get the checked status
    if (darkModeStatus) {
      darkTheme(); // Apply dark theme
    } else {
      lightTheme(); // Apply light theme
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChangeBtn} // Handle theme toggle
        checked={themeMode === "dark"} // Check if the current theme is dark
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
    </label>
  );
}
