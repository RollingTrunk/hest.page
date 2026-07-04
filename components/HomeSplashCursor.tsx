"use client";

import { usePathname } from "next/navigation";
import SplashCursor from "./reactbits/SplashCursor";

/**
 * The fluid splash cursor is a homepage flourish only — it would distract on the
 * blog and legal/support pages, so render it solely on the landing route.
 */
export default function HomeSplashCursor() {
  const pathname = usePathname();
  if (pathname !== "/") return null;
  // Dialed down from the vendored defaults (radius 0.2, force 6000,
  // dissipation 3.5) so the trail reads as a subtle accent, not a spotlight.
  return (
    <SplashCursor
      SPLAT_RADIUS={0.13}
      SPLAT_FORCE={4500}
      DENSITY_DISSIPATION={4.2}
    />
  );
}
