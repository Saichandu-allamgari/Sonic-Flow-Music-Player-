import { createContext, useState, useEffect } from "react";

// Create Theme Context
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Get theme from localStorage or default to "dark"
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    // Remove old theme classes and apply the new one
    const themes = ["dark", "elegant", "retro" ,"light", "neon", "white-neon", "vibrant", "modern"];
    document.documentElement.classList.remove(...themes);
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
