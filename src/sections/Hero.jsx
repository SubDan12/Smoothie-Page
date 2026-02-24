export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-zinc-950">
      {/* SVG BACKGROUND */}
      <svg
        className="absolute inset-0 z-0 h-full w-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <rect
          x="0"
          y="0"
          width="1440"
          height="600"
          className="fill-gray-50 dark:fill-zinc-950"
        />

        <path
          d="M0,140 C240,80 420,80 720,150 C1020,220 1200,220 1440,140 L1440,600 L0,600 Z"
          className="fill-gray-100/60 dark:fill-zinc-900/50"
        />

        <path
          d="M0,220 C260,160 460,180 720,240 C980,300 1180,280 1440,210 L1440,600 L0,600 Z"
          className="fill-gray-200/50 dark:fill-zinc-800/50"
        />

        <path
          d="M0,70 C300,30 520,40 760,80 C1000,120 1220,120 1440,60 L1440,0 L0,0 Z"
          className="fill-gray-100/50 dark:fill-zinc-900/20"
        />
      </svg>

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
        {/* LEFT */}
        <div>
          <p className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
            Fresh • Healthy • Delivered
          </p>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-zinc-900 dark:text-zinc-100">
            Fresh &amp; Healthy <br />
            <span className="text-lime-600">Smoothies</span>
          </h1>

          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Delicious and nutritious smoothies made with fresh fruits.
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Minimal ingredients. Big flavor. Choose from our best-sellers or
            build your own smoothie — delivered fast and chilled.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button className="h-12 rounded-full bg-lime-600 px-8 text-sm font-semibold text-white hover:opacity-90">
              Shop Now
            </button>

            <button className="h-12 rounded-full border border-zinc-200 bg-white px-8 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT */}
        {/* <div className="flex justify-end">
          <img
            src="/images/hero-1.png"
            alt="Smoothie"
            className="h-105 w-130 max-w-full rounded-2xl object-cover"
          />
        </div> */}

        {/* RIGHT */}
        <div className="mt-8 flex justify-center md:mt-0 md:justify-end md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:w-[52%] pointer-events-none">
          <img
            src="/images/hero-1.png"
            alt="Smoothie"
            className="w-[92%] max-w-130 md:w-full md:max-w-none h-auto object-contain drop-shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
