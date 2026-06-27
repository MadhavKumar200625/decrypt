import Link from "next/link";

const posts = [
  "Why stated preference misses the moment of choice",
  "How implicit cues shape trust before reason catches up",
  "Using behavioural science to sharpen product innovation",
];

export default function InsightsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-200">
                Insights
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Ideas for teams studying behaviour, emotion, and decisions.
              </h2>
              <Link
                href="/insights"
                className="mt-6 inline-flex rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-teal-50"
              >
                Browse insights
              </Link>
            </div>
            <div className="grid gap-3">
              {posts.map((post) => (
                <Link
                  key={post}
                  href="/insights"
                  className="rounded-lg border border-white/15 bg-white/[0.08] p-4 text-sm font-semibold text-white transition hover:bg-white/[0.14]"
                >
                  {post}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
