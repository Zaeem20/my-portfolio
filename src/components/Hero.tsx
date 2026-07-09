"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, ShieldCheck, ShieldWarning, LockKey } from "@phosphor-icons/react";
import TextScramble from "./ui/TextScramble";
import Typewriter from "./ui/Typewriter";
import MagneticButton from "./ui/MagneticButton";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !contentRef.current || !visualRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          ".hero-headline",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.5"
        )
        .fromTo(
          ".hero-subtext",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ".hero-ctas",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".hero-visual",
          { opacity: 0, scale: 0.96, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2 },
          "-=1"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] flex items-center bg-radial-glow bg-grid-faint overflow-hidden pt-24 pb-10 md:pt-32 md:pb-16"
    >
      <div className="max-w-[1400px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div ref={contentRef} className="lg:col-span-6 xl:col-span-5">
            <div className="hero-eyebrow inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hairline bg-surface/60 backdrop-blur-md mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-text-secondary">
                Software Engineer
              </span>
            </div>

            <h1 className="hero-headline font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-tight mb-8">
              <span className="block text-text-primary">Secure</span>
              <span className="block text-gradient mt-2">
                <TextScramble text="systems." delay={600} duration={1000} />
              </span>
              <span className="block text-text-secondary font-light text-[clamp(1.75rem,4vw,3.25rem)] mt-3 leading-[1.1]">
                Built to withstand.
              </span>
            </h1>

            <p className="hero-subtext text-text-secondary text-lg md:text-xl max-w-lg leading-relaxed mb-4 font-light">
              Software engineer and offensive security practitioner building resilient applications where development meets security.
            </p>
            <p className="hero-subtext text-text-secondary text-base md:text-lg max-w-lg leading-relaxed mb-10 font-mono">
              &gt; <Typewriter />
            </p>

            <div className="hero-ctas flex flex-wrap items-center gap-4">
              <MagneticButton>
                <a
                  href="#work"
                  className="group inline-flex items-center gap-3 pl-7 pr-2 py-2 bg-text-primary text-void rounded-full font-medium transition-all duration-500 hover:bg-white active:scale-[0.98]"
                >
                  View Projects
                  <span className="w-9 h-9 rounded-full bg-void/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500">
                    <ArrowDownRight size={16} weight="bold" />
                  </span>
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-hairline text-text-primary font-medium hover:border-hairline-strong hover:bg-white/[0.03] transition-all duration-500 active:scale-[0.98]"
                >
                  Start a project
                  <ArrowUpRight size={16} weight="bold" className="text-text-secondary group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" />
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Right visual */}
          <div ref={visualRef} className="lg:col-span-6 xl:col-span-7 hero-visual">
            <div className="bezel-outer p-1.5">
              <div className="bezel-inner relative aspect-[4/3] lg:aspect-[16/12] overflow-hidden">
                <Image
                  src="/bg-image.png"
                  alt="Abstract network security visualization"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-[20%_center]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-void/60 via-transparent to-transparent" />

                {/* Floating stat cards */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row gap-3">
                  <div className="glass-strong rounded-2xl p-4 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck size={16} className="text-accent" weight="duotone" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-text-tertiary">
                        Certified
                      </span>
                    </div>
                    <div className="font-display text-lg font-semibold text-text-primary">
                      <Typewriter
                        phrases={["MCRTA", "CRTA", "CCSE", "Oracle", "Programming Hub", "Google", "Udemy", "Coursera", "WIPRO", "IIT-H"]}
                        speed={80}
                        deleteSpeed={40}
                        pauseDuration={1800}
                      />
                    </div>
                  </div>
                  <div className="glass-strong rounded-2xl p-4 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldWarning size={16} className="text-accent" weight="duotone" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-text-tertiary">
                        Repositories
                      </span>
                    </div>
                    <div className="font-display text-lg font-semibold text-text-primary">
                      51+
                    </div>
                  </div>
                  <div className="glass-strong rounded-2xl p-4 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <LockKey size={16} className="text-accent" weight="duotone" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-text-tertiary">
                        Stars
                      </span>
                    </div>
                    <div className="font-display text-lg font-semibold text-text-primary">
                      550+
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
