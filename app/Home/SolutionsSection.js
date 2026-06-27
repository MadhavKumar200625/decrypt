import Link from "next/link";

const solutions = [
  ["Dialogue", "Rich conversations that uncover meaning, language, and emotional context."],
  ["Discover", "Explore consumer spaces, tensions, occasions, and hidden opportunity signals."],
  ["Determine", "Quantify the drivers that shape attention, preference, and purchase decisions."],
  ["Dsire", "Map latent desire and identify what creates pull for a product or brand."],
  ["Dmystify", "Translate implicit perceptions into clear, usable strategy for teams."],
  ["Dzyne", "Shape concepts, experiences, and journeys using validated consumer intelligence."],
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
              Solution Suite
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Modular tools for every consumer decision question.
            </h2>
          </div>
          <Link
            href="/solutions"
            className="w-fit rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-teal-300 hover:text-teal-800"
          >
            See all solutions
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map(([title, copy], index) => (
            <Link
              key={title}
              href={`/solutions/${title.toLowerCase()}`}
              className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/10"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
                <span className="grid size-9 place-items-center rounded-md bg-slate-100 text-sm font-semibold text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
                  {index + 1}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{copy}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
