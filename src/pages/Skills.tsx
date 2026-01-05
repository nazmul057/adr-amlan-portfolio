import React from "react";
import { SKILLS } from "../constants";
import { Code2, Wrench, Database, Cpu, Monitor, Boxes, Terminal } from "lucide-react";

/* ---------------------------------------
   Local icon map (page-scoped)
--------------------------------------- */
const SKILL_ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Wrench,
  Database,
  Cpu,
  Monitor,
  Boxes,
  Terminal
};

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
          Technical Skills
        </h1>
        <p className="text-lg text-white/60">
          A comprehensive list of my technical expertise and tools.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skillGroup) => {
          const Icon =
            SKILL_ICON_MAP[skillGroup.icon] ??
            SKILL_ICON_MAP["Terminal"];

          return (
            <div
              key={skillGroup.category}
              className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-primary/30 hover:bg-white/[0.07]"
            >
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon size={24} />
                </div>
                <h2 className="text-xl font-bold text-white">
                  {skillGroup.category}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-center rounded-lg bg-background-dark px-4 py-3 text-sm font-medium text-white/80 transition-all hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/25 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Context Section */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-background-dark to-white/5 p-8">
        <h3 className="mb-4 text-xl font-bold text-white">
          Continuous Learning
        </h3>
        <p className="text-white/70 max-w-3xl leading-relaxed">
          Technology is constantly evolving, and so am I. I am currently
          expanding my knowledge in
          <span className="text-purple-600 font-medium"> Agentic AI</span>,
          <span className="text-purple-600 font-medium"> LLM</span>,
          <span className="text-purple-600 font-medium"> Knowledge Graphs</span>,
          <span className="text-purple-600 font-medium"> Rust</span>, and
          <span className="text-purple-600 font-medium">
            {" "}
            Advanced System Architecture
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default Skills;
