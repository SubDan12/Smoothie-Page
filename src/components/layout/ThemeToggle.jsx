import useTheme from "../../hook/useTheme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="
          h-9 rounded-md border px-2 text-sm
          bg-white text-zinc-900 border-zinc-200
          dark:bg-zinc-950 dark:text-zinc-100 dark:border-zinc-800
          outline-none
        "
        aria-label="Theme"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}
