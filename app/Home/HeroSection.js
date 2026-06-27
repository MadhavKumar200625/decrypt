import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "2x", label: "mind coverage" },
  { value: "6", label: "solution modules" },
  { value: "360", label: "decision decoding" },
];

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_42%,#ecfeff_100%)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:pb-24 lg:pt-20">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-md border border-teal-200 bg-white px-3 py-1.5 text-sm font-semibold text-teal-800 shadow-sm">
            Neuroscience + behavioural science + technology
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Decode the whole consumer mind.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Decrypt moves beyond stated responses to unlock both conscious and
            subconscious perceptions, motivations, and decisions across the consumer journey.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/solutions"
              className="rounded-md bg-teal-700 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
            >
              Explore Solutions
            </Link>
            <Link
              href="/case-study"
              className="rounded-md border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-teal-300 hover:text-teal-800"
            >
              View Case Studies
            </Link>
          </div>
          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <dt className="text-xs font-medium text-slate-500">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-slate-950">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-[360px] lg:min-h-[560px]">
          <div className="absolute inset-0 rounded-lg bg-white shadow-2xl shadow-teal-900/10 ring-1 ring-slate-200" />
          <Image
            src="/images/decrypt-hero.png"
            alt="Consumer insights technology interface with neuroscience and decision journey visuals"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 54vw"
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
