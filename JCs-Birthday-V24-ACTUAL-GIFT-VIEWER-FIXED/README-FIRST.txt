JC's Birthday V24 — ACTUAL GIFT VIEWER FIXED

This build fixes the owner Birthday Box viewer.

WHAT WAS WRONG IN V23
The owner clicked “Open gift” and only saw a metadata summary (Shape, Tiers, Flavor, etc.). The saved creator state was stored, but the Birthday Box did not reconstruct the actual gift experience.

WHAT V24 DOES
- “Open gift” now opens a dedicated full-screen Saved Gift Viewer.
- The exact saved payload is sent back into the original gift creator.
- The creator hydrates/restores the saved state.
- Cake reopens as the actual interactive 3D cake and can still be rotated.
- Bouquet redraws the actual arranged bouquet and message card.
- Birthday Card restores cover/inside photos/text and can be opened.
- Gift Box restores its design/surprises and plays the opening reveal.
- Our Photo Together restores photos, crops, layout, filters, caption, and reveal.
- Sing a Birthday Song restores the saved audio player, stage, sender, message, and effects.
- A collapsible “Gift info / backup details” section remains under the real viewer as a fallback.
- Local IndexedDB Blob media and Supabase Storage URL media are both supported.
- The Supabase/offline-first V23 fixes remain intact.
- Your homepage photo remains in assets/jaycee.jpg.
- Only the six final approved gift modes remain.

IMPORTANT SUPABASE SETUP
Cross-device delivery still requires SUPABASE-SETUP.sql to be run once in your Supabase SQL Editor. V24 will still save locally first if Supabase is unavailable.

DEPLOY THE ENTIRE FOLDER
Do not replace only index.html. Copy all files/folders to the Git repo root.
