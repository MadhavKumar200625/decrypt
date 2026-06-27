import Link from "next/link";

const primaryNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Case Study", href: "/case-study" },
  { label: "Insights", href: "/insights" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
];

const solutions = [
  {
    label: "Dialogue",
    href: "/solutions/dialogue",
    description: "Conversational research that captures richer consumer context.",
  },
  {
    label: "Discover",
    href: "/solutions/discover",
    description: "Early signals, category truths, and unmet needs.",
  },
  {
    label: "Determine",
    href: "/solutions/determine",
    description: "Decision drivers ranked by behavioural impact.",
  },
  {
    label: "Dsire",
    href: "/solutions/dsire",
    description: "Latent desire mapping for brands, products, and experiences.",
  },
  {
    label: "Dmystify",
    href: "/solutions/dmystify",
    description: "Make subconscious motivations measurable and actionable.",
  },
  {
    label: "Dzyne",
    href: "/solutions/dzyne",
    description: "Insight-led design, testing, and market-ready refinement.",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/[0.92] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Decrypt home">
          <span className="grid size-10 place-items-center rounded-lg bg-teal-700 text-sm font-semibold text-white shadow-sm">
            D
          </span>
          <span className="leading-none">
            <span className="block text-xl font-semibold tracking-tight text-slate-950">
              Decrypt
            </span>
            <span className="block text-xs font-medium text-teal-700">
              Consumer mind decoded
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {primaryNav.slice(0, 3).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}

          <div className="group relative">
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950">
              Solutions
              <span className="text-xs text-teal-700" aria-hidden="true">
                v
              </span>
            </button>
            <div className="invisible absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-4 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-2 rounded-lg border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/70">
                {solutions.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-md p-3 transition hover:bg-teal-50"
                  >
                    <span className="block text-sm font-semibold text-slate-950">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-slate-600">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {primaryNav.slice(3).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="mailto:hello@decryptinsights.com"
            className="rounded-md bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
          >
            Start a Project
          </a>
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-md border border-slate-200 bg-white text-slate-800 shadow-sm [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open menu</span>
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className="block h-0.5 w-5 rounded bg-slate-800" />
              <span className="block h-0.5 w-5 rounded bg-slate-800" />
              <span className="block h-0.5 w-5 rounded bg-slate-800" />
            </span>
          </summary>
          <div className="absolute right-0 top-12 w-[min(92vw,360px)] rounded-lg border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/80">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {primaryNav.slice(0, 3).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                >
                  {item.label}
                </Link>
              ))}
              <details className="rounded-md bg-slate-50">
                <summary className="cursor-pointer list-none px-3 py-2.5 text-sm font-semibold text-slate-800 [&::-webkit-details-marker]:hidden">
                  Solutions
                </summary>
                <div className="grid gap-1 px-2 pb-2">
                  {solutions.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </details>
              {primaryNav.slice(3).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="mailto:hello@decryptinsights.com"
                className="mt-2 rounded-md bg-slate-950 px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                Start a Project
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
