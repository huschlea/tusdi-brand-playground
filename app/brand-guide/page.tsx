"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Lockup, renderWordmark } from "../components/Logo";
import {
  buildIconSvg,
  buildLockupSvg,
  buildWordmarkSvg,
  downloadBlob,
  downloadSvg,
  rasterizeIconPng,
  rasterizeLockupPng,
  rasterizeWordmarkPng,
  type WordmarkText,
} from "../lib/brand-assets";

const INK = "#100F0F";
const GREEN = "#536907";
const PAPER = "#FBFAF5";
const SURFACE = "#F3F1E9";
const LINE = "#E6E4D9";
const INK_SOFT = "#6F6E69";

type AssetKind = "icon" | "wordmark" | "lockup" | "wordmark-ai" | "lockup-ai";

export default function BrandGuide() {
  const [invert, setInvert] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);

  useEffect(() => {
    const root = document.documentElement.style;
    root.setProperty("--bg", PAPER);
    root.setProperty("--surface", SURFACE);
    root.setProperty("--ink", INK);
    root.setProperty("--ink-soft", INK_SOFT);
    root.setProperty("--primary", INK);
    root.setProperty("--accent", GREEN);
    root.setProperty("--line", LINE);
    root.setProperty("--font-display", "var(--font-outfit)");
    root.setProperty("--font-body", "var(--font-inter)");
  }, []);

  const downloadColor = invert ? PAPER : INK;
  const tag = invert ? "light" : "dark";

  async function handleDownload(kind: AssetKind, format: "svg" | "png") {
    const key = `${kind}-${format}-${tag}`;
    setBusy(key);
    const ai = kind.endsWith("-ai");
    const base = (ai ? kind.slice(0, -3) : kind) as "icon" | "wordmark" | "lockup";
    const text: WordmarkText = ai ? "tusdiai" : "tusdi";
    const stem = ai ? `tusdi-ai-${base}` : `tusdi-${base}`;
    try {
      if (format === "svg") {
        const svg =
          base === "icon"
            ? buildIconSvg(downloadColor)
            : base === "wordmark"
              ? buildWordmarkSvg(downloadColor, text)
              : buildLockupSvg(downloadColor, text);
        downloadSvg(svg, `${stem}-${tag}.svg`);
      } else {
        const blob =
          base === "icon"
            ? await rasterizeIconPng(downloadColor)
            : base === "wordmark"
              ? await rasterizeWordmarkPng(downloadColor, text)
              : await rasterizeLockupPng(downloadColor, text);
        downloadBlob(blob, `${stem}-${tag}.png`);
      }
    } finally {
      setBusy(null);
    }
  }

  async function copyHex(hex: string) {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(hex);
      setTimeout(() => setCopied((c) => (c === hex ? null : c)), 1200);
    } catch {
      // ignore
    }
  }

  return (
    <div
      style={{
        background: "var(--bg)",
        color: "var(--ink)",
        fontFamily: "var(--font-body)",
        letterSpacing: "-0.01em",
      }}
    >
      <header
        className="flex items-center justify-between px-6 py-5 md:px-12 md:py-6"
        style={{ borderBottom: `1px solid ${LINE}` }}
      >
        <AiLockup color={INK} fontSize={22} />
        <Link
          href="/"
          className="text-xs"
          style={{ color: INK_SOFT, textDecoration: "underline", textUnderlineOffset: 4 }}
        >
          Playground →
        </Link>
      </header>

      <main className="mx-auto max-w-[880px] px-6 pb-32 pt-20 md:px-12 md:pt-28">
        <h1
          className="text-6xl leading-[1.02] md:text-8xl"
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.045em",
            fontWeight: 500,
          }}
        >
          Brand
        </h1>
        <p className="mt-6 max-w-[44ch] text-lg leading-relaxed" style={{ color: INK_SOFT }}>
          Five logo files, two colors, two fonts. That's the whole kit (for now).
        </p>

        <Block label="01 — Logo">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {(["lockup", "wordmark", "icon", "lockup-ai", "wordmark-ai"] as AssetKind[]).map((kind) => (
              <AssetCard
                key={kind}
                kind={kind}
                invert={invert}
                busy={busy}
                onDownload={handleDownload}
                tag={tag}
              />
            ))}
          </div>

          <div className="mt-3 flex items-center gap-3 text-xs" style={{ color: INK_SOFT }}>
            <span>For dark backgrounds:</span>
            <button
              onClick={() => setInvert(!invert)}
              className="rounded-full px-3 py-1.5 text-xs"
              style={{
                background: invert ? INK : "transparent",
                color: invert ? PAPER : INK,
                border: `1px solid ${invert ? INK : LINE}`,
                fontWeight: 500,
              }}
            >
              {invert ? "Light version selected" : "Switch to light version"}
            </button>
          </div>
        </Block>

        <Block label="02 — Color">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <ColorCard hex={INK} name="Ink" role="Type, logo, structure" fg={PAPER} copied={copied} onCopy={copyHex} />
            <ColorCard hex={GREEN} name="Green" role="Accent — used sparingly" fg={PAPER} copied={copied} onCopy={copyHex} />
          </div>
        </Block>

        <Block label="03 — Type">
          <div className="space-y-10">
            <TypeRow role="Display" family="Outfit">
              <div
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 500,
                  fontSize: 64,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.98,
                  textWrap: "balance",
                }}
              >
                All your health in one place.
              </div>
            </TypeRow>
            <TypeRow role="Body" family="Inter">
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 18,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.55,
                  maxWidth: "44ch",
                }}
              >
                Tusdi gathers every record, lab, and visit you've ever had — and
                helps you actually understand what's in them.
              </p>
            </TypeRow>
          </div>
        </Block>

        <Block label="04 — In practice">
          <OnePager />
        </Block>

        <footer
          className="mt-24 flex items-end justify-between border-t pt-8 text-xs"
          style={{ borderColor: LINE, color: INK_SOFT }}
        >
          <div>Tusdi · v1.0</div>
          <div>Questions? #brand</div>
        </footer>
      </main>
    </div>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mt-24">
      <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: INK_SOFT }}>
        {label}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function AssetCard({
  kind,
  invert,
  busy,
  onDownload,
  tag,
}: {
  kind: AssetKind;
  invert: boolean;
  busy: string | null;
  onDownload: (k: AssetKind, f: "svg" | "png") => void;
  tag: string;
}) {
  const label =
    kind === "icon"
      ? "Icon"
      : kind === "wordmark"
        ? "Wordmark"
        : kind === "lockup"
          ? "Lockup"
          : kind === "wordmark-ai"
            ? "tusdiAI wordmark"
            : "tusdiAI lockup";
  const wrap: React.CSSProperties = invert
    ? ({ ["--primary" as string]: PAPER, ["--ink" as string]: PAPER } as React.CSSProperties)
    : {};
  return (
    <div
      className="flex flex-col gap-6 rounded-2xl p-6"
      style={{ background: invert ? INK : SURFACE, border: `1px solid ${invert ? INK : LINE}` }}
    >
      <div className="flex h-32 items-center justify-center" style={wrap}>
        {kind === "lockup" && <Lockup cairn="cairn-04" wordmark="space-lower" size="lg" />}
        {kind === "wordmark" && (
          <span>{renderWordmark("space-lower", 64, invert ? PAPER : INK, GREEN)}</span>
        )}
        {kind === "icon" && <IconMark color={invert ? PAPER : INK} height={80} />}
        {kind === "lockup-ai" && <AiLockup color={invert ? PAPER : INK} fontSize={56} />}
        {kind === "wordmark-ai" && <AiWordmark color={invert ? PAPER : INK} fontSize={64} />}
      </div>
      <div className="flex items-center justify-between gap-3">
        <span
          className="text-sm"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            color: invert ? PAPER : INK,
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
        <div className="flex gap-1.5">
          <DownloadBtn
            invert={invert}
            disabled={busy === `${kind}-svg-${tag}`}
            onClick={() => onDownload(kind, "svg")}
          >
            SVG
          </DownloadBtn>
          <DownloadBtn
            invert={invert}
            disabled={busy === `${kind}-png-${tag}`}
            onClick={() => onDownload(kind, "png")}
          >
            PNG
          </DownloadBtn>
        </div>
      </div>
    </div>
  );
}

function DownloadBtn({
  children,
  onClick,
  disabled,
  invert,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
  invert: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="rounded-md px-2.5 py-1 text-[11px] font-medium transition"
      style={{
        background: invert ? "rgba(255,255,255,0.08)" : PAPER,
        border: `1px solid ${invert ? "rgba(255,255,255,0.15)" : LINE}`,
        color: invert ? PAPER : INK,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "wait" : "pointer",
      }}
    >
      {children}
    </button>
  );
}

function AiWordmark({ color, fontSize }: { color: string; fontSize: number }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-space-grotesk)",
        fontWeight: 500,
        fontSize,
        lineHeight: 1,
        letterSpacing: "-0.03em",
        color,
        whiteSpace: "nowrap",
      }}
    >
      tusdi
      <span
        style={{
          fontFamily: "var(--font-outfit)",
          fontWeight: 200,
          letterSpacing: "-0.045em",
          marginLeft: "0.03em",
          paddingInlineEnd: "0.09em",
        }}
      >
        AI
      </span>
    </span>
  );
}

// Mirrors the downloadable lockup proportions (cairn at 0.92 × fontSize,
// 14/104 gap, 3% y-shift) so the preview matches the exported file.
function AiLockup({ color, fontSize }: { color: string; fontSize: number }) {
  const cairnH = fontSize * 0.92;
  const gap = fontSize * (14 / 104);
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap,
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ display: "inline-flex", transform: `translateY(${fontSize * 0.03}px)` }}>
        <IconMark color={color} height={cairnH} />
      </span>
      <AiWordmark color={color} fontSize={fontSize} />
    </span>
  );
}

function IconMark({ color, height }: { color: string; height: number }) {
  const ratio = 308.21 / 481.38;
  return (
    <svg
      viewBox="0 0 308.21 481.38"
      width={height * ratio}
      height={height}
      fill={color}
      style={{ overflow: "visible" }}
      aria-hidden
    >
      <ellipse cx="159.08" cy="56.48" rx="58.47" ry="56.48" />
      <path d="M16.49,247.8s8.21-45.81,27.23-79.52c0,0,13.4-27.23,27.66-31.55,0,0,20.75-17.29,83.85-4.75,0,0,41.49,2.16,86.44,34.14,0,0,35.01,29.39,37.17,62.67,0,0,8.21,19.02-3.46,35.87,0,0-8.64,12.97-35.44,15.99,0,0-104.48,5.06-150.84,22.04,0,0-34.28,10.12-53.21,2.81-2.35-.91-5.33-1.6-7.4-3.03-6.16-4.26-14.6-10.01-11.99-54.66Z" />
      <path d="M16.05,432.78s-27.65-26.8-10.37-57.48c0,0,13.4-30.25,54.89-40.19,0,0,67.92-25,153.03-24.27,2.87.02,5.75-.14,8.61-.43,11.9-1.22,48.25-2.67,68.29,21.67,0,0,30.25,35.87,11.67,89.03,0,0-13.83,44.95-84.28,54.89,0,0-45.81,12.1-109.78,0,0,0-43.66-3.03-92.06-43.22Z" />
    </svg>
  );
}

function ColorCard({
  hex,
  name,
  role,
  fg,
  copied,
  onCopy,
}: {
  hex: string;
  name: string;
  role: string;
  fg: string;
  copied: string | null;
  onCopy: (hex: string) => void;
}) {
  return (
    <button
      onClick={() => onCopy(hex)}
      className="flex h-44 flex-col justify-between rounded-2xl p-6 text-left transition hover:opacity-95"
      style={{ background: hex, color: fg }}
    >
      <div className="flex items-start justify-between">
        <span
          className="text-2xl"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "-0.02em" }}
        >
          {name}
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em]" style={{ opacity: 0.6 }}>
          {copied === hex ? "Copied" : "Copy"}
        </span>
      </div>
      <div className="flex items-baseline justify-between">
        <span style={{ fontFamily: "var(--font-display)", fontSize: 14, opacity: 0.9 }}>
          {hex.toUpperCase()}
        </span>
        <span className="text-[11px]" style={{ opacity: 0.6 }}>{role}</span>
      </div>
    </button>
  );
}

function OnePager() {
  const rule: React.CSSProperties = { border: 0, borderTop: `1px solid ${LINE}`, margin: "40px 0" };
  return (
    <article
      className="mx-auto"
      style={{
        background: PAPER,
        border: `1px solid ${LINE}`,
        boxShadow:
          "0 1px 2px rgba(16,15,15,0.04), 0 12px 28px -8px rgba(16,15,15,0.06)",
        borderRadius: 6,
        maxWidth: 760,
        padding: "56px 64px",
        fontFamily: "var(--font-inter)",
        color: INK,
        letterSpacing: "-0.01em",
      }}
    >
      <header className="flex items-start justify-between gap-6">
        <Lockup cairn="cairn-04" wordmark="space-lower" size="sm" />
        <div
          className="text-right text-[10px] uppercase tracking-[0.22em]"
          style={{ color: INK_SOFT, lineHeight: 1.5 }}
        >
          Product brief
          <br />
          2026 · Q2
        </div>
      </header>

      <hr style={rule} />

      <div className="text-[10px] uppercase tracking-[0.22em]" style={{ color: INK_SOFT }}>
        Overview
      </div>
      <h3
        className="mt-3"
        style={{
          fontFamily: "var(--font-outfit)",
          fontWeight: 500,
          fontSize: 52,
          lineHeight: 1.02,
          letterSpacing: "-0.045em",
          color: INK,
        }}
      >
        Health records,
        <br />
        finally legible<span style={{ color: GREEN }}>.</span>
      </h3>
      <p
        className="mt-6"
        style={{
          fontSize: 17,
          lineHeight: 1.55,
          color: INK,
          maxWidth: "52ch",
        }}
      >
        Tusdi pulls every visit, lab, and prescription you've ever had into one
        place — and translates them into language any adult can understand.
      </p>

      <div
        className="mt-10 grid grid-cols-3 gap-6"
        style={{ borderTop: `1px solid ${GREEN}`, paddingTop: 24 }}
      >
        {[
          { value: "30,000+", label: "Provider sources" },
          { value: "137", label: "Markers tracked" },
          { value: "8", label: "Body systems" },
        ].map((stat) => (
          <div key={stat.label}>
            <div
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 500,
                fontSize: 40,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: GREEN,
              }}
            >
              {stat.value}
            </div>
            <div
              className="mt-2 text-[11px] uppercase tracking-[0.2em]"
              style={{ color: INK_SOFT }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <hr style={rule} />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {[
          {
            label: "What we built",
            body: "A personal health record that gathers everything your providers write down — visits, labs, imaging, prescriptions — into a single ordered timeline.",
          },
          {
            label: "How it works",
            body: "Tusdi connects to 30,000+ providers via HL7 and FHIR. Records are parsed, normalized, and summarized in plain language you can actually read.",
          },
          {
            label: "Who it's for",
            body: "People who've collected years of medical history across multiple providers and have given up trying to make sense of it themselves.",
          },
        ].map((col) => (
          <div key={col.label}>
            <div
              className="text-[10px] uppercase tracking-[0.22em]"
              style={{ color: INK_SOFT }}
            >
              {col.label}
            </div>
            <p
              className="mt-3"
              style={{ fontSize: 14, lineHeight: 1.55, color: INK }}
            >
              {col.body}
            </p>
          </div>
        ))}
      </div>

      <hr style={rule} />

      <figure>
        <blockquote
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 400,
            fontSize: 24,
            lineHeight: 1.3,
            letterSpacing: "-0.025em",
            color: INK,
            maxWidth: "44ch",
            margin: 0,
          }}
        >
          "Your iron levels have stabilized — likely related to the supplement
          change in March."
        </blockquote>
        <figcaption
          className="mt-4 text-xs"
          style={{ color: INK_SOFT, letterSpacing: 0 }}
        >
          A typical insight, synthesized from 3 lab reports.
        </figcaption>
      </figure>

      <hr style={rule} />

      <footer
        className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 text-[11px]"
        style={{ color: INK_SOFT, letterSpacing: 0 }}
      >
        <span>tusdi.health</span>
        <span className="inline-flex items-center gap-2">
          <svg
            width="11"
            height="13"
            viewBox="0 0 11 13"
            fill="none"
            stroke={GREEN}
            strokeWidth="1.3"
            aria-hidden
          >
            <rect x="1" y="6" width="9" height="6.4" rx="1.2" fill={GREEN} stroke="none" />
            <path d="M3 6V3.6a2.5 2.5 0 0 1 5 0V6" />
          </svg>
          Private beta
        </span>
        <span>hello@tusdi.health</span>
      </footer>
    </article>
  );
}

function TypeRow({
  role,
  family,
  children,
}: {
  role: string;
  family: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[140px_1fr] md:gap-10">
      <div>
        <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: INK_SOFT }}>
          {role}
        </div>
        <div
          className="mt-1.5 text-sm"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
        >
          {family}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
