"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    UnicornStudio?: any;
    __UNICORN_STUDIO_INIT__?: boolean;
  }
}

export default function UnicornStudioLoader() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("UnicornStudio: Starting initialization...");
      
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js";
      script.async = true;
      
      script.onload = function() {
        console.log("UnicornStudio: Script loaded successfully");
        
        // Wait for UnicornStudio to be available
        const checkUnicorn = () => {
          if (
            typeof window !== "undefined" &&
            window.UnicornStudio &&
            typeof window.UnicornStudio.init === "function" &&
            !window.__UNICORN_STUDIO_INIT__
          ) {
            console.log("UnicornStudio: Initializing...");
            try {
              window.UnicornStudio.init();
              window.__UNICORN_STUDIO_INIT__ = true;
              setStatus("Active");
              console.log("UnicornStudio: Initialization complete!");
            } catch (error) {
              console.error("UnicornStudio: Initialization failed:", error);
              setStatus("Error");
            }
          } else {
            console.log("UnicornStudio: Still loading, retrying...");
            setTimeout(checkUnicorn, 100);
          }
        };
        
        // Start checking
        setTimeout(checkUnicorn, 100);
      };
      
      script.onerror = function() {
        console.error("UnicornStudio: Script failed to load");
        setStatus("Error");
      };
      
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <div
      data-us-project="bmaMERjX2VZDtPrh4Zwx"
      className="absolute inset-0 z-0"
    />
  );
}
