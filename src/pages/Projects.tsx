// Projects.tsx

import React, { useMemo, useState } from "react";
import { PROJECTS } from "../constants";
import type { ProjectType } from "../types";

const Projects: React.FC = () => {
  const categories: Array<"All" | ProjectType> = [
    "All",
    "Software",
    "Data Engineering",
    "Biomedical",
    "Machine Learning",
    "Mathematical Model",
    "Mechatronics",
    "Backend"
  ];

  const [filter, setFilter] =
    useState<(typeof categories)[number]>("All");

  const filteredProjects = useMemo(() => {
    if (filter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.types.includes(filter));
  }, [filter]);

  const BULLET = "⟡";

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h1 className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl">
          My Work
        </h1>
        <p className="max-w-2xl text-lg text-white/60">
          A selection of projects spanning software, mechatronics, data, biomedical, and AI.
        </p>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`flex h-9 items-center rounded-full px-5 text-sm font-medium transition-all ${
              filter === cat
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <a
            key={project.id}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
          >
            <div className="overflow-hidden rounded-lg">
              <div
                className="aspect-video w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url("${project.imageUrl}")` }}
                aria-label={project.altText}
              />
            </div>

            <div className="flex flex-col gap-3 p-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="mr-auto text-lg font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Multiple type chips */}
                {project.types.map((type) => (
                  <span
                    key={type}
                    className="rounded-full bg-white/10 px-2 py-1 text-xs font-medium text-white/70"
                  >
                    {type}
                  </span>
                ))}
              </div>

              {/* Bullet description */}
              <ul className="space-y-1 text-sm text-white/60">
                {project.description.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-[2px] text-primary/80">
                      {BULLET}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-purple-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
