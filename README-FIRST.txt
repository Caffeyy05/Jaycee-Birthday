JC's Birthday! — V9
====================

New in V9
---------
- Fixed the text/money typing focus bug: full sentences can be typed normally.
- Upload Image is available in every builder.
- Make Sticker lets a guest upload a photo and use it as a circular sticker.
- New gift mode: Our Photo Together.
- Uploaded images support drag, corner resize, rotate, pinch resize, duplicate, delete and layers.
- Uploaded images are compressed in-browser before being stored.
- Editor switches to a stacked safe layout before side panels can get cut off.
- Mobile/tablet keep the swipeable Elements rail + All Elements sheet.

Owner PIN: 2026

Static-storage note
-------------------
The app works on GitHub Pages and Railway, but the current Birthday Box still uses localStorage.
A shared database is required for gifts submitted on another person's device to appear on Jaycee's device.


FINAL QA
--------
Automated checks: 40 passed, 0 failed.

V9 image features:
- Upload Image in every builder.
- Make Sticker from an uploaded photo.
- Change an uploaded image between Photo and Sticker.
- Replace an uploaded image.
- Our Photo Together gift mode.
- Uploaded photos/stickers can be dragged, resized from corners, rotated,
  pinch-resized, duplicated, layered, and deleted.

Typing fix:
The Edit panel is no longer rebuilt on every character, so full sentences can
be typed normally without the one-letter/focus-loss bug.


V10 — LIVE ONLINE + CHAT
------------------------
Added:
- Live "X online" counter in the header.
- Floating birthday chat box.
- Guest names in messages.
- Typing indicator.
- Join / leave notices.
- Unread message badge.
- Owner automatically chats as "Jaycee" after entering the owner PIN.
- Chat stays available while the guest is making a gift.

IMPORTANT: REALTIME NEEDS RAILWAY
---------------------------------
This is a real cross-device feature, so GitHub Pages alone cannot run the
Socket.IO server.

OPTION 1 — EASIEST
Host the complete project on Railway.
- Railway installs package.json dependencies.
- Railway runs: npm start
- The website, online count, and chat all work on the same Railway URL.
- Leave chat-config.js as:
    window.JC_CHAT_SERVER_URL = "";

OPTION 2 — GITHUB PAGES + RAILWAY CHAT BACKEND
1. Upload the project to GitHub.
2. Deploy the same repository to Railway.
3. In chat-config.js set:
    window.JC_CHAT_SERVER_URL = "https://YOUR-RAILWAY-URL";
4. Commit/push that change to the GitHub Pages version.
5. GitHub Pages serves the website.
6. Railway provides live online presence and chat.

CHAT STORAGE
------------
Messages are kept in server memory (last 100 messages).
A Railway restart clears old chat messages.
For permanent chat history later, add a real database such as Supabase/Postgres.


V11 — SING A BIRTHDAY SONG
---------------------------
- 🎤 New "Sing a Birthday Song" gift mode.
- Direct microphone recording.
- Maximum microphone recording: 90 seconds.
- Stop and listen before sending.
- Replay recording.
- Record again / retake.
- Upload an audio recording as a fallback.
- Send stays disabled until an audio recording exists.
- Voice gifts replay inside the Birthday Box.

Microphone recording usually requires HTTPS or localhost.
GitHub Pages and Railway use HTTPS. Opening index.html directly from Downloads
may not allow microphone access, so an Upload Audio fallback is included.

Voice gifts are stored in browser localStorage in this prototype and are
size-limited. A future shared backend should store permanent cross-device audio.


V12 — DRAWING + LONG-PRESS FIX
------------------------------
- Drawing canvas fills the complete white board.
- Held strokes use pointer capture and continue until release.
- Drawing reaches all four edges of the board.
- Smoother pointer/coalesced-event strokes.
- Long press/context menu blocked on drawing board.
- Drawing mode never activates the dashed desktop drop outline.
- Phone/tablet element trays are swipe + tap only, not HTML draggable.
- Holding or swiping an element no longer activates Upload Image / Make Sticker.
- Desktop Elements sidebar still supports true drag/drop.


V13 — BACKGROUND DESIGNER
-------------------------
Every visual gift builder now has a Background button.

Background options:
- Solid color
- Two-color gradient
- Manual color picker
- Manual HEX input
- 8 quick palette swatches
- 8 gradient directions
- Live canvas preview
- Reset to white

The selected background is saved with the gift and restored when the gift is
opened later in the Birthday Box.

Drawing remains transparent over the selected background, so users can draw on
top of solid colors or gradients.


V14 — OWNER PIN UPDATE
----------------------
- Removed the visible default PIN hint from the Owner login screen.
- Owner PIN is no longer displayed anywhere in the UI.
- Owner PIN value was updated privately in the application code.
