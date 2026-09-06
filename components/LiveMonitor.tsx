"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { SplitFlap } from "./SplitFlap";

interface Project {
  id: string;
  num: string;
  title: string;
  tags: string[];
  status: "LIVE" | "SHIPPED" | "DEMO";
  badgeVariant: "solid" | "outline";
  revealLine: string;
}

const PROJECTS: Project[] = [
  {
    id: "teachingcircle",
    num: "01",
    title: "TeachingCircle",
    tags: ["Meta Cloud API", "FastAPI", "Redis", "Alpine.js"],
    status: "LIVE",
    badgeVariant: "solid",
    revealLine:
      "Freelance enrollment bot for an academy in Lahore — cost-efficient stack by design.",
  },
  {
    id: "hof-vault",
    num: "02",
    title: "HOF Vault",
    tags: ["Next.js", "Supabase", "Expo / RN", "Railway OCR"],
    status: "LIVE",
    badgeVariant: "solid",
    revealLine:
      "Employee benefits + QR dine-in ordering platform, live in production, web and mobile.",
  },
  {
    id: "psychconnect",
    num: "03",
    title: "PsychConnect",
    tags: ["Next.js 16", "TypeScript", "FastAPI", "Gemini AI"],
    status: "SHIPPED",
    badgeVariant: "solid",
    revealLine:
      "Full-stack telepsychology platform — RLS security model, Gemini-powered assessment scoring.",
  },
  {
    id: "easy-pdf",
    num: "04",
    title: "Easy-PDF",
    tags: ["LangChain", "PostgreSQL", "Docker"],
    status: "DEMO",
    badgeVariant: "outline",
    revealLine:
      "Privacy-first local RAG tool — chat with PDFs entirely on-device, zero data leakage.",
  },
];

export function LiveMonitor() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="min-h-[100dvh] bg-[#FAF6EC] text-[#1A1A1A]">
      {/* Header */}
      <header className="w-full border-b border-[#1A1A1A]/12 px-8 py-7 flex items-center justify-between">
        <span className="font-bold text-[18px] tracking-tight text-[#1A1A1A]">
          Mustafa Bhatti
        </span>
        <nav className="flex items-center gap-7 text-[14px] font-medium text-[#1A1A1A]">
          <a
            href="#work"
            className="hover:text-[#D69E2E] transition-colors duration-200"
          >
            Work
          </a>
          <a
            href="#about"
            className="hover:text-[#D69E2E] transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-[#D69E2E] transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Live Monitor Layout */}
      <div className="max-w-[1300px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12">
        {/* Left Sidebar */}
        <aside className="py-12 border-b md:border-b-0 md:border-r border-[#1A1A1A]/12 flex flex-row md:flex-col gap-7 flex-wrap">
          <div className="flex flex-col">
            <span className="font-mono text-[32px] font-bold text-[#1A1A1A] leading-none">
              <SplitFlap value="02" delay={0} placeholder="00" />
            </span>
            <span className="text-[11px] font-bold tracking-[0.1em] text-[#888888] mt-1">
              LIVE
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-[32px] font-bold text-[#1A1A1A] leading-none">
              <SplitFlap value="01" delay={120} placeholder="00" />
            </span>
            <span className="text-[11px] font-bold tracking-[0.1em] text-[#888888] mt-1">
              SHIPPED
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-[32px] font-bold text-[#1A1A1A] leading-none">
              <SplitFlap value="01" delay={240} placeholder="00" />
            </span>
            <span className="text-[11px] font-bold tracking-[0.1em] text-[#888888] mt-1">
              DEMO
            </span>
          </div>

          <div className="hidden md:flex flex-col gap-2.5 mt-3 pt-6 border-t border-[#1A1A1A]/12 text-[13px]">
            <a
              href="#teachingcircle"
              className="text-[#555555] hover:text-[#D69E2E] transition-colors duration-200"
            >
              TeachingCircle
            </a>
            <a
              href="#hof-vault"
              className="text-[#555555] hover:text-[#D69E2E] transition-colors duration-200"
            >
              HOF Vault
            </a>
            <a
              href="#psychconnect"
              className="text-[#555555] hover:text-[#D69E2E] transition-colors duration-200"
            >
              PsychConnect
            </a>
            <a
              href="#easy-pdf"
              className="text-[#555555] hover:text-[#D69E2E] transition-colors duration-200"
            >
              Easy-PDF
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <div className="min-w-0">
          {/* Hero Section */}
          <section className="pt-14 pb-8">
            <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[#1A1A1A]">
              AI automation that
              <br />
              runs your business
            </h1>
            <p className="mt-5 text-[18px] text-[#555555] max-w-[50ch] leading-relaxed">
              Junior AI/ML engineer building the software that runs day-to-day
              operations.
            </p>
            <div className="flex gap-3.5 mt-8 flex-wrap">
              <a
                href="#work"
                className="inline-flex items-center justify-center bg-[#1A1A1A] text-[#FAF6EC] px-7 py-3.5 rounded-full text-[15px] font-medium transition-transform duration-350 hover:-translate-y-0.5 active:scale-[0.97]"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-transparent border-[1.5px] border-[#1A1A1A] text-[#1A1A1A] px-7 py-3.5 rounded-full text-[15px] font-medium transition-all duration-350 hover:-translate-y-0.5 hover:bg-[#1A1A1A]/5 active:scale-[0.97]"
              >
                Get in Touch
              </a>
            </div>
          </section>

          {/* Numbered Dispatch-List Section */}
          <section id="work" className="pb-16">
            <div className="flex flex-col">
              {PROJECTS.map((project, index) => {
                const isHovered = hoveredIndex === index;
                const isDimmed = hoveredIndex !== null && !isHovered;

                return (
                  <motion.div
                    key={project.id}
                    id={project.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: isDimmed ? 0.4 : 1, y: 0 }}
                    transition={{
                      y: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 },
                      opacity: { duration: 0.3, ease: "easeInOut" },
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`group flex items-center gap-5 py-5 border-t border-[#1A1A1A]/12 transition-all duration-300 px-3 -mx-3 rounded-lg ${
                      index === PROJECTS.length - 1 ? "border-b" : ""
                    } ${
                      isHovered ? "bg-[#D69E2E]/[0.06]" : ""
                    }`}
                  >
                    {/* Row Number */}
                    <span className="w-8 shrink-0 font-mono text-[15px] text-[#999999]">
                      <SplitFlap
                        value={project.num}
                        delay={360 + index * 240}
                        placeholder="00"
                      />
                    </span>

                    {/* Project Title, Tags, and Detail Reveal Line */}
                    <div className="flex-1 min-w-0">
                      <span className="text-[18px] font-bold text-[#1A1A1A] block">
                        {project.title}
                      </span>
                      <div className="flex gap-2 flex-wrap mt-2.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="relative inline-flex items-center text-[12px] border border-[#1A1A1A]/25 rounded-[6px] py-1 pl-4 pr-2.5 text-[#444444] bg-[#FAF6EC]/50"
                          >
                            <span className="absolute left-[6px] top-1/2 -translate-y-1/2 w-1 h-1 rounded-full border border-[#1A1A1A]/40" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div
                        className={`text-[13px] text-[#777777] overflow-hidden transition-all duration-400 ease-out ${
                          isHovered
                            ? "max-h-14 opacity-100 mt-2.5"
                            : "max-h-0 opacity-0 mt-0 pointer-events-none"
                        }`}
                      >
                        <p>{project.revealLine}</p>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="shrink-0">
                      {project.badgeVariant === "solid" ? (
                        <span
                          className={`inline-flex items-center text-[11px] font-bold tracking-[0.06em] px-4 py-[7px] rounded-full bg-[#D69E2E] text-[#1A1A1A] font-mono ${
                            project.status === "LIVE"
                              ? "animate-badge-pulse"
                              : ""
                          }`}
                        >
                          <SplitFlap
                            value={project.status}
                            delay={480 + index * 240}
                            placeholder="····"
                          />
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-[11px] font-bold tracking-[0.06em] px-4 py-[7px] rounded-full bg-transparent border-[1.5px] border-[#D69E2E] text-[#a97a1f] font-mono">
                          <SplitFlap
                            value={project.status}
                            delay={480 + index * 240}
                            placeholder="····"
                          />
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
