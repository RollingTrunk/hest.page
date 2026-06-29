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
  return <SplashCursor />;
}
