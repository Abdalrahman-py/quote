# UCAS IT Club: Quote Card

A static page for the workshop QR code. Each visitor gets a random quote card
(1080x1920 JPEG) and posts it as an Instagram Story that mentions **@ucas.it.club**.

No framework, no build step, no backend, no CDN. Total size is about 85 KB.

The look follows the club website (`ucas-it-club` repo, `master` branch): Cairo,
brand blue `#1864BC` and green `#73BF49`, navy ink, the 44px grid with soft glows,
the logo mark above «النادي التكنولوجي», gradient display text and gradient pill buttons.
The page header reads «انشرنا على قصتك».
The card and the page use the site's dark theme only. The page is one screen: a row of cards
(swipe sideways, tap a side card, or use the arrow keys for another quote),
and three step buttons: Save, Copy, Open Instagram.

```
index.html   page markup (Arabic, RTL)
style.css    page styles (site tokens)
app.js       card drawing, buttons
quotes.js    the quotes
fonts/       Cairo variable woff2 from the club site (Arabic + basic Latin) + OFL license
assets/      ucas-logo.webp from the club site
```

## Run locally

Open the folder with any static server. Example:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Add `?selftest` to the URL to run the wrap
check: open the browser console and look for `selftest done` with no assertion errors.

## Deploy to GitHub Pages

1. Create a public repository on GitHub, for example `quote-card`.
2. Push these files to the `main` branch. `index.html` must be at the repository root.
3. On GitHub, open **Settings > Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
   Select branch `main` and folder `/ (root)`. Click **Save**.
5. Wait one or two minutes. The URL is `https://<user>.github.io/<repo>/`.
6. Open the URL on a phone and test every button before you make the QR code.

The page needs HTTPS for the Clipboard API and the iPhone share sheet. GitHub Pages gives HTTPS.

## Add or change quotes

Edit `quotes.js`. Each entry is one object: the quote and the attribution shown under it:

```js
{ ar: "النص العربي", by: "القائل" },
```

Every quote is real and attributed. Sources, hadith gradings and notes are in `docs/quotes-research.md`; the `/* n */` before each entry is its number there.

- The card shows `ar` with `by` under it. «نسخ» copies the quote only.
- The quote font shrinks to fit, so longer quotes work, but keep them under about 200 characters. Run `?selftest` after you edit: it reports any quote or attribution that does not fit the card.
- The fonts are the club site's Cairo files. `cairo-arabic.woff2` is used as is. `cairo-latin.woff2` is cut down to basic Latin and common punctuation. If a quote uses an accented Latin letter and it shows in the wrong font, copy the full `src/assets/fonts/cairo-latin.woff2` from the club site over it.

## Tap counts

The page counts visits and button taps on GoatCounter: https://abdalrahmanpy.goatcounter.com
It is anonymous and sets no cookies. Open the page once with `?test` (for example `https://abdalrahman-py.github.io/quote/?test`) and that browser stops counting until you open it with `?test=off`; the card shows «وضع التجربة» as a reminder. The page sends the requests itself (`track()` in `app.js`), so no
GoatCounter script is loaded. Runs on localhost are not counted.

| Name on the dashboard | Counted when |
|---|---|
| `/` | Someone opens the page |
| `save` | «حفظ» finishes |
| `copy` | «نسخ» copies the quote |
| `instagram` | Someone taps an Instagram button |
| `instagram-opened` | The page goes to the background within 3 s of that tap: the phone left for Instagram (the app, or instagram.com or the Play Store if the app is missing) |

Ad blockers block GoatCounter, so the real numbers are a bit higher. No website can see whether a Story
was posted; count the Story mentions of @ucas.it.club in the club's Instagram notifications for that
(mentions disappear after 24 hours).

## Print the QR code

Ready-made files for the live URL `https://abdalrahman-py.github.io/quote/` (error correction H, 4-module quiet zone):

- `qr/quote-qr.svg`: vector, use this for print.
- `qr/quote-qr.png`: 1800 x 1800 px.


- Make the QR code from the **final** GitHub Pages URL. Open the URL once to confirm it works before you generate the code.
- Set error correction to **H** (high, 30%).
- Print it at least **3 x 3 cm**. Make it bigger for posters or if people scan from far away.
- Keep a white margin (quiet zone) of at least 4 modules around the code. Print dark on light, never inverted.
- Test the printed sample on an **iPhone** and on an **Android** phone before you print many copies. Test the full flow: scan, save image, copy text, follow the steps sheet, open Instagram, post a Story.

## Notes for the workshop

- **Save Image («حفظ»):** on iPhone it opens the share sheet; pick "Save Image" to put the card in Photos. On Android it downloads the JPEG to the gallery's Downloads.
- **Open Instagram («Instagram»):** opens the club's profile, `https://www.instagram.com/ucas.it.club/`. The «افتح Instagram» button in the Story-steps sheet opens the home feed, where students tap + to post. Android uses an intent link for the same path (opens the app, or its Play Store page). On iPhone, iOS hands instagram.com links to the Instagram app when it is installed.
- **Scanner browsers:** some QR scanner apps open links in their own built-in browser, which can block downloads. If Save does nothing, open the page in Safari or Chrome.
- **Story steps:** once a student has saved the image and copied the text, a sheet opens with five steps (open Instagram, pick the image, paste the text, add the **@ucas.it.club** mention sticker, share). «كيف اشاركها مع النادي؟» opens it any time.
- Instagram cannot be filled in from a web page, so students paste the text and add the mention by hand.

## License

Font: Cairo, SIL Open Font License 1.1 (see `fonts/OFL.txt`).
Logo: UCAS IT Club's own mark, copied from the club website.
