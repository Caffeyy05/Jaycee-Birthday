JC's Birthday V17 — Shared Birthday Box

This is the newest GitHub Pages build.

What changed:
- Birthday Box is stored in Supabase and shared across devices.
- Gift count syncs across devices.
- Complete gift designs are stored online.
- Photos/stickers, drawings, and birthday-song recordings upload to Supabase Storage.
- LocalStorage is now only a cache/fallback.
- Box data lazy-loads the full design only when Jaycee opens a gift.
- Existing Supabase live chat, online count, safe-chat filtering, owner PIN,
  drawing fixes, background designer, images/stickers, and song recorder remain.

ONE-TIME REQUIRED STEP:
Run SUPABASE-SETUP.sql in Supabase Dashboard -> SQL Editor before testing gifts.

Privacy note:
This lightweight no-login version allows the public frontend to read the gift
table. The Owner PIN hides the Box in the UI but is not strong server-side
authentication. A later Supabase Auth/Edge Function upgrade can make Box data
strictly owner-only.
