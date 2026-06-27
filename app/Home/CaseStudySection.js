import Link from "next/link";

export default function CaseStudySection() {
  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-teal-700">Featured case study</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Finding the hidden reason behind brand rejection.
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              A category leader had strong stated awareness but weak conversion.
              Decrypt separated rational barriers from implicit discomfort, then
              identified the product cues that could rebuild confidence.
            </p>
            <Link
              href="/case-study"
              className="mt-6 inline-flex rounded-md bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              Read the story
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["41%", "implicit barrier reduced"],
              ["3", "priority cues redesigned"],
              ["18%", "concept lift in validation"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-teal-100 bg-teal-50 p-6">
                <p className="text-3xl font-semibold text-teal-800">{value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
