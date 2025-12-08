import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Software Engineering", "Data Science", "Biomedical AI", "Machine Learning"];
  
  // Logic to filter projects. 
  // Since the static data tags might not perfectly match categories, we do a loose match or mapped match.
  // For this demo, I will check if any tag roughly matches the filter.
  const filteredProjects = PROJECTS.filter(project => {
    if (filter === "All") return true;
    
    if (filter === "Software Engineering") return project.tags.includes("React") || project.tags.includes("AWS") || project.tags.includes("Flutter");
    if (filter === "Data Science") return project.tags.includes("Python") || project.tags.includes("Pandas");
    if (filter === "Biomedical AI") return project.title.toLowerCase().includes("medical") || project.tags.includes("Bioinformatics");
    if (filter === "Machine Learning") return project.tags.includes("TensorFlow") || project.tags.includes("Scikit-learn");

    return true;
  });

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-4xl font-black leading-tight tracking-tight text-transparent sm:text-5xl">
            My Work
        </h1>
        <p className="max-w-2xl text-lg text-white/60">
            A selection of projects that showcase my skills in Software Engineering, Data Science, and Biomedical applications.
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
                    ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
            >
                {cat}
            </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
            <div key={project.id} className="group flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
                <div className="overflow-hidden rounded-lg">
                    <div 
                        className="aspect-video w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url("${project.imageUrl}")` }}
                        aria-label={project.altText}
                    />
                </div>
                <div className="flex flex-col gap-3 p-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-white/60 line-clamp-3 leading-relaxed">
                        {project.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-purple-200">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
