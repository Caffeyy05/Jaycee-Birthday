

V15 — SUPABASE REALTIME
-----------------------
Railway / Socket.IO is no longer required.

Hosting:
- Frontend: GitHub Pages
- Custom domain: can point directly to GitHub Pages
- Realtime service: Supabase Free project

Realtime features:
- Cross-device online count using Supabase Presence
- Cross-device live chat using Supabase Broadcast
- Typing indicator
- Join / leave presence notices
- Unread chat badge
- Guest chat name
- Owner can still chat as Jaycee after owner login

NO SQL TABLE IS REQUIRED FOR THIS VERSION
-----------------------------------------
Chat and presence use Supabase Realtime Broadcast + Presence directly.

Important:
- Realtime chat messages are live-session messages.
- They are not permanently stored after everyone leaves/reloads.
- Existing Birthday Box gifts are still stored in localStorage in this version.

Later upgrade:
Supabase Database + Storage can be added for permanent shared Birthday Box
submissions, photos, voice gifts, and persistent chat history.

FILES NO LONGER NEEDED
----------------------
server.js and package.json were removed from this V15 package because no Node
or Railway server is required.


V16 — SAFE PUBLIC CHAT
----------------------
Public Supabase chat now includes a client-side safety filter.

Safety features:
- Blocks common English profanity and abusive phrases.
- Blocks common Filipino / Tagalog profanity and abusive phrases.
- Covers simple spacing, punctuation, repeated-letter and leetspeak variants.
- Unsafe outgoing messages are not broadcast.
- Unsafe incoming messages are hidden and replaced with a safety notice.
- Unsafe chat display names are blocked/sanitized.
- Chat UI shows a clear 'Keep it kind' safety notice.

Examples such as 'gago' and 'putangina mo' are covered.

IMPORTANT:
This is a strong browser-side filter for a lightweight public birthday chat,
but no static frontend filter can guarantee detection of every abusive word,
language, invented spelling, or determined bypass. A server-side moderation
layer would be needed for strict enforcement against modified clients.


FINAL CLEAN GITHUB PAGES BUILD
------------------------------
Use THIS folder as the single source for the Jaycee-Birthday GitHub repository.

Included:
- Supabase Realtime live chat
- Real online counter across devices
- Typing indicator
- Join/leave presence
- English + Filipino/Tagalog safe-chat filtering
- All current gift builders
- Drawing full-board + long-press fixes
- Upload Image + Make Sticker
- Our Photo Together
- Sing a Birthday Song voice gift
- Background Designer
- Owner PIN update
- Birthday Box
- Jaycee photo asset

Not needed anymore:
- Railway
- server.js
- package.json

GitHub repo root should contain:
- index.html
- chat-config.js
- .nojekyll
- assets/jaycee.jpg
- README-FIRST.txt
- QA-REPORT-FINAL.txt
