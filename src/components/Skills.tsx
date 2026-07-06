"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpotlightCard from "./ui/SpotlightCard";

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
    skills: ["Pen Testing", "Network Security", "Web App Security", "OSINT", "Vulnerability Assessment", "Red Teaming", ],
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
  "Python", "React", "Next.js", "Django", "Express", "Docker",
  "Kubernetes", "AWS", "GCP", "TensorFlow", "Burp Suite", "Nmap",
  "TypeScript", "Go", "Java", "PHP", "PostgreSQL", "MongoDB",
  "Redis", "GraphQL", "REST", "Git", "Linux", "CI/CD",
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
              <span className="text-gradient">arsenal.</span>
            </h2>
            <p className="text-text-secondary leading-relaxed max-w-md">
              A stack built across software engineering, offensive security and machine learning. Depth where it matters.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <div className="animate-marquee flex whitespace-nowrap">
          {[...techMarquee, ...techMarquee].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="mx-8 text-2xl md:text-4xl font-display font-semibold text-text-tertiary/30 select-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
