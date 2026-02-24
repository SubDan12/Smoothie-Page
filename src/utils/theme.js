const STORAGE_KEY = "theme"; // "light" | "dark" | "system"

export function getStoredTheme() {
  const t = localStorage.getItem(STORAGE_KEY);
  return t === "light" || t === "dark" || t === "system" ? t : "system";
}

export function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(theme) {
  const root = document.documentElement; // <html>
  const resolved = theme === "system" ? getSystemTheme() : theme;

  if (resolved === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

export function setStoredTheme(theme) {
  localStorage.setItem(STORAGE_KEY, theme);
}
