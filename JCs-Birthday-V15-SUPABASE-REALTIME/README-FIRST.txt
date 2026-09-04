

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
