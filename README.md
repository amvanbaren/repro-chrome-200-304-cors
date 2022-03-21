# Repro for a chrome bug

https://bugs.chromium.org/p/chromium/issues/detail?id=1269602

## Steps to reproduce:

- run `node web.js` (web console)
- run `node api.js` (api console)
- open chrome to `http://localhost:9999`
- See `Hello, world!`
- See that `WEB | 200` is printed in the web console
- See that `API | 200` is printed in the api console
- Open the "Network tab of the developer tools" and uncheck the "Disable cache" checkbox
- Press F5 to reload the page
- See that `WEB | 304` is printed in the web console
- See that `API | 304` is printed in the api console
- See that chrome shows `304` in the `Network tab` for `localhost`
- See that chrome still shows `200` in the `Network tab` for `content`

Expected: Chrome dev tools should show `304` indicating that it fetched `content` from the cache