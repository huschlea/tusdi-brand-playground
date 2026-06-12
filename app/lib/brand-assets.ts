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

// -------- wordmarks (outlined "tusdi" / "tusdiAI") --------
//
// Generated offline via opentype.js from Space Grotesk Medium with -0.03em
// letter-spacing applied between characters. Glyphs are flattened to SVG
// path data, normalized so x∈[0, w] and y∈[0, WORDMARK_H], in em-1000 units
// (the font's unitsPerEm). y is SVG-style (top-down).
//
// To regenerate: scripts/gen-wordmark.js
const WORDMARK_PATH_D =
  "M234 700L370 700L370 613L267 613C248 613 239 603 239 583L239 294L386 294L386 207L239 207L239 44L136 44L136 207L0 207L0 294L136 294L136 601C136 662 173 700 234 700M666 709C760 709 803 667 822 626L838 626L838 700L939 700L939 207L836 207L836 456C836 563 781 621 696 621C620 621 575 581 575 496L575 207L472 207L472 503C472 630 553 709 666 709M1263 714C1386 714 1466 657 1466 558C1466 458 1381 426 1274 407L1239 401C1185 391 1152 376 1152 336C1152 299 1185 277 1242 277C1300 277 1341 299 1352 359L1448 332C1427 246 1353 193 1242 193C1127 193 1052 247 1052 340C1052 433 1132 472 1232 490L1267 496C1331 508 1365 523 1365 563C1365 604 1328 631 1263 631C1197 631 1141 605 1127 522L1031 545C1049 658 1137 714 1263 714M1760 714C1856 714 1903 673 1928 630L1944 630L1944 700L2045 700L2045 0L1942 0L1942 274L1926 274C1903 234 1856 193 1760 193C1636 193 1532 287 1532 446L1532 461C1532 621 1637 714 1760 714M1789 624C1701 624 1636 564 1636 458L1636 449C1636 343 1700 284 1789 284C1879 284 1943 343 1943 449L1943 458C1943 564 1878 624 1789 624M2219 140C2259 140 2290 112 2290 70C2290 28 2259 0 2219 0C2178 0 2148 28 2148 70C2148 112 2178 140 2219 140M2167 700L2270 700L2270 207L2167 207";
const WORDMARK_W = 2290;
const WORDMARK_H = 714;
const WORDMARK_EM = 1000;

const WORDMARK_AI_PATH_D =
  "M370 700L234 700Q189 700 163 673Q136 646 136 601L136 294L0 294L0 207L136 207L136 44L239 44L239 207L386 207L386 294L239 294L239 583Q239 613 267 613L370 613L370 700M666 709Q610 709 566 684Q522 659 497 613Q472 567 472 503L472 207L575 207L575 496Q575 560 607 591Q639 621 696 621Q759 621 798 579Q836 536 836 456L836 207L939 207L939 700L838 700L838 626L822 626Q808 656 772 683Q736 709 666 709M1263 714Q1169 714 1107 672Q1045 630 1031 545L1127 522Q1135 563 1154 587Q1173 611 1202 621Q1230 631 1263 631Q1312 631 1339 612Q1365 593 1365 563Q1365 533 1340 519Q1315 505 1266 496L1232 490Q1182 481 1141 464Q1100 447 1076 417Q1052 387 1052 340Q1052 270 1104 232Q1156 193 1242 193Q1325 193 1379 231Q1432 268 1448 332L1352 359Q1343 314 1314 296Q1285 277 1242 277Q1200 277 1176 293Q1152 308 1152 336Q1152 366 1176 380Q1199 394 1239 401L1274 407Q1327 416 1371 432Q1415 448 1441 478Q1466 508 1466 558Q1466 632 1411 673Q1356 714 1263 714M1760 714Q1699 714 1647 684Q1595 654 1564 598Q1532 541 1532 461L1532 446Q1532 367 1563 310Q1594 253 1646 223Q1698 193 1760 193Q1808 193 1841 205Q1873 217 1894 236Q1915 254 1926 274L1942 274L1942 0L2045 0L2045 700L1944 700L1944 630L1928 630Q1909 662 1871 688Q1832 714 1760 714M1789 624Q1856 624 1900 581Q1943 538 1943 458L1943 449Q1943 370 1900 327Q1857 284 1789 284Q1723 284 1680 327Q1636 370 1636 449L1636 458Q1636 538 1680 581Q1723 624 1789 624M2270 700L2167 700L2167 207L2270 207L2270 700M2219 140Q2189 140 2169 121Q2148 101 2148 70Q2148 39 2169 20Q2189 0 2219 0Q2250 0 2270 20Q2290 39 2290 70Q2290 101 2270 121Q2250 140 2219 140M2450 700L2338 700L2538 0L2728 0L2927 700L2816 700L2770 535L2496 535L2450 700M2625 67L2523 435L2743 435L2641 67L2625 67M3100 700L2992 700L2992 0L3100 0";
const WORDMARK_AI_W = 3100;

export type WordmarkText = "tusdi" | "tusdiai";

export const WORDMARK_OUTLINES: Record<WordmarkText, { d: string; w: number; h: number }> = {
  tusdi: { d: WORDMARK_PATH_D, w: WORDMARK_W, h: WORDMARK_H },
  tusdiai: { d: WORDMARK_AI_PATH_D, w: WORDMARK_AI_W, h: WORDMARK_H },
};

// -------- lockup proportions (lifted from <Lockup size="xl">) --------

const CAIRN_LOCKUP_SCALE = 0.92;
const GAP_RATIO = 14 / 104;
const Y_SHIFT_RATIO = 0.03;

// -------- SVG builders --------

export function buildIconSvg(color: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CAIRN_VB.w} ${CAIRN_VB.h}" fill="${color}">${CAIRN_INNER}</svg>`;
}

export function buildWordmarkSvg(color: string, text: WordmarkText = "tusdi"): string {
  const mark = WORDMARK_OUTLINES[text];
  const padX = WORDMARK_EM * 0.04;
  const padY = WORDMARK_EM * 0.06;
  const totalW = mark.w + padX * 2;
  const totalH = mark.h + padY * 2;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalW} ${totalH}">
  <path d="${mark.d}" fill="${color}" transform="translate(${padX} ${padY})"/>
</svg>`;
}

export function buildLockupSvg(color: string, text: WordmarkText = "tusdi"): string {
  // Work in em-1000 units. fontSize ≡ 1000.
  const mark = WORDMARK_OUTLINES[text];
  const em = WORDMARK_EM;
  const cairnH = em * CAIRN_LOCKUP_SCALE;
  const cairnW = cairnH * CAIRN_RATIO;
  const gap = em * GAP_RATIO;
  const yShift = em * Y_SHIFT_RATIO;
  const padX = em * 0.04;
  const padY = em * 0.06;

  const innerH = Math.max(cairnH + Math.abs(yShift), mark.h);
  const totalW = cairnW + gap + mark.w + padX * 2;
  const totalH = innerH + padY * 2;
  const centerY = totalH / 2;
  const cairnTop = centerY - cairnH / 2 + yShift;
  const wordmarkTop = centerY - mark.h / 2;
  const cairnScale = cairnH / CAIRN_VB.h;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalW} ${totalH}">
  <g transform="translate(${padX} ${cairnTop}) scale(${cairnScale})" fill="${color}">${CAIRN_INNER}</g>
  <path d="${mark.d}" fill="${color}" transform="translate(${padX + cairnW + gap} ${wordmarkTop})"/>
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

function drawWordmark(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  text: WordmarkText = "tusdi",
) {
  const mark = WORDMARK_OUTLINES[text];
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(w / mark.w, h / mark.h);
  ctx.fill(new Path2D(mark.d));
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

export async function rasterizeWordmarkPng(
  color: string,
  text: WordmarkText = "tusdi",
  pxWidth = 2048,
): Promise<Blob> {
  const mark = WORDMARK_OUTLINES[text];
  // pxWidth here defines the wordmark's glyph-bbox width on canvas, plus padding
  const padXR = mark.w * 0.04;
  const padYR = mark.h * 0.08;
  const totalWR = mark.w + padXR * 2;
  const totalHR = mark.h + padYR * 2;
  const scale = pxWidth / totalWR;
  const canvas = newCanvas(pxWidth, totalHR * scale);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("no 2d context");
  ctx.fillStyle = color;
  ctx.scale(scale, scale);
  drawWordmark(ctx, padXR, padYR, mark.w, mark.h, text);
  return canvasToPngBlob(canvas);
}

export async function rasterizeLockupPng(
  color: string,
  text: WordmarkText = "tusdi",
  pxWidth = 2400,
): Promise<Blob> {
  const mark = WORDMARK_OUTLINES[text];
  const em = WORDMARK_EM;
  const cairnH = em * CAIRN_LOCKUP_SCALE;
  const cairnW = cairnH * CAIRN_RATIO;
  const gap = em * GAP_RATIO;
  const yShift = em * Y_SHIFT_RATIO;
  const padX = em * 0.04;
  const padY = em * 0.06;
  const innerH = Math.max(cairnH + Math.abs(yShift), mark.h);
  const totalW = cairnW + gap + mark.w + padX * 2;
  const totalH = innerH + padY * 2;
  const centerY = totalH / 2;
  const cairnTop = centerY - cairnH / 2 + yShift;
  const wordmarkTop = centerY - mark.h / 2;

  const scale = pxWidth / totalW;
  const canvas = newCanvas(pxWidth, totalH * scale);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("no 2d context");
  ctx.fillStyle = color;
  ctx.scale(scale, scale);
  drawCairn(ctx, padX, cairnTop, cairnW, cairnH);
  drawWordmark(ctx, padX + cairnW + gap, wordmarkTop, mark.w, mark.h, text);
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
