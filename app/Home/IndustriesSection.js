const industries = [
  "Consumer Goods",
  "Retail and E-commerce",
  "Financial Services",
  "Healthcare",
  "Technology",
  "Media and Entertainment",
  "Automotive",
  "Travel and Hospitality",
];

export default function IndustriesSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-coral-600">
            Industries
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Built for markets where perception decides growth.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            From new product development to brand positioning, Decrypt helps teams
            understand the signals that consumers may not be able to articulate,
            but still use to choose.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm font-semibold text-slate-800"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
