JC's Birthday V23 — STABLE FIXED BUILD

THIS BUILD FIXES THE TWO FAILURES REPORTED IN V22:
1) "Could not find the table 'public.birthday_gifts' in the schema cache"
2) Sing a Birthday Song not recording / audio not appearing in Birthday Box

WHAT CHANGED
- Offline-first saving: a gift is saved to IndexedDB BEFORE any Supabase upload.
- Photos and audio are preserved locally as real media, not replaced by placeholder text.
- Failed Supabase sync no longer rejects or destroys the gift.
- Pending local gifts automatically retry syncing after Supabase becomes ready.
- Birthday Box merges Shared + local pending gifts.
- Shared / Pending sync status is visible on each owner gift card.
- Missing Supabase table is detected and shown as a clear one-time setup state.
- SUPABASE-SETUP.sql now asks PostgREST to reload the schema cache.
- SUPABASE-REPAIR.sql is included and is safe to run again.
- Cross-frame Blob/File detection was hardened for uploaded/recorded audio.
- Local Birthday Box viewer can render audio/photos stored as Blob or data URL.
- Song recorder now checks secure context and microphone capability before countdown.
- Microphone permission is requested BEFORE countdown.
- Empty recordings are rejected instead of pretending they worked.
- Audio uploads are validated and capped at 5 MB to match Supabase Storage.
- START-LOCAL-TEST.bat opens the app through http://localhost:8080 so microphone recording can work while testing locally.
- Original homepage photo remains included in assets/jaycee.jpg.
- Six approved gift modes remain intact.
- Drawing, Custom Money, and public chat remain removed.

IMPORTANT: SHARED BIRTHDAY BOX SETUP
The screenshot error specifically means Supabase does not currently expose the birthday_gifts table.
The app cannot create database tables from a public frontend key.

Run this ONCE:
1. Supabase Dashboard
2. SQL Editor
3. New query
4. Open SUPABASE-SETUP.sql from this package
5. Copy all → paste → Run
6. Reload the birthday website

The SQL is idempotent, so running it again is safe.

LOCAL MICROPHONE TESTING
Do NOT double-click index.html if you want to test microphone recording.
Instead double-click:
  START-LOCAL-TEST.bat

It starts:
  http://localhost:8080

localhost is treated as a trustworthy browser context for microphone APIs.
The final GitHub Pages site also uses HTTPS and supports microphone permission.

FINAL FILES TO DEPLOY
index.html
supabase-config.js
SUPABASE-SETUP.sql
assets/jaycee.jpg
modes/cake.html
modes/bouquet.html
modes/card.html
modes/gift-box.html
modes/photo-together.html
modes/song.html

Deploy the WHOLE package.

SYSTEM CHECK
After starting locally or deploying to GitHub Pages, open:
  SYSTEM-CHECK.html
It verifies the actual browser environment, all six creator files, birthday photo,
IndexedDB, Supabase table, Storage bucket, secure context, and microphone APIs.
It also includes a button that records a short microphone sample in your browser.
