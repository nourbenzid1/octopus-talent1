"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface WOWInstance {
  init: () => void;
}

interface WOWConstructor {
  new (config: {
    boxClass: string;
    animateClass: string;
    offset: number;
    mobile: boolean;
    live: boolean;
  }): WOWInstance;
}

declare global {
  interface Window {
    WOW?: WOWConstructor;
  }
}

export default function WOWInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 10;
    
    const initWow = () => {
      if (typeof window !== "undefined" && window.WOW) {
        const WOW = window.WOW;
        try {
          const wowInstance = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: true,
            live: true, // Set to true to handle dynamic content
          });
          wowInstance.init();
          console.log("WOW.js initialized successfully");
        } catch (error) {
          console.error("Error initializing WOW.js:", error);
        }
      } else if (retryCount < maxRetries) {
        retryCount++;
        setTimeout(initWow, 500);
      }
    };

    // Initial call
    const timeout = setTimeout(initWow, 500);
    return () => clearTimeout(timeout);
  }, [pathname]); // Re-run on pathname change to handle Next.js client-side navigation

  return null;
}
