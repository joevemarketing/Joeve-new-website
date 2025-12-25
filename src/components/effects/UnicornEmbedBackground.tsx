"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    __UNICORN_LOADED__?: boolean;
    UnicornStudio?: {
      init?: () => void;
      isInitialized?: boolean;
    };
  }
}

interface UnicornEmbedBackgroundProps {
  scriptUrl?: string;
  dataAttrName?: string; // e.g. "data-unicorn"
  projectId?: string;
  allowPointer?: boolean;
}

export default function UnicornEmbedBackground({
  scriptUrl = process.env.NEXT_PUBLIC_UNICORN_SCRIPT_URL,
  dataAttrName = process.env.NEXT_PUBLIC_UNICORN_DATA_ATTR || "data-unicorn",
  projectId = process.env.NEXT_PUBLIC_UNICORN_PROJECT_ID,
  allowPointer = false,
}: UnicornEmbedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    if (!scriptUrl || !projectId || !dataAttrName) return;

    if (containerRef.current) {
      containerRef.current.setAttribute(dataAttrName, projectId);
      containerRef.current.setAttribute("data-unicorn", projectId);
      containerRef.current.setAttribute("data-us-project", projectId);
    }

    const initUnicorn = () => {
      if (window.UnicornStudio?.init) {
        try {
          window.UnicornStudio.init();
          setStatus("Active");
        } catch {
          setStatus("Error");
        }
      } else {
        setStatus("WaitingInit");
      }
    };

    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      script.onload = () => {
        setStatus("ScriptLoaded");
        initUnicorn();
        const retry = () => {
          if (window.UnicornStudio?.init) {
            initUnicorn();
          } else {
            setTimeout(retry, 100);
          }
        };
        setTimeout(retry, 100);
      };
      script.onerror = () => setStatus("ScriptError");
      (document.head || document.body).appendChild(script);
    } else {
      // Already loaded or loading
      // If init exists, call it immediately to pick up the new element
      initUnicorn();
      
      // Also set a timeout just in case the previous script tag hasn't fired onload yet
      // or if there's a race condition with DOM parsing
      const timer = setTimeout(initUnicorn, 100);
      return () => clearTimeout(timer);
    }
  }, [scriptUrl, projectId, dataAttrName]);

  // If not configured, render nothing to avoid layout shifts
  if (!scriptUrl || !projectId || !dataAttrName) return null;

  return (
    <div ref={containerRef} className={`absolute inset-0 z-0 ${allowPointer ? "" : "pointer-events-none"}`} suppressHydrationWarning>
      {status !== "Active" && (
        <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
          Lightbeam: {status}
        </div>
      )}
    </div>
  );
}
