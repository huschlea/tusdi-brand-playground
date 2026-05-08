"use client";

import {
  ACCENTS,
  FONT_PAIRS,
  PRIMARIES,
  type CairnVariant,
  type ColorChoice,
  type FontPair,
} from "@/app/lib/brand";
import { Logo } from "./Logo";

type Props = {
  cairn: CairnVariant;
  fontPair: FontPair;
  primary: ColorChoice;
  accent: ColorChoice;
  onCairn: (c: CairnVariant) => void;
  onFontPair: (f: FontPair) => void;
  onPrimary: (c: ColorChoice) => void;
  onAccent: (c: ColorChoice) => void;
};

export function ControlBar({
  cairn,
  fontPair,
  primary,
  accent,
  onCairn,
  onFontPair,
  onPrimary,
  onAccent,
}: Props) {
  return (
    <div
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        background: "color-mix(in srgb, var(--surface) 90%, transparent)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-8 gap-y-3 px-6 py-3">
        <Group label="Icon">
          <div className="flex items-center gap-1">
            {(["cairn-01", "cairn-02", "cairn-03"] as CairnVariant[]).map((c) => {
              const active = c === cairn;
              return (
                <button
                  key={c}
                  onClick={() => onCairn(c)}
                  aria-label={c}
                  className="flex h-10 w-10 items-center justify-center rounded-lg transition"
                  style={{
                    background: active ? "var(--bg)" : "transparent",
                    border: `1px solid ${active ? "var(--ink)" : "var(--line)"}`,
                  }}
                >
                  <Logo variant={c} size="sm" />
                </button>
              );
            })}
          </div>
        </Group>

        <Group label="Font">
          <select
            className="rounded-lg border px-2 py-1.5 text-xs"
            style={{ borderColor: "var(--line)", background: "var(--surface)", color: "var(--ink)" }}
            value={fontPair.id}
            onChange={(e) => {
              const f = FONT_PAIRS.find((x) => x.id === e.target.value);
              if (f) onFontPair(f);
            }}
          >
            {FONT_PAIRS.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </select>
        </Group>

        <Group label="Primary">
          <Swatches options={PRIMARIES} active={primary} onPick={onPrimary} />
        </Group>

        <Group label="Accent">
          <Swatches options={ACCENTS} active={accent} onPick={onAccent} />
        </Group>
      </div>
    </div>
  );
}

function Swatches({
  options,
  active,
  onPick,
}: {
  options: ColorChoice[];
  active: ColorChoice;
  onPick: (c: ColorChoice) => void;
}) {
  return (
    <div className="flex items-center gap-1.5">
      {options.map((c) => {
        const isActive = c.id === active.id;
        return (
          <button
            key={c.id}
            onClick={() => onPick(c)}
            aria-label={c.name}
            title={`${c.name} · ${c.hex}`}
            className="h-7 w-7 rounded-full transition"
            style={{
              background: c.hex,
              outline: isActive ? "2px solid var(--ink)" : "none",
              outlineOffset: "2px",
            }}
          />
        );
      })}
    </div>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label
      className="flex items-center gap-3 text-[10px] uppercase tracking-widest"
      style={{ color: "var(--ink-soft)" }}
    >
      {label}
      {children}
    </label>
  );
}
