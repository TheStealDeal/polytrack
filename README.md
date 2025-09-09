# Polytrack
Polytrack is a racing game based off of Trackmania. The game is developed by Kodub and is active on Itch.io. This is version 0.4 of Polytrack, and new updates will not be posted because I am lazy.

## Fullscreen embedding

When Polytrack is embedded inside another site (such as Google Sites) the browser may block fullscreen requests from the game. The `fullscreen.js` module now attempts to request fullscreen using vendor-prefixed APIs and falls back to posting a `fullscreen-request` message to the parent window if the request is denied. A host page may listen for this message and trigger fullscreen on behalf of the game, matching the behaviour of YouTube embeds.
