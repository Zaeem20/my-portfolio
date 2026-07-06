"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trophy, Briefcase, GraduationCap } from "@phosphor-icons/react";
import SpotlightCard from "./ui/SpotlightCard";
import Typewriter from "./ui/Typewriter";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    type: "role",
    title: "Software Engineer",
    period: "May 2025 - Present",
    location: "India",
    description:
      "Full stack development and security engineering for AI-enabled technology solutions, building scalable systems with security baked in.",
    icon: Briefcase,
  },
  {
    type: "role",
    title: "Penetration Tester",
    period: "March 2025 - May 2025",
    location: "",
    description:
      "Developed vulnerability scanners, built an AI-powered spam email detection system that reduced phishing attempts by 30%, and gained hands-on IAM experience with SailpointHq.",
    icon: Briefcase,
  },
  {
    type: "role",
    title: "Project Administrator",
    period: "January 2023 - March 2025",
    location: "Mumbai",
    description:
      "Managed security and server operations, reduced downtime by 20% through backups and maintenance, onboarded interns and delivered client products with WordPress, React, Next.js and the MERN stack.",
    icon: Briefcase,
  },

  {
    type: "role",
    title: "Cyber Security Intern",
    period: "August 2023 - December 2023",
    location: "Mumbai",
    description:
      "Worked as a Cyber Warrior in association with Maharashtra Police for cybersecurity operations.",
    icon: Briefcase,
  },
    {
    type: "role",
    title: "VAPT Intern",
    period: "June 2023 - July 2023",
    location: "Mumbai",
    description:
      "Worked as a VAPT Intern at YHills, in collaboration with E-Cell IIT Hyderabad, conducting penetration testing and vulnerability assessments for web applications and networks.",
    icon: Briefcase,
  },
  {
    type: "role",
    title: "Data Engineer Intern",
    period: "March 2023 - May 2023",
    location: "Russia",
    description:
      "Contributed to a global data engineering project involving large-scale data processing pipelines.",
    icon: Briefcase,
  },
  {
    type: "education",
    title: "Master of Computer Applications",
    org: "Manipal University Jaipur",
    period: "April 2026 - April 2028",
    location: "",
    description: "Computer Science",
    icon: GraduationCap,
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    org: "Maharashtra College of Arts Science and Commerce",
    period: "2022 - 2025",
    location: "Mumbai",
    description: "",
    icon: GraduationCap,
  },
  {
    type: "certification",
    title: "Certified Red Team Analyst (CRTA)",
    period: "",
    location: "",
    description: "Offensive security and red team operations certification from CyberWarFare Labs.",
    icon: Trophy,
  },
  {
    type: "certification",
    title: "Certified Cyber Security Engineer (CCSE)",
    period: "",
    location: "",
    description: "Comprehensive cybersecurity engineering certification covering network security, cryptography, and secure architecture.",
    icon: Trophy,
  },
  {
    type: "certification",
    title: "Multi Cloud Red Team Analyst (MCRTA)",
    period: "",
    location: "",
    description: "Advanced red team certification focused on multi-cloud environments including AWS, Azure, and GCP.",
    icon: Trophy,
  },
  {
    type: "certification",
    title: "Many more",
    period: "",
    location: "",
    description: "Additional certifications from Udemy, Coursera, and industry-recognized platforms covering ethical hacking, cloud security, and software engineering.",
    icon: Trophy,
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".timeline-card").forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
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
    <section id="experience" ref={sectionRef} className="py-32 md:py-40 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary leading-[0.95] tracking-tight mb-8">
              Experience and
              <br />
              <span className="text-gradient">credentials.</span>
            </h2>
            <p className="text-text-secondary leading-relaxed max-w-md">
              A track record across software engineering, offensive security and cloud infrastructure, from internships to full-time engineering roles.
            </p>
            <div className="mt-6 pt-6 border-t border-hairline">
              <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-text-tertiary">
                Credentials
              </span>
              <div className="font-display text-xl md:text-2xl font-semibold text-text-primary mt-2">
                <Typewriter
                  phrases={["MCRTA", "CRTA", "CCSE", "Oracle", "Google", "Udemy", "Coursera"]}
                  speed={80}
                  deleteSpeed={40}
                  pauseDuration={1800}
                />
              </div>
            </div>
          </div>

          {/* Right timeline */}
          <div className="lg:col-span-8">
            <div className="relative pl-8 md:pl-0">
              <div className="absolute left-0 md:left-1/2 top-2 bottom-2 w-px bg-hairline" />

              <div className="space-y-6">
                {timeline.map((item, i) => {
                  const Icon = item.icon;
                  const isLeft = i % 2 === 0;

                  return (
                    <div
                      key={`${item.title}-${item.period}-${i}`}
                      className={`timeline-card relative md:flex md:items-start md:gap-8 ${
                        isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      <div className="absolute left-0 md:left-1/2 -translate-x-1/2 z-10 top-1">
                        <div className="w-8 h-8 rounded-full bg-void border border-hairline-strong flex items-center justify-center">
                          <Icon size={14} className="text-accent" weight="duotone" />
                        </div>
                      </div>

                      <div
                        className={`pl-10 md:pl-0 md:w-[calc(50%-40px)] ${
                          isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                        }`}
                      >
                        <SpotlightCard className="h-full">
                          <div className="p-6 rounded-[calc(2rem-2px)] bg-surface border border-hairline transition-all duration-500 hover:border-hairline-strong text-left">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                              <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-text-tertiary">
                                {item.period}
                                {item.location && ` · ${item.location}`}
                              </span>
                            </div>
                            <h3 className="font-display text-lg md:text-xl font-semibold text-text-primary mb-1">
                              {item.title}
                            </h3>
                            {(item as any).org && (
                              <p className="text-sm font-mono text-accent mb-3">
                                {(item as any).org}
                              </p>
                            )}
                            {item.description && (
                              <p className="text-sm text-text-secondary leading-relaxed">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </SpotlightCard>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
