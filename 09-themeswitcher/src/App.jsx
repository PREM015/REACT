// src/App.jsx
import { useEffect } from "react";
import { ThemeProvider } from './contexts/ThemeProvider'; // Import ThemeProvider
import { useTheme } from './contexts/ThemeContext'; // Import useTheme hook
import ThemeBtn from './components/ThemeBtn'; // Import theme button component
import Card from './components/Card'; // Import card component
import './App.css'; // Import styles

function AppContent() {
  // Get themeMode from the ThemeContext
  const { themeMode } = useTheme();

  // Apply the theme whenever themeMode changes
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
        </div>
        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
