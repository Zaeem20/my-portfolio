"use client";

import Image from "next/image";
import { Code, ShieldCheck, Cloud, Brain, Lock, Lightning } from "@phosphor-icons/react";
import Reveal from "./ui/Reveal";
import SpotlightCard from "./ui/SpotlightCard";
import Typewriter from "./ui/Typewriter";

const capabilities = [
  {
    icon: Code,
    title: "Full Stack Engineering",
    description: "End-to-end applications with multiple technologies, like Python, Django, PERN, MERN stack.",
  },
  {
    icon: ShieldCheck,
    title: "Offensive Security",
    description: "Penetration testing, vulnerability assessments and red team operations.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, GCP, AZURE, OCI deployments with Docker, Kubernetes and CI/CD pipelines.",
  },
  {
    icon: Brain,
    title: "AI / LLM Integration",
    description: "Intelligent systems, spam detection and LLM-powered tooling.",
  },
  {
    icon: Lock,
    title: "Ethical Hacking",
    description: "Red team research, OSINT and social engineering assessments.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 md:py-40 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: bio */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary leading-[0.95] tracking-tight mb-8">
                Security-first
                <br />
                <span className="text-gradient">engineering.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-5 text-text-secondary leading-relaxed text-base md:text-lg max-w-[52ch]">
                <p>
                  I am Zaeem Durani, a Software Engineer and a Certified Red Team Analyst based in Mumbai, India.
                </p>
                <p>
                  My work sits at the intersection of robust application development and offensive security. From penetration testing to scalable microservices, I build software designed to withstand real-world attacks.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-hairline">
                <div>
                  <div className="font-display text-3xl md:text-4xl font-semibold text-text-primary">
                    51+
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-text-tertiary mt-1">
                    Repositories
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl md:text-4xl font-semibold text-text-primary">
                    550+
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-text-tertiary mt-1">
                    GitHub Stars
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl md:text-4xl font-semibold text-text-primary">
                    <Typewriter
                      phrases={["MCRTA", "CRTA", "CCSE", "Oracle", "Google", "Udemy", "Coursera", "WIPRO", "IIT-H"]}
                      speed={80}
                      deleteSpeed={40}
                      pauseDuration={1800}
                    />
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-text-tertiary mt-1">
                    Certifications
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: bento capabilities */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {capabilities.slice(0, 2).map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <Reveal key={cap.title} delay={i * 0.1}>
                    <SpotlightCard className="h-full">
                      <div className="h-full p-7 md:p-8 rounded-[calc(2rem-2px)] bg-surface border border-hairline transition-all duration-500 hover:border-hairline-strong">
                        <div className="w-11 h-11 rounded-xl bg-accent-subtle border border-accent-glow flex items-center justify-center mb-6">
                          <Icon size={22} className="text-accent" weight="duotone" />
                        </div>
                        <h3 className="font-display text-xl font-semibold text-text-primary mb-3">
                          {cap.title}
                        </h3>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {cap.description}
                        </p>
                      </div>
                    </SpotlightCard>
                  </Reveal>
                );
              })}

              <Reveal delay={0.2} className="md:col-span-2">
                <SpotlightCard className="h-full">
                  <div className="h-full p-7 md:p-8 rounded-[calc(2rem-2px)] bg-surface border border-hairline transition-all duration-500 hover:border-hairline-strong flex flex-col md:flex-row md:items-center gap-6">
                    <div className="w-11 h-11 rounded-xl bg-accent-subtle border border-accent-glow flex items-center justify-center shrink-0">
                      <Cloud size={22} className="text-accent" weight="duotone" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-text-primary mb-2">
                        Cloud & DevOps
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed max-w-lg">
                        AWS, GCP and OCI deployments with Docker, Kubernetes and CI/CD pipelines that keep systems reliable and observable.
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>

              {capabilities.slice(3).map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <Reveal key={cap.title} delay={0.3 + i * 0.1}>
                    <SpotlightCard className="h-full">
                      <div className="h-full p-7 md:p-8 rounded-[calc(2rem-2px)] bg-surface border border-hairline transition-all duration-500 hover:border-hairline-strong">
                        <div className="w-11 h-11 rounded-xl bg-accent-subtle border border-accent-glow flex items-center justify-center mb-6">
                          <Icon size={22} className="text-accent" weight="duotone" />
                        </div>
                        <h3 className="font-display text-xl font-semibold text-text-primary mb-3">
                          {cap.title}
                        </h3>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {cap.description}
                        </p>
                      </div>
                    </SpotlightCard>
                  </Reveal>
                );
              })}

              <Reveal delay={0.5} className="md:col-span-2">
                <SpotlightCard className="h-full">
                  <div className="h-full relative overflow-hidden rounded-[calc(2rem-2px)] bg-surface border border-hairline transition-all duration-500 hover:border-hairline-strong">
                    {/* <Image
                      src="https://picsum.photos/seed/secure-code-terminal/900/400"
                      alt="Secure development workspace"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-40"
                    /> */}
                    <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-transparent" />
                    <div className="relative p-7 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Lightning size={18} className="text-accent" weight="duotone" />
                          <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-text-tertiary">
                            Current Focus
                          </span>
                        </div>
                        <h3 className="font-display text-xl md:text-2xl font-semibold text-text-primary">
                          LLM security and red teaming
                        </h3>
                      </div>
                      <a
                        href="https://linkedin.com/in/zaeem-durani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-hairline text-sm text-text-primary hover:bg-white/[0.04] transition-colors duration-300"
                      >
                        View LinkedIn
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
