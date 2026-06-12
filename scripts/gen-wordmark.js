// Generates the outlined wordmark path data used in app/lib/brand-assets.ts.
//
// Space Grotesk Medium, -0.03em letter-spacing between characters. Glyph
// outlines are merged into one SVG path, normalized so x∈[0,W] and y∈[0,H]
// (SVG top-down), in the font's unitsPerEm (1000).
//
// Usage:
//   npm i --no-save opentype.js
//   node scripts/gen-wordmark.js tusdiAI
//
// Paste the printed PATH into brand-assets.ts along with the printed W/H.
const fs = require("fs");
const opentype = require("opentype.js");

const FONT = process.env.HOME + "/Library/Fonts/SpaceGrotesk-Medium.ttf";
const TEXT = process.argv[2] || "tusdi";

const font = opentype.parse(fs.readFileSync(FONT).buffer);
const upm = font.unitsPerEm;
const fontSize = upm; // work in em units directly
const tracking = -0.03 * upm; // -0.03em between characters

// Lay out glyphs manually so tracking is exact
let x = 0;
const paths = [];
const glyphs = font.stringToGlyphs(TEXT);
glyphs.forEach((g, i) => {
  paths.push(g.getPath(x, 0, fontSize, { kerning: false }));
  x += (g.advanceWidth / upm) * fontSize;
  if (i < glyphs.length - 1) x += tracking;
});

const all = new opentype.Path();
paths.forEach((p) => (all.commands = all.commands.concat(p.commands)));
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
    { text: TEXT, unitsPerEm: upm, W: Math.round(bb.x2 - bb.x1), H: Math.round(bb.y2 - bb.y1) },
    null,
    2,
  ),
);
console.log("PATH:");
console.log(all.toPathData(0));
