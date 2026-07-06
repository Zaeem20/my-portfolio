"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
