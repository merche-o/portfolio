"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export function ProjectsApp() {
  return (
    <div className="space-y-3">
      {projects.map((project) => (
        <div key={project.title} className="glass-panel overflow-hidden rounded-xl">
          {project.image && (
            <div className="relative flex h-32 w-full items-center justify-center bg-black/50 p-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-3"
              />
            </div>
          )}
          <div className="p-3">
            <h3 className="text-sm font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-white/70">
              {project.description}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-green-400 hover:text-green-300"
              >
                Visit project
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
