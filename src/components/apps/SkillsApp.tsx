"use client";

import { languages } from "@/data/languages";
import { skills } from "@/data/skills";

export function SkillsApp() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">
          Core Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-purple-400/30 bg-purple-500/15 px-2.5 py-1 text-[11px] font-medium text-purple-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">
          Languages
        </h3>
        <div className="space-y-2">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="glass-panel flex items-center justify-between rounded-xl px-3 py-2.5"
            >
              <span className="text-sm text-white">{lang.name}</span>
              <span className="text-xs text-green-400">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
