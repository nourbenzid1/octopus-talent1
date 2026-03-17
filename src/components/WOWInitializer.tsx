"use client";

import { useEffect } from "react";

export default function WOWInitializer() {
  useEffect(() => {
    const initWow = () => {
      if (typeof window !== "undefined" && "WOW" in window) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const WOW = (window as any).WOW;
        if (WOW) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
          const wowInstance = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: true,
            live: false, // Set to false to prevent issues with re-renders if not needed
          });
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          wowInstance.init();
        }
      }
    };

    // We might need a small delay to ensure scripts are loaded
    const timeout = setTimeout(initWow, 500);
    return () => clearTimeout(timeout);
  }, []);

  return null;
}
