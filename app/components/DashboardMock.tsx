import type { CairnVariant, WordmarkVariant } from "@/app/lib/brand";
import { Lockup } from "./Logo";

const NAV = [
  { label: "Home", active: true },
  { label: "Health Markers" },
  { label: "Genetics" },
  { label: "Conditions" },
  { label: "Symptoms" },
  { label: "Medications" },
  { label: "Supplements" },
  { label: "Allergies" },
  { label: "Documents" },
  { label: "Healthcare Network" },
  { label: "Encounters" },
  { label: "Health Graph" },
];

const SYSTEMS = [
  { label: "hematological", normal: 11, total: 19, score: 58 },
  { label: "immune", normal: 9, total: 14, score: 64 },
  { label: "hepatic", normal: 12, total: 17, score: 71 },
  { label: "endocrine", normal: 9, total: 12, score: 75 },
  { label: "cardiovascular", normal: 16, total: 17, score: 75 },
  { label: "metabolic", normal: 20, total: 23, score: 83 },
  { label: "renal", normal: 10, total: 10, score: 100 },
  { label: "musculoskeletal", normal: 8, total: 8, score: 100 },
  { label: "nervous", normal: 11, total: 11, score: 100 },
  { label: "reproductive", normal: 6, total: 6, score: 100 },
];

const SYSTEM_CARDS = [
  { name: "Cardiovascular", count: 17, normal: 16, flagged: 1 },
  { name: "Metabolic", count: 23, normal: 20, flagged: 3 },
  { name: "Endocrine", count: 12, normal: 9, flagged: 3 },
  { name: "Hepatic", count: 17, normal: 12, flagged: 5 },
  { name: "Renal", count: 10, normal: 10, flagged: 0 },
];

const RECENT = [
  { kind: "Document", title: "Hematology panel — Apr 28", source: "Northgate Labs" },
  { kind: "Insight", title: "Iron levels stabilized after March supplement change", source: "Synthesis" },
  { kind: "Encounter", title: "Annual physical with Dr. Voss", source: "Apr 18" },
];

export function DashboardMock({ cairn, wordmark }: { cairn: CairnVariant; wordmark: WordmarkVariant }) {
  return (
    <div
      className="overflow-hidden rounded-2xl shadow-sm"
      style={{ background: "var(--bg)", border: "1px solid var(--line)" }}
    >
      <div className="grid grid-cols-[240px_1fr]">
        <aside
          className="flex flex-col p-5"
          style={{ background: "var(--surface)", borderRight: "1px solid var(--line)" }}
        >
          <div className="mb-8 px-2">
            <Lockup cairn={cairn} wordmark={wordmark} size="sm" />
          </div>
          <nav className="flex flex-col gap-0.5 text-sm">
            {NAV.map((n) => (
              <button
                key={n.label}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-left"
                style={{
                  background: n.active ? "var(--bg)" : "transparent",
                  color: n.active ? "var(--ink)" : "var(--ink-soft)",
                  border: n.active ? "1px solid var(--line)" : "1px solid transparent",
                  fontWeight: n.active ? 500 : 400,
                }}
              >
                <span>{n.label}</span>
              </button>
            ))}
          </nav>
          <div className="mt-auto rounded-xl p-4" style={{ background: "var(--bg)", border: "1px solid var(--line)" }}>
            <div className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-medium"
                style={{ background: "var(--primary)", color: "var(--surface)" }}
              >
                JM
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium" style={{ color: "var(--ink)" }}>Jessica Moore</div>
                <div className="text-[11px]" style={{ color: "var(--ink-soft)" }}>Account owner</div>
              </div>
            </div>
          </div>
        </aside>

        <main className="p-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest" style={{ color: "var(--ink-soft)" }}>
                Tuesday · May 7
              </div>
              <h2 className="font-display mt-1 text-4xl leading-tight tracking-tight" style={{ color: "var(--ink)" }}>
                Good morning, Jessica.
              </h2>
              <p className="mt-2 max-w-xl text-sm" style={{ color: "var(--ink-soft)" }}>
                Welcome back to Tusdi. Your health, in plain everyday language.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div
                className="flex items-center gap-2 rounded-full px-3 py-2"
                style={{ background: "var(--surface)", border: "1px solid var(--line)", color: "var(--ink-soft)" }}
              >
                <span>Ask Tusdi anything</span>
                <span className="rounded border px-1 text-[10px]" style={{ borderColor: "var(--line)" }}>⌘K</span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-5">
            <div
              className="col-span-2 rounded-2xl p-6"
              style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--ink-soft)" }}>
                    Health Score
                  </div>
                  <div className="mt-1 text-xs" style={{ color: "var(--ink-soft)" }}>
                    Across 137 markers · updated 4 minutes ago
                  </div>
                </div>
                <div className="text-xs" style={{ color: "var(--primary)" }}>+4 since April →</div>
              </div>

              <div className="mt-6 grid grid-cols-[180px_1fr] items-center gap-8">
                <div className="relative flex items-center justify-center">
                  <ScoreRing score={72} />
                </div>
                <div className="space-y-2">
                  {SYSTEMS.map((s) => (
                    <div key={s.label} className="grid grid-cols-[120px_1fr_40px] items-center gap-3">
                      <span className="text-xs" style={{ color: "var(--ink-soft)" }}>{s.label}</span>
                      <div className="h-1.5 overflow-hidden rounded-full" style={{ background: "var(--line)" }}>
                        <div
                          className="h-full"
                          style={{ width: `${s.score}%`, background: "var(--primary)" }}
                        />
                      </div>
                      <span className="text-right text-[11px]" style={{ color: "var(--ink-soft)" }}>
                        {s.score}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{ background: "var(--ink)", color: "var(--surface)" }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest opacity-70">Latest insight</span>
                <span className="text-xs opacity-70">Apr 30</span>
              </div>
              <div
                className="font-display mt-4 text-xl leading-snug"
                style={{ color: "var(--surface)" }}
              >
                Your iron levels have stabilized — likely related to the supplement change in March.
              </div>
              <div className="mt-4 text-[11px] opacity-70">
                Synthesized from 3 lab reports and 1 encounter note
              </div>
              <div
                className="mt-6 rounded-xl p-3"
                style={{ background: "color-mix(in srgb, var(--surface) 12%, transparent)" }}
              >
                <div className="text-[10px] uppercase tracking-widest opacity-60">Recent activity</div>
                <ul className="mt-2 space-y-2 text-xs">
                  {RECENT.map((r) => (
                    <li key={r.title} className="flex items-start gap-2">
                      <span
                        className="mt-1 inline-block h-1.5 w-1.5 rounded-full flex-shrink-0"
                        style={{ background: "var(--accent)" }}
                      />
                      <div>
                        <div className="opacity-90">{r.title}</div>
                        <div className="opacity-50">{r.kind} · {r.source}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-display text-lg" style={{ color: "var(--ink)" }}>Body systems</h3>
              <button className="text-xs" style={{ color: "var(--primary)" }}>View all →</button>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {SYSTEM_CARDS.map((s) => {
                const pct = (s.normal / s.count) * 100;
                return (
                  <div
                    key={s.name}
                    className="rounded-xl p-4"
                    style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
                  >
                    <div className="text-xs font-medium" style={{ color: "var(--ink)" }}>{s.name}</div>
                    <div className="mt-1 text-[10px]" style={{ color: "var(--ink-soft)" }}>
                      {s.count} markers tracked
                    </div>
                    <div
                      className="mt-3 h-1.5 overflow-hidden rounded-full"
                      style={{ background: "var(--line)" }}
                    >
                      <div className="h-full" style={{ width: `${pct}%`, background: "var(--primary)" }} />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[10px]" style={{ color: "var(--ink-soft)" }}>
                      <span>{s.normal} of {s.count} normal</span>
                      {s.flagged > 0 && (
                        <span style={{ color: "var(--accent)" }}>{s.flagged} flagged</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function ScoreRing({ score }: { score: number }) {
  const size = 160;
  const stroke = 10;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - score / 100);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="var(--line)"
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="var(--primary)"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="var(--font-fraunces)"
        fontSize="44"
        fontWeight="500"
        fill="var(--ink)"
      >
        {score}
      </text>
      <text
        x="50%"
        y="68%"
        textAnchor="middle"
        fontFamily="var(--font-inter)"
        fontSize="9"
        letterSpacing="2"
        fill="var(--ink-soft)"
      >
        OUT OF 100
      </text>
    </svg>
  );
}
