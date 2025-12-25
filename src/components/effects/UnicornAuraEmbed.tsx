"use client";

import Script from "next/script";

type Props = {
  projectId: string;
  className?: string;
};

export default function UnicornAuraEmbed({ projectId, className }: Props) {
  return (
    <div className={className ?? "absolute inset-0 z-0"} data-us-project={projectId}>
      <Script
        id="unicornstudio-loader"
        strategy="afterInteractive"
      >
        {`
          (function(){
            if (!window.UnicornStudio) {
              window.UnicornStudio = { isInitialized: false };
              var s = document.createElement('script');
              s.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js';
              s.async = true;
              s.onload = function(){
                var tryInit = function(){
                  if (window.UnicornStudio && typeof window.UnicornStudio.init === 'function') {
                    try { window.UnicornStudio.init(); window.UnicornStudio.isInitialized = true; } catch(e) {}
                  } else {
                    setTimeout(tryInit, 100);
                  }
                };
                tryInit();
              };
              (document.head || document.body).appendChild(s);
            } else {
              // Already present, ensure init
              var tryInit2 = function(){
                if (window.UnicornStudio && typeof window.UnicornStudio.init === 'function') {
                  try { window.UnicornStudio.init(); } catch(e) {}
                } else { setTimeout(tryInit2, 100); }
              };
              tryInit2();
            }
          })();
        `}
      </Script>
    </div>
  );
}

