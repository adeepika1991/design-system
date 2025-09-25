import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="
        sticky top-0
        z-[1100]
        bg-background dark:bg-background
        border-b border-border dark:border-border
        backdrop-blur-[8px]
        flex justify-center items-center
        p-4
      "
    >
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          flex items-center justify-center
          w-10 h-10
          rounded-lg
          bg-surface dark:bg-surface
          text-text dark:text-text
          transition-all duration-300
          hover:bg-surfaceHover dark:hover:bg-surfaceHover
        "
        aria-label="Toggle Theme"
      >
        {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
      </motion.button>
    </header>
  );
}
