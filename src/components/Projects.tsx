"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowSquareOut, Star, GitFork, Shield, Code, Globe, Terminal, Bug } from "@phosphor-icons/react";
import SpotlightCard from "./ui/SpotlightCard";
import ProjectModal from "./ui/ProjectModal";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Shikari",
    description:
      "Complete AI security operations application with swarms of agents, secure human approval, wide MCP server support, custom plugins and more.",
    longDescription:
      "Shikari is a comprehensive AI-powered security operations platform that orchestrates swarms of autonomous agents for threat detection, incident response, and security monitoring. It features a secure human-in-the-loop approval system, extensive MCP server protocol support, and a modular plugin architecture for unlimited extensibility.",
    features: [
      "Multi-agent swarms for autonomous security operations",
      "Secure human-in-the-loop approval workflows",
      "Extensive MCP server protocol support",
      "Modular plugin architecture for custom extensions",
      "Real-time threat detection and response",
      "Comprehensive security operations dashboard",
    ],
    tags: ["AI Security", "MCP", "Agents"],
    stars: 0,
    forks: 0,
    language: "Python",
    icon: Shield,
    github: "https://github.com/Zaeem20/Shikari",
    featured: true,
    image: "/projects/shikari.png",
    images: ["/projects/shikari.png"],
  },
  {
    title: "Predator",
    description:
      "Stress testing tool to test loads on your web services.",
    longDescription:
      "Predator is a powerful stress testing and load testing framework designed to evaluate the resilience of web services under heavy traffic. It supports multiple attack vectors, proxy anonymization, and WAF bypass techniques for authorized security research and performance benchmarking.",
    features: [
      "Multi-vector stress testing capabilities",
      "Proxy anonymization for distributed testing",
      "WAF bypass techniques for authorized testing",
      "Detailed performance reports and metrics",
      "Configurable load profiles and scheduling",
    ],
    tags: ["Python", "Stress Testing", "Web"],
    stars: 57,
    forks: 11,
    language: "Python",
    icon: Shield,
    github: "https://github.com/Zaeem20/Predator",
    featured: false,
    image: "/projects/predator.png",
    images: ["/projects/predator.png"],
  },
  {
    title: "PyFirewall",
    description:
      "TUI-based Python firewall.",
    longDescription:
      "PyFirewall is an interactive terminal-based firewall built with Python, featuring real-time packet filtering, network traffic monitoring, and an intuitive TUI interface for managing firewall rules and inspecting network activity.",
    features: [
      "Interactive terminal user interface",
      "Real-time packet filtering and inspection",
      "Network traffic monitoring and logging",
      "Custom rule-based firewall policies",
      "Lightweight and resource-efficient",
    ],
    tags: ["Python", "Networking", "Firewall"],
    stars: 5,
    forks: 1,
    language: "Python",
    icon: Shield,
    github: "https://github.com/Zaeem20/PyFirewall",
    featured: false,
    image: "/projects/pyfirewall.png",
    images: ["/projects/pyfirewall.png"],
    imagePosition: "object-[5%_center]",
  },
  {
    title: "shikari-mcp",
    description:
      "Powerful MCP server bridging AI and cybersecurity operations with 300+ tools and built-in agent workflows for offensive/defensive operations.",
    longDescription:
      "shikari-mcp is a high-performance MCP (Model Context Protocol) server that bridges AI assistants with cybersecurity operations. It provides over 300 tools spanning offensive security, defensive operations, reconnaissance, and incident response, with built-in agent workflows for autonomous security operations.",
    features: [
      "300+ cybersecurity tools via MCP protocol",
      "Built-in agent workflows for autonomous operations",
      "Supports both offensive and defensive security workflows",
      "Seamless AI assistant integration",
      "Extensible tool framework for custom additions",
    ],
    tags: ["MCP", "Cybersecurity", "AI"],
    stars: 0,
    forks: 0,
    language: "Python",
    icon: Code,
    github: "https://github.com/Zaeem20/shikari-mcp",
    featured: false,
    image: "/projects/shikari-mcp.png",
    images: ["/projects/shikari-mcp.png"],
  },
  {
    title: "Mangloo",
    description:
      "Powerful OSINTer that deeply finds information about an entity.",
    longDescription:
      "Mangloo is a comprehensive OSINT (Open Source Intelligence) tool designed to gather deep information about entities including individuals, domains, IPs, and organizations. It aggregates data from multiple sources to build a complete intelligence picture.",
    features: [
      "Multi-source OSINT data aggregation",
      "Entity profiling across domains, IPs, and people",
      "Automated reconnaissance workflows",
      "Structured intelligence report generation",
      "Extensible source plugin system",
    ],
    tags: ["OSINT", "Recon", "Intelligence"],
    stars: 0,
    forks: 0,
    language: "Python",
    icon: Globe,
    github: "https://github.com/Zaeem20/Mangloo",
    featured: false,
    image: "/projects/mangloo.png",
    images: ["/projects/mangloo.png"],
  },
  {
    title: "wtcmddo",
    description:
      "Lightweight tool that explains your commands and their impact on systems.",
    longDescription:
      "whcmddo is a lightweight CLI utility that analyzes and explains shell commands before execution, helping users understand the impact of commands on their systems. It provides detailed explanations of command behavior, flags, arguments, and potential security implications.",
    features: [
      "Command explanation and analysis",
      "Security impact assessment",
      "Flag and argument breakdown",
      "Risk level indicators",
      "Lightweight and fast execution",
    ],
    tags: ["Python", "CLI", "Developer Tools"],
    stars: 2,
    forks: 0,
    language: "Python",
    icon: Terminal,
    github: "https://github.com/Zaeem20/wtcmddo",
    featured: false,
    image: "/projects/wtcmddo.png",
    images: ["/projects/wtcmddo.png"],
    imagePosition: "object-[12%_center]",

  },
  {
    title: "wolfscan",
    description:
      "Vulnerability scanner to find vulnerabilities like XSS, SQLI, SSRF, LFI and more, with reporting.",
    longDescription:
      "wolfscan is a comprehensive vulnerability scanner that detects a wide range of web application vulnerabilities including XSS, SQL Injection, SSRF, LFI, and more. It features automated scanning, detailed reporting with export capabilities, and customizable scan configurations.",
    features: [
      "Multi-vulnerability detection (XSS, SQLI, SSRF, LFI)",
      "Automated scanning with configurable depth",
      "Detailed vulnerability reports with export",
      "Custom payload and rule configuration",
      "Concurrent scanning for faster results",
    ],
    tags: ["Python", "Security", "Scanner"],
    stars: 0,
    forks: 0,
    language: "Python",
    icon: Bug,
    github: "https://github.com/Zaeem20/wolfscan",
    featured: false,
    image: "/projects/wolfscan.png",
    images: ["/projects/wolfscan.png"],
    imagePosition: "object-[10%_center]",
  },
];

function ProjectCard({
  project,
  index,
  featured = false,
  onClick,
}: {
  project: (typeof projects)[0];
  index: number;
  featured?: boolean;
  onClick?: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = project.icon;

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div ref={cardRef} className={`min-w-0 ${featured ? "md:col-span-2" : ""}`}>
      <SpotlightCard className="h-full">
        <button
          onClick={onClick}
          className="group h-full w-full flex flex-col rounded-[calc(2rem-2px)] bg-surface border border-hairline overflow-hidden transition-all duration-500 hover:border-hairline-strong text-left"
        >
          <div className={`relative overflow-hidden ${featured ? "aspect-[21/9]" : "aspect-[16/9]"}`}>
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-cover ${project.imagePosition || ""} transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105`}
            />
          </div>

          <div className="flex flex-col flex-1 p-6 md:p-7">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-accent-subtle border border-accent-glow flex items-center justify-center">
                <Icon size={22} className="text-accent" weight="duotone" />
              </div>
              <div className="flex items-center gap-3 shrink-0">
                {project.stars > 0 && (
                  <span className="flex items-center gap-1 text-xs text-text-tertiary font-mono">
                    <Star size={12} className="text-accent" weight="fill" />
                    {project.stars}
                  </span>
                )}
                {project.forks > 0 && (
                  <span className="flex items-center gap-1 text-xs text-text-tertiary font-mono">
                    <GitFork size={12} weight="duotone" />
                    {project.forks}
                  </span>
                )}
              </div>
            </div>

            <h3 className="font-display text-xl md:text-2xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors duration-500">
              {project.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[10px] font-mono text-text-tertiary bg-void-elevated border border-hairline rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between pt-5 border-t border-hairline">
              <span className="text-xs font-mono text-text-tertiary">{project.language}</span>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors duration-300 group/link"
              >
                Source
                <ArrowSquareOut
                  size={12}
                  weight="duotone"
                  className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </button>
      </SpotlightCard>
    </div>
  );
}

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const featured = projects.find((p) => p.featured) || projects[0];
  const others = projects.filter((p) => p.title !== featured.title);

  return (
    <section id="work" className="py-32 md:py-40 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div ref={headerRef} className="mb-16 md:mb-24 max-w-3xl">
          <span className="inline-block text-[10px] font-mono uppercase tracking-[0.2em] text-text-tertiary mb-6">
            Selected Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary leading-[0.95] tracking-tight">
            Projects that
            <br />
            <span className="text-gradient">push boundaries.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-w-0">
          <ProjectCard project={featured} index={0} featured onClick={() => openModal(featured)} />
          {others.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i + 1} onClick={() => openModal(project)} />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
