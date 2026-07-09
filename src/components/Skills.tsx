"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpotlightCard from "./ui/SpotlightCard";
import {
  SiPython,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiDjango,
  SiDocker,
  SiKubernetes,
  SiLangchain,
  SiGo,
  SiLinux,
  SiGit,
  SiMetasploit,
  SiBurpsuite,
  SiWireshark,
  SiFastapi
} from "react-icons/si";
import {
  FaAws,
  FaNetworkWired,
  FaDatabase,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "PHP", "Java", "Dart", "Go", "Bash", "C++", "C"],
  },
  {
    label: "Frameworks",
    skills: ["Django", "Next.js", "React", "Express.js", "Node.js", "Flask", "FastAPI", "Langchain"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Azure", "OCI", "Docker", "Kubernetes", "CI/CD", "GitOps", "Terraform", "IaC"],
  },
  {
    label: "Cybersecurity",
    skills: ["Pen Testing", "Network Security", "Web App Security", "OSINT", "Vulnerability Assessment", "Red Teaming"],
  },
  {
    label: "AI / ML",
    skills: ["TensorFlow", "Scikit-learn", "OpenCV", "NLP", "Deep Learning", "Large Language Models", "RAG"],
  },
  {
    label: "Tools",
    skills: ["Burp Suite", "Metasploit", "Nmap", "Wireshark", "SQLMap", "YARA", "Linux"],
  },
];

const techMarquee = [
  { name: "Python", Icon: SiPython },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Django", Icon: SiDjango },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "Docker", Icon: SiDocker },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "AWS", Icon: FaAws },
  { name: "Langchain", Icon: SiLangchain },
  { name: "Go", Icon: SiGo },
  { name: "Linux", Icon: SiLinux },
  { name: "Git", Icon: SiGit },
  { name: "Metasploit", Icon: SiMetasploit },
  { name: "Burp Suite", Icon: SiBurpsuite},
  { name: "Wireshark", Icon: SiWireshark },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".skill-group").forEach((group, i) => {
        gsap.fromTo(
          group,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-32 md:py-40 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary leading-[0.95] tracking-tight mb-8">
              Technical
              <br />
              <span className="text-gradient">Arsenel.</span>
            </h2>
            <p className="text-text-secondary leading-relaxed max-w-md">
              A stack built across software engineering, offensive security and machine learning. Depth where it matters.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 [grid-auto-rows:1fr]">
              {skillGroups.map((group, i) => (
                <div key={group.label} className="skill-group">
                  <SpotlightCard className="h-full">
                    <div className={`h-full p-6 md:p-7 rounded-[calc(2rem-2px)] bg-surface border border-hairline transition-all duration-500 hover:border-hairline-strong ${i === 2 ? "pb-12" : ""}`}>
                      <h3 className="font-display text-sm font-semibold text-text-tertiary uppercase tracking-[0.12em] mb-5">
                        {group.label}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 text-xs font-mono text-text-secondary bg-void-elevated border border-hairline rounded-full hover:border-accent hover:text-accent transition-colors duration-300 cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-24 md:mt-32 border-y border-hairline py-8 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap w-fit">
          {techMarquee.map((tech, i) => {
            const Icon = tech.Icon;
            return (
              <span
                key={`a-${tech.name}-${i}`}
                className="mx-8 flex items-center gap-3 text-text-tertiary/40 select-none"
              >
                <Icon size={28} className="opacity-60" />
                <span className="text-xl md:text-2xl font-display font-semibold">{tech.name}</span>
              </span>
            );
          })}
          {techMarquee.map((tech, i) => {
            const Icon = tech.Icon;
            return (
              <span
                key={`b-${tech.name}-${i}`}
                className="mx-8 flex items-center gap-3 text-text-tertiary/40 select-none"
              >
                <Icon size={28} className="opacity-60" />
                <span className="text-xl md:text-2xl font-display font-semibold">{tech.name}</span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
