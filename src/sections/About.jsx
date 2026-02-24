import SectionWrapper from "../components/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper className="bg-white dark:bg-zinc-950">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Left */}
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            About Us
          </h2>

          <p className="mt-5 max-w-xl text-zinc-600 dark:text-zinc-400 leading-7">
            We provide delicious and healthy smoothies made from fresh, natural
            ingredients. Our mission is to provide a healthy lifestyle through
            tasty and nutritious drinks.
          </p>

          {/* subtle divider like Figma */}
          <div className="mt-10 h-px w-full bg-zinc-100 dark:bg-zinc-800" />
        </div>

        {/* Right (image block) */}
        <div className="flex justify-end">
          <img
            src="/images/about.jpg"
            alt="About smoothie"
            className="h-85 w-120 max-w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
