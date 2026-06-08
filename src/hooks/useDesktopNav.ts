"use client";

import { useEffect, useState } from "react";

const DESKTOP_NAV_QUERY = "(min-width: 1024px)";

export function useDesktopNav() {
  const [isDesktopNav, setIsDesktopNav] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_NAV_QUERY);
    const update = () => setIsDesktopNav(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isDesktopNav;
}
