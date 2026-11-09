// Card is drawn on an offscreen 1080x1920 canvas, then shown as an <img>
// so students can also long-press it to save (iOS saves to Photos that way).
// Look follows the UCAS IT Club website (dark theme): Cairo, navy ground,
// faint 44px-style grid, soft blue/green glows, logo mark, gradient display text.
const W = 1080, H = 1920;
const SAFE = 250;                    // Instagram UI covers top/bottom 250px
const PAD = 100, MAX_W = W - PAD * 2;
const QUOTE_TOP = 640, QUOTE_BOTTOM = 1560, BOX_H = QUOTE_BOTTOM - QUOTE_TOP;
// Site tokens (src/styles.css, .dark) and logo colours.
const C = {
  bg: "#0d1726", fg: "#e8eff8", muted: "#adbdd1",
  primary: "#78b7f3", accent: "#86cd62",
  blue: "#1864bc", teal: "#00a19a", green: "#73bf49",
};
const FONT = '"Cairo", system-ui, sans-serif';
const TAGS = "@ucas.it.club #UCAS #UCAS_IT_Club #نادي_تكنولوجيا_المعلومات";
const IG_ANDROID = "intent://instagram.com/#Intent;package=com.instagram.android;scheme=https;end";
const FILE_NAME = "ucas-it-club-quote.png";

const $ = (id) => document.getElementById(id);
const preview = $("card");
const canvas = Object.assign(document.createElement("canvas"), { width: W, height: H });
const ctx = canvas.getContext("2d");
const logo = new Image();

let current = null, showTr = false, blob = null, seq = 0;
let lastIdx = -1;
try { lastIdx = Number(sessionStorage.getItem("lastQuote") ?? -1); } catch {}

// Arabic by default; the "English" toggle swaps the whole quote.
const textOf = (q, en = showTr) => (en ? q.en : q.ar).trim();

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
function layout(q, en = showTr) {
  const rtl = !en, text = textOf(q, en);
  let L;
  for (let size = 112; size >= 40; size -= 4) {
    ctx.direction = rtl ? "rtl" : "ltr";
    const font = `900 ${size}px ${FONT}`;
    const lines = wrap(text, font, MAX_W);
    const fitsWidth = lines.every((l) => ctx.measureText(l).width <= MAX_W);
    const lh = size * (rtl ? 1.55 : 1.25);
    L = { rtl, text, font, lines, lh, total: lines.length * lh };
    if (fitsWidth && L.total <= BOX_H) break;
  }
  // Balance lines: narrowest width that keeps the same line count (no one-word last line).
  if (L.lines.length > 1) {
    ctx.direction = rtl ? "rtl" : "ltr";
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

function background() {
  ctx.fillStyle = C.bg;
  ctx.fillRect(0, 0, W, H);
  // Site's bg-grid-pattern, faded out by a radial mask like the hero.
  ctx.strokeStyle = "rgba(120,183,243,0.09)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let x = 0; x <= W; x += 90) { ctx.moveTo(x, 0); ctx.lineTo(x, H); }
  for (let y = 0; y <= H; y += 90) { ctx.moveTo(0, y); ctx.lineTo(W, y); }
  ctx.stroke();
  const mask = ctx.createRadialGradient(W / 2, H * 0.4, 200, W / 2, H * 0.4, 1150);
  mask.addColorStop(0, "rgba(13,23,38,0)");
  mask.addColorStop(1, "rgba(13,23,38,1)");
  ctx.fillStyle = mask;
  ctx.fillRect(0, 0, W, H);
  // The site's three soft brand glows.
  glow(W - 40, 120, 620, C.primary, 0.16);
  glow(-60, H * 0.55, 700, C.accent, 0.13);
  glow(W * 0.75, H - 80, 560, C.primary, 0.12);
}

function draw(q) {
  background();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Hero header block: logo, club name in primary, college name muted, gradient rule.
  if (logo.naturalWidth) {
    const h = 150, w = (logo.naturalWidth / logo.naturalHeight) * h;
    ctx.drawImage(logo, (W - w) / 2, SAFE + 20, w, h);
  }
  ctx.direction = "rtl";
  ctx.font = `700 52px ${FONT}`;
  ctx.fillStyle = C.primary;
  ctx.fillText("النادي التكنولوجي", W / 2, 475);
  ctx.font = `600 32px ${FONT}`;
  ctx.fillStyle = C.muted;
  ctx.fillText("الكلية الجامعية للعلوم التطبيقية", W / 2, 532);
  const rule = ctx.createLinearGradient(W / 2 - 80, 0, W / 2 + 80, 0);
  rule.addColorStop(0, C.blue);
  rule.addColorStop(1, C.green);
  ctx.fillStyle = rule;
  ctx.fillRect(W / 2 - 80, 584, 160, 8); // not roundRect: missing before Safari 16 / Chrome 99

  // Quote in the slogan's style: Cairo black, blue-to-green gradient (dark-theme inks).
  const L = layout(q);
  let y = QUOTE_TOP + (BOX_H - L.total) / 2;
  const qh = L.lines.length * L.lh;
  const ink = ctx.createLinearGradient(PAD, y, W - PAD, y + qh);
  ink.addColorStop(0.1, C.primary);
  ink.addColorStop(0.9, C.accent);
  ctx.direction = L.rtl ? "rtl" : "ltr";
  ctx.font = L.font;
  ctx.fillStyle = ink;
  for (const line of L.lines) { ctx.fillText(line, W / 2, y + L.lh / 2); y += L.lh; }

}

function render(q) {
  current = q;
  draw(q);
  $("tr").setAttribute("aria-pressed", String(showTr));
  $("tr-label").textContent = showTr ? "العربية" : "English";
  $("tr-label").lang = showTr ? "ar" : "en";
  preview.alt = textOf(q);
  const mine = ++seq;
  blob = null;
  canvas.toBlob((b) => {
    if (mine !== seq) return; // a newer render started
    blob = b;
    if (preview.src.startsWith("blob:")) URL.revokeObjectURL(preview.src);
    preview.src = URL.createObjectURL(b);
  }, "image/png");
}

function pickQuote() {
  let i;
  do i = Math.floor(Math.random() * QUOTES.length);
  while (QUOTES.length > 1 && i === lastIdx);
  lastIdx = i;
  try { sessionStorage.setItem("lastQuote", String(i)); } catch {}
  render(QUOTES[i]);
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

function download() {
  const url = URL.createObjectURL(blob);
  const a = Object.assign(document.createElement("a"), { href: url, download: FILE_NAME });
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
  say("تم حفظ الصورة");
}

// iPhone downloads land in Files, but Instagram picks from Photos; the share
// sheet has "Save Image", which goes to Photos. Elsewhere a plain download.
const IOS = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

$("save").addEventListener("click", async () => {
  if (!blob) return say("لحظة…");
  const file = new File([blob], FILE_NAME, { type: "image/png" });
  if (IOS && navigator.canShare?.({ files: [file] })) {
    try { await navigator.share({ files: [file] }); return; }
    catch (e) { if (e.name === "AbortError") return; }
  }
  download();
});

$("copy").addEventListener("click", async () => {
  const caption = `${textOf(current)}\n\n${TAGS}`;
  if (await copyText(caption)) say("تم نسخ النص");
  else try { window.prompt("انسخ النص:", caption); } catch { say("تعذّر النسخ"); }
});

// Both open the Instagram home feed, where students tap + to post a Story.
// Android: intent URL (opens the app, or its Play Store page if missing).
// iPhone and others follow the href https://www.instagram.com/: Instagram's
// apple-app-site-association claims "/*", so iOS opens the app when installed
// and Safari when not. Used instead of instagram://app, which makes Safari ask
// "Open in Instagram?" and shows an error page if the app is missing.
$("ig").addEventListener("click", (e) => {
  if (/Android/i.test(navigator.userAgent)) { e.preventDefault(); location.href = IG_ANDROID; }
});

$("next").addEventListener("click", pickQuote);

$("tr").addEventListener("click", () => { showTr = !showTr; render(current); });

function selfTest() {
  const words = (t) => t.trim().split(/\s+/).length;
  for (const q of QUOTES) {
    console.assert(words(q.ar) <= 8 && words(q.en) <= 10, "quote too long (max 8 Arabic / 10 English words)", q);
    for (const en of [false, true]) {
      const L = layout(q, en);
      ctx.font = L.font;
      console.assert(L.lines.join(" ") === L.text.split(/\s+/).join(" "), "wrap lost or reordered words", q);
      console.assert(L.lines.every((l) => ctx.measureText(l).width <= MAX_W), "line wider than card", q);
      console.assert(L.total <= BOX_H, "quote overflows safe box", q, L);
    }
  }
  console.log("selftest done:", QUOTES.length, "quotes");
}

(async () => {
  logo.src = "assets/ucas-logo.webp";
  try {
    await Promise.race([
      Promise.all([
        document.fonts.load(`900 80px "Cairo"`, "نادي"),
        document.fonts.load(`900 80px "Cairo"`, "UCAS"),
        logo.decode(),
      ]),
      new Promise((r) => setTimeout(r, 4000)), // slow network: draw with what has arrived
    ]);
  } catch {} // logo failed: card draws without it
  if (location.search.includes("selftest")) selfTest();
  pickQuote();
})();
