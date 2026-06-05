"use client";

import { YOUTUBE_PLAYLIST_ID } from "@/data/apps";

export function MusicApp() {
  return (
    <div className="space-y-3">
      <p className="text-xs text-white/50">
        Mechant Chaton — personal playlist
      </p>
      <div className="relative w-full overflow-hidden rounded-xl pt-[56.25%]">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/videoseries?list=${YOUTUBE_PLAYLIST_ID}`}
          title="YouTube playlist"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
