import SectionWrapper from "../components/SectionWrapper";
import { features } from "../data/features";

export default function Features() {
  return (
    <SectionWrapper className="bg-white dark:bg-zinc-950">
      <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        Why Choose Us?
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex items-center gap-4 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-zinc-50 text-2xl dark:bg-zinc-900">
              {f.emoji}
            </div>

            <div>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                {f.title}
              </p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
