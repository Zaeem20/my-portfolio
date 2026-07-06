"use client";

import { useEffect, useState } from "react";

const DEFAULT_PHRASES = [
  "I build secure systems.",
  "I break things to fix them.",
  "AI × Cybersecurity.",
  "Full-stack engineer.",
  "Red teamer.",
  "Agentic security operations.",
];

interface TypewriterProps {
  phrases?: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function Typewriter({
  phrases = DEFAULT_PHRASES,
  speed = 50,
  deleteSpeed = 25,
  pauseDuration = 2200,
  className = "",
}: TypewriterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentIndex];

    if (!isDeleting) {
      if (display.length < phrase.length) {
        const timeout = setTimeout(() => {
          setDisplay(phrase.slice(0, display.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (display.length > 0) {
      const timeout = setTimeout(() => {
        setDisplay(display.slice(0, -1));
      }, deleteSpeed);
      return () => clearTimeout(timeout);
    }

    setIsDeleting(false);
    setCurrentIndex((prev) => (prev + 1) % phrases.length);
  }, [display, isDeleting, currentIndex, phrases, speed, deleteSpeed, pauseDuration]);

  return (
    <span className={className}>
      {display}
      <span className="inline-block w-[2px] h-[1em] bg-accent ml-0.5 align-text-bottom animate-pulse-slow" />
    </span>
  );
}
