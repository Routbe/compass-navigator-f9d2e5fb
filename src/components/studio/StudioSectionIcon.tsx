import { cn } from "@/lib/utils";

export type StudioSymbol = "profile" | "content" | "live" | "favorites" | "avatar" | "typography" | "footer" | "background" | "badges" | "questions" | "guestbook" | "settings";
const drawings: Record<StudioSymbol, string> = {
  profile: "M8 10a4 4 0 1 0 8 0 4 4 0 1 0-8 0M4 21c0-5 16-5 16 0",
  content: "M8 4H4v16h16v-4M10 14l8-8M14 4h6v6M8 10H6m2 4H6",
  live: "M3 12h4l3-7 4 14 3-7h4",
  favorites: "m12 3 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z",
  avatar: "M3 5h18v16H3ZM8 11a4 4 0 1 0 8 0 4 4 0 1 0-8 0M5 21c1-6 13-6 14 0M7 3v4m10-4v4",
  typography: "M3 18 8 5l5 13M5 13h6m4-2h6m-3 0v10m-3-1h6",
  footer: "M3 4h18v16H3Zm0 11h18m-13 5v-5m8 5v-5",
  background: "M3 4h18v16H3Zm0 12 5-5 5 5 3-3 5 5M15 8h.01",
  badges: "m12 3 8 4v6c0 4-8 8-8 8s-8-4-8-8V7Zm-4 9 3 3 5-6",
  questions: "M9 9a3 3 0 0 1 6 0c0 3-3 2-3 5m0 3h.01M3 3h18v17H8l-5 3Z",
  guestbook: "M3 5c3-2 6-2 9 0 3-2 6-2 9 0v15c-3-2-6-2-9 0-3-2-6-2-9 0Zm9 0v15M6 9h3m-3 4h3m6-4h3m-3 4h3",
  settings: "M4 6h16M4 12h16M4 18h16M8 3v6m8 0v6m-6 0v6",
};

/** Shared, hand-drawn line symbols for Studio folders (never emoji). */
export function StudioSectionIcon({ kind, className }: { kind: StudioSymbol; className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={cn("size-5 shrink-0 text-muted-foreground", className)}><path d={drawings[kind]} /></svg>;
}