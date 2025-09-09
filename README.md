# Polytrack
Polytrack is a racing game based off of Trackmania. The game is developed by Kodub and is active on Itch.io. This is version 0.4 of Polytrack, and new updates will not be posted because I am lazy.

## Fullscreen embedding

When Polytrack is embedded inside another site (such as Google Sites) the browser may block fullscreen requests from the game. The `fullscreen.js` module now attempts to request fullscreen using vendor-prefixed APIs and, if denied, posts a message identical to the one sent by YouTube players:

```
{"event":"command","func":"toggleFullscreen","args":[]}
```

Google Sites already listens for this message and will enter fullscreen on behalf of the embed. The game also listens for the matching `infoDelivery` message from the parent to reflect fullscreen state in its UI.
