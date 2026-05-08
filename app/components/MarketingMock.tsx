import type { CairnVariant, WordmarkVariant } from "@/app/lib/brand";
import { Lockup } from "./Logo";

export function MarketingMock({ cairn, wordmark }: { cairn: CairnVariant; wordmark: WordmarkVariant }) {
  return (
    <div
      className="overflow-hidden rounded-2xl shadow-sm"
      style={{ background: "var(--bg)", border: "1px solid var(--line)" }}
    >
      <header
        className="flex items-center justify-between px-8 py-5"
        style={{ borderBottom: "1px solid var(--line)" }}
      >
        <Lockup cairn={cairn} wordmark={wordmark} size="sm" />
        <nav className="hidden items-center gap-7 text-sm md:flex" style={{ color: "var(--ink-soft)" }}>
          <a>How it works</a>
          <a>Privacy</a>
          <a>Pricing</a>
          <a>Stories</a>
        </nav>
        <div className="flex items-center gap-3 text-sm">
          <a style={{ color: "var(--ink-soft)" }}>Sign in</a>
          <button
            className="rounded-full px-4 py-2 text-sm font-medium"
            style={{ background: "var(--primary)", color: "var(--surface)" }}
          >
            Create account
          </button>
        </div>
      </header>

      <section className="grid gap-12 px-8 py-20 md:grid-cols-12 md:px-16 md:py-28">
        <div className="md:col-span-7">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
            style={{ background: "var(--surface)", border: "1px solid var(--line)", color: "var(--ink-soft)" }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
            Now in private beta
          </div>
          <h1
            className="font-display text-5xl leading-[1.0] md:text-7xl"
            style={{ color: "var(--ink)", letterSpacing: "-0.065em" }}
          >
            Your health,
            <br />
            <span style={{ color: "var(--primary)" }}>finally in one place.</span>
          </h1>
          <p
            className="mt-6 max-w-lg text-lg leading-relaxed"
            style={{ color: "var(--ink-soft)", letterSpacing: "-0.025em" }}
          >
            Tusdi gathers every record, lab, and visit you've ever had — and helps you actually
            understand what's in them. Held with care, written in plain language.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button
              className="rounded-full px-5 py-3 text-sm font-medium"
              style={{ background: "var(--ink)", color: "var(--surface)" }}
            >
              Create your account
            </button>
            <button
              className="rounded-full px-5 py-3 text-sm font-medium"
              style={{ border: "1px solid var(--line)", color: "var(--ink)" }}
            >
              See how it works →
            </button>
          </div>
          <div
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-2 text-xs uppercase tracking-widest"
            style={{ color: "var(--ink-soft)" }}
          >
            <span>End-to-end encrypted</span>
            <span>·</span>
            <span>HIPAA-compliant</span>
            <span>·</span>
            <span>Syncs from 30,000+ providers</span>
          </div>
        </div>

        <div className="relative md:col-span-5">
          <div
            className="rounded-3xl p-6 shadow-sm"
            style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--ink-soft)" }}>
                Today
              </span>
              <span className="text-xs" style={{ color: "var(--ink-soft)" }}>Health snapshot</span>
            </div>
            <div className="mt-5 flex items-baseline gap-3">
              <div className="font-display text-6xl leading-none" style={{ color: "var(--primary)" }}>
                72
              </div>
              <div className="text-xs" style={{ color: "var(--ink-soft)" }}>
                Health score
                <br />
                <span style={{ color: "var(--primary)" }}>+4 since April</span>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {[
                { label: "Cardiovascular", normal: 16, total: 17 },
                { label: "Metabolic", normal: 20, total: 23 },
                { label: "Hepatic", normal: 14, total: 15 },
                { label: "Renal", normal: 10, total: 10 },
              ].map((row) => {
                const pct = (row.normal / row.total) * 100;
                return (
                  <div key={row.label}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span style={{ color: "var(--ink)" }}>{row.label}</span>
                      <span style={{ color: "var(--ink-soft)" }}>
                        {row.normal} of {row.total}
                      </span>
                    </div>
                    <div
                      className="h-1.5 overflow-hidden rounded-full"
                      style={{ background: "var(--line)" }}
                    >
                      <div
                        className="h-full"
                        style={{ width: `${pct}%`, background: "var(--primary)" }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="mt-5 flex items-center justify-between border-t pt-4 text-xs"
              style={{ borderColor: "var(--line)", color: "var(--ink-soft)" }}
            >
              <span>Updated 4 minutes ago</span>
              <span style={{ color: "var(--primary)" }}>Open dashboard →</span>
            </div>
          </div>

          <div
            className="absolute -bottom-6 -left-6 hidden max-w-[18rem] rounded-2xl px-5 py-4 shadow-lg md:block"
            style={{ background: "var(--ink)", color: "var(--surface)" }}
          >
            <div className="text-xs uppercase tracking-widest" style={{ color: "var(--accent)" }}>
              Latest insight
            </div>
            <div className="mt-2 font-display text-base leading-snug">
              "Your iron levels have stabilized — likely related to the supplement change in March."
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-widest opacity-60">
              Synthesized from 3 lab reports
            </div>
          </div>
        </div>
      </section>

      <section
        className="grid gap-px px-1 pb-1 md:grid-cols-3"
        style={{ background: "var(--line)" }}
      >
        {[
          {
            kicker: "Your records, gathered",
            title: "Every visit, lab, and report — in one calm place.",
            body: "Pull from any provider, hospital, or pharmacy. We keep your full history at hand and at your control.",
          },
          {
            kicker: "Plain-language insights",
            title: "Understand what your results actually mean.",
            body: "Tusdi reads your reports and explains them in everyday language. Ask questions. Get clear answers.",
          },
          {
            kicker: "A whole-body view",
            title: "See every system, over time.",
            body: "Cardiovascular, metabolic, hepatic, renal, and more — tracked across years. Notice what's changing.",
          },
        ].map((card) => (
          <div key={card.kicker} className="px-8 py-10" style={{ background: "var(--bg)" }}>
            <div className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--accent)" }}>
              {card.kicker}
            </div>
            <h3
              className="font-display mt-3 text-2xl leading-tight"
              style={{ color: "var(--ink)", letterSpacing: "-0.045em" }}
            >
              {card.title}
            </h3>
            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: "var(--ink-soft)", letterSpacing: "-0.02em" }}
            >
              {card.body}
            </p>
          </div>
        ))}
      </section>

      <footer
        className="flex flex-wrap items-center justify-between gap-6 px-8 py-8 text-sm"
        style={{ borderTop: "1px solid var(--line)", color: "var(--ink-soft)" }}
      >
        <Lockup cairn={cairn} wordmark={wordmark} size="sm" />
        <div className="flex gap-6">
          <a>Privacy</a>
          <a>Security</a>
          <a>Help</a>
          <a>Contact</a>
        </div>
        <div className="text-xs">© 2026 Tusdi Health, Inc.</div>
      </footer>
    </div>
  );
}
