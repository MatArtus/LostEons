export const band = {
  name: "The Lost Eons",
  tagline: "Heavy. Loud. Timeless.",
  // Used for search results and link previews.
  description:
    "The Lost Eons: rock, indie rock and psychedelia from Paris. New album Common Absence coming soon.",
  bio: `The Lost Eons is a Parisian rock band formed in 2019, blending the haunting psychedelia of Pink Floyd with the melancholy melodies of Radiohead and the artful edge of Sonic Youth.

The five musicians all play in other projects, and come together every two years for an immersive week of jamming and recording. Their new album, Common Absence, was recorded mostly at Chancery studio across 2025 and 2026.`,
  email: "contact@losteons.example",
  social: {
    instagram: "https://www.instagram.com/thelosteons",
    facebook: "https://facebook.com/the-lost-eons",
    youtube: "",
    spotify: "https://open.spotify.com/artist/3u2OB1h8muy6SUFhqq1SZn",
    deezer: "https://www.deezer.com/en/artist/287058581",
    bandcamp: "https://thelosteons.bandcamp.com/",
    // Leave empty to hide a link everywhere on the site.
    appleMusic: "",
    flickr: "https://flickr.com/photos/hoap/",
  },
};

export type Member = {
  name: string;
  /** Short name used in the album credits. */
  creditName: string;
};

export const members: Member[] = [
  { name: "Gordon Artus", creditName: "Gord" },
  { name: "Mathieu Artus", creditName: "Mat" },
  { name: "Thomas Colineau", creditName: "Thom" },
  { name: "Cedric Delevoye", creditName: "Cedric" },
  { name: "Etienne Morel", creditName: "Etienne" },
];

// The new album. Set status to "out" once it's released.
export const album = {
  title: "Common Absence",
  status: "upcoming" as "upcoming" | "out",
  label: "Psyjazzpop Productions",
  credits: [
    "All songs written and performed by The Lost Eons",
    "Produced by The Lost Eons © 2025–2026",
    "Featuring Alexander Morel (track 8)",
  ],
  artwork: {
    text: "Artwork by The Lost Eons, except covers by",
    artist: "Laura Maxwell",
    url: "https://lmxwll.wixsite.com/website",
  },
  thanks: "Special thanks to the Acad Family for kindly providing full access to Chancery studio & resorts",
  /** The text printed at the centre of the booklet. */
  poem: `We were never
meant to fill the void.
We only learned to live around it.
Beneath the light,
the hidden cracks remain.
Some words are left hanging in the air,
while some silence has more to say.
As the future keeps reflecting the past,
we build our walls, then forget why.
Somewhere between dark and light,
something trembles.
Doors are often left open,
but no one calls us in.
We rise, we fall, and we walk together.
Could that be this
common absence?`,
};

export type Credit = {
  who: string;
  plays: string;
};

export type Track = {
  title: string;
  credits: Credit[];
  recorded: string;
  /** Leave empty until the lyrics are ready to publish. */
  lyrics?: string;
};

export const tracks: Track[] = [
  {
    title: "Common Absence",
    credits: [
      { who: "Cedric", plays: "electric guitars & vocals" },
      { who: "Etienne", plays: "bass guitar & electric guitars" },
      { who: "Gord", plays: "electric guitars, synthesizers" },
      { who: "Mat", plays: "drums" },
      { who: "Thom", plays: "synthesizers" },
    ],
    recorded: "Chancery studio (2025)",
  },
  {
    title: "Empty Endless Maze",
    credits: [
      { who: "Cedric", plays: "electric guitars & vocals" },
      { who: "Etienne", plays: "electric guitars, piano, electric piano & synthesizers" },
      { who: "Gord", plays: "electric guitars" },
      { who: "Mat", plays: "drums" },
      { who: "Thom", plays: "bass guitar & synthesizers" },
    ],
    recorded: "Chancery studio (2025)",
  },
  {
    title: "Hypolude",
    credits: [
      { who: "Cedric", plays: "electric guitars & vocals" },
      { who: "Gord", plays: "bass guitar, drums programming & synthesizers" },
    ],
    recorded: "CGBand studio (2026)",
  },
  {
    title: "Dirty Boots",
    credits: [
      { who: "Cedric", plays: "electric guitars & vocals" },
      { who: "Etienne", plays: "electric guitars" },
      { who: "Gord", plays: "synthesizers" },
      { who: "Mat", plays: "drums" },
      { who: "Thom", plays: "bass guitar" },
    ],
    recorded: "Chancery studio (2025)",
  },
  {
    title: "The End of Nothing Else",
    credits: [
      { who: "Cedric", plays: "electric guitars & vocals" },
      { who: "Etienne", plays: "electric guitars & piano, percussions & synthesizers" },
      { who: "Gord", plays: "bass guitar" },
      { who: "Mat", plays: "drums & electric guitars" },
    ],
    recorded: "Chancery studio (2025)",
  },
  {
    title: "More to Say",
    credits: [
      { who: "Cedric", plays: "acoustic & electric guitars & vocals" },
      { who: "Etienne", plays: "drums programming, electric piano & synthesizers" },
      { who: "Gord", plays: "electric guitars" },
      { who: "Mat", plays: "drums" },
      { who: "Thom", plays: "bass guitar" },
    ],
    recorded: "Chancery studio (2025)",
  },
  {
    title: "The Weight of the Shortcut",
    credits: [
      { who: "Cedric", plays: "electric guitars & vocals" },
      { who: "Etienne", plays: "electric guitars & synthesizers" },
      { who: "Gord", plays: "synthesizers" },
      { who: "Mat", plays: "drums" },
      { who: "Thom", plays: "bass guitar" },
    ],
    recorded: "Chancery studio (2025)",
  },
  {
    title: "Hyperlude",
    credits: [
      { who: "Alexander", plays: "synthesizers" },
      { who: "Cedric", plays: "choirs, electric guitars & vocals" },
      { who: "Etienne", plays: "acoustic guitar, bass & electric guitars, drums, piano & synthesizers" },
      { who: "Gord", plays: "synthesizers" },
      { who: "Mat", plays: "electric guitars & drums" },
      { who: "Thom", plays: "bass guitar & synthesizers" },
    ],
    recorded: "Bengal Resorts, Chancery Studios (2026)",
  },
  {
    title: "Vanish with the Sunrise",
    credits: [
      { who: "Cedric", plays: "electric guitars & vocals" },
      { who: "Etienne", plays: "electric guitars & synthesizers" },
      { who: "Gord", plays: "electric guitars & synthesizers" },
      { who: "Mat", plays: "drums" },
      { who: "Thom", plays: "bass guitar & synthesizers" },
    ],
    recorded: "Chancery studio (2025)",
  },
];

export type Release = {
  title: string;
  year: number;
  cover: string;
  coverCredit: string;
  minutes: number;
  tracks: string[];
  links: { name: string; href: string }[];
};

// Earlier albums, newest first (dates from Bandcamp; Deezer shows the 2024 distribution date).
export const discography: Release[] = [
  {
    title: "The Kite Paradox",
    year: 2024,
    cover: "/images/the-kite-paradox.webp",
    coverCredit: "Drawing by Laura Maxwell",
    minutes: 42,
    tracks: [
      "Beautiful Day",
      "Blame Us",
      "Tell You Something",
      "Vacuum Swallowers",
      "Amplitude",
      "Sketch",
      "Wary",
      "Definitely Numb",
      "Flowers",
      "Lost Rationale",
    ],
    links: [
      { name: "Spotify", href: "https://open.spotify.com/album/1XIvEOiEXPV34bQEcabpt7" },
      { name: "Bandcamp", href: "https://thelosteons.bandcamp.com/album/the-kite-paradox" },
      { name: "Deezer", href: "https://www.deezer.com/album/662398181" },
    ],
  },
  {
    title: "Sol Minor",
    year: 2021,
    cover: "/images/sol-minor.webp",
    coverCredit: "Drawing by Laura Maxwell",
    minutes: 42,
    tracks: [
      "No Easy Way Out",
      "Easy Way Out",
      "Sol Minor",
      "3:20am",
      "Little Hand",
      "White Iris",
      "Vanishing Seeds",
      "Harder",
      "Chancery",
      "The Way Out",
    ],
    links: [
      { name: "Spotify", href: "https://open.spotify.com/album/2ToPJch1eioOXxKVa5Ayge" },
      { name: "Bandcamp", href: "https://thelosteons.bandcamp.com/album/sol-minor" },
      { name: "Deezer", href: "https://www.deezer.com/album/662553681" },
    ],
  },
];

export type Video = {
  title: string;
  youtubeId: string;
};

export const videos: Video[] = [
  // Replace youtubeId with a real video ID, e.g. "dQw4w9WgXcQ"
  { title: "Official Video", youtubeId: "" },
];

export const publishedVideos = videos.filter((v) => v.youtubeId);

export type ShowDate = {
  date: string; // ISO date, e.g. "2026-12-05"
  city: string;
  venue: string;
  ticketUrl?: string;
};

export const shows: ShowDate[] = [
  // Add upcoming tour dates here.
];

// Sections that stay hidden until they have content:
// - Watch (and its menu link) appears once a video has a youtubeId.
// - Live (its menu link and the hero's "Tour Dates" button) appears once a show is listed.
export const sections = {
  watch: publishedVideos.length > 0,
  live: shows.length > 0,
};

export const streamingLink = "https://your-fanlink-or-smartlink-url.example";
export const orderLink = "https://your-store-or-fanlink-url.example";

// Mailing list form action, e.g. a Mailchimp/ConvertKit/Buttondown embed form URL.
export const signupFormAction = "";
