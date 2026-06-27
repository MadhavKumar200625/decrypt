const approach = [
  {
    step: "01",
    title: "Capture what consumers say",
    copy: "Structured dialogue and contextual questioning reveal the conscious beliefs people can explain.",
  },
  {
    step: "02",
    title: "Decode what they feel",
    copy: "Behavioural tasks and neuroscience-informed measures surface the implicit associations beneath stated answers.",
  },
  {
    step: "03",
    title: "Predict what they choose",
    copy: "Integrated decision models convert perception signals into clear priorities for brands, products, and experiences.",
  },
];

export default function ApproachSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-coral-600">
            The Decrypt Method
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            A research system for stated and latent consumer truth.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {approach.map((item) => (
            <article
              key={item.step}
              className="rounded-lg border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-slate-200/70"
            >
              <span className="text-sm font-semibold text-teal-700">{item.step}</span>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
