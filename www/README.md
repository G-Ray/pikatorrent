# PikaTorrent website

The PikaTorrent website, built with [Jaspr](https://jaspr.site).

## Running locally

```sh
jaspr serve
```

The development server is available on `http://localhost:8080`.

## Building the static site

```sh
jaspr build
```

The output is written to `build/jaspr/` and deployed to Cloudflare Pages by
[`.github/workflows/deploy-website.yml`](../.github/workflows/deploy-website.yml).

## Updating screenshots

Source PNGs live in `../screenshots/`. To convert them to AVIF (preserving
alpha) and place them in `web/images/`, run:

```sh
bash scripts/convert-images.sh
```

`avifenc` (from `libavif`) must be installed.
