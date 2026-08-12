"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * 3D-Coverflow-Karussell: ein Slide im Zentrum, Nachbar-Slides seitlich
 * verkleinert/rotiert im Hintergrund. Per Swipe (Touch/Drag) oder Pfeile
 * bedienbar. Gedacht für kompakte Layouts (Mobile/kleine Viewports).
 */
export default function ThreeDImageCarousel({
  items = [],
  perspective = "1200px",
  cardWidth = "min(20rem, 82vw)",
  gap = 130,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const n = items.length;

  const go = (dir) => setIndex((i) => (i + dir + n) % n);

  const handleDragEnd = (_, info) => {
    const threshold = 60;
    if (info.offset.x < -threshold || info.velocity.x < -400) go(1);
    else if (info.offset.x > threshold || info.velocity.x > 400) go(-1);
  };

  if (n === 0) return null;

  return (
    <div className={`w-full ${className}`}>
      <div
        className="relative w-full grid place-items-center overflow-hidden"
        style={{ perspective, minHeight: "22rem" }}
      >
        <motion.div
          className="absolute inset-0 grid place-items-center"
          drag="x"
          dragElastic={0.15}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        >
          {items.map((item, i) => {
            let offset = i - index;
            if (offset > n / 2) offset -= n;
            if (offset < -n / 2) offset += n;
            const abs = Math.abs(offset);
            const isActive = offset === 0;
            const visible = abs <= 1;

            return (
              <motion.div
                key={i}
                className="col-start-1 row-start-1"
                style={{
                  width: cardWidth,
                  pointerEvents: isActive ? "auto" : "none",
                }}
                animate={{
                  x: offset * gap,
                  rotateY: offset * -28,
                  scale: isActive ? 1 : 0.82,
                  opacity: visible ? (isActive ? 1 : 0.45) : 0,
                  zIndex: 10 - abs,
                }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 260, damping: 28 }
                }
              >
                {item.content}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="flex items-center justify-center gap-5 mt-6">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Vorheriges"
          className="w-11 h-11 rounded-full border border-[var(--navy)]/15 flex items-center justify-center text-[var(--navy)] transition-colors hover:bg-[var(--navy)] hover:text-white active:scale-[0.96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Zu Folie ${i + 1}`}
              className={`rounded-full transition-all ${
                i === index ? "w-6 h-2 bg-[var(--accent)]" : "w-2 h-2 bg-[var(--navy)]/20"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Nächstes"
          className="w-11 h-11 rounded-full border border-[var(--navy)]/15 flex items-center justify-center text-[var(--navy)] transition-colors hover:bg-[var(--navy)] hover:text-white active:scale-[0.96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
