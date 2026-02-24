import { useEffect, useState } from "react";
import { applyTheme, getStoredTheme, setStoredTheme } from "../utils/theme";

export default function useTheme() {
  const [theme, setTheme] = useState(getStoredTheme); // "light" | "dark" | "system"

  useEffect(() => {
    applyTheme(theme);
    setStoredTheme(theme);
  }, [theme]);

  useEffect(() => {
    // If user chose "system", update when OS theme changes
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (getStoredTheme() === "system") applyTheme("system");
    };

    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  return { theme, setTheme };
}
