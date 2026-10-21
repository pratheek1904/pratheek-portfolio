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
  role: "React Native developer",
  headline: "I build React Native apps that feel native on iOS and Android.",
  intro:
    "React Native developer shipping fast, offline-ready apps from one TypeScript codebase. Currently at The Retail Insights.",
  stacks: ["React Native", "Expo", "TypeScript"],
  available: true,
  email: "hello@example.com",
  links: {
    github: "https://github.com/pratheek1904",
    linkedin: "https://www.linkedin.com/",
    cv: "#",
  },
  // Swap for your own screenshot/GIF in /public, or set heroVideo to an .mp4/.webm path.
  heroImage: "/hero-placeholder.svg",
  heroVideo: null,
  heroApp: { name: "ShelfScan", caption: "scan → match → sync", stats: ["60 fps lists", "Hermes · New Arch"] },
};

export const metrics: Metric[] = [
  { value: 6, suffix: "", label: "RN apps shipped" },
  { value: 120, suffix: "k+", label: "total installs" },
  { value: 4.7, suffix: "★", label: "avg store rating", decimals: 1 },
  { value: 99.6, suffix: "%", label: "crash-free users", decimals: 1 },
];

export const projects: Project[] = [
  {
    name: "ShelfScan",
    version: "v3.2.0",
    platforms: ["iOS", "Android"],
    stack: ["React Native", "TypeScript", "WatermelonDB", "Vision Camera"],
    summary:
      "Barcode-driven stock audit app for retail staff. Works offline, syncs when the store Wi-Fi returns.",
    highlight: "Cut cold start from 2.8s to 0.9s with Hermes + lazy screens",
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
    platforms: ["iOS", "Android"],
    stack: ["Expo", "Zustand", "Reanimated", "MMKV"],
    summary: "Expense tracker with animated charts, biometric lock and on-device receipt OCR. Open source.",
    highlight: "4.8★ from 2,100 ratings",
    links: [
      { label: "Google Play", href: "#" },
      { label: "GitHub", href: "#" },
    ],
    deep: { label: "Try on Expo Snack", href: "#" },
    color: "#B86E00",
  },
  {
    name: "Transit Pulse",
    version: "v2.0.3",
    platforms: ["iOS", "Android"],
    stack: ["React Native", "Redux Toolkit", "RN Maps", "Swift module"],
    summary: "Real-time bus arrivals with live map tracking and an iOS Live Activity built as a custom native module.",
    highlight: "40k monthly active riders",
    links: [
      { label: "App Store", href: "#" },
      { label: "Google Play", href: "#" },
    ],
    deep: { label: "Case study", href: "#" },
    color: "#3D5AFE",
  },
  {
    name: "FieldNotes",
    version: "v0.9.0 beta",
    platforms: ["Android"],
    stack: ["Expo Router", "React Query", "SQLite", "EAS Update"],
    summary: "Offline-first survey tool for field teams. Queues edits locally, resolves sync conflicts, ships fixes over the air.",
    highlight: "Zero data loss across 18k submissions",
    links: [
      { label: "Play testing", href: "#" },
      { label: "GitHub", href: "#" },
    ],
    deep: { label: "Try on Expo Snack", href: "#" },
    color: "#C2185B",
  },
];

export const skills: SkillGroup[] = [
  { area: "UI & motion", items: ["React Native + TypeScript", "Reanimated & Gesture Handler", "Expo Router / React Navigation", "Design systems & theming"] },
  { area: "State & data", items: ["Redux Toolkit / Zustand", "React Query", "MMKV / SQLite / WatermelonDB", "Offline sync"] },
  { area: "Native & performance", items: ["Native modules (Swift / Kotlin)", "New Architecture · Turbo Modules", "Hermes profiling", "FlashList & 60 fps lists"] },
  { area: "Ship & measure", items: ["EAS Build & Update", "Fastlane + GitHub Actions", "Jest & Detox", "Sentry / Crashlytics"] },
];

export const experience: Role[] = [
  {
    company: "The Retail Insights",
    role: "React Native Developer",
    dates: "2023 — now",
    outcome: "Shipped ShelfScan to 300+ stores; crash-free rate up from 97.1% to 99.6%.",
  },
  {
    company: "Example Labs",
    role: "Mobile Developer",
    dates: "2021 — 2023",
    outcome: "Migrated a 60-screen app to the New Architecture and cut JS bundle size by 35%.",
  },
  {
    company: "Freelance",
    role: "React Native Developer",
    dates: "2019 — 2021",
    outcome: "Built and launched 3 client apps on iOS and Android from a single codebase.",
  },
];
