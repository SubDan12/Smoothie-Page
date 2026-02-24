export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white dark:border-zinc-800 dark:bg-zinc-950 ">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-lime-600">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-lime-600">
            Customer Service
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
            <li>FAQ</li>
            <li>Shipping &amp; Delivery</li>
            <li>Return Policy</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-lime-600">
            Follow Us
          </h3>
          <div className="mt-4 flex items-center gap-4 text-zinc-700 dark:text-zinc-200">
            <span className="text-xl">𝕏</span>
            <span className="text-xl">f</span>
            <span className="text-xl">◎</span>
          </div>
        </div>

        {/* Right spacer like Figma (socials on far right) */}
        <div className="hidden md:block" />
      </div>
    </footer>
  );
}
