"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X, GithubLogo, ArrowUpRight, Star, GitFork } from "@phosphor-icons/react";

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  tags: string[];
  stars: number;
  forks: number;
  language: string;
  github: string;
  demo?: string;
  images: string[];
  icon?: React.ComponentType<{ size?: number; weight?: string; className?: string }> | React.ElementType;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4 md:p-8"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-void/90 backdrop-blur-xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[90dvh] overflow-y-auto rounded-2xl sm:rounded-[2rem] bg-surface border border-hairline shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors duration-300"
              aria-label="Close modal"
            >
              <X size={18} weight="bold" />
            </button>

            {/* Hero image */}
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-t-[2rem]">
              <Image
                src={project.images[0]}
                alt={`${project.title} preview`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain"
              />
            </div>

            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-text-primary mb-3">
                    {project.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed max-w-2xl">
                    {project.longDescription || project.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {project.stars > 0 && (
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-void-elevated border border-hairline text-xs text-text-secondary font-mono">
                      <Star size={12} className="text-accent" weight="fill" />
                      {project.stars}
                    </span>
                  )}
                  {project.forks > 0 && (
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-void-elevated border border-hairline text-xs text-text-secondary font-mono">
                      <GitFork size={12} weight="duotone" />
                      {project.forks}
                    </span>
                  )}
                  <span className="px-3 py-1.5 rounded-full bg-accent-subtle border border-accent-glow text-xs font-mono text-accent">
                    {project.language}
                  </span>
                </div>
              </div>

              {project.features && project.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-tertiary mb-4">
                    Key capabilities
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-void-elevated border border-hairline"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span className="text-sm text-text-secondary leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.images.length > 1 && (
                <div className="mb-8">
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-tertiary mb-4">
                    Gallery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.slice(1).map((img, i) => (
                      <div key={i} className="relative aspect-video rounded-2xl overflow-hidden border border-hairline">
                        <Image
                          src={img}
                          alt={`${project.title} screenshot ${i + 2}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] font-mono text-text-tertiary bg-void-elevated border border-hairline rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-hairline">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-void rounded-full font-medium hover:bg-white transition-colors duration-300"
                >
                  <GithubLogo size={18} weight="duotone" />
                  View on GitHub
                  <ArrowUpRight size={14} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-hairline text-text-primary hover:bg-white/[0.04] transition-colors duration-300"
                  >
                    Live demo
                    <ArrowUpRight size={14} weight="bold" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
