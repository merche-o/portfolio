import type { AppAccent } from "@/data/apps";

export function getAccentClasses(accent: AppAccent) {
  switch (accent) {
    case "purple":
      return {
        icon: "bg-purple-500/25 border-purple-400/40 text-purple-200",
        glow: "shadow-[0_0_20px_rgba(139,92,246,0.35)]",
        hover:
          "group-hover:scale-110 group-hover:border-purple-300/80 group-hover:bg-purple-500/40 group-hover:shadow-[0_0_28px_rgba(139,92,246,0.6)] group-hover:text-white",
        label: "group-hover:text-purple-200",
      };
    case "green":
      return {
        icon: "bg-green-500/25 border-green-400/40 text-green-200",
        glow: "shadow-[0_0_20px_rgba(34,197,94,0.35)]",
        hover:
          "group-hover:scale-110 group-hover:border-green-300/80 group-hover:bg-green-500/40 group-hover:shadow-[0_0_28px_rgba(34,197,94,0.6)] group-hover:text-white",
        label: "group-hover:text-green-200",
      };
    case "mixed":
      return {
        icon: "bg-gradient-to-br from-purple-500/30 to-green-500/30 border-white/20 text-white",
        glow: "shadow-[0_0_20px_rgba(139,92,246,0.2),0_0_20px_rgba(34,197,94,0.2)]",
        hover:
          "group-hover:scale-110 group-hover:border-white/50 group-hover:from-purple-500/50 group-hover:to-green-500/50 group-hover:shadow-[0_0_28px_rgba(139,92,246,0.45),0_0_28px_rgba(34,197,94,0.45)]",
        label: "group-hover:text-white",
      };
  }
}
