"use client";

import type { ComponentType } from "react";
import type { AppId } from "@/data/apps";
import { AboutApp } from "@/components/apps/AboutApp";
import { ContactApp } from "@/components/apps/ContactApp";
import { EducationApp } from "@/components/apps/EducationApp";
import { ExperienceApp } from "@/components/apps/ExperienceApp";
import { MusicApp } from "@/components/apps/MusicApp";
import { ProjectsApp } from "@/components/apps/ProjectsApp";
import { SkillsApp } from "@/components/apps/SkillsApp";

const appComponents: Record<AppId, ComponentType> = {
  about: AboutApp,
  experience: ExperienceApp,
  education: EducationApp,
  projects: ProjectsApp,
  skills: SkillsApp,
  contact: ContactApp,
  music: MusicApp,
};

export function AppRenderer({ appId }: { appId: AppId }) {
  const Component = appComponents[appId];
  return <Component />;
}
