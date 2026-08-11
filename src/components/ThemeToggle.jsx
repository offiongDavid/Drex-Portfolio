import { useTheme } from "../context/ThemeContext";
import { HiSun, HiMoon } from "react-icons/hi";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-xl border border-slate-700 bg-slate-900/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500/50 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {theme === "dark" ? (
          <HiSun className="text-xl text-yellow-400" />
        ) : (
          <HiMoon className="text-xl text-blue-400" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;