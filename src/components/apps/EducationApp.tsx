"use client";

import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";

export function EducationApp() {
  return (
    <div className="space-y-3">
      {education.map((entry) => (
        <div key={entry.school} className="glass-panel rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/20 text-purple-300">
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">
                {entry.school}
              </h3>
              <p className="mt-0.5 text-xs text-green-400">{entry.degree}</p>
              {entry.period && (
                <p className="mt-1 text-[11px] text-white/50">{entry.period}</p>
              )}
              {entry.description && (
                <p className="mt-2 text-xs leading-relaxed text-white/70">
                  {entry.description}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
