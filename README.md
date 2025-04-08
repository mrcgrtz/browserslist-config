# browserslist-config-mrcgrtz

The browserslist configuration used by all my personal projects.

## Usage

Install the package using `npm`.

```sh
npm install --save-dev browserslist-config-mrcgrtz
```

Then add the `browserslist` key to your `package.json`:

```diff
diff --git a/package.json b/package.json
index 2ecef3d..260838f 100644
--- a/package.json
+++ b/package.json
@@ -5,6 +5,7 @@
   "keywords": [
     "prettier"
   ],
+  "browserslist": "extends browserslist-config-mrcgrtz",
   "license": "MIT",
   "main": "index.js"
```

[Check out the `browserslist` documentation for more info on sharing configurations](https://github.com/browserslist/browserslist#shareable-configs).

## License

MIT © [Marc Görtz](https://marcgoertz.de/)
