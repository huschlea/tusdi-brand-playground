// Generates the outlined wordmark path data used in app/lib/brand-assets.ts.
//
// Wordmarks are laid out as segments on a shared baseline, merged into one
// SVG path, normalized so x∈[0,W] and y∈[0,H] (SVG top-down), in em-1000
// units. Tracking is em-relative and applied between characters within a
// segment; segments join at natural advance.
//
// Fonts:
//   tusdi   — Space Grotesk Medium (~/Library/Fonts/SpaceGrotesk-Medium.ttf)
//   AI      — Outfit ExtraLight, instanced at wght=200 from the variable TTF:
//               curl -sL -o Outfit-var.ttf "https://github.com/google/fonts/raw/main/ofl/outfit/Outfit%5Bwght%5D.ttf"
//               python3 -m fontTools.varLib.instancer Outfit-var.ttf wght=200 -o Outfit-ExtraLight.ttf
//             (set OUTFIT_TTF to its path, defaults to /tmp/fontgen/Outfit-ExtraLight.ttf)
//
// Usage:
//   npm i --no-save opentype.js
//   node scripts/gen-wordmark.js tusdiai
//
// Paste the printed PATH into brand-assets.ts along with the printed W/H.
const fs = require("fs");
const opentype = require("opentype.js");

const SPACE_GROTESK = process.env.HOME + "/Library/Fonts/SpaceGrotesk-Medium.ttf";
const OUTFIT = process.env.OUTFIT_TTF || "/tmp/fontgen/Outfit-ExtraLight.ttf";

const PRESETS = {
  tusdi: [{ font: SPACE_GROTESK, text: "tusdi", tracking: -0.03 }],
  tusdiai: [
    { font: SPACE_GROTESK, text: "tusdi", tracking: -0.03 },
    { font: OUTFIT, text: "AI", tracking: -0.045 },
  ],
};

const preset = PRESETS[(process.argv[2] || "tusdi").toLowerCase()];
if (!preset) {
  console.error("unknown preset; use one of: " + Object.keys(PRESETS).join(", "));
  process.exit(1);
}

const EM = 1000; // working units: em-1000 regardless of each font's unitsPerEm

const all = new opentype.Path();
let x = 0;
for (const seg of preset) {
  const font = opentype.parse(fs.readFileSync(seg.font).buffer);
  const upm = font.unitsPerEm;
  // charToGlyph per char: plain Latin needs no shaping, and opentype.js
  // fails on some GSUB lookups in instanced variable fonts (Outfit)
  const glyphs = [...seg.text].map((ch) => font.charToGlyph(ch));
  glyphs.forEach((g, i) => {
    const p = g.getPath(x, 0, EM, { kerning: false });
    all.commands = all.commands.concat(p.commands);
    x += (g.advanceWidth / upm) * EM;
    if (i < glyphs.length - 1) x += seg.tracking * EM;
  });
}

const bb = all.getBoundingBox();

// Normalize: shift so minX→0, minY→0 (y already SVG top-down from getPath)
all.commands = all.commands.map((c) => {
  const m = { ...c };
  for (const k of ["x", "x1", "x2"]) if (m[k] !== undefined) m[k] -= bb.x1;
  for (const k of ["y", "y1", "y2"]) if (m[k] !== undefined) m[k] -= bb.y1;
  return m;
});

console.log(
  JSON.stringify(
    {
      preset: process.argv[2] || "tusdi",
      W: Math.round(bb.x2 - bb.x1),
      H: Math.round(bb.y2 - bb.y1),
      baselineY: Math.round(-bb.y1),
    },
    null,
    2,
  ),
);
console.log("PATH:");
console.log(all.toPathData(0));
