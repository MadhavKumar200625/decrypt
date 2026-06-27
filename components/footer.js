import Link from "next/link";

const footerGroups = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Case Study", href: "/case-study" },
      { label: "Careers", href: "/careers" },
      { label: "Insights", href: "/insights" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Dialogue", href: "/solutions/dialogue" },
      { label: "Discover", href: "/solutions/discover" },
      { label: "Determine", href: "/solutions/determine" },
      { label: "Dsire", href: "/solutions/dsire" },
      { label: "Dmystify", href: "/solutions/dmystify" },
      { label: "Dzyne", href: "/solutions/dzyne" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "FMCG", href: "/industries" },
      { label: "Retail", href: "/industries" },
      { label: "Healthcare", href: "/industries" },
      { label: "Financial Services", href: "/industries" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1.8fr]">
          <div>
            <Link href="/" className="flex items-center gap-3" aria-label="Decrypt home">
              <span className="grid size-11 place-items-center rounded-lg bg-teal-700 text-sm font-semibold text-white">
                D
              </span>
              <span>
                <span className="block text-2xl font-semibold tracking-tight text-slate-950">
                  Decrypt
                </span>
                <span className="block text-sm font-medium text-teal-700">
                  Stated and latent consumer intelligence
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
              Decrypt blends neuroscience, behavioural science, and technology
              to uncover what consumers say, feel, choose, and are likely to do next.
            </p>
            <div className="mt-6 rounded-lg border border-teal-100 bg-teal-50 p-4">
              <p className="text-sm font-semibold text-slate-950">Ready to decode a market?</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Share the consumer decision you want to understand and we will shape
                the right research pathway.
              </p>
              <a
                href="mailto:hello@decryptinsights.com"
                className="mt-4 inline-flex rounded-md bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
              >
                Contact Decrypt
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold text-slate-950">{group.title}</h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-600 transition hover:text-teal-700"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Decrypt. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="#" className="hover:text-teal-700">
              Privacy
            </Link>
            <Link href="#" className="hover:text-teal-700">
              Terms
            </Link>
            <a href="https://www.linkedin.com" className="hover:text-teal-700">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
