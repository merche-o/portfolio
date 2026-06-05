"use client";

import { Calendar, Github, Linkedin, Mail, MapPin, Shield } from "lucide-react";
import { profile } from "@/data/profile";

export function ContactApp() {
  const links = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/omercher",
      href: profile.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/merche-o",
      href: profile.github,
    },
    {
      icon: Calendar,
      label: "Calendly",
      value: "Book a meeting",
      href: profile.calendly,
    },
  ];

  return (
    <div className="space-y-3">
      <div className="glass-panel rounded-xl p-4">
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
          <div>
            <p className="text-sm text-white">{profile.location}</p>
            <p className="text-xs text-white/50">{profile.workStyle}</p>
          </div>
        </div>
      </div>

      <div className="glass-panel rounded-xl p-4">
        <div className="flex items-start gap-3">
          <Shield className="mt-0.5 h-4 w-4 shrink-0 text-purple-400" />
          <p className="text-xs leading-relaxed text-white/70">
            {profile.workAuthorization}
          </p>
        </div>
      </div>

      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target={link.label === "Email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="glass-panel flex items-center gap-3 rounded-xl p-4 transition-colors hover:bg-white/10"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-500/20 text-green-300">
              <Icon size={18} />
            </div>
            <div>
              <p className="text-xs text-white/50">{link.label}</p>
              <p className="text-sm text-white">{link.value}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
