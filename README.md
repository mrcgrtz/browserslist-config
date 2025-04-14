# browserslist-config-mrcgrtz

[![test](https://github.com/mrcgrtz/browserslist-config/actions/workflows/test.yml/badge.svg)](https://github.com/mrcgrtz/browserslist-config/actions/workflows/test.yml)
[![license](https://img.shields.io/npm/l/browserslist-config-mrcgrtz)](./LICENSE)
[![npm version](https://img.shields.io/npm/v/browserslist-config-mrcgrtz)](https://www.npmjs.com/package/browserslist-config-mrcgrtz)
[![npm downloads](https://img.shields.io/npm/dt/browserslist-config-mrcgrtz)](https://www.npmjs.com/package/browserslist-config-mrcgrtz)

> Shared [Browserslist](https://browsersl.ist/) config by [mrcgrtz](https://github.com/mrcgrtz), optimized for modern web sites.

This package provides a consistent set of target browsers for use across all my personal projects—ideal for tools like Autoprefixer, Babel, or PostCSS.

It will be updated whenever necessary, but probably not too often.

## Installation

```sh
npm install --save-dev browserslist-config-mrcgrtz
```

## Usage

In your `package.json`:

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

Or in a `.browserslistrc` file:

```text
extends browserslist-config-mrcgrtz
```

Check out the `browserslist` documentation for more info on [sharing configurations](https://github.com/browserslist/browserslist#shareable-configs).

## Target Browsers

This configuration targets a solid baseline of modern, evergreen browsers. No support for Internet Explorer.

```text
last 2 versions
> 0.5% in DE
Firefox ESR
not dead
```

To inspect the resolved list, run:

```sh
npx browserslist
```

## Use Cases

This configuration is compatible with tools like:

* Autoprefixer (`postcss`)
* Babel (`@babel/preset-env`)
* `eslint-plugin-compat`
* `stylelint-no-unsupported-browser-features`
* Modern build tools like Vite, webpack, Parcel, etc.

## License

MIT © [Marc Görtz](https://marcgoertz.de/)
