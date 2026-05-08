"use client";

import { useEffect, useState } from "react";
import { ControlBar } from "./components/ControlBar";
import { DashboardMock } from "./components/DashboardMock";
import { Lockup, renderWordmark } from "./components/Logo";
import { MarketingMock } from "./components/MarketingMock";
import {
  ACCENTS,
  BASE_PALETTE,
  FONT_PAIRS,
  PRIMARIES,
  WORDMARK_CATEGORY_LABEL,
  WORDMARK_CATEGORY_ORDER,
  WORDMARKS,
  type CairnVariant,
  type ColorChoice,
  type FontPair,
  type WordmarkCategory,
  type WordmarkSpec,
  type WordmarkVariant,
} from "./lib/brand";

const find = (list: ColorChoice[], id: string) => list.find((c) => c.id === id) ?? list[0];

export default function Page() {
  const [cairn, setCairn] = useState<CairnVariant>("cairn-01");
  const [wordmark, setWordmark] = useState<WordmarkVariant>("fraunces-lower");
  const [fontPair, setFontPair] = useState<FontPair>(FONT_PAIRS[0]);
  const [primary, setPrimary] = useState<ColorChoice>(find(PRIMARIES, "green"));
  const [accent, setAccent] = useState<ColorChoice>(find(ACCENTS, "cyan"));

  useEffect(() => {
    const root = document.documentElement.style;
    root.setProperty("--bg", BASE_PALETTE.bg);
    root.setProperty("--surface", BASE_PALETTE.surface);
    root.setProperty("--ink", BASE_PALETTE.ink);
    root.setProperty("--ink-soft", BASE_PALETTE.inkSoft);
    root.setProperty("--primary", primary.hex);
    root.setProperty("--accent", accent.hex);
    root.setProperty("--line", BASE_PALETTE.line);
    root.setProperty("--font-display", fontPair.display);
    root.setProperty("--font-body", fontPair.body);
  }, [primary, accent, fontPair]);

  const grouped: Record<WordmarkCategory, WordmarkSpec[]> = WORDMARKS.reduce(
    (acc, w) => {
      (acc[w.category] ||= []).push(w);
      return acc;
    },
    {} as Record<WordmarkCategory, WordmarkSpec[]>,
  );

  return (
    <div className="min-h-screen">
      <ControlBar
        cairn={cairn}
        fontPair={fontPair}
        primary={primary}
        accent={accent}
        onCairn={setCairn}
        onFontPair={setFontPair}
        onPrimary={setPrimary}
        onAccent={setAccent}
      />

      <main className="mx-auto max-w-[1400px] space-y-12 px-6 py-12">
        <section
          className="rounded-3xl p-16"
          style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
        >
          <div className="flex items-center justify-center py-8">
            <Lockup cairn={cairn} wordmark={wordmark} size="xl" />
          </div>
        </section>

        <section className="space-y-10">
          <div>
            <div className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-soft)" }}>
              Wordmark
            </div>
            <h2 className="font-display mt-2 text-2xl tracking-tight" style={{ color: "var(--ink)" }}>
              Pick the type treatment
            </h2>
          </div>

          {WORDMARK_CATEGORY_ORDER.map((cat) => {
            const items = grouped[cat] ?? [];
            return (
              <div key={cat}>
                <div
                  className="mb-3 text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: "var(--ink-soft)" }}
                >
                  {WORDMARK_CATEGORY_LABEL[cat]}
                </div>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                  {items.map((w) => {
                    const active = w.id === wordmark;
                    return (
                      <button
                        key={w.id}
                        onClick={() => setWordmark(w.id)}
                        className="flex flex-col items-stretch rounded-xl px-5 py-5 text-left transition"
                        style={{
                          background: "var(--surface)",
                          border: `1px solid ${active ? "var(--primary)" : "var(--line)"}`,
                          outline: active ? "2px solid color-mix(in srgb, var(--primary) 25%, transparent)" : "none",
                          outlineOffset: active ? "2px" : "0",
                        }}
                      >
                        <div className="flex h-12 items-center">
                          {renderWordmark(w.id, 32, "var(--ink)", "var(--accent)")}
                        </div>
                        <div
                          className="mt-3 border-t pt-2 text-[11px]"
                          style={{ borderColor: "var(--line)", color: "var(--ink-soft)" }}
                        >
                          {w.name}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>

        <MarketingMock cairn={cairn} wordmark={wordmark} />

        <DashboardMock cairn={cairn} wordmark={wordmark} />
      </main>
    </div>
  );
}
