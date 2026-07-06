"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function TextScramble({
  text,
  className = "",
  delay = 0,
  duration = 1200,
}: TextScrambleProps) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef<number>(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const startTimeout = setTimeout(() => {
      const length = text.length;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const revealed = Math.floor(progress * length);

        let out = "";
        for (let i = 0; i < length; i++) {
          if (text[i] === " ") {
            out += " ";
          } else if (i < revealed) {
            out += text[i];
          } else {
            out += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        setDisplay(out);

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(frameRef.current);
    };
  }, [text, delay, duration]);

  return <span className={className}>{display}</span>;
}
