"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const FLAP_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface SplitFlapProps {
  value: string;
  delay?: number;
  className?: string;
  placeholder?: string;
}

export function SplitFlap({
  value,
  delay = 0,
  className = "",
  placeholder,
}: SplitFlapProps) {
  const prefersReducedMotion = useReducedMotion();
  const [displayText, setDisplayText] = useState<string>(() => placeholder ?? value);
  const [rotateX, setRotateX] = useState<number>(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(value);
      setRotateX(0);
      return;
    }

    let interval: NodeJS.Timeout | null = null;
    const timer = setTimeout(() => {
      let tick = 0;
      const ticks = 7;
      interval = setInterval(() => {
        tick += 1;
        if (tick >= ticks) {
          if (interval) clearInterval(interval);
          setDisplayText(value);
          setRotateX(0);
          return;
        }

        const settledRatio = tick / ticks;
        const nextChars = value
          .split("")
          .map((char) => {
            if (char === " " || char === "-" || char === "/") return char;
            return Math.random() < settledRatio
              ? char
              : FLAP_CHARS[Math.floor(Math.random() * FLAP_CHARS.length)];
          })
          .join("");

        setDisplayText(nextChars);
        setRotateX(tick % 2 === 0 ? 8 : -8);
      }, 55);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [value, delay, prefersReducedMotion]);

  return (
    <span
      className={`inline-block tabular-nums transition-transform duration-75 ${className}`}
      style={{
        transform: rotateX !== 0 ? `perspective(400px) rotateX(${rotateX}deg)` : "none",
        willChange: "transform, opacity",
      }}
      aria-label={value}
    >
      {displayText}
    </span>
  );
}
