import SectionWrapper from "../components/SectionWrapper";
import { products } from "../data/products";

export default function Products() {
  return (
    <SectionWrapper className="bg-white dark:bg-zinc-950">
      <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        Popular Smoothies
      </h2>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {products.map((p) => (
          <div key={p.name} className="text-center">
            <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <img
                src={p.img}
                alt={p.name}
                className="h-120 w-md object-cover"
              />
            </div>

            <p className="mt-4 font-semibold text-zinc-900 dark:text-zinc-100">
              {p.name}
            </p>

            <button className="mt-3 h-10 rounded-full bg-lime-600 px-6 text-sm font-semibold text-white hover:opacity-90">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
