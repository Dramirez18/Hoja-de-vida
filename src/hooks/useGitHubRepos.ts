import { useState, useEffect } from 'react';

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  language: string | null;
  fork: boolean;
}

export interface Project {
  title: string;
  desc: string;
  tech: string[];
  github: string;
}

const GITHUB_USERNAME = 'Dramirez18';

export function useGitHubRepos() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?type=public&sort=updated&per_page=100`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((repos: GitHubRepo[]) => {
        const mapped = repos
          .filter((repo) => !repo.fork)
          .map((repo) => ({
            title: repo.name.replace(/-/g, ' '),
            desc: repo.description || 'GitHub repository.',
            tech: repo.topics.length > 0
              ? repo.topics.slice(0, 4)
              : repo.language
                ? [repo.language]
                : [],
            github: repo.html_url,
          }));
        setProjects(mapped);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { projects, loading, error };
}
