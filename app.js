// Card is drawn on an offscreen 1080x1920 canvas, then shown as an <img>
// so students can also long-press it to save (iOS saves to Photos that way).
// Look follows the UCAS IT Club website (dark theme): Cairo, navy ground,
// faint 44px-style grid, soft blue/green glows, logo mark, gradient display text.
const W = 1080, H = 1920;
const SAFE = 250;                    // Instagram UI covers top/bottom 250px
const PAD = 100, MAX_W = W - PAD * 2;
const QUOTE_TOP = 640, QUOTE_BOTTOM = 1500, BOX_H = QUOTE_BOTTOM - QUOTE_TOP;
// Site tokens (src/styles.css, .dark) and logo colours.
const C = {
  bg: "#0d1726", fg: "#e8eff8", muted: "#adbdd1",
  primary: "#78b7f3", accent: "#86cd62",
  blue: "#1864bc", teal: "#00a19a", green: "#73bf49",
};
const FONT = '"Cairo", system-ui, sans-serif';
const IG_ANDROID = "intent://instagram.com/#Intent;package=com.instagram.android;scheme=https;end";
// JPEG: about a tenth the size of PNG for this card, and every phone and Instagram take it
// (canvas WebP export is missing in Safari).
const FILE_NAME = "ucas-it-club-quote.jpg", MIME = "image/jpeg", QUALITY = 0.92;

const $ = (id) => document.getElementById(id);
const stage = $("stage");
const canvas = Object.assign(document.createElement("canvas"), { width: W, height: H });
const ctx = canvas.getContext("2d");
const logo = new Image();

let current = null, seq = 0;

const textOf = (q) => q.ar.trim();
// An older cached quotes.js may have no "by", or by as { ar, en }.
const byOf = (q) => (typeof q.by === "string" ? q.by : q.by?.ar || "");
const BY_FONT = `600 38px ${FONT}`;

// Greedy word wrap measured with the real font. Arabic words never break
// mid-word; canvas shapes each candidate line, so widths include joining.
function wrap(text, font, maxW) {
  ctx.font = font;
  const lines = [];
  let line = "";
  for (const word of text.split(/\s+/)) {
    const test = line ? line + " " + word : word;
    if (line && ctx.measureText(test).width > maxW) { lines.push(line); line = word; }
    else line = test;
  }
  if (line) lines.push(line);
  return lines;
}

// Largest font size whose quote fits the box.
function layout(q) {
  const text = textOf(q);
  let L;
  ctx.direction = "rtl";
  for (let size = 84; size >= 40; size -= 4) {
    const font = `900 ${size}px ${FONT}`;
    const lines = wrap(text, font, MAX_W);
    const fitsWidth = lines.every((l) => ctx.measureText(l).width <= MAX_W);
    const lh = size * 1.55;
    L = { text, font, lines, lh, total: lines.length * lh };
    if (fitsWidth && L.total <= BOX_H) break;
  }
  // Balance lines: narrowest width that keeps the same line count (no one-word last line).
  if (L.lines.length > 1) {
    let lo = MAX_W / 2, hi = MAX_W;
    while (hi - lo > 4) {
      const mid = (lo + hi) / 2;
      if (wrap(L.text, L.font, mid).length === L.lines.length) hi = mid; else lo = mid;
    }
    L.lines = wrap(L.text, L.font, hi);
  }
  return L; // shortcut: very long quotes may still overflow at 40px; keep quotes under ~200 chars
}

function glow(x, y, r, color, alpha) {
  const g = ctx.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0, color + Math.round(alpha * 255).toString(16).padStart(2, "0"));
  g.addColorStop(1, color + "00");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
}

// Seeded random (mulberry32): each quote gets its own lighting, the same every time it is
// drawn in this visit (swiping back shows the same card); SALT changes it on the next visit.
const SALT = Math.floor(Math.random() * 1e9);
function rng(seed) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function background(q) {
  const r = rng(QUOTES.indexOf(q) * 7919 + SALT), between = (a, b) => a + r() * (b - a);
  const pick = () => [C.primary, C.accent, C.teal][Math.floor(r() * 3)];
  ctx.fillStyle = C.bg;
  ctx.fillRect(0, 0, W, H);
  // Site's bg-grid-pattern, faded out by a radial mask like the hero.
  ctx.strokeStyle = "rgba(120,183,243,0.09)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let x = 0; x <= W; x += 90) { ctx.moveTo(x, 0); ctx.lineTo(x, H); }
  for (let y = 0; y <= H; y += 90) { ctx.moveTo(0, y); ctx.lineTo(W, y); }
  ctx.stroke();
  const my = H * between(0.32, 0.5);
  const mask = ctx.createRadialGradient(W / 2, my, 200, W / 2, my, 1150);
  mask.addColorStop(0, "rgba(13,23,38,0)");
  mask.addColorStop(1, "rgba(13,23,38,1)");
  ctx.fillStyle = mask;
  ctx.fillRect(0, 0, W, H);
  // Three soft brand glows (top, one side, bottom), placed and coloured per quote. Alphas stay low
  // so the quote keeps its contrast.
  glow(between(-60, W + 60), between(-80, 420), between(540, 720), pick(), between(0.12, 0.18));
  glow(r() < 0.5 ? between(-120, 80) : between(W - 80, W + 120), H * between(0.4, 0.7), between(560, 760), pick(), between(0.1, 0.15));
  glow(between(0, W), H - between(0, 260), between(480, 640), pick(), between(0.09, 0.14));
}

function draw(q) {
  background(q);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Header row like the page: logo on the right of the club name (RTL), then a gradient rule.
  const ROW_Y = 410, LOGO_H = 190, GAP = 28, name = "النادي التكنولوجي";
  ctx.direction = "rtl";
  ctx.font = `800 66px ${FONT}`;
  const tw = ctx.measureText(name).width;
  const lw = logo.naturalWidth ? (logo.naturalWidth / logo.naturalHeight) * LOGO_H : 0;
  const left = (W - (tw + (lw ? GAP + lw : 0))) / 2;
  if (lw) ctx.drawImage(logo, left + tw + GAP, ROW_Y - LOGO_H / 2, lw, LOGO_H); // top 315, below the 250px safe area
  ctx.fillStyle = C.primary;
  ctx.fillText(name, left + tw / 2, ROW_Y + 4);
  const rule = ctx.createLinearGradient(W / 2 - 80, 0, W / 2 + 80, 0);
  rule.addColorStop(0, C.blue);
  rule.addColorStop(1, C.green);
  ctx.fillStyle = rule;
  ctx.fillRect(W / 2 - 80, 548, 160, 8); // not roundRect: missing before Safari 16 / Chrome 99

  // Quote in the slogan's style: Cairo black, blue-to-green gradient (dark-theme inks).
  const L = layout(q);
  let y = QUOTE_TOP + (BOX_H - L.total) / 2;
  const qh = L.lines.length * L.lh;
  const ink = ctx.createLinearGradient(PAD, y, W - PAD, y + qh);
  ink.addColorStop(0.1, C.primary);
  ink.addColorStop(0.9, C.accent);
  ctx.font = L.font;
  ctx.fillStyle = ink;
  for (const line of L.lines) { ctx.fillText(line, W / 2, y + L.lh / 2); y += L.lh; }

  // Attribution under the quote, inside Instagram's bottom safe area (ends by 1600 < 1670).
  ctx.font = BY_FONT;
  ctx.fillStyle = C.muted;
  if (byOf(q)) ctx.fillText("— " + byOf(q), W / 2, y + 60);
}

// Draw q into one card <img>. toBlob copies the canvas when called, so the
// shared canvas can be redrawn for the next card right away.
function paint(el, q) {
  const mine = String(++seq);
  el.dataset.seq = mine;
  el.q = q;
  el.blob = null;
  el.classList.add("loading");
  draw(q);
  canvas.toBlob((b) => {
    if (el.dataset.seq !== mine) return; // repainted since
    if (el.src.startsWith("blob:")) URL.revokeObjectURL(el.src);
    el.blob = b;
    el.src = URL.createObjectURL(b);
  }, MIME, QUALITY);
}

// The quotes are a shuffled ring.
// Like a RecyclerView: five card <img>s. slides[2] is the current card, slides[1] the previous (right side),
// slides[3] the next (left side; the page is RTL). slides[0] and slides[4] sit hidden one step further out,
// already drawn, so the card that slides in is always ready.
const ORDER = QUOTES.map((_, i) => i);
for (let i = ORDER.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [ORDER[i], ORDER[j]] = [ORDER[j], ORDER[i]];
}
let pos = 0, drag = 0, anim = 0;
let slides = [...stage.querySelectorAll(".card")];
const MID = 2;
const at = (d) => QUOTES[ORDER[(((pos + d) % ORDER.length) + ORDER.length) % ORDER.length]];
const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;
const TURN_MS = REDUCE ? 0 : 320;

for (const el of slides) el.addEventListener("load", () => { el.classList.remove("loading"); stage.classList.add("ready"); });

// Cards sit flat in a row: offset +1 right, 0 middle, -1 left.
// drag slides the row; positive brings the next card toward the middle.
function place() {
  slides.forEach((el, k) => {
    const o = Math.max(-2.6, Math.min(2.6, MID - k + drag)), a = Math.abs(o);
    el.style.transform = `translateX(calc(${o} * (100% + 14px))) scale(${1 - Math.min(a, 1) * 0.08})`;
    el.style.opacity = String(Math.max(0, 1 - a * 0.55));
    el.style.zIndex = String(5 - Math.round(a * 2));
    el.classList.toggle("on", k === MID);
  });
}

function showCurrent() {
  current = at(0);
  resetDone(); // new image and text: save and copy again
  slides.forEach((el, k) => {
    el.alt = k === MID ? textOf(current) : "";
    el.setAttribute("aria-hidden", String(k !== MID));
  });
}

// Make sure a card shows the quote for the position it holds now (skip if it already does).
function fill(el, force) {
  const q = at(slides.indexOf(el) - MID);
  if (force || el.q !== q) paint(el, q);
}
// Fill when the browser is idle, so drawing never stalls a swipe. Safari has no requestIdleCallback.
const idle = window.requestIdleCallback || ((f) => setTimeout(f, 16));
const fillLater = (el, force) => idle(() => fill(el, force), { timeout: 600 });

// Current card first, then its neighbours, then the hidden buffers. force: redraw all (fonts arrived late).
function paintAll(force) {
  fill(slides[MID], force);
  for (const k of [MID + 1, MID - 1, MID + 2, MID - 2]) fillLater(slides[k], force);
  showCurrent();
}

// Move the current position by dir (+1 next, -1 previous) right away, keeping every card where it
// is on screen (drag absorbs the step). The hidden card that falls off one end goes to the other end.
function shift(dir) {
  pos += dir;
  if (dir > 0) slides.push(slides.shift()); else slides.unshift(slides.pop());
  drag -= dir;
  fill(slides[MID + dir]); // the new side card; normally already drawn as a hidden buffer
  fillLater(slides[dir > 0 ? slides.length - 1 : 0]);
  showCurrent();
}

// Ease drag to 0 with requestAnimationFrame. JS (not a CSS transition) so a new touch can grab
// the row mid-animation and carry on from where it is: swipes are never locked out.
function settle() {
  cancelAnimationFrame(anim);
  const from = drag, start = performance.now();
  const step = (now) => {
    const p = TURN_MS ? Math.min(1, (now - start) / TURN_MS) : 1;
    drag = from * Math.pow(1 - p, 3); // ease-out
    place();
    if (p < 1) anim = requestAnimationFrame(step);
  };
  anim = requestAnimationFrame(step);
}

function turn(dir) { shift(dir); settle(); }

// Swipe: the row follows the finger; passing half a card moves on, so one long drag can pass
// several cards. On release a flick or a drag past 22% moves one more. A tap on a side card turns to it.
let x0 = null, t0 = 0, base = 0, moved = false, dx = 0;
stage.addEventListener("pointerdown", (e) => {
  if (e.button > 0) return;
  cancelAnimationFrame(anim); // grab the row where it is
  x0 = e.clientX; t0 = performance.now(); base = drag; moved = false; dx = 0;
});
stage.addEventListener("pointermove", (e) => {
  if (x0 === null) return;
  dx = e.clientX - x0;
  if (!moved && Math.abs(dx) < 8) return;
  if (!moved) { moved = true; stage.setPointerCapture?.(e.pointerId); stage.classList.add("dragging"); }
  drag = base + dx / slides[MID].offsetWidth;
  while (Math.abs(drag) > 0.5) { const d = Math.sign(drag); shift(d); base -= d; }
  place();
});
function release(e) {
  if (x0 === null) return;
  x0 = null;
  stage.classList.remove("dragging");
  if (!moved) {
    const k = slides.indexOf(e.target);
    if (e.type === "pointerup" && (k === MID - 1 || k === MID + 1)) return turn(k > MID ? 1 : -1);
    return settle();
  }
  const dir = Math.sign(dx);
  const fast = Math.abs(dx) > 20 && Math.abs(dx) / (performance.now() - t0) > 0.5; // px per ms
  if (fast && drag * dir > -0.2) return turn(dir);
  if (drag * dir > 0.22) return turn(dir); // only onward: a negative rest after passing a card settles on that card
  settle();
}
stage.addEventListener("pointerup", release);
stage.addEventListener("pointercancel", release);
stage.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") { e.preventDefault(); turn(1); }   // next card is on the left
  if (e.key === "ArrowRight") { e.preventDefault(); turn(-1); }
});

// Anonymous counts on GoatCounter, no cookies: https://abdalrahmanpy.goatcounter.com
// Same request GoatCounter's count.js makes (beacon, image fallback). A name without a
// leading "/" is an event; "/" is the page visit. Local test runs are not counted.
// Test mode: open the page once with ?test and this browser stops counting; ?test=off counts it again.
const GC = "https://abdalrahmanpy.goatcounter.com/count";
let testMode = false;
try {
  const t = new URLSearchParams(location.search).get("test");
  if (t === "off") localStorage.removeItem("gcTest");
  else if (t !== null) localStorage.setItem("gcTest", "1");
  testMode = localStorage.getItem("gcTest") === "1";
} catch {} // storage blocked: counts as usual
function track(name) {
  if (testMode || location.protocol === "file:" || /^(localhost|127\.|\[::1\])/.test(location.hostname)) return;
  const q = new URLSearchParams({ p: name, rnd: Math.random().toString(36).slice(2) });
  if (!name.startsWith("/")) q.set("e", "1");
  else if (document.referrer) q.set("r", document.referrer);
  const url = `${GC}?${q}`;
  try { if (navigator.sendBeacon?.(url)) return; } catch {}
  new Image().src = url;
}

let sayTimer;
const say = (msg) => {
  const s = $("status");
  s.textContent = msg;
  s.classList.add("show");
  clearTimeout(sayTimer);
  sayTimer = setTimeout(() => s.classList.remove("show"), 2200);
};

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(text); return true; }
  } catch {}
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.cssText = "position:fixed;top:0;left:0;opacity:0";
  document.body.append(ta);
  ta.select();
  ta.setSelectionRange(0, text.length);
  let ok = false;
  try { ok = document.execCommand("copy"); } catch {}
  ta.remove();
  return ok;
}

function download(blob) {
  const url = URL.createObjectURL(blob);
  const a = Object.assign(document.createElement("a"), { href: url, download: FILE_NAME });
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}

// Save and copy turn into "done" buttons; when both are done, the Story steps open.
const LABELS = { save: ["حفظ", "تم الحفظ"], copy: ["نسخ", "تم النسخ"] };
const done = { save: false, copy: false };
function setDone(id, on) {
  done[id] = on;
  const b = $(id);
  b.classList.toggle("done", on);
  b.querySelector(".lbl").textContent = LABELS[id][on ? 1 : 0];
  b.querySelector("use").setAttribute("href", on ? "#i-check" : `#i-${id}`);
}
function resetDone() { setDone("save", false); setDone("copy", false); }
function markDone(id) {
  track(id); // "save" or "copy"
  const first = !(done.save && done.copy);
  setDone(id, true);
  if (first && done.save && done.copy) setTimeout(openGuide, 600);
}

const guide = $("guide");
function openGuide() {
  if (guide.open) return;
  if (guide.showModal) guide.showModal(); else guide.setAttribute("open", ""); // <dialog> before iOS 15.4
}
function closeGuide() { if (guide.close) guide.close(); else guide.removeAttribute("open"); }
$("how").addEventListener("click", openGuide);
$("guide-close").addEventListener("click", closeGuide);
guide.addEventListener("click", (e) => { if (e.target === guide) closeGuide(); }); // tap on backdrop

// iPhone downloads land in Files, but Instagram picks from Photos; the share
// sheet has "Save Image", which goes to Photos. Elsewhere a plain download.
const IOS = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

$("save").addEventListener("click", async () => {
  const blob = slides[MID].blob;
  if (!blob) return say("لحظة…");
  const file = new File([blob], FILE_NAME, { type: MIME });
  if (IOS && navigator.canShare?.({ files: [file] })) {
    try { await navigator.share({ files: [file] }); markDone("save"); return; }
    catch (e) { if (e.name === "AbortError") return; }
  }
  download(blob);
  markDone("save");
});

$("copy").addEventListener("click", async () => {
  const text = textOf(current);
  if (await copyText(text)) return markDone("copy");
  try { window.prompt("انسخ النص:", text); markDone("copy"); } catch { say("تعذّر النسخ"); }
});

// Both open the Instagram home feed, where students tap + to post a Story.
// Android: intent URL (opens the app, or its Play Store page if missing).
// iPhone and others follow the href https://www.instagram.com/: Instagram's
// apple-app-site-association claims "/*", so iOS opens the app when installed
// and Safari when not. Used instead of instagram://app, which makes Safari ask
// "Open in Instagram?" and shows an error page if the app is missing.
// The page going hidden within 3 s of the tap means the phone left for Instagram
// (the app, or instagram.com / the Play Store when the app is missing).
let igTap = 0;
for (const a of document.querySelectorAll("[data-ig]")) a.addEventListener("click", (e) => {
  track("instagram");
  igTap = Date.now();
  if (/Android/i.test(navigator.userAgent)) { e.preventDefault(); location.href = IG_ANDROID; }
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden && Date.now() - igTap < 3000) { igTap = 0; track("instagram-opened"); }
});


function selfTest() {
  for (const q of QUOTES) {
    ctx.font = BY_FONT;
    console.assert(ctx.measureText("— " + byOf(q)).width <= MAX_W, "attribution wider than card", q);
    const L = layout(q);
    ctx.font = L.font;
    console.assert(L.lines.join(" ") === L.text.split(/\s+/).join(" "), "wrap lost or reordered words", q);
    console.assert(L.lines.every((l) => ctx.measureText(l).width <= MAX_W), "line wider than card", q);
    console.assert(L.total <= BOX_H, "quote overflows safe box", q, L);
  }
  console.log("selftest done:", QUOTES.length, "quotes");
}

(async () => {
  logo.src = "assets/ucas-logo.webp";
  const assets = Promise.all([
    document.fonts.load(`900 80px "Cairo"`, "نادي"),
    document.fonts.load(`600 38px "Cairo"`, "— 0"), // Latin file: dash and digits in the attribution
    logo.decode(),
  ]).catch(() => {}); // logo failed: card draws without it
  let late = false;
  // Slow network: after 4 s draw with what has arrived, and redraw once the fonts and logo are in.
  await Promise.race([assets, new Promise((r) => setTimeout(() => { late = true; r(); }, 4000))]);
  if (location.search.includes("selftest")) selfTest();
  place();
  paintAll();
  assets.then(() => { if (late) paintAll(true); });
  if (testMode) say("وضع التجربة: لن تُحتسب ضغطاتك");
  track("/");
})();
