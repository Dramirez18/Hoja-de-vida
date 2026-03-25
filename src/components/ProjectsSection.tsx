import { Github, Code2, Loader2 } from 'lucide-react';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { extraProjects } from '../data';
import SectionHeading from './SectionHeading';

export default function ProjectsSection() {
  const { projects: githubProjects, loading, error } = useGitHubRepos();

  const projects = error ? extraProjects : [...githubProjects, ...extraProjects];

  return (
    <section id="projects" className="py-32">
      <SectionHeading number="03" title="Some Things I've Built" />

      {loading ? (
        <div className="flex justify-center py-16">
          <Loader2 className="animate-spin text-[#00E5FF]" size={32} />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-[#161616] p-8 rounded-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full border border-white/5"
            >
              <div className="flex justify-between items-center mb-8">
                <Code2 className="text-[#00E5FF]" size={40} />
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00E5FF]">
                  <Github size={20} />
                </a>
              </div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{project.desc}</p>
              <ul className="flex flex-wrap gap-3 font-mono text-xs text-gray-500">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
