export default function SectionWrapper({ children, className = "" }) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-7xl px-6 py-20 bg-gray-50 dark:bg-zinc-900/50">
        {children}
      </div>
    </section>
  );
}
