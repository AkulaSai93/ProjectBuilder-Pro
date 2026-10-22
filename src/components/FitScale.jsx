"use client";

import { useEffect, useRef, useState } from "react";

// Renders fixed-size design mockups at full size, scaling them down when the container is narrower.
export default function FitScale({ width, height, className = "", children }) {
  const ref = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    const observer = new ResizeObserver(([entry]) => {
      setScale(Math.min(1, entry.contentRect.width / width));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div ref={ref} className={`w-full overflow-clip ${className}`} style={{ maxWidth: width, height: height * scale }}>
      <div style={{ width, height, transform: `scale(${scale})`, transformOrigin: "top left" }}>{children}</div>
    </div>
  );
}
