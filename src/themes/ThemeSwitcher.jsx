import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeSwitcher() {
  const { setTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const themes = ["light", "dark", "retro","neon", "elegant", "white-neon", "vibrant", "modern"];

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Button */}
      <button 
        className="w-12 h-12 rounded-full button text-white flex items-center justify-center shadow-lg relative"
        onClick={() => setOpen(!open)}
      >
        🎨
      </button>

      {/* Theme Options */}
      {open && (
        <div className="absolute bottom-14 right-0 bg-white button rounded-lg shadow-lg p-2 flex flex-col w-32 border border-gray-300 dark:border-gray-700 z-50">
          {themes.map((theme) => (
            <button 
              key={theme} 
              onClick={() => { setTheme(theme); setOpen(false); }} 
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 capitalize"
            >
              {theme.replace("-", " ")}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ThemeSwitcher;
