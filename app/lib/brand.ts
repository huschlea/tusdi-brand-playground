export type Palette = {
  id: string;
  name: string;
  description: string;
  bg: string;
  surface: string;
  ink: string;
  inkSoft: string;
  primary: string;
  accent: string;
  line: string;
};

const PAPER = {
  bg: "#FBFAF5",
  surface: "#F3F1E9",
  ink: "#100F0F",
  inkSoft: "#6F6E69",
  line: "#E6E4D9",
};

// Single base palette — Forest on warm white. Only the accent is user-controlled.
export const BASE_PALETTE: Palette = {
  id: "forest",
  name: "Forest",
  description: "Warm white paper, ink, green-700 primary",
  ...PAPER,
  primary: "#536907",
  accent: "#24837B",
};

export type ColorChoice = {
  id: string;
  name: string;
  hex: string;
};

// Primary brand color — narrow set
export const PRIMARIES: ColorChoice[] = [
  { id: "green", name: "Green", hex: "#536907" },
  { id: "cyan", name: "Cyan", hex: "#24837B" },
  { id: "ink", name: "Ink", hex: "#100F0F" },
];

// Accent — Flexoki 600s minus red
export const ACCENTS: ColorChoice[] = [
  { id: "green", name: "Green", hex: "#536907" },
  { id: "cyan", name: "Cyan", hex: "#24837B" },
  { id: "blue", name: "Blue", hex: "#205EA6" },
  { id: "orange", name: "Orange", hex: "#BC5215" },
  { id: "yellow", name: "Yellow", hex: "#AD8301" },
  { id: "purple", name: "Purple", hex: "#5E409D" },
  { id: "magenta", name: "Magenta", hex: "#A02F6F" },
  { id: "ink", name: "Ink", hex: "#100F0F" },
];

export type FontPair = {
  id: string;
  name: string;
  description: string;
  display: string;
  body: string;
};

export const FONT_PAIRS: FontPair[] = [
  {
    id: "fraunces-inter",
    name: "Fraunces / Inter",
    description: "Editorial warmth + neutral utility",
    display: "var(--font-fraunces)",
    body: "var(--font-inter)",
  },
  {
    id: "fraunces-dm",
    name: "Fraunces / DM Sans",
    description: "Bookish serif + friendly geometric",
    display: "var(--font-fraunces)",
    body: "var(--font-dm-sans)",
  },
  {
    id: "outfit-outfit",
    name: "Outfit / Outfit",
    description: "Single-family geometric",
    display: "var(--font-outfit)",
    body: "var(--font-outfit)",
  },
  {
    id: "geist-geist",
    name: "Geist / Geist",
    description: "Modern technical neutral",
    display: "var(--font-geist)",
    body: "var(--font-geist)",
  },
  {
    id: "space-inter",
    name: "Space Grotesk / Inter",
    description: "Distinctive display + neutral body",
    display: "var(--font-space-grotesk)",
    body: "var(--font-inter)",
  },
];

export type LogoCategory = "wordmark" | "mark" | "lockup";

export type WordmarkCategory = "serif-lower" | "serif-cap" | "serif-upper" | "sans-lower" | "sans-cap" | "sans-upper";

export type WordmarkVariant =
  // Serif lowercase
  | "fraunces-lower"
  | "fraunces-lower-light"
  | "fraunces-lower-spaced"
  // Serif Capital T
  | "fraunces-cap"
  // Serif UPPERCASE
  | "fraunces-upper-tracked"
  | "fraunces-upper-tight"
  // Sans lowercase
  | "inter-lower"
  | "outfit-lower"
  | "dm-lower"
  | "space-lower"
  | "geist-lower"
  // Sans Capital T
  | "inter-cap"
  | "outfit-cap"
  | "dm-cap"
  | "geist-cap"
  // Sans UPPERCASE
  | "inter-upper-tracked"
  | "geist-upper-tracked";

export type WordmarkSpec = {
  id: WordmarkVariant;
  name: string;
  category: WordmarkCategory;
  text: string;
  fontFamily: string;
  fontWeight: number;
  fontStyle?: "italic";
  letterSpacing?: string;
  fontSizeScale?: number;
  withPeriod?: boolean;
};

export type CairnVariant = "cairn-01" | "cairn-02" | "cairn-03";

export type LockupVariant =
  | "lock-01-serif"
  | "lock-01-italic"
  | "lock-02-serif"
  | "lock-02-italic"
  | "lock-03-serif"
  | "lock-03-italic";

export type LogoVariant = WordmarkVariant | CairnVariant | LockupVariant;

export const WORDMARKS: WordmarkSpec[] = [
  // Serif lowercase
  { id: "fraunces-lower", name: "Fraunces lowercase", category: "serif-lower", text: "tusdi", fontFamily: "var(--font-fraunces)", fontWeight: 500, letterSpacing: "-0.02em" },
  { id: "fraunces-lower-light", name: "Fraunces light", category: "serif-lower", text: "tusdi", fontFamily: "var(--font-fraunces)", fontWeight: 300, letterSpacing: "-0.01em" },
  { id: "fraunces-lower-spaced", name: "Fraunces letterspaced", category: "serif-lower", text: "tusdi", fontFamily: "var(--font-fraunces)", fontWeight: 400, letterSpacing: "0.18em", fontSizeScale: 0.95 },

  // Serif Capital T
  { id: "fraunces-cap", name: "Fraunces capital", category: "serif-cap", text: "Tusdi", fontFamily: "var(--font-fraunces)", fontWeight: 500, letterSpacing: "-0.02em" },

  // Serif UPPERCASE
  { id: "fraunces-upper-tracked", name: "Fraunces uppercase tracked", category: "serif-upper", text: "TUSDI", fontFamily: "var(--font-fraunces)", fontWeight: 500, letterSpacing: "0.32em", fontSizeScale: 0.78 },
  { id: "fraunces-upper-tight", name: "Fraunces uppercase tight", category: "serif-upper", text: "TUSDI", fontFamily: "var(--font-fraunces)", fontWeight: 500, letterSpacing: "0.06em", fontSizeScale: 0.78 },

  // Sans lowercase
  { id: "inter-lower", name: "Inter lowercase", category: "sans-lower", text: "tusdi", fontFamily: "var(--font-inter)", fontWeight: 500, letterSpacing: "-0.04em" },
  { id: "outfit-lower", name: "Outfit lowercase (rounded)", category: "sans-lower", text: "tusdi", fontFamily: "var(--font-outfit)", fontWeight: 500, letterSpacing: "-0.01em", fontSizeScale: 0.95 },
  { id: "dm-lower", name: "DM Sans lowercase", category: "sans-lower", text: "tusdi", fontFamily: "var(--font-dm-sans)", fontWeight: 500, letterSpacing: "-0.03em" },
  { id: "space-lower", name: "Space Grotesk lowercase", category: "sans-lower", text: "tusdi", fontFamily: "var(--font-space-grotesk)", fontWeight: 500, letterSpacing: "-0.03em" },
  { id: "geist-lower", name: "Geist lowercase", category: "sans-lower", text: "tusdi", fontFamily: "var(--font-geist)", fontWeight: 500, letterSpacing: "-0.04em" },

  // Sans Capital T
  { id: "inter-cap", name: "Inter capital", category: "sans-cap", text: "Tusdi", fontFamily: "var(--font-inter)", fontWeight: 500, letterSpacing: "-0.03em" },
  { id: "outfit-cap", name: "Outfit capital", category: "sans-cap", text: "Tusdi", fontFamily: "var(--font-outfit)", fontWeight: 500, letterSpacing: "-0.01em", fontSizeScale: 0.95 },
  { id: "dm-cap", name: "DM Sans capital", category: "sans-cap", text: "Tusdi", fontFamily: "var(--font-dm-sans)", fontWeight: 500, letterSpacing: "-0.02em" },
  { id: "geist-cap", name: "Geist capital", category: "sans-cap", text: "Tusdi", fontFamily: "var(--font-geist)", fontWeight: 500, letterSpacing: "-0.03em" },

  // Sans UPPERCASE
  { id: "inter-upper-tracked", name: "Inter uppercase tracked", category: "sans-upper", text: "TUSDI", fontFamily: "var(--font-inter)", fontWeight: 600, letterSpacing: "0.22em", fontSizeScale: 0.78 },
  { id: "geist-upper-tracked", name: "Geist uppercase tracked", category: "sans-upper", text: "TUSDI", fontFamily: "var(--font-geist)", fontWeight: 600, letterSpacing: "0.16em", fontSizeScale: 0.78 },
];

export const WORDMARK_BY_ID: Record<WordmarkVariant, WordmarkSpec> = WORDMARKS.reduce(
  (acc, w) => ({ ...acc, [w.id]: w }),
  {} as Record<WordmarkVariant, WordmarkSpec>,
);

export const WORDMARK_CATEGORY_LABEL: Record<WordmarkCategory, string> = {
  "serif-lower": "Serif — lowercase t",
  "serif-cap": "Serif — Capital T",
  "serif-upper": "Serif — UPPERCASE",
  "sans-lower": "Sans — lowercase t",
  "sans-cap": "Sans — Capital T",
  "sans-upper": "Sans — UPPERCASE",
};

export const WORDMARK_CATEGORY_ORDER: WordmarkCategory[] = [
  "serif-lower",
  "serif-cap",
  "serif-upper",
  "sans-lower",
  "sans-cap",
  "sans-upper",
];

export type LogoVariantInfo = {
  id: LogoVariant;
  name: string;
  description: string;
  category: LogoCategory;
};

export const LOGO_VARIANTS: LogoVariantInfo[] = [
  // wordmarks
  { id: "word-lower-serif", name: "tusdi — serif", description: "Lowercase set in display serif", category: "wordmark" },
  { id: "word-italic-serif", name: "Tusdi — italic", description: "Italic display serif, capitalized", category: "wordmark" },
  { id: "word-upper-tracked", name: "TUSDI — tracked", description: "Uppercase, wide tracked sans", category: "wordmark" },
  { id: "word-lower-letterspaced", name: "t u s d i — spaced", description: "Lowercase, wide letterspacing", category: "wordmark" },
  { id: "word-period", name: "tusdi.", description: "Trailing period — assertive", category: "wordmark" },
  { id: "word-rounded", name: "tusdi — rounded", description: "Geometric rounded sans", category: "wordmark" },
  { id: "word-engineered", name: "TUSDI — engineered", description: "Plex bold, technical", category: "wordmark" },
  { id: "word-masthead", name: "TUSDI — masthead", description: "Tracked uppercase serif, like a journal", category: "wordmark" },

  // cairn marks
  { id: "cairn-01", name: "Cairn 01", description: "Vertical 3-stone stack — sculptural", category: "mark" },
  { id: "cairn-02", name: "Cairn 02", description: "Grounded 3-stone — floating top stone", category: "mark" },

  // lockups
  { id: "lock-01-serif", name: "Cairn 01 + tusdi", description: "Vertical cairn + lowercase serif", category: "lockup" },
  { id: "lock-01-italic", name: "Cairn 01 + Tusdi", description: "Vertical cairn + italic display", category: "lockup" },
  { id: "lock-02-serif", name: "Cairn 02 + tusdi", description: "Grounded cairn + lowercase serif", category: "lockup" },
  { id: "lock-02-italic", name: "Cairn 02 + Tusdi", description: "Grounded cairn + italic display", category: "lockup" },
];

export const LOCKUP_CAIRN: Record<LockupVariant, CairnVariant> = {
  "lock-01-serif": "cairn-01",
  "lock-01-italic": "cairn-01",
  "lock-02-serif": "cairn-02",
  "lock-02-italic": "cairn-02",
  "lock-03-serif": "cairn-03",
  "lock-03-italic": "cairn-03",
};
