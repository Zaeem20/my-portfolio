"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const navBorder = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"]);
  const navBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(8,8,9,0)", "rgba(8,8,9,0.78)"]
  );

  return (
    <>
      <motion.nav
        style={{ backgroundColor: navBg, borderColor: navBorder }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-5xl px-4 py-2.5 rounded-full border backdrop-blur-xl"
      >
        <div className="flex items-center justify-between">
          <span className="font-display font-semibold text-lg shrink-0">Zaeem Durani<span className="text-gradient">.</span></span>

          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] rounded-full px-2 py-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors duration-300 rounded-full hover:bg-white/[0.06]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:duranizaeem@gmail.com"
            className="hidden md:flex items-center gap-1.5 ml-2 pl-4 pr-2 py-2 text-sm font-medium text-void bg-text-primary rounded-full hover:bg-white transition-colors duration-300 group"
          >
            Let's talk
            <span className="w-6 h-6 rounded-full bg-void/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              <ArrowUpRight size={14} weight="bold" />
            </span>
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-10 w-10 h-10 rounded-full hover:bg-white/[0.06] flex items-center justify-center transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="relative w-4 h-3">
              <motion.span
                animate={{
                  rotate: mobileOpen ? 45 : 0,
                  y: mobileOpen ? 5 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                className="absolute top-0 left-0 w-4 h-[1.5px] bg-text-primary origin-left"
              />
              <motion.span
                animate={{ opacity: mobileOpen ? 0 : 1, x: mobileOpen ? -4 : 0 }}
                transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                className="absolute top-[5px] left-0 w-4 h-[1.5px] bg-text-primary"
              />
              <motion.span
                animate={{
                  rotate: mobileOpen ? -45 : 0,
                  y: mobileOpen ? -5 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                className="absolute bottom-0 left-0 w-4 h-[1.5px] bg-text-primary origin-left"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-void/95 backdrop-blur-3xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.06,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="text-3xl font-display font-medium text-text-primary hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="mailto:duranizaeem@gmail.com"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{
                  duration: 0.5,
                  delay: navLinks.length * 0.06,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-void rounded-full font-medium"
              >
                Let's talk
                <ArrowUpRight size={16} weight="bold" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
