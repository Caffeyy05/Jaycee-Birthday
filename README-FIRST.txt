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
