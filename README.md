fusebox-hmr-style
=================
Custom hot module replacement handler for css
Temporary solution until [fuse-box/fuse-box#186](https://github.com/fuse-box/fuse-box/pull/186)
not merged to the fusebox core.

USAGE
---
###### In your first entry point (usualy `main.js`) add something like:
```js
// @if devMode
import 'fusebox-hmr-style';
// @endif
```

Or:
```js
if (process.env.NODE_ENV === 'development') {
    require('fusebox-hmr-style');
}
```
