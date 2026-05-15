import type { CairnVariant, LockupVariant, LogoVariant, WordmarkVariant } from "@/app/lib/brand";
import { LOCKUP_CAIRN, WORDMARK_BY_ID } from "@/app/lib/brand";

type Props = {
  variant: LogoVariant;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  invert?: boolean;
};

// fontSize for the wordmark per size key. `mark` is the height for pure-cairn rendering.
// `gap` is the spacing between cairn and wordmark in lockups (~10% of fontSize).
const SIZE = {
  sm: { type: 22, mark: 26, gap: 4 },
  md: { type: 32, mark: 44, gap: 6 },
  lg: { type: 64, mark: 100, gap: 10 },
  xl: { type: 104, mark: 180, gap: 14 },
};

// ---- CAIRN MARKS (inlined SVG so they color via currentColor) ------------

function Cairn01({ height, color }: { height: number; color: string }) {
  // viewBox 396.81 x 500 — tall, vertical 3-stone stack
  const ratio = 396.81 / 500;
  const width = height * ratio;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 396.81 500"
      fill={color}
      aria-hidden
      style={{ display: "block", flex: "0 0 auto", overflow: "visible" }}
    >
      <path d="M24.79,303.74l356.23,55.71s22.72,4.31,13.64,31.01c0,0-20.86,95.36-156.71,109.45,0,0-114.07,4.17-174.62-45.18S.94,345.07.94,345.07c0,0-8.19-46.51,23.85-41.33Z" />
      <path d="M86.29,144.81l236.42,58.57s15.04,4.34,7.69,25.26c0,0-18.5,75.2-110.32,81.04,0,0-76.74-1.21-115.05-42.96-38.31-41.75-36.69-89.92-36.69-89.92,0,0-3.3-37.41,17.96-32Z" />
      <path d="M184.4,11.29S195.71,2.81,231.53.3c0,0,22.31-3.14,34.88,11,0,0,21.99,25.45,18.54,61.9,0,0,2.2,36.76-22.94,55.3,0,0-20.42,16.79-43.99,15.78,0,0-22.51,0-42.73-12.63,0,0-33.93-25.14-41.48-55.3,0,0-6.47-19.56-1.74-28.32,3.06-5.66,10.68-11,11.86-11.97,5.78-4.77,18.77-14.25,40.47-24.75Z" />
    </svg>
  );
}

function Cairn02({ height, color }: { height: number; color: string }) {
  // viewBox 500 x 489.56 — squarer, with a clearly separated top stone
  const ratio = 500 / 489.56;
  const width = height * ratio;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 500 489.56"
      fill={color}
      aria-hidden
      style={{ display: "block", flex: "0 0 auto", overflow: "visible" }}
    >
      <path d="M344.51,83.84c-2.11,44.35-42.75,81.26-92.18,78.91-49.43-2.35-92.56-42.24-90.45-86.59S205.78-2.24,255.21.12c49.43,2.35,91.42,39.37,89.3,83.72Z" />
      <path d="M80.2,215.03s-49.21,3.34-49.98,26.68c0,0-.01,4.89,2.22,10.92,2.96,7.99,15,14.84,23.34,16.58,12.43,2.6,33.33,5.95,78.22,8.91l102.99,9.62s102.02,8.35,124.21,12.36c0,0,50.38,6.31,83.37-11.19,0,0,38.99-22.09,37.19-57.66,0,0,1.21-26.25-37-29.37,0,0-190.06-7.27-247.36,0,0,0-95.65,9.56-117.18,13.13Z" />
      <path d="M110.36,313.3c-2.14.43-58.25-2.14-58.25-2.14,0,0-37.69-5.14-47.11,20.13,0,0-13.71,32.12,4.28,70.67,0,0,11.14,30.41,35.12,48.83,0,0,53.96,35.55,94.65,33.84l56.37,3.16s135.91,7.88,211.05-9.47c0,0,43.84-3.04,82.14-60.36,0,0,13.44-16.83,11.12-61.49-.47-9.08-5.07-17.68-12.82-22.45-5.13-3.16-13.58-3.72-23.57-4.31l-352.99-16.39Z" />
    </svg>
  );
}

function Cairn04({ height, color }: { height: number; color: string }) {
  // viewBox 308.21 x 481.38 — top stone (ellipse) over two stacked sculptural masses
  const ratio = 308.21 / 481.38;
  const width = height * ratio;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 308.21 481.38"
      fill={color}
      aria-hidden
      style={{ display: "block", flex: "0 0 auto", overflow: "visible" }}
    >
      <ellipse cx="159.08" cy="56.48" rx="58.47" ry="56.48" />
      <path d="M16.49,247.8s8.21-45.81,27.23-79.52c0,0,13.4-27.23,27.66-31.55,0,0,20.75-17.29,83.85-4.75,0,0,41.49,2.16,86.44,34.14,0,0,35.01,29.39,37.17,62.67,0,0,8.21,19.02-3.46,35.87,0,0-8.64,12.97-35.44,15.99,0,0-104.48,5.06-150.84,22.04,0,0-34.28,10.12-53.21,2.81-2.35-.91-5.33-1.6-7.4-3.03-6.16-4.26-14.6-10.01-11.99-54.66Z" />
      <path d="M16.05,432.78s-27.65-26.8-10.37-57.48c0,0,13.4-30.25,54.89-40.19,0,0,67.92-25,153.03-24.27,2.87.02,5.75-.14,8.61-.43,11.9-1.22,48.25-2.67,68.29,21.67,0,0,30.25,35.87,11.67,89.03,0,0-13.83,44.95-84.28,54.89,0,0-45.81,12.1-109.78,0,0,0-43.66-3.03-92.06-43.22Z" />
    </svg>
  );
}

function Cairn03({ height, color }: { height: number; color: string }) {
  // viewBox 307.4 x 489.56 — narrowest/most vertical, three sculptural stones
  const ratio = 307.4 / 489.56;
  const width = height * ratio;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 307.4 489.56"
      fill={color}
      aria-hidden
      style={{ display: "block", flex: "0 0 auto", overflow: "visible" }}
    >
      <path d="M200.24,71.82c-3.02,35.74-36.58,62.08-74.96,58.83-38.38-3.24-67.93-32.28-62.62-79.06C66.7,15.96,100.78-4.86,140.2.97c38.1,5.64,63.06,35.12,60.03,70.85Z" />
      <path d="M40.28,187.85s5.79-18.93,34.87-25.96c3.79-.91,21.31-7.75,86.4-6.97,0,0,58.89-.39,101.52,37.97,0,0,28.67,22.09,19.76,61.61,0,0-8.97,20.34-45.72,37.58-4.12,1.94-33.32,15.11-92.22,17.82,0,0-47.27,3.87-71.68,0,0,0-21.31-2.71-32.93-10.07,0,0-11.95-7.21-11.15-20.37,0,0-7.08-42.04,11.15-91.6Z" />
      <path d="M96.05,334.2s49.51,2.91,165.52-19.9c0,0,24.85-11.51,35.81,1.37,0,0,14.25,12.33,8.77,65.23,0,0-6.58,59.48-49.89,84.97,0,0-45.77,37.55-152.67,18.09,0,0-69.07-12.88-97.58-78.67,0,0-10.69-23.3-3.56-50.98,0,0,9.11-24.2,15.79-28.24,0,0,4.61-5.05,9.54-6.48,6.8-1.96,16.52,1.29,20.51,3.84,8.77,5.6,15.82,10.02,47.76,10.76Z" />
    </svg>
  );
}

// Cairn aspect ratios — used to tune lockup sizing per cairn
const CAIRN_ASPECT: Record<CairnVariant, number> = {
  "cairn-01": 396.81 / 500,
  "cairn-02": 500 / 489.56,
  "cairn-03": 307.4 / 489.56,
  "cairn-04": 308.21 / 481.38,
};

// Component renderer
const CAIRN_RENDERERS: Record<CairnVariant, (p: { height: number; color: string }) => React.ReactNode> = {
  "cairn-01": Cairn01,
  "cairn-02": Cairn02,
  "cairn-03": Cairn03,
  "cairn-04": Cairn04,
};

function isCairn(v: string): v is CairnVariant {
  return v === "cairn-01" || v === "cairn-02" || v === "cairn-03" || v === "cairn-04";
}

function isLockup(v: string): v is LockupVariant {
  return v in LOCKUP_CAIRN;
}

// For lockups: cairn height = scale × wordmark fontSize.
// Targets cap-height + a hair of breathing room, so the cairn sits close to letter height.
// Cairn 01 is narrow/vertical, can sit a touch taller. Cairn 02 is wider, scales smaller.
const CAIRN_LOCKUP_SCALE: Record<CairnVariant, number> = {
  "cairn-01": 0.88,
  "cairn-02": 0.76,
  "cairn-03": 0.92,
  "cairn-04": 0.92,
};

// ---- WORDMARKS -----------------------------------------------------------

// Negative letter-spacing pulls characters together; browsers also apply
// trailing letter-spacing (Chromium/Webkit do, per behavior — not strict spec),
// which shortens the span's bounding box relative to the visual glyphs. Pad
// generously so the wordmark never visually touches a container edge.
function trailingPad(letterSpacing?: string): string {
  const min = 0.06;
  if (!letterSpacing) return `${min}em`;
  const m = letterSpacing.match(/^(-?[\d.]+)(em|px|rem)?$/);
  if (!m) return `${min}em`;
  const val = parseFloat(m[1]);
  const unit = m[2] ?? "em";
  // for negative letter-spacing, compensate with 2× the absolute value (min 0.06em).
  // for positive (tracked), no extra trailing needed beyond the spacing itself.
  if (val >= 0) return "0";
  return `${Math.max(-val * 2, min)}${unit}`;
}

export function renderWordmark(v: WordmarkVariant, size: number, ink: string, accent: string) {
  const spec = WORDMARK_BY_ID[v];
  if (!spec) return null;
  const fontSize = size * (spec.fontSizeScale ?? 1);
  const baseStyle: React.CSSProperties = {
    fontFamily: spec.fontFamily,
    fontWeight: spec.fontWeight,
    fontStyle: spec.fontStyle ?? "normal",
    fontSize,
    lineHeight: 1,
    letterSpacing: spec.letterSpacing,
    color: ink,
    whiteSpace: "nowrap",
    flexShrink: 0,
    paddingInlineEnd: trailingPad(spec.letterSpacing),
  };
  if (spec.withPeriod) {
    const body = spec.text.replace(/\.$/, "");
    return (
      <span style={baseStyle}>
        {body}
        <span style={{ color: accent }}>.</span>
      </span>
    );
  }
  return <span style={baseStyle}>{spec.text}</span>;
}

const LOCKUP_WORDMARK: Record<LockupVariant, WordmarkVariant> = {
  "lock-01-serif": "fraunces-lower",
  "lock-01-italic": "fraunces-cap",
  "lock-02-serif": "fraunces-lower",
  "lock-02-italic": "fraunces-cap",
  "lock-03-serif": "fraunces-lower",
  "lock-03-italic": "fraunces-cap",
  "lock-04-serif": "fraunces-lower",
  "lock-04-italic": "fraunces-cap",
};

// ---- ORCHESTRATION -------------------------------------------------------

export function Logo({ variant, size = "lg", className = "", invert = false }: Props) {
  const s = SIZE[size];
  const ink = invert ? "var(--surface)" : "var(--ink)";
  const primary = invert ? "var(--accent)" : "var(--primary)";
  const accent = invert ? "var(--accent)" : "var(--accent)";

  if (isCairn(variant)) {
    const Renderer = CAIRN_RENDERERS[variant];
    return (
      <span
        className={`inline-flex items-center justify-center ${className}`}
        style={{ color: primary }}
      >
        <Renderer height={s.mark} color={primary} />
      </span>
    );
  }

  if (isLockup(variant)) {
    const cairnId = LOCKUP_CAIRN[variant];
    const wordmarkId = LOCKUP_WORDMARK[variant];
    const Renderer = CAIRN_RENDERERS[cairnId];
    const cairnHeight = s.type * CAIRN_LOCKUP_SCALE[cairnId];
    return (
      <span
        className={className}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: s.gap,
          color: primary,
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}
      >
        <Renderer height={cairnHeight} color={primary} />
        {renderWordmark(wordmarkId, s.type, ink, accent)}
      </span>
    );
  }

  return <span className={className}>{renderWordmark(variant as WordmarkVariant, s.type, ink, accent)}</span>;
}

// Composable lockup — any cairn + any wordmark
export function Lockup({
  cairn,
  wordmark,
  size = "lg",
  invert = false,
  className = "",
}: {
  cairn: CairnVariant;
  wordmark: WordmarkVariant;
  size?: "sm" | "md" | "lg" | "xl";
  invert?: boolean;
  className?: string;
}) {
  const s = SIZE[size];
  const ink = invert ? "var(--surface)" : "var(--ink)";
  const primary = invert ? "var(--accent)" : "var(--primary)";
  const accent = invert ? "var(--accent)" : "var(--accent)";
  const Renderer = CAIRN_RENDERERS[cairn];
  const cairnHeight = s.type * CAIRN_LOCKUP_SCALE[cairn];
  // Fraunces (and most serifs) bias the letter mass toward the bottom of the
  // line-box because of asymmetric ascender/descender allocation. With plain
  // align-items: center, the cairn's geometric center sits above the visual
  // letter center. Shifting the cairn DOWN to compensate.
  const cairnYShift = s.type * 0.03;
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: s.gap,
        color: primary,
        lineHeight: 1,
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          display: "inline-flex",
          transform: `translateY(${cairnYShift}px)`,
          flexShrink: 0,
        }}
      >
        <Renderer height={cairnHeight} color={primary} />
      </span>
      {renderWordmark(wordmark, s.type, ink, accent)}
    </span>
  );
}
