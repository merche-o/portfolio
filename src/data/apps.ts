import {
  User,
  Briefcase,
  GraduationCap,
  FolderOpen,
  Wrench,
  Contact,
  Music,
  type LucideIcon,
} from "lucide-react";

export type AppId =
  | "about"
  | "experience"
  | "education"
  | "projects"
  | "skills"
  | "contact"
  | "music";

export type AppAccent = "purple" | "green" | "mixed";

export type AppDefinition = {
  id: AppId;
  label: string;
  icon: LucideIcon;
  accent: AppAccent;
};

export const apps: AppDefinition[] = [
  { id: "about", label: "About", icon: User, accent: "purple" },
  { id: "experience", label: "Experience", icon: Briefcase, accent: "mixed" },
  { id: "education", label: "Education", icon: GraduationCap, accent: "mixed" },
  { id: "projects", label: "Projects", icon: FolderOpen, accent: "green" },
  { id: "skills", label: "Skills", icon: Wrench, accent: "purple" },
  { id: "contact", label: "Contact", icon: Contact, accent: "green" },
  { id: "music", label: "Music", icon: Music, accent: "mixed" },
];

export const YOUTUBE_PLAYLIST_ID = "PLh2-ksK_rwr_IHwDzyg2-JHgbuiXTHTLu";
