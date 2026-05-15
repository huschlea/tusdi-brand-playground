// Locked-in brand asset builders for cairn-04 + Space Grotesk wordmark.
// The wordmark is outlined to vector paths (not <text>) so the downloaded
// files are portable to Figma/Illustrator without Space Grotesk installed.

// -------- cairn (the icon) --------

export const CAIRN_VB = { w: 308.21, h: 481.38 };
export const CAIRN_RATIO = CAIRN_VB.w / CAIRN_VB.h; // ~0.6402

const CAIRN_ELLIPSE = { cx: 159.08, cy: 56.48, rx: 58.47, ry: 56.48 };
const CAIRN_PATH_1 =
  "M16.49,247.8s8.21-45.81,27.23-79.52c0,0,13.4-27.23,27.66-31.55,0,0,20.75-17.29,83.85-4.75,0,0,41.49,2.16,86.44,34.14,0,0,35.01,29.39,37.17,62.67,0,0,8.21,19.02-3.46,35.87,0,0-8.64,12.97-35.44,15.99,0,0-104.48,5.06-150.84,22.04,0,0-34.28,10.12-53.21,2.81-2.35-.91-5.33-1.6-7.4-3.03-6.16-4.26-14.6-10.01-11.99-54.66Z";
const CAIRN_PATH_2 =
  "M16.05,432.78s-27.65-26.8-10.37-57.48c0,0,13.4-30.25,54.89-40.19,0,0,67.92-25,153.03-24.27,2.87.02,5.75-.14,8.61-.43,11.9-1.22,48.25-2.67,68.29,21.67,0,0,30.25,35.87,11.67,89.03,0,0-13.83,44.95-84.28,54.89,0,0-45.81,12.1-109.78,0,0,0-43.66-3.03-92.06-43.22Z";

const CAIRN_INNER = `<ellipse cx="${CAIRN_ELLIPSE.cx}" cy="${CAIRN_ELLIPSE.cy}" rx="${CAIRN_ELLIPSE.rx}" ry="${CAIRN_ELLIPSE.ry}"/><path d="${CAIRN_PATH_1}"/><path d="${CAIRN_PATH_2}"/>`;

// -------- wordmark (outlined "tusdi") --------
//
// Generated offline via opentype.js from Space Grotesk Medium (.otf) with
// -0.03em letter-spacing applied between characters. Glyphs are flattened to
// SVG path data, normalized so x∈[0, WORDMARK_W] and y∈[0, WORDMARK_H], in
// em-1000 units (the font's unitsPerEm). y is SVG-style (top-down).
//
// To regenerate: see /tmp/fontgen/gen.js in repo history.
const WORDMARK_PATH_D =
  "M234 700L370 700L370 613L267 613C248 613 239 603 239 583L239 294L386 294L386 207L239 207L239 44L136 44L136 207L0 207L0 294L136 294L136 601C136 662 173 700 234 700M666 709C760 709 803 667 822 626L838 626L838 700L939 700L939 207L836 207L836 456C836 563 781 621 696 621C620 621 575 581 575 496L575 207L472 207L472 503C472 630 553 709 666 709M1263 714C1386 714 1466 657 1466 558C1466 458 1381 426 1274 407L1239 401C1185 391 1152 376 1152 336C1152 299 1185 277 1242 277C1300 277 1341 299 1352 359L1448 332C1427 246 1353 193 1242 193C1127 193 1052 247 1052 340C1052 433 1132 472 1232 490L1267 496C1331 508 1365 523 1365 563C1365 604 1328 631 1263 631C1197 631 1141 605 1127 522L1031 545C1049 658 1137 714 1263 714M1760 714C1856 714 1903 673 1928 630L1944 630L1944 700L2045 700L2045 0L1942 0L1942 274L1926 274C1903 234 1856 193 1760 193C1636 193 1532 287 1532 446L1532 461C1532 621 1637 714 1760 714M1789 624C1701 624 1636 564 1636 458L1636 449C1636 343 1700 284 1789 284C1879 284 1943 343 1943 449L1943 458C1943 564 1878 624 1789 624M2219 140C2259 140 2290 112 2290 70C2290 28 2259 0 2219 0C2178 0 2148 28 2148 70C2148 112 2178 140 2219 140M2167 700L2270 700L2270 207L2167 207";
const WORDMARK_W = 2290;
const WORDMARK_H = 714;
const WORDMARK_EM = 1000;

// -------- lockup proportions (lifted from <Lockup size="xl">) --------

const CAIRN_LOCKUP_SCALE = 0.92;
const GAP_RATIO = 14 / 104;
const Y_SHIFT_RATIO = 0.03;

// -------- SVG builders --------

export function buildIconSvg(color: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CAIRN_VB.w} ${CAIRN_VB.h}" fill="${color}">${CAIRN_INNER}</svg>`;
}

export function buildWordmarkSvg(color: string): string {
  const padX = WORDMARK_EM * 0.04;
  const padY = WORDMARK_EM * 0.06;
  const totalW = WORDMARK_W + padX * 2;
  const totalH = WORDMARK_H + padY * 2;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalW} ${totalH}">
  <path d="${WORDMARK_PATH_D}" fill="${color}" transform="translate(${padX} ${padY})"/>
</svg>`;
}

export function buildLockupSvg(color: string): string {
  // Work in em-1000 units. fontSize ≡ 1000.
  const em = WORDMARK_EM;
  const cairnH = em * CAIRN_LOCKUP_SCALE;
  const cairnW = cairnH * CAIRN_RATIO;
  const gap = em * GAP_RATIO;
  const yShift = em * Y_SHIFT_RATIO;
  const padX = em * 0.04;
  const padY = em * 0.06;

  const innerH = Math.max(cairnH + Math.abs(yShift), WORDMARK_H);
  const totalW = cairnW + gap + WORDMARK_W + padX * 2;
  const totalH = innerH + padY * 2;
  const centerY = totalH / 2;
  const cairnTop = centerY - cairnH / 2 + yShift;
  const wordmarkTop = centerY - WORDMARK_H / 2;
  const cairnScale = cairnH / CAIRN_VB.h;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalW} ${totalH}">
  <g transform="translate(${padX} ${cairnTop}) scale(${cairnScale})" fill="${color}">${CAIRN_INNER}</g>
  <path d="${WORDMARK_PATH_D}" fill="${color}" transform="translate(${padX + cairnW + gap} ${wordmarkTop})"/>
</svg>`;
}

// -------- canvas rasterizers (PNG export) --------

function newCanvas(w: number, h: number) {
  const c = document.createElement("canvas");
  c.width = Math.ceil(w);
  c.height = Math.ceil(h);
  return c;
}

function canvasToPngBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("toBlob failed"))), "image/png"),
  );
}

function drawCairn(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(w / CAIRN_VB.w, h / CAIRN_VB.h);
  const ellipse = new Path2D();
  ellipse.ellipse(CAIRN_ELLIPSE.cx, CAIRN_ELLIPSE.cy, CAIRN_ELLIPSE.rx, CAIRN_ELLIPSE.ry, 0, 0, Math.PI * 2);
  ctx.fill(ellipse);
  ctx.fill(new Path2D(CAIRN_PATH_1));
  ctx.fill(new Path2D(CAIRN_PATH_2));
  ctx.restore();
}

function drawWordmark(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(w / WORDMARK_W, h / WORDMARK_H);
  ctx.fill(new Path2D(WORDMARK_PATH_D));
  ctx.restore();
}

export async function rasterizeIconPng(color: string, pxWidth = 2048): Promise<Blob> {
  const height = pxWidth / CAIRN_RATIO;
  const canvas = newCanvas(pxWidth, height);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("no 2d context");
  ctx.fillStyle = color;
  drawCairn(ctx, 0, 0, pxWidth, height);
  return canvasToPngBlob(canvas);
}

export async function rasterizeWordmarkPng(color: string, pxWidth = 2048): Promise<Blob> {
  const wordmarkRatio = WORDMARK_W / WORDMARK_H;
  // pxWidth here defines the wordmark's glyph-bbox width on canvas, plus padding
  const padXR = WORDMARK_W * 0.04;
  const padYR = WORDMARK_H * 0.08;
  const totalWR = WORDMARK_W + padXR * 2;
  const totalHR = WORDMARK_H + padYR * 2;
  const scale = pxWidth / totalWR;
  const canvas = newCanvas(pxWidth, totalHR * scale);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("no 2d context");
  ctx.fillStyle = color;
  ctx.scale(scale, scale);
  drawWordmark(ctx, padXR, padYR, WORDMARK_W, WORDMARK_H);
  return canvasToPngBlob(canvas);
}

export async function rasterizeLockupPng(color: string, pxWidth = 2400): Promise<Blob> {
  const em = WORDMARK_EM;
  const cairnH = em * CAIRN_LOCKUP_SCALE;
  const cairnW = cairnH * CAIRN_RATIO;
  const gap = em * GAP_RATIO;
  const yShift = em * Y_SHIFT_RATIO;
  const padX = em * 0.04;
  const padY = em * 0.06;
  const innerH = Math.max(cairnH + Math.abs(yShift), WORDMARK_H);
  const totalW = cairnW + gap + WORDMARK_W + padX * 2;
  const totalH = innerH + padY * 2;
  const centerY = totalH / 2;
  const cairnTop = centerY - cairnH / 2 + yShift;
  const wordmarkTop = centerY - WORDMARK_H / 2;

  const scale = pxWidth / totalW;
  const canvas = newCanvas(pxWidth, totalH * scale);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("no 2d context");
  ctx.fillStyle = color;
  ctx.scale(scale, scale);
  drawCairn(ctx, padX, cairnTop, cairnW, cairnH);
  drawWordmark(ctx, padX + cairnW + gap, wordmarkTop, WORDMARK_W, WORDMARK_H);
  return canvasToPngBlob(canvas);
}

// -------- download helpers --------

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function downloadSvg(svg: string, filename: string) {
  downloadBlob(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }), filename);
}
