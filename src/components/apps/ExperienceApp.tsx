"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { experience } from "@/data/experience";

export function ExperienceApp() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {experience.map((job, index) => {
        const isOpen = expanded === index;

        return (
          <div
            key={`${job.company}-${job.period}`}
            className="glass-panel overflow-hidden rounded-xl"
          >
            <button
              type="button"
              onClick={() => setExpanded(isOpen ? null : index)}
              className="flex w-full items-start justify-between gap-2 p-3 text-left"
            >
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-white">
                  {job.role}
                </h3>
                <p className="text-xs text-green-400">{job.company}</p>
                <p className="mt-0.5 text-[11px] text-white/50">
                  {job.period} · {job.location}
                </p>
              </div>
              {isOpen ? (
                <ChevronUp className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
              ) : (
                <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
              )}
            </button>
            {isOpen && (
              <ul className="list-disc space-y-1.5 border-t border-white/10 px-3 py-3 pl-6 marker:text-purple-400">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="text-xs leading-relaxed text-white/70">
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
