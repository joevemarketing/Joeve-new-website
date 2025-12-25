"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function NeonCursor() {
  const pathname = usePathname();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (pathname !== "/") return null;
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        opacity: visible ? 1 : 0,
        transition: "opacity 300ms",
        background: `radial-gradient(200px 200px at ${pos.x}px ${pos.y}px, rgba(0,212,255,0.08), transparent 60%)`,
      }}
    />
  );
}
