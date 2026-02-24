import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
            S
          </div>
          <span className="text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-100">
            SmoothieShop
          </span>
        </div>

        {/* Middle: Links */}
        <nav className="hidden items-center gap-6 md:flex">
          {["Home", "About", "Menu", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <button
            className="hidden rounded-md border border-zinc-200 px-3 py-2 text-sm text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900 md:inline-flex"
            type="button"
          >
            Shop
          </button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
