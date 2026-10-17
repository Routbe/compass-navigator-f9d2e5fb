import { BadgeCheck, HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

type Mode = "profile" | "tip";

/** Workspace-achtige wisselbalk: altijd zichtbaar welke pagina je in de Studio beheert. */
export function StudioModeSwitcher({ mode, onChange, handle }: { mode: Mode; onChange: (m: Mode) => void; handle: string }) {
  const items: { id: Mode; label: string; url: string; icon: typeof BadgeCheck }[] = [
    { id: "profile", label: "Geverifieerd profiel", url: `rout.be/${handle}`, icon: BadgeCheck },
    { id: "tip", label: "Steunpagina", url: `rout.be/${handle}/tip`, icon: HeartHandshake },
  ];
  return (
    <div role="tablist" aria-label="Wat beheer je?" data-tour="studio-mode" className="mb-3 grid grid-cols-2 gap-1 rounded-2xl border border-border bg-muted/40 p-1">
      {items.map(({ id, label, url, icon: Icon }) => (
        <button
          key={id}
          role="tab"
          type="button"
          aria-selected={mode === id}
          onClick={() => onChange(id)}
          className={cn(
            "flex min-w-0 items-center gap-2 rounded-xl px-3 py-2 text-left transition-colors",
            mode === id ? "bg-background shadow-sm ring-1 ring-border" : "text-muted-foreground hover:text-foreground",
          )}
        >
          <Icon className="h-4 w-4 shrink-0" aria-hidden />
          <span className="min-w-0">
            <span className="block text-xs font-medium">{label}</span>
            <span className="block truncate font-mono text-[10px] opacity-70">{url}</span>
          </span>
        </button>
      ))}
    </div>
  );
}
