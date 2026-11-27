# Lost Eons — band website

A single-page band website (hero, listen/order, watch, lyrics, tour dates,
mailing list signup, bio) built with [Astro](https://astro.build) and
[Tailwind CSS v4](https://tailwindcss.com). It builds to plain static HTML/CSS/JS
with no server required, so it can be hosted on S3 (+ CloudFront) or served
from a tiny nginx container on Kubernetes.

## Editing content

Almost all band-specific content lives in one file: `src/data/site.ts`.
Edit it to set:

- Band name, tagline, description, bio, email, social links (leave a link empty to hide it)
- Band members (`members`)
- The new album: title, release status, credits, booklet text (`album`) and track list with per-track credits and optional lyrics (`tracks`)
- Earlier albums (`discography`)
- Video embeds (`videos`, YouTube IDs): the Watch section stays hidden until a video has an ID
- Tour dates (`shows`): the Live section and the hero's Tour Dates button stay hidden until a show is listed
- Streaming / order links (fanlink, Bandcamp, store)
- Mailing list form action (`signupFormAction`)

Page sections are in `src/components/`, one file per section
(`Hero.astro`, `Listen.astro`, `Album.astro`, `Discography.astro`, `Watch.astro`,
`Live.astro`, `SignUp.astro`, `BioModal.astro`, `Footer.astro`), assembled in
`src/pages/index.astro`.

Images go in `public/images/` (compressed WebP); the self-hosted Open Sans font is in `public/fonts/`.
Product context for design work is in `PRODUCT.md`.

## Commands

| Command             | Action                                        |
| :------------------- | :--------------------------------------------- |
| `npm install`        | Install dependencies                           |
| `npm run dev`         | Start local dev server at `localhost:4321`     |
| `npm run build`       | Build the static site to `./dist/`             |
| `npm run preview`     | Preview the production build locally           |
| `npx astro check`     | Type-check the project                         |

## Deploying

### Option A: S3 (+ CloudFront) — recommended for a static site like this

1. Create a private S3 bucket and a CloudFront distribution in front of it
   (origin access control, redirect HTTP → HTTPS, default root object
   `index.html`).
2. Set repo secrets: `AWS_DEPLOY_ROLE_ARN` (an IAM role with
   `s3:PutObject`/`s3:DeleteObject`/`s3:ListBucket` on the bucket, trusted
   for GitHub OIDC), `AWS_REGION`, `S3_BUCKET_NAME`, and optionally
   `CLOUDFRONT_DISTRIBUTION_ID` for cache invalidation.
3. Push to `main` — `.github/workflows/deploy-s3.yml` builds and syncs
   `dist/` to the bucket.

Manual sync, if you'd rather not wire up CI:

```sh
npm run build
aws s3 sync dist/ s3://your-bucket-name --delete
```

### Option B: Kubernetes

A `Dockerfile` builds the site and serves it from nginx (static files,
no backend). `k8s/deployment.yaml` has a starting Deployment, Service, and
Ingress (edit the image name/host to match your registry and domain).

```sh
docker build -t ghcr.io/your-org/losteons-web:latest .
docker push ghcr.io/your-org/losteons-web:latest
kubectl apply -f k8s/deployment.yaml
```

## Why Astro

The content here (hero, embeds, lyrics, show dates, a signup form) doesn't
need a backend or client-side framework — Astro ships zero JS by default and
only the bio modal and the track-list accordions use a few lines of vanilla JS/native
`<details>`. That keeps the site fast and lets it deploy as plain static
files to S3, or as a minimal nginx container if you'd rather run it in the
cluster.
