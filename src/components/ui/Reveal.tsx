"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  start?: string;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 32,
  duration = 0.9,
  once = true,
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: once ? "play none none none" : "play reverse play reverse",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, y, duration, once, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
