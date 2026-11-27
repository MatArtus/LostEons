export const band = {
  name: "Lost Eons",
  tagline: "Heavy. Loud. Timeless.",
  bio: `Lost Eons is a band from [city]. Replace this with a short, punchy bio: who you are,
your sound, and where you're from.`,
  email: "contact@losteons.example",
  social: {
    instagram: "https://instagram.com/losteons",
    facebook: "https://facebook.com/losteons",
    youtube: "https://youtube.com/@losteons",
    spotify: "https://open.spotify.com/artist/",
    bandcamp: "https://losteons.bandcamp.com",
    appleMusic: "https://music.apple.com/",
  },
};

export type Track = {
  title: string;
  lyrics: string;
};

export const tracks: Track[] = [
  {
    title: "Track One",
    lyrics: "Verse 1...\n\nChorus...\n\nVerse 2...",
  },
  {
    title: "Track Two",
    lyrics: "Verse 1...\n\nChorus...",
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

export type ShowDate = {
  date: string; // ISO date, e.g. "2026-12-05"
  city: string;
  venue: string;
  ticketUrl?: string;
};

export const shows: ShowDate[] = [
  // Add upcoming tour dates here.
];

export const streamingLink = "https://your-fanlink-or-smartlink-url.example";
export const orderLink = "https://your-store-or-fanlink-url.example";

// Mailing list form action, e.g. a Mailchimp/ConvertKit/Buttondown embed form URL.
export const signupFormAction = "";
