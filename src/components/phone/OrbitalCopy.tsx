"use client";

import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { techStack } from "@/data/techStack";
import { ShimmerText } from "./ShimmerText";
import { StaggerReveal } from "./StaggerReveal";

function DecorBars() {
  return (
    <div className="flex items-end gap-1" aria-hidden>
      <span className="h-3 w-1 rounded-full bg-purple-400/60" />
      <span className="h-5 w-1 rounded-full bg-green-400/60" />
      <span className="h-4 w-1 rounded-full bg-purple-300/50" />
      <span className="h-6 w-1 rounded-full bg-green-300/50" />
    </div>
  );
}

function HeroCTAs() {
  return (
    <div className="flex flex-wrap gap-2">
      <a href={`mailto:${profile.email}`} className="hero-cta-primary">
        <Mail size={16} />
        Email
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="hero-cta-ghost"
      >
        <Linkedin size={16} />
        LinkedIn
      </a>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className="hero-cta-ghost"
      >
        <Github size={16} />
        GitHub
      </a>
    </div>
  );
}

export function OrbitalCopy() {
  return (
    <>
      <div className="orbital-corners hidden lg:block">
        <div className="corner-zone corner-tl">
          <StaggerReveal>
            <DecorBars />
            <p className="corner-label mt-3">
              10+ YEARS · PRODUCTION SOFTWARE
            </p>
            <p className="corner-headline-lg mt-2 text-white">
              {profile.headline.line1.toUpperCase()}
            </p>
          </StaggerReveal>
        </div>

        <div className="corner-zone corner-tr">
          <p className="corner-headline-lg">
            <ShimmerText>{profile.headline.accent.toUpperCase()}</ShimmerText>
          </p>
        </div>

        <div className="corner-zone corner-mr">
          <StaggerReveal delay={0.3}>
            <p className="corner-body">{profile.tagline}</p>
          </StaggerReveal>
        </div>

        <div className="corner-zone corner-bl">
          <StaggerReveal delay={0.15}>
            <p className="corner-name-hero text-white">
              {profile.name.toUpperCase()}
            </p>
            <p className="mt-2 text-sm font-medium text-purple-300 sm:text-base">
              {profile.title}
            </p>
            <div className="mt-5">
              <HeroCTAs />
            </div>
          </StaggerReveal>
        </div>

        <div className="corner-zone corner-br">
          <div className="tech-icon-row">
            {techStack.map((tech) => (
              <div key={tech.id} className="tech-icon-chip" title={tech.label}>
                <Image
                  src={tech.icon}
                  alt={tech.label}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mobile-hero-copy lg:hidden">
        <StaggerReveal>
          <p className="corner-label">10+ YEARS · PRODUCTION SOFTWARE</p>
          <h1 className="corner-name-hero mt-3 text-white">
            {profile.name}
          </h1>
          <p className="mt-2 text-sm font-medium text-purple-300">
            {profile.title}
          </p>
          <p className="mt-3 text-lg font-bold uppercase tracking-tight text-white/90">
            {profile.headline.line1}
          </p>
          <p className="mt-1 text-lg font-bold uppercase tracking-tight sm:text-xl">
            <ShimmerText>{profile.headline.accent}</ShimmerText>
          </p>
          <p className="mt-2 max-w-md text-sm text-white/60">
            {profile.tagline}
          </p>
        </StaggerReveal>
      </div>
    </>
  );
}

export function MobileHeroFooter() {
  return (
    <div className="mobile-hero-footer lg:hidden">
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <HeroCTAs />
      </div>
      <div className="tech-icon-row mt-5">
        {techStack.map((tech) => (
          <div key={tech.id} className="tech-icon-chip" title={tech.label}>
            <Image src={tech.icon} alt={tech.label} width={22} height={22} />
          </div>
        ))}
      </div>
    </div>
  );
}
