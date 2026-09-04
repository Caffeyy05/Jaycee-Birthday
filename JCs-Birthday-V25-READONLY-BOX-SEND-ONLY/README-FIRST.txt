JC's Birthday V25 — READ-ONLY BIRTHDAY BOX + SEND-ONLY CREATOR FLOW

MAIN FIXES
1. Birthday Box saved gifts are now strictly READ-ONLY results.
   - No Reset
   - No editor side panels
   - No upload controls
   - No text fields
   - No send button
   - No preview/send modal
   - No rearranging Bouquet flowers
   - No repositioning Photo Together crops
   - No recording/retake controls inside saved Song gifts

2. Result interactions that make sense are preserved:
   - Cake can still be viewed/rotated
   - Card can still be opened/closed
   - Gift Box can still be opened/closed
   - Saved Song can still be played
   - Saved visual gift animations remain visible

3. Creator flow is now SEND-ONLY.
   - The separate visible Preview buttons are removed/hidden.
   - Bottom/mobile action says Send, not Preview.
   - Send directly submits the current finished gift.
   - Timer expiry says Send gift, not Preview & send.
   - Existing preview code remains internally for compatibility but is not exposed in the normal flow.

4. All V24/V23 reliability features remain:
   - actual saved gift hydration in Birthday Box
   - offline-first IndexedDB
   - local photos/audio
   - pending Supabase retry sync
   - shared/local Birthday Box merge
   - Supabase setup/repair files
   - original homepage image
   - six final gift modes only

IMPORTANT
Deploy the WHOLE V25 package, not only index.html.
