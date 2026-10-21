// All copy and dummy content lives here. Replace with your real details.

export interface Link {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  headline: string;
  intro: string;
  stacks: string[];
  available: boolean;
  email: string;
  links: { github: string; linkedin: string; cv: string };
  heroImage: string;
  heroVideo: string | null;
  heroApp: { name: string; caption: string; stats: string[] };
}

export interface Metric {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

export type Platform = "iOS" | "Android";

export interface Project {
  name: string;
  version: string;
  platforms: Platform[];
  stack: string[];
  summary: string;
  highlight: string;
  links: Link[];
  deep: Link;
  color: string;
}

export interface SkillGroup {
  area: string;
  items: string[];
}

export interface Role {
  company: string;
  role: string;
  dates: string;
  outcome: string;
}

export const profile: Profile = {
  name: "Pratheek",
  role: "Mobile developer",
  headline: "I build mobile apps people keep on their home screen.",
  intro:
    "Mobile developer focused on fast, offline-ready apps for iOS and Android. Currently at The Retail Insights.",
  stacks: ["Flutter", "Kotlin · Compose", "Swift · SwiftUI"],
  available: true,
  email: "hello@example.com",
  links: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    cv: "#",
  },
  // Swap for your own screenshot/GIF in /public, or set heroVideo to an .mp4/.webm path.
  heroImage: "/hero-placeholder.svg",
  heroVideo: null,
  heroApp: { name: "ShelfScan", caption: "scan → match → sync", stats: ["0.9s cold start", "12 MB"] },
};

export const metrics: Metric[] = [
  { value: 6, suffix: "", label: "apps shipped" },
  { value: 120, suffix: "k+", label: "total installs" },
  { value: 4.7, suffix: "★", label: "avg store rating", decimals: 1 },
  { value: 99.6, suffix: "%", label: "crash-free users", decimals: 1 },
];

export const projects: Project[] = [
  {
    name: "ShelfScan",
    version: "v3.2.0",
    platforms: ["iOS", "Android"],
    stack: ["Flutter", "Riverpod", "Drift"],
    summary:
      "Barcode-driven stock audit app for retail staff. Works offline, syncs when the store Wi-Fi returns.",
    highlight: "Cut cold start from 2.8s to 0.9s",
    links: [
      { label: "App Store", href: "#" },
      { label: "Google Play", href: "#" },
    ],
    deep: { label: "Case study", href: "#" },
    color: "#0B7A66",
  },
  {
    name: "Pocket Ledger",
    version: "v1.4.1",
    platforms: ["Android"],
    stack: ["Kotlin", "Compose", "ML Kit"],
    summary: "Expense tracker with home-screen widgets and on-device receipt OCR. Open source.",
    highlight: "4.8★ from 2,100 ratings",
    links: [
      { label: "Google Play", href: "#" },
      { label: "GitHub", href: "#" },
    ],
    deep: { label: "Try in browser", href: "#" },
    color: "#B86E00",
  },
  {
    name: "Transit Pulse",
    version: "v2.0.3",
    platforms: ["iOS"],
    stack: ["SwiftUI", "MapKit", "Live Activities"],
    summary: "Real-time bus arrivals with Live Activities and a lock-screen widget for your daily route.",
    highlight: "40k monthly active riders",
    links: [{ label: "App Store", href: "#" }],
    deep: { label: "Case study", href: "#" },
    color: "#3D5AFE",
  },
  {
    name: "FieldNotes",
    version: "v0.9.0 beta",
    platforms: ["iOS", "Android"],
    stack: ["React Native", "Expo", "SQLite"],
    summary: "Offline-first survey tool for field teams. Queues edits locally and resolves sync conflicts.",
    highlight: "Zero data loss across 18k submissions",
    links: [
      { label: "TestFlight", href: "#" },
      { label: "GitHub", href: "#" },
    ],
    deep: { label: "Try on Expo Snack", href: "#" },
    color: "#C2185B",
  },
];

export const skills: SkillGroup[] = [
  { area: "UI", items: ["Jetpack Compose", "SwiftUI", "Flutter widgets", "Custom animations"] },
  { area: "State & architecture", items: ["MVVM", "Clean Architecture", "Riverpod / Bloc", "Multi-module"] },
  { area: "Offline & sync", items: ["Room / Drift / Core Data", "Background work", "Conflict resolution"] },
  { area: "Ship & measure", items: ["Fastlane", "GitHub Actions", "Crashlytics", "Baseline Profiles"] },
];

export const experience: Role[] = [
  {
    company: "The Retail Insights",
    role: "Mobile Developer",
    dates: "2023 — now",
    outcome: "Shipped ShelfScan to 300+ stores; crash-free rate up from 97.1% to 99.6%.",
  },
  {
    company: "Example Labs",
    role: "Android Developer",
    dates: "2021 — 2023",
    outcome: "Migrated a 60-screen app to Jetpack Compose with no regression in startup time.",
  },
  {
    company: "Freelance",
    role: "Flutter Developer",
    dates: "2019 — 2021",
    outcome: "Built and launched 3 client apps across iOS and Android.",
  },
];
