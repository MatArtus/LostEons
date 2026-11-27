# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primarily fans of rock, indie rock and psychedelia, existing and prospective, who arrive from social links, streaming profiles or a shared link, often on a phone. Their job: hear the band's new album, *Common Absence*, then go deeper (videos, lyrics, shows, mailing list).

Secondary visitors (bookers, press) are served by the bio and contact details but are not the priority.

## Product Purpose

The official website of The Lost Eons, a Parisian rock band (rock, indie rock, psychedelia). It exists to give the band one place they own that leads fans to the new album, and keeps them connected beyond any single platform.

Success: visitors stream or pre-save the new album; secondary success is mailing-list sign-ups and ticket clicks.

## Positioning

The site belongs to the band and to their album world: the upcoming album's own artwork and booklet typography are the site's identity. That is something no generic link-in-bio page or streaming profile can carry.

## Operating Context

- Traffic comes from Spotify, Deezer, Bandcamp, Facebook and Flickr, plus any other profiles added later (links in `src/data/site.ts`).
- Streaming and ordering go out to external services via a fanlink/smartlink (`streamingLink`) and a store link (`orderLink`).
- The new album, *Common Absence*, is **upcoming**, so the current campaign is pre-release (pre-save, then streaming once it's out).

## Capabilities and Constraints

- Single-page static site: hero, listen & order, album (booklet text, track list, credits), discography, mailing-list signup, bio modal, footer.
- Watch (YouTube embeds) and Live (tour dates) are hidden for now: no videos or shows yet. They reappear automatically once `videos` or `shows` in `src/data/site.ts` have content.
- Astro + Tailwind v4, zero-backend static build; deployed to S3/CloudFront or an nginx container on Kubernetes.
- All band content lives in `src/data/site.ts`; non-developers in the band edit it there.
- Mailing list provider not chosen yet (`signupFormAction` empty).
- Album title confirmed: *Common Absence* (`album` in `src/data/site.ts`).
- **Undecided:** release date. Don't state one on the site until it's confirmed.

## Brand Commitments

- Name: **The Lost Eons** (as printed on the album). Tagline in use: "Heavy. Loud. Timeless."
- Members: Gordon Artus, Mathieu Artus, Thomas Colineau, Cedric Delevoye, Etienne Morel. Credit names in the booklet: Gord, Mat, Thom, Cedric, Etienne. Alexander Morel features on track 8.
- Label: Psyjazzpop Productions.
- Lettering: the cover and booklet are set in Open Sans (self-hosted in `public/fonts/`); the back-cover track list appears to be Avenir Next, a licensed face not used on the site.
- Genre: **rock, indie rock, psychedelia**: the band's preferred words for their music. Bandcamp describes them as a Parisian rock band formed in 2019, blending Pink Floyd's psychedelia, Radiohead's melancholy melodies and Sonic Youth's artful edge; five musicians with other projects who meet every two years for a week of jamming and recording.
- The upcoming album's artwork is the band's current visual identity and is used as the site's imagery. Cover paintings by Laura Maxwell (lmxwll.wixsite.com/website); other artwork by The Lost Eons. Credit her wherever the covers appear.

## Evidence on Hand

- Album artwork: cover and back illustrations, `public/images/album-cover-*.webp`, `public/images/album-back-*.webp` (source: `losteons_sunrise.zip`, kept out of git).
- Final album art: `pochette LostEons .jpg` (cover and back with track list) and `crédit LostEons .jpg` (booklet: per-track credits, centre text, credits and links).
- Discography (in `src/data/site.ts`, covers in `public/images/`): *Sol Minor* (2021) and *The Kite Paradox* (2024), 10 tracks each, both with cover drawings by Laura Maxwell; released through 8094965 Records DK per Deezer. Bandcamp tags: rock, indie rock, Paris. The single *Beautiful Day* is track 1 of *The Kite Paradox*.
- Track list (9 tracks) with per-track credits and studios, the booklet's centre text, and album credits: all in `src/data/site.ts`.
- Confirmed links: Bandcamp (thelosteons.bandcamp.com), Spotify (open.spotify.com/artist/3u2OB1h8muy6SUFhqq1SZn), Deezer (deezer.com/en/artist/287058581), Facebook (facebook.com/the-lost-eons), Flickr (flickr.com/photos/hoap/). Instagram (instagram.com/thelosteons) confirmed. No YouTube channel or Apple Music profile yet (both hidden).
- **Absent, do not fabricate:** song lyrics, video IDs, tour dates, press quotes, and the release date.

## Product Principles

1. The album comes first: every visit should end up one tap from hearing it.
2. The artwork leads. The band's own art is the identity; interface elements stay in its service.
3. Fan-owned connection: the mailing list matters because it outlasts platforms.
4. Content is honest and band-editable: placeholders stay visibly unfinished rather than looking like invented facts, and everything stays easy to edit in one data file.
