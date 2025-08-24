"use client";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Jailsonb87/repos")
      .then((res) => res.json())
      .then((data: Repo[]) => setRepos(data))
      .catch((err) => console.error("Erro ao buscar repositórios:", err));
  }, []);

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Projetos</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {repos.map((repo, index) => (
          <ProjectCard key={repo.id} repo={repo} index={index} />
        ))}
      </div>
    </section>
  );
}
